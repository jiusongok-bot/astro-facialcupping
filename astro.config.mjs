import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";
import { visit } from "unist-util-visit";

// Custom rehype plugin: auto-generate id attributes on h2/h3 for AI passage citation
function rehypeHeadingIds() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "h2" || node.tagName === "h3") {
        const text = extractText(node);
        if (text) {
          node.properties = node.properties || {};
          node.properties.id = slugify(text);
        }
      }
    });
  };
}

// Custom rehype plugin: add loading="lazy" to all markdown images
function rehypeLazyImages() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        node.properties = node.properties || {};
        node.properties.loading = "lazy";
      }
    });
  };
}

// Helper: extract text content from a hast node
function extractText(node) {
  if (node.type === "text") return node.value;
  if (node.children) return node.children.map(extractText).join("");
  return "";
}

// Helper: convert text to URL-safe slug
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default defineConfig({
  site: "https://facialcupping.com",
  integrations: [react(), sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeHeadingIds,
        rehypeLazyImages,
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
