import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/site-shell";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Talos AI",
  description: "The page you are looking for does not exist.",
};

// Rendered for URLs that match no route. The three root layouts ((de), (en), (el)) leave no
// single layout to compose a plain not-found.tsx from, so this file owns the whole document
// and reuses SiteShell to pull in globals.css, the fonts and the beacon.
export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-surface px-5 text-center text-ink">
        <h1 className="font-mono text-6xl font-black uppercase sm:text-8xl">404</h1>
        <p className="max-w-md font-mono text-sm uppercase">
          This page does not exist.
        </p>
        <Link className="brutalist-button bg-accent text-on-accent" href="/">
          Back to homepage
        </Link>
      </main>
    </SiteShell>
  );
}
