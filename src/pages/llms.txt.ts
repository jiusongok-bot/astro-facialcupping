import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { filterVisible } from "@/lib/visibility";

export const GET: APIRoute = async ({ site }) => {
  const siteURL = site?.toString().replace(/\/$/, "") ?? "";

  const allArticles = await getCollection("articles");
  const allSections = await getCollection("sections");
  const visibleArticles = filterVisible(allArticles);
  const visibleSections = filterVisible(allSections)
    .sort((a, b) => a.data.order - b.data.order)
    .filter((s) =>
      visibleArticles.some((a) => a.data.section === s.id)
    );

  let body = `# FacialCupping.com\n> The Facial Cupping Resource Center — expert guides on techniques, benefits, safety, and tools for facial cupping therapy.\n> Content authored by licensed estheticians and reviewed for scientific accuracy. Articles cite peer-reviewed studies from PubMed-indexed journals.\n`;

  for (const section of visibleSections) {
    const sectionArticles = visibleArticles
      .filter((a) => a.data.section === section.id)
      .sort((a, b) => a.data.title.localeCompare(b.data.title));

    if (sectionArticles.length === 0) continue;

    // Section heading with description for AI context
    body += `\n## ${section.data.title}\n`;
    body += `${section.data.description}\n`;

    for (const article of sectionArticles) {
      const slug = article.id.split("/")[1];
      body += `- ${article.data.title}: ${siteURL}/${section.id}/${slug}\n`;
    }
  }

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
