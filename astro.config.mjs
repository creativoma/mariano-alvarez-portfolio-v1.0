import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://landing-with-astro.vercel.app/",
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
