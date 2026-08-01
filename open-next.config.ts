import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // This site is fully prerendered. The default "dummy" incremental cache
  // throws on every get/set, which makes the Worker re-render prerendered
  // pages per request; serving them from static assets avoids that.
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
