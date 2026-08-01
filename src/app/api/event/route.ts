import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

const events = ["booking_cta_click", "booking_outbound_click", "booking_section_view"] as const;
const locales = ["de", "en", "el"] as const;

function isAnalyticsDataset(value: unknown): value is AnalyticsEngineDataset {
  return typeof value === "object" && value !== null && "writeDataPoint" in value && typeof value.writeDataPoint === "function";
}

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

  const { event, locale, path, placement } = (body ?? {}) as Record<string, unknown>;
  if (!events.includes(event as (typeof events)[number])) return new Response(null, { status: 400 });
  if (!locales.includes(locale as (typeof locales)[number])) return new Response(null, { status: 400 });

  const safePath = typeof path === "string" ? path.slice(0, 128).split("?")[0] : "";
  const safePlacement = placement === "header" || placement === "hero" ? placement : "";

  try {
    const { env } = await getCloudflareContext({ async: true });
    const dataset: unknown = Reflect.get(env, "BOOKING_ANALYTICS");
    if (isAnalyticsDataset(dataset)) {
      dataset.writeDataPoint({
        blobs: [event as string, safePath, locale as string, safePlacement],
        doubles: [1],
        indexes: [event as string],
      });
    }
  } catch {
    // Local Next.js runtimes have no binding. Analytics must never block the visitor.
  }

  return new Response(null, { status: 204 });
}
