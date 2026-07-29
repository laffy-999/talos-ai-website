# Talos AI Website

Responsive clean-brutalist landing page for Talos AI, an AI automation agency.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- `@studio-freight/react-lenis`
- Google Calendar appointment scheduling embed
- lucide-react

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

The embed is not loaded on page view.
Google sets its `NID` advertising cookie and receives the visitor IP as soon as the iframe mounts, so the booking section renders a placeholder until the visitor explicitly clicks to load it.
Keep that gate in place: the privacy policy states that no non-essential cookie is set without an explicit action.

## Analytics

Traffic is measured with Cloudflare Web Analytics, which is cookieless, so no consent banner is required.

```bash
NEXT_PUBLIC_CF_BEACON_TOKEN=<site token from Cloudflare dashboard > Web Analytics>
```

The beacon is injected from `src/app/layout.tsx` and is omitted entirely when the token is empty.
It is injected in app code rather than through the zone's auto-install setting, because Cloudflare does not rewrite Worker-served HTML, so auto-install alone reports nothing.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
