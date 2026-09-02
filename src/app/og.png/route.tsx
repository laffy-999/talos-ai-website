import { ImageResponse } from "next/og";
import { brandColors, ogImage, siteName } from "@/app/metadata";

// Prerendered at build time and served from a stable path, so every page can point at it through
// `pageMetadata`. The metadata `opengraph-image` convention was not usable here: it attaches only to
// the page colocated in the same segment, which would mean one file per route.
export const dynamic = "force-static";

// Language-neutral share card: the localized part of a preview is the og:title and og:description
// that every page sets (see metadata.ts), so all three locales reuse this one image. Colours come
// from brandColors because the renderer cannot read CSS custom properties, and the type is carried
// by size rather than weight because next/og only bundles Geist Regular.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brandColors.surface,
          color: brandColors.ink,
          border: `8px solid ${brandColors.ink}`,
          padding: "64px 72px",
          fontSize: 32,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span>{siteName}</span>
          <span>Thessaloniki</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 76, letterSpacing: "-0.02em", lineHeight: 1 }}>AI Agents built for</span>
          <span
            style={{
              fontSize: 76,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              padding: "8px 20px",
              background: brandColors.accent,
              alignSelf: "flex-start",
            }}
          >
            your business
          </span>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <span>Audit</span>
          <span>Workflow map</span>
          <span>Prototype</span>
          <span>Deploy</span>
        </div>
      </div>
    ),
    {
      width: ogImage.width,
      height: ogImage.height,
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  );
}
