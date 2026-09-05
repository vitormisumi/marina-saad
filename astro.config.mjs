// @ts-check
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Martel",
      cssVariable: "--font-serif",
      weights: [200, 500],
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
  integrations: [icon()],
});
