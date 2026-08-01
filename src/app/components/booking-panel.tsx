import { CalendarDays } from "lucide-react";
import type { Dictionary } from "@/i18n/content";
import type { Locale } from "@/i18n/locales";

const bookingHost = "calendar.google.com";
const bookingUrl = normalizeBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL);

// Only an https `calendar.google.com` appointment schedule is embeddable here, because the
// embed depends on Google's `gv=true` booking view. Anything else falls back to the setup
// notice instead of framing an unexpected origin.
// Address-bar links also carry a `/u/<n>/` account segment that redirects to the canonical
// path; strip it so the embed skips a round trip and never depends on the visitor's
// signed-in Google account order.
function normalizeBookingUrl(rawUrl?: string) {
  const trimmed = (rawUrl || "").trim();
  if (!trimmed) return undefined;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" || url.hostname !== bookingHost) return undefined;

    url.pathname = url.pathname.replace(/^\/calendar\/u\/\d+\//, "/calendar/");
    return url.toString();
  } catch {
    return undefined;
  }
}

// `gv=true` switches a Google Calendar appointment schedule to its embeddable booking view, and
// `hl` renders that view in the visitor's language rather than the organiser's account default.
function createEmbedUrl(locale: Locale) {
  if (!bookingUrl) return undefined;

  const url = new URL(bookingUrl);
  url.searchParams.set("gv", "true");
  url.searchParams.set("hl", locale);
  return url.toString();
}

export function BookingPanel({ copy, locale }: { copy: Dictionary["cta"]; locale: Locale }) {
  const embedUrl = createEmbedUrl(locale);

  return (
    <div className="grid min-w-0 gap-4">
      <div className="flex flex-col gap-4 text-on-invert lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="accent-outline font-mono text-sm uppercase">{copy.bookingKicker}</p>
          <h3 className="mt-2 text-3xl font-black uppercase leading-none sm:text-4xl">{copy.bookingTitle}</h3>
          <p className="mt-3 text-base font-semibold leading-snug text-on-invert/80 sm:text-lg">{copy.bookingBody}</p>
        </div>
        {bookingUrl ? (
          <a
            className="brutalist-button shrink-0 justify-center border-accent bg-accent text-on-accent shadow-brutal-sm"
            href={bookingUrl}
            rel="noreferrer"
            target="_blank"
          >
            {copy.openCalendar} <CalendarDays size={18} />
          </a>
        ) : null}
      </div>
      {embedUrl ? (
        // Google stacks the picker below ~600px of iframe width (~1225px tall) and goes side-by-side above it (~725px tall).
        // The iframe is lazily loaded: the visitor's IP reaches Google, and Google sets its NID cookie, once the
        // booking section approaches the viewport rather than on every page view. The privacy policy documents this.
        <div className="h-[1240px] overflow-hidden border-2 border-accent bg-invert min-[700px]:h-[740px]">
          <iframe className="booking-embed h-full w-full border-0" loading="lazy" src={embedUrl} title={copy.bookingTitle} />
        </div>
      ) : (
        <div className="accent-outline flex min-h-[220px] items-center justify-center border-2 border-dashed border-accent p-6 text-center font-mono text-sm uppercase">
          {copy.bookingMissing}
        </div>
      )}
    </div>
  );
}
