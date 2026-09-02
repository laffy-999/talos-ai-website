import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

const events = ["booking_cta_click", "booking_outbound_click", "booking_section_view"] as const;
const locales = ["de", "en", "el"] as const;

// Catches scripted traffic that cannot set the client-side flag: agent runs, curl probes, and
// crawlers. Only the resulting label is stored, never the user agent itself.
const automation = /headlesschrome|electron|phantomjs|puppeteer|playwright|selenium|webdriver|curl|wget|libwww|python|java|go-http|node-fetch|axios|okhttp|bot|crawler|spider|monitor|preview|scan/i;

export async function POST(request: Request) {
  // Same-origin only. This public endpoint records intent, not an authenticated conversion.
  const site = request.headers.get("sec-fetch-site");
  if (site && site !== "same-origin") return new Response(null, { status: 403 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const { event, locale, path, placement, internal } = (body ?? {}) as Record<string, unknown>;
  if (!events.includes(event as (typeof events)[number])) return new Response(null, { status: 400 });
  if (!locales.includes(locale as (typeof locales)[number])) return new Response(null, { status: 400 });

  const safePath = typeof path === "string" ? path.slice(0, 128).split("?")[0] : "";
  const safePlacement = placement === "header" || placement === "hero" ? placement : "";
  const source =
    internal === true || automation.test(request.headers.get("user-agent") ?? "") ? "internal" : "public";

  try {
    const { env } = await getCloudflareContext({ async: true });
    env.ANALYTICS_ENGINE.writeDataPoint({
      blobs: [event as string, safePath, locale as string, safePlacement, source],
      doubles: [1],
      indexes: [event as string],
    });
  } catch {
    // Local Next.js runtimes have no binding. Analytics must never block the visitor.
  }

  return new Response(null, { status: 204 });
}
