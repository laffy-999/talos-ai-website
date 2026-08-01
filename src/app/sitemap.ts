import type { MetadataRoute } from "next";
import { siteUrl } from "./metadata";
import { localePath, locales } from "@/i18n/locales";

// One entry per canonical URL, each listing its translations, so a crawler that finds any language
// version finds the other two. The /de/* paths are permanent redirects (see next.config.ts) and are
// deliberately absent.
const paths = ["/", "/impressum", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: new URL(localePath(locale, path), siteUrl).toString(),
      alternates: {
        languages: {
          de: new URL(localePath("de", path), siteUrl).toString(),
          en: new URL(localePath("en", path), siteUrl).toString(),
          el: new URL(localePath("el", path), siteUrl).toString(),
          "x-default": new URL(localePath("de", path), siteUrl).toString(),
        },
      },
      // The home page is the entry point; legal pages change rarely and rank on nothing.
      priority: path === "/" ? 1 : 0.3,
    })),
  );
}
