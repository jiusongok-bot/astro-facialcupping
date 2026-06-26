import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ── Sections collection ──

const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
  }),
});

// ── Articles collection ──

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    published: z.boolean().default(true),
    author: z.string().default("FacialCupping.com Team"),
    datePublished: z.string().default("2026-01-01"),
    dateUpdated: z.string().optional(),
  }),
});

export const collections = { sections, articles };
