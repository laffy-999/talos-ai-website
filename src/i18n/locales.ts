// Locale primitives only. Client components import this module, never `./content`, so that a
// visitor downloads one locale's copy (serialized with the page) instead of all three bundled
// into the shared client chunk.
export const locales = ["de", "en", "el"] as const;

export type Locale = (typeof locales)[number];

// Two-letter switcher labels.
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  el: "EL",
};

// Accessible names, each written in its own language.
export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  el: "Ελληνικά",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  de: "de-DE",
  el: "el",
};

// German is the default locale and owns the unprefixed paths; the other locales are prefixed.
export function localePath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "de") return cleanPath === "/" ? "/" : cleanPath;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}
