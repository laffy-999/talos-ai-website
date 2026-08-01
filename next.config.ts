import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  // Load-bearing: `@opennextjs/cloudflare` only calls setStandaloneBuildMode when it drives `next build` itself, and package.json runs `opennextjs-cloudflare build --skipNextBuild`, so dropping this breaks the Cloudflare build (node_modules/@opennextjs/cloudflare/dist/cli/build/build.js:56-64).
  output: "standalone",
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    // The /de/* tree was a duplicate of the unprefixed German pages; keep the old URLs alive.
    return [
      { source: "/de", destination: "/", permanent: true },
      { source: "/de/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
