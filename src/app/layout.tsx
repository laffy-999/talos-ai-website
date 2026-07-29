import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN?.trim();

export const metadata: Metadata = {
  title: "Talos AI | Agentur für KI-Automation",
  description:
    "Talos AI baut Automationssysteme für Lead-Bearbeitung, Kundensupport, interne Tools und operative Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-DE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
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
