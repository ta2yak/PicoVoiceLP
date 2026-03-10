import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://lp.picovoice.app",
  integrations: [sitemap()],
  trailingSlash: "ignore",
  output: "static",
  adapter: cloudflare(),
});