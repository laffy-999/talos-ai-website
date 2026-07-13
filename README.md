# Talos AI Website

Responsive clean-brutalist landing page for Talos AI, an AI automation agency.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- `@studio-freight/react-lenis`
- Cal.eu embed
- lucide-react

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cal.eu Setup

```bash
NEXT_PUBLIC_BOOKING_URL=https://cal.eu/your-username/your-event-type
```

For Cal.eu, you can also set the shorter account/event path:

```bash
NEXT_PUBLIC_CAL_LINK=your-username/your-event-type
```

If either `NEXT_PUBLIC_BOOKING_URL` or `NEXT_PUBLIC_CAL_LINK` is set, the booking section embeds that Cal.eu booking page inline. The header and hero CTAs scroll to the booking section, and the default calendar is connected to `laffy/strategic-session`.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
