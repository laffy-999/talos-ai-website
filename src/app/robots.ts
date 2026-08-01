import type { MetadataRoute } from "next";
import { siteUrl } from "./metadata";

// Cloudflare's managed robots.txt setting prepends its own block (the Content Signals policy plus
// the AI-crawler Disallow list) in front of whatever the origin returns, so serving this file adds
// the sitemap reference without dropping those preferences.
// https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
