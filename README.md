# Talos AI Website

Responsive clean-brutalist landing page for Talos AI, an AI automation agency.

## Stack

- Next.js App Router, deployed to Cloudflare Workers with `@opennextjs/cloudflare`
- Tailwind CSS v4, with every colour, rule, shadow and motion value declared as a token in `src/app/globals.css`
- Google Calendar appointment scheduling embed
- lucide-react

No animation library: entrances are CSS keyframes (`enter-*`) and scroll reveals are a `data-reveal`
attribute driven by `src/app/components/reveal-controller.tsx`.
Markup is visible without JavaScript, so a blocked bundle degrades to a static page.

## Styling

`src/app/globals.css` is the only place colours and chrome are defined.
Components use the generated utilities (`bg-surface`, `text-ink`, `border-ink`, `bg-accent`,
`text-on-accent`, `bg-invert`, `text-on-invert`, `shadow-brutal`) and never a raw hex value, so a
restyle is a change to the token block rather than a sweep through components.

Copy lives in `src/i18n/content.ts` (page copy) and `src/i18n/legal.ts` (legal pages);
`src/i18n/locales.ts` holds locale primitives and is the only i18n module client components import,
which keeps the other locales' copy out of the browser bundle.
German is served on the unprefixed paths, English under `/en`, Greek under `/el`.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Calendar Booking Setup

Create an appointment schedule in Google Calendar, open its booking page, and copy the link:

```bash
NEXT_PUBLIC_BOOKING_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID
```

When `NEXT_PUBLIC_BOOKING_URL` is set, the booking section embeds that booking page inline (the embed adds `gv=true` automatically) and shows an "open calendar" link that opens the same page in a new tab.
When it is unset or rejected, the section renders a configuration notice instead of a broken embed.
The header and hero CTAs always scroll to the booking section.

The value must be an `https://calendar.google.com/...` link; any other scheme or host is rejected, because the embed depends on Google's `gv=true` booking view.
A link copied straight from the address bar carries a `/u/<n>/` account segment, which is stripped automatically, so either form works.

`NEXT_PUBLIC_*` variables are inlined at build time, so this must be set in the deploy environment too, not only in `.env.local`.

The booking calendar is embedded in the page rather than gated behind a click.
The iframe uses native lazy loading, so Google is contacted when the booking section approaches the
viewport, not on every page view; from that moment Google receives the visitor IP, user agent and
URL, and sets its `NID` advertising cookie (`.google.com`, roughly 6 months).
That happens without the visitor acting, so it is a non-essential cookie set without consent.
The privacy policy describes it, and LEGAL_TODO.md tracks the consent management this still needs.

## SEO Metadata

`src/app/metadata.ts` owns everything a crawler or a share preview reads.
`pageMetadata({ locale, path, title, description })` builds the title, description, canonical URL,
the full `hreflang` set (`de`, `en`, `el`, `x-default` pointing at German), Open Graph and Twitter
tags for one page, and every page file calls it.
Add a page by calling it with that page's path; do not hand-write metadata objects, because
Next replaces the whole `openGraph` object when a page defines part of it.

`metadataBase` comes from `NEXT_PUBLIC_SITE_URL` and falls back to `https://talosai.dev`.
Set it only for a preview deployment, and remember that `NEXT_PUBLIC_*` is inlined at build time.

```bash
NEXT_PUBLIC_SITE_URL=https://preview.example.com
```

- `src/app/sitemap.ts` lists the 12 canonical URLs, each with its translations. The redirected
  `/de/*` paths are deliberately absent.
- `src/app/robots.ts` allows everything and points at the sitemap. Cloudflare's managed robots.txt
  setting prepends its own block (Content Signals plus the AI-crawler `Disallow` list) in front of
  this response, so both policies are served together.
- `src/app/og.png/route.tsx` renders the 1200x630 share card with `next/og` at build time. It is a
  route rather than an `opengraph-image.tsx` file because that convention only attaches to the page
  colocated in the same segment, which would mean one file per route.
- `src/app/components/organization-json-ld.tsx` emits `ProfessionalService` structured data. Every
  fact in it must match the Impressum in `src/i18n/legal.ts`.
- `viewport` (theme colour, colour scheme) is defined once in `metadata.ts` and re-exported by each
  locale layout, because Next requires that export to come from a layout or page.

`brandColors` in `metadata.ts` duplicates three token values from `globals.css`, because neither the
browser chrome colour nor the share card can read CSS custom properties. A restyle must update both.

## Analytics

Traffic is measured with Cloudflare Web Analytics, which is cookieless and sets nothing on the
visitor's device. The embedded booking calendar is the only third party that sets a cookie.

```bash
NEXT_PUBLIC_CF_BEACON_TOKEN=<site token from Cloudflare dashboard > Web Analytics>
```

The beacon is injected from `src/app/site-shell.tsx` and is omitted entirely when the token is empty.
It is injected in app code rather than through the zone's auto-install setting, because Cloudflare does not rewrite Worker-served HTML, so auto-install alone reports nothing.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
