// @ts-check
import tailwindcss from "@tailwindcss/vite";
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
      cssVariable: "--font-martel",
      weights: [200, 300, 400, 500, 600, 700, 800, 900],
      fallbacks: ["sans-serif"],
    },
  ],
});
