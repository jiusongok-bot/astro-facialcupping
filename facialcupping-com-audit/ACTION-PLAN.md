# SEO Action Plan: facialcupping.com

**Priority:** Critical > High > Medium > Low
**Estimated effort:** 2-3 weeks for Phase 1-2, ongoing for Phase 3-4

---

## Phase 1: Critical Fixes (Week 1)

These block indexing, rich results, or cause penalties. Fix immediately.

| # | Action | Category | Effort | Impact |
|---|--------|----------|--------|--------|
| 1 | **Add author bylines to all articles** — Add `author` frontmatter field to the articles collection schema. Display author name and bio in `ArticleLayout.astro`. | Content | 2h | High (E-E-A-T) |
| 2 | **Add publish dates to all articles** — Add `datePublished` and `dateUpdated` frontmatter. Display with `<time>` element in ArticleLayout. | Content | 1h | High (Freshness signal) |
| 3 | **Complete Article schema** — Add `author`, `datePublished`, `dateModified`, `publisher` to the JSON-LD in `[slug].astro`. | Schema | 1h | High (Rich results) |
| 4 | **Add BreadcrumbList JSON-LD** — Generate structured breadcrumb data in `ArticleLayout.astro` and `[section]/index.astro`. | Schema | 1h | High (Rich results) |
| 5 | **Add robots meta tag** — Add configurable `<meta name="robots">` to `BaseLayout.astro` with page-level control. | Technical | 30m | Medium (Indexation control) |

**Week 1 total effort: ~5.5 hours**

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

These significantly impact rankings and user experience.

| # | Action | Category | Effort | Impact |
|---|--------|----------|--------|--------|
| 6 | **Convert all images to WebP format** — Batch convert 26 images in `/public/images/` and `/public/images/articles/`. Update all references. | Performance | 3h | High (-30% weight) |
| 7 | **Add FAQPage schema** — Add to `/learn/faq` and `/safety/faq` articles with Q&A pairs. | Schema | 1h | High (FAQ rich results) |
| 8 | **Add HowTo schema** — Add to `/how-to/beginner`, `/how-to/techniques`, `/how-to/tutorial`. | Schema | 1.5h | Medium (HowTo rich results) |
| 9 | **Improve homepage title tag** — Change from "Home | FacialCupping.com" to keyword-rich version. | On-Page | 15m | Medium (CTR) |
| 10 | **Add OG image to homepage + twitter:image everywhere** — Set default OG image in BaseLayout, mirror to twitter:image. | On-Page | 30m | Medium (Social sharing) |
| 11 | **Fix tools section image mapping** — Create `tools.png` and update `[section]/index.astro:35`. | On-Page | 15m | Low (Correctness) |
| 12 | **Expand thin content articles** — Expand 6+ articles under 300 words to 500+ words with examples, citations, and details. | Content | 4h | Medium (Content quality) |
| 13 | **Add width/height to all img tags** — Prevent CLS by specifying image dimensions. | Performance | 2h | Medium (CLS reduction) |
| 14 | **Create custom 404 page** — Build `src/pages/404.astro` with search, popular links, and navigation. | Technical | 1h | Medium (UX) |

**Weeks 2-3 total effort: ~13 hours**

---

## Phase 3: Content & Authority (Month 2)

These build long-term authority and expand reach.

| # | Action | Category | Effort | Impact |
|---|--------|----------|--------|--------|
| 15 | **Create llms.txt** — Add `public/llms.txt` for AI crawler guidance. | GEO | 30m | Medium (AI visibility) |
| 16 | **Add Organization schema** — Add to BaseLayout with logo, name, URL, social links. | Schema | 1h | Medium (Knowledge Panel) |
| 17 | **Add SearchAction to WebSite schema** — Enable Sitelinks Search Box in SERPs. | Schema | 30m | Low (SERP enhancement) |
| 18 | **Add introductory content to section pages** — Write 100-200 words per section page. | Content | 3h | Medium (Content quality) |
| 19 | **Create unique article lead images** — Add `image` frontmatter to articles, use unique images per article. | Content/Images | 4h | Medium (Visual variety) |
| 20 | **Implement responsive image srcsets** — Generate multiple resolutions, add srcset to all images. | Performance | 3h | Medium (Mobile performance) |
| 21 | **Add resource hints** — Preload hero image, preconnect to font CDNs, preload critical CSS. | Performance | 1h | Medium (LCP improvement) |
| 22 | **Set up Google Search Console** — Verify domain, submit sitemap, monitor issues. | Technical | 1h | High (Monitoring) |
| 23 | **Create author pages** — Add bios, credentials, external profile links for each author. | Content | 2h | Medium (E-E-A-T) |

**Month 2 total effort: ~16 hours**

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Action | Category | Frequency | Impact |
|---|--------|----------|-----------|--------|
| 24 | Monitor GSC for indexation issues and Core Web Vitals | Technical | Weekly | High |
| 25 | Refresh dated content with new information | Content | Monthly | Medium |
| 26 | Build backlinks through guest posts and expert roundups | Off-Page | Ongoing | High |
| 27 | Monitor for SEO drift after any site changes | Technical | Per deployment | Medium |
| 28 | Analyze organic traffic trends and adjust content strategy | Strategy | Monthly | High |
| 29 | Consider adding analytics (privacy-friendly) | Analytics | One-time | Medium |

---

## Effort Summary

| Phase | Hours | Timeline |
|-------|-------|----------|
| Phase 1: Critical Fixes | 5.5h | Week 1 |
| Phase 2: High-Impact Improvements | 13h | Weeks 2-3 |
| Phase 3: Content & Authority | 16h | Month 2 |
| Phase 4: Monitoring & Iteration | Ongoing | Ongoing |
| **Total upfront** | **~34.5 hours** | **~1 month** |

---

## Expected Impact

| Metric | Current | 1 Month Post-Optimization | 3 Months Post-Optimization |
|--------|---------|---------------------------|----------------------------|
| SEO Health Score | 73/100 | 82-85/100 | 88-92/100 |
| Core Web Vitals (CLS) | ~0.15 (NI) | ~0.05 (Good) | ~0.03 (Good) |
| Rich result eligibility | 0 types | 4 types (Article, FAQ, HowTo, Breadcrumb) | 4+ types |
| Page load time | Unknown | 20-30% faster with WebP | 30-40% faster with srcset |
| AI citation readiness | 6/10 | 8/10 | 9/10 |
