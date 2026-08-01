import { CalendarDays } from "lucide-react";
import type { Dictionary } from "@/i18n/content";
import type { Locale } from "@/i18n/locales";
import { BookingCta } from "./booking-cta";

const bookingHost = "calendar.google.com";
const bookingUrl = normalizeBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "legal@talosai.dev";

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
    <div className="grid min-w-0 gap-6">
      <div className="flex flex-col gap-6 text-on-invert lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="kicker">{copy.bookingKicker}</p>
          <h3 className="mt-3 text-h3 font-extrabold">{copy.bookingTitle}</h3>
          <p className="mt-3 text-body font-normal text-on-invert/80">{copy.bookingBody}</p>
          <div className="mt-6 grid gap-3">
            <p className="text-body font-normal text-on-invert/80">{copy.sessionMeta}</p>
            <p className="kicker">
              Eleftherios Kotsaridis · {copy.founderRole}
            </p>
            <p className="text-body font-normal text-on-invert/80">
              {copy.contactPrompt}{" "}
              <a className="text-on-invert underline underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
        {bookingUrl ? (
          <BookingCta
            className="brutalist-button shrink-0 justify-center border-accent bg-accent text-on-accent"
            event="booking_outbound_click"
            href={bookingUrl}
            locale={locale}
            target="_blank"
          >
            {copy.openCalendar} <CalendarDays size={18} />
          </BookingCta>
        ) : null}
      </div>
      {embedUrl ? (
        // Google stacks the picker below ~600px of iframe width (~1225px tall) and goes side-by-side above it (~725px tall).
        // The iframe is lazily loaded: the visitor's IP reaches Google, and Google sets its NID cookie, once the
        // booking section approaches the viewport rather than on every page view. The privacy policy documents this.
        <div className="h-[1240px] overflow-hidden border border-accent bg-invert min-[700px]:h-[740px]">
          <iframe className="booking-embed h-full w-full border-0" loading="lazy" src={embedUrl} title={copy.bookingTitle} />
        </div>
      ) : (
        <div className="kicker flex min-h-[220px] items-center justify-center bg-invert p-6 text-center">
          {copy.bookingMissing}
        </div>
      )}
    </div>
  );
}
