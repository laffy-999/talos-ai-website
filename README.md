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

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
