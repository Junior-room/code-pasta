import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    react(),
    tailwind({
      config: { path: "./tailwind.config.cjs" },
    }),
  ],
  site: `http://astro.build`,
});
