import type { Metadata, Viewport } from "next";
import { dictionaries } from "@/i18n/content";
import { localePath, locales, type Locale } from "@/i18n/locales";

// Absolute base for canonical URLs, hreflang, Open Graph and the sitemap. A preview deployment can
// describe itself by setting NEXT_PUBLIC_SITE_URL; production falls back to the real domain.
// NEXT_PUBLIC_* is inlined at build time, so it must be set in the build environment.
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://talosai.dev");

export const siteName = "Talos AI";

// Duplicated from the tokens in globals.css because neither the browser-chrome colour nor the
// Open Graph card can read CSS custom properties. Keep these three in sync with --surface, --ink
// and --accent.
export const brandColors = {
  surface: "#f2efe6",
  ink: "#15181b",
  accent: "#39ff14",
} as const;

export const viewport: Viewport = {
  themeColor: brandColors.surface,
  colorScheme: "light",
};

// The share card rendered by src/app/og.png/route.tsx.
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Talos AI - AI automation agency",
} as const;

// Territory-qualified locales, as Open Graph expects language_TERRITORY.
const openGraphLocales: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  el: "el_GR",
};

// Every page carries its own canonical plus the full hreflang set for the same document, so the
// three language versions point at each other instead of competing. German owns x-default because
// it is served on the unprefixed paths.
export function pageMetadata({
  locale,
  path = "/",
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
  const resolvedTitle = title ?? dictionaries[locale].meta.title;
  const resolvedDescription = description ?? dictionaries[locale].meta.description;
  const canonical = localePath(locale, path);

  return {
    metadataBase: siteUrl,
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical,
      languages: {
        de: localePath("de", path),
        en: localePath("en", path),
        el: localePath("el", path),
        "x-default": localePath("de", path),
      },
    },
    openGraph: {
      type: "website",
      siteName,
      locale: openGraphLocales[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => openGraphLocales[item]),
      url: canonical,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
