import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://immo-team-richter.de',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
