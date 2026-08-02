import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { RevealController } from "./components/reveal-controller";
import { InternalTrafficFlag } from "./components/internal-traffic-flag";
import { OrganizationJsonLd } from "./components/organization-json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN?.trim();

// Each locale has its own root layout so that `<html lang>` is correct in the served HTML.
// A single shared root layout could only ever name one language, which would mislabel the
// other two for screen readers and for crawlers that do not run JavaScript.
export function SiteShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <RevealController />
        <InternalTrafficFlag />
        <OrganizationJsonLd />
        {beaconToken ? (
          <Script
            data-cf-beacon={JSON.stringify({ token: beaconToken })}
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
