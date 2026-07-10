# Talos AI Website

Responsive clean-brutalist landing page for Talos AI, an AI automation agency.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- `@studio-freight/react-lenis`
- Convex
- lucide-react

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Convex Setup

Lead capture is guarded until Convex is configured.

```bash
npx convex dev
```

After Convex creates the deployment, set:

```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

Optional booking link:

```bash
NEXT_PUBLIC_BOOKING_URL=https://your-booking-link.example
```

If `NEXT_PUBLIC_BOOKING_URL` is set, the primary CTA opens it. Otherwise, the CTA scrolls to the on-page booking request form.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
