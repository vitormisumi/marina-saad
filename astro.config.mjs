// @ts-check
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TO-DO: modify the site with actual domain once bought
  site: "https://marina-saad-financas.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Martel",
      cssVariable: "--font-serif",
      weights: [200, 500, 800],
      styles: ["normal", "italic"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Mukta",
      cssVariable: "--font-sans",
      weights: [400, 600, 800],
      fallbacks: ["sans-serif"],
    },
  ],
  integrations: [icon(), sitemap()],
});
