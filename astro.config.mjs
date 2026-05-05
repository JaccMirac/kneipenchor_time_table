// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repo.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS ? (isUserSite ? "/" : `/${repo}`) : "/";

// https://astro.build/config
export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "https://example.github.io",
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
