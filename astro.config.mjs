// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://JaccMirac.github.io",
  base: "/kneipenchor_time_table",
  vite: {
    plugins: [tailwindcss()],
  },
});
