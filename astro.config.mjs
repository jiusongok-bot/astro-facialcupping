import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://facialcupping.com",
  integrations: [react(), sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            rel: ["nofollow", "noopener", "noreferrer"],
            target: "_blank",
          },
        ],
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
