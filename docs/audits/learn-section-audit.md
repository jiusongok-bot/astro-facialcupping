# SEO Audit: Learn Section Listing Page (`/learn`)

**URL:** `https://facialcupping.com/learn`
**Section Metadata File:** `src/content/sections/learn.md`
**Template:** `src/pages/[section]/index.astro`
**Build Date:** 2026-06-29

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **SEO Health Score** | **72/100** |
| Business Type | Content / Wellness Publisher (E-E-A-T-driven) |
| Articles in Section | 5 (all published) |
| Page Type | Section listing / hub page |
| Critical Issues | 2 |
| High-Priority Issues | 3 |
| Quick Wins | 4 |

---

## 1. Technical SEO (Score: 75/100)

### ✅ What Works
- **Canonical URL** — correctly set via `<link rel="canonical">` using `Astro.url.pathname + Astro.site`
- **Robots meta** — `index, follow` (default in `BaseLayout.astro`)
- **Static site generation** — SSG via Astro 7, no server rendering, excellent crawlability
- **Sitemap integration** — `@astrojs/sitemap` 3.7.3 auto-discovers `/learn`
- **Clean URL structure** — `/learn` is short, readable, keyword-relevant
- **robots.txt** — allows all, sitemap correctly referenced

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| T1 | **High** | **No `BreadcrumbList` JSON-LD schema** on listing page. The breadcrumb is rendered visually but has no structured data for search engines. | Add `BreadcrumbList` schema to `[section]/index.astro` or `Breadcrumb.astro` |
| T2 | **Medium** | **No `CollectionPage` schema** — the `/learn` page is a content listing/hub but is only marked up as a generic `WebSite`. | Add `CollectionPage` schema (subtype of `WebPage`) with `mainEntity` pointing to the 5 articles |
| T3 | **Low** | **No `lastmod` in sitemap** — while `@astrojs/sitemap` generates URLs, it lacks lastmod timestamps unless explicitly configured | Configure sitemap with `lastmod: new Date()` to signal freshness |

---

## 2. On-Page SEO (Score: 68/100)

### ✅ What Works
- H1 is present: "Learn" — rendered by `PageHero.astro`
- Meta description is present and comprehensive (277 chars)
- Semantic HTML: `<nav>`, `<main>`, `<h1>`, `<h3>` hierarchy is clean
- Breadcrumb is present with `aria-label="Breadcrumb"` and `aria-hidden="true"` separators
- Article cards use `<h3>` headings with article titles — good heading hierarchy

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| O1 | **Critical** | **Title tag is too generic — "Learn \| FacialCupping.com"**. Nine chars of keyword value wasted. An informational hub about facial cupping should target richer terms. | Change to "Learn Facial Cupping: Benefits, Techniques & Complete Guide \| FacialCupping.com" (in `[section]/index.astro` line 49, or via a computed title) |
| O2 | **High** | **Meta description is very long (277 chars)** — Google typically displays ~155–160 chars. The current description contains a verbose paragraph that will be truncated in SERPs. | Write a focused 150–160 char description targeting "Learn facial cupping — complete beginner guides covering techniques, benefits, history, therapy sessions, and FAQ. Expert-reviewed articles for all skill levels." |
| O3 | **Medium** | **No meta keywords or article count in SERP teaser** — the listing page doesn't hint at the depth of content inside (5 articles) | Incorporate article count into meta description: "Explore 5 expert-reviewed guides..." |
| O4 | **Low** | **OG image not set for listing page** — `ogImage` is not passed to `BaseLayout` in `[section]/index.astro`. The listing page shares a generic OG image. | Pass `ogImage="/images/learn.png"` to `BaseLayout` for richer social share previews |

---

## 3. Content Quality (Score: 82/100)

### ✅ What Works
- **E-E-A-T signals** — articles are authored by named professionals (Sarah Chen, Licensed Esthetician; James Liu, TCM Practitioner)
- **Recent updates** — all 5 articles updated June 2026
- **Scientific references** — articles cite PubMed, Cleveland Clinic, peer-reviewed journals
- **Internal linking** — rich cross-linking between articles and across sections (learn ↔ benefits, safety, tools, comparisons)
- **Readability** — clear headings, tables, bullet points, FAQ format
- **Article diversity** — beginner guide, science deep-dive, history, therapy guide, FAQ — covers multiple intents

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| C1 | **Medium** | **No publication date visible on listing page** — ArticleCards don't show date. Users and search engines can't assess freshness at a glance. | Add `datePublished` or `dateUpdated` to `ArticleCard` props and display |
| C2 | **Low** | **"FacialCupping.com Team" as author** — less authoritative than a named person for E-E-A-T | Attribute team-written articles to a named editor-in-chief or content director |
| C3 | **Low** | **Section description is extremely long (586 chars)** — great for users, but duplication risk if used verbatim in multiple places | Keep the long description on-page but trim the frontmatter `description` field to ~155 chars for meta use |

---

## 4. Schema & Structured Data (Score: 55/100)

### ✅ What Works
- `WebSite` schema in `BaseLayout`
- Individual article pages have correct `Article` or `FAQPage` schema
- Correct use of `@type: Organization` for team author, `@type: Person` for named author

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| S1 | **High** | **Listing page has no `CollectionPage` or `ItemList` schema** — Google can't understand this is a content hub with 5 articles | Add `CollectionPage` schema with `mainEntity` as `ItemList` containing the 5 article references |
| S2 | **High** | **No `BreadcrumbList` JSON-LD** on the listing page | Add `BreadcrumbList` schema (see T1) |
| S3 | **Low** | **No `SiteNavigationElement` schema** for the nav | Optional — adds navigation context for search engines |

---

## 5. Performance (Score: 85/100)

### ✅ What Works
- **Static site generation** — zero server rendering
- **Minimal JS** — only `MobileMenu.tsx` with `client:load` (a few KB)
- **Tailwind CSS v4** — optimized, JIT-compiled
- **No external fonts are loaded at runtime** (uses `@fontsource/outfit` — local)
- **No third-party scripts detected** on the listing page

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| P1 | **Medium** | **Hero background image (`/images/learn.png`) is loaded via inline CSS `background-image`** — no lazy-loading, no responsive image variants | Use `<picture>` or `<img>` with responsive srcset and `loading="lazy"` if the hero image isn't above-the-fold critical |
| P2 | **Low** | **No image compression check** — `/images/learn.png` should be converted to WebP/AVIF with PNG fallback | Audit static images and serve modern formats |

---

## 6. Internal Linking (Score: 80/100)

### ✅ What Works
- Breadcrumb: Home → Learn (correct hierarchy)
- Nav: "Learn" is first item (order: 1)
- Homepage links: Hero CTA ("Learn Facial Cupping"), Most Popular Guides, TopicCard
- Article cards: all 5 link correctly to `/learn/{slug}`
- Rich cross-linking between articles within the Learn section

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| L1 | **Medium** | **No "View All" or pagination for future scalability** — fine at 5 articles, but as content grows, users have no way to navigate beyond the grid | Plan for future pagination or section-level category filtering |
| L2 | **Low** | **No "Next article" / "Previous article" navigation** between learn articles | Add sequential navigation for users reading through the section |

---

## 7. Images (Score: 65/100)

### ✅ What Works
- Decorative hero image (no alt-text needed)
- Clean, image-free article cards (text-only, fast loading)

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| I1 | **Medium** | **Article cards have no thumbnail/preview images** — reduces visual appeal in social shares and organic SERP image results | Add optional `image` field to article frontmatter and show thumbnail in ArticleCard |
| I2 | **Medium** | **Hero image format** — `.png` files are larger than necessary. The learn hero likely doesn't need lossless PNG | Convert hero images to WebP with `<picture>` fallback |

---

## 8. AI Search Readiness / GEO (Score: 70/100)

### ✅ What Works
- Strong author E-E-A-T (named professionals)
- Peer-reviewed scientific references cited inline
- FAQ article has direct-answer format (highly citable by AI)
- Clear heading hierarchy — easy for LLMs to parse
- Internal links use descriptive anchor text

### ❌ Issues

| # | Severity | Finding | Recommendation |
|---|----------|---------|----------------|
| A1 | **Medium** | **No `llms.txt` or `llms-full.txt`** — AI crawlers have no guidance on which pages to cite or how to understand site structure | Add `llms.txt` at site root with key pages and summaries |
| A2 | **Low** | **Brand mention signal** — "FacialCupping.com" is the primary brand name but the domain is a direct match; no external brand monitoring detected | Build consistent brand citation across the web (spas, beauty blogs) to increase AI citation probability |

---

## Action Plan

### Phase 1: Critical Fixes (Week 1)
1. **Rewrite title tag** — "Learn Facial Cupping: Benefits, Techniques & Complete Guide | FacialCupping.com"
2. **Trim meta description** to 150–155 chars with article count and value proposition

### Phase 2: High-Impact Improvements (Weeks 2–3)
3. Add `CollectionPage` + `BreadcrumbList` JSON-LD schema to section listing template
4. Add publication dates to article cards
5. Pass OG image to `BaseLayout` on listing pages

### Phase 3: Content & Authority (Month 2)
6. Convert hero images to WebP
7. Add article thumbnail images to cards
8. Add `llms.txt` to site root

### Phase 4: Monitoring & Iteration (Ongoing)
9. Monitor indexing of `/learn` in GSC
10. Track SERP title/description changes after rewrites
11. Add sequential article navigation as content grows

---

## Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 75 | 22% | 16.5 |
| Content Quality | 82 | 23% | 18.9 |
| On-Page SEO | 68 | 20% | 13.6 |
| Schema / Structured Data | 55 | 10% | 5.5 |
| Performance | 85 | 10% | 8.5 |
| AI Search Readiness | 70 | 10% | 7.0 |
| Images | 65 | 5% | 3.3 |
| **Total** | | **100%** | **73.3** |

> **Rounded SEO Health Score: 73/100** — Solid foundation with clear path to 85+ by fixing on-page meta tags and adding structured data.

---

## Key Files Referenced

| File | Role |
|------|------|
| `src/content/sections/learn.md` | Section metadata (title, description, order) |
| `src/pages/[section]/index.astro` | Section listing page template |
| `src/layouts/BaseLayout.astro` | Base HTML shell with SEO meta tags |
| `src/components/PageHero.astro` | Hero section rendering H1 |
| `src/components/ArticleCard.astro` | Article card component |
| `src/components/Breadcrumb.astro` | Breadcrumb navigation |
| `src/content/articles/learn/*.md` | 5 learn articles |
| `src/pages/[section]/[slug].astro` | Article detail page with schema |
| `astro.config.mjs` | Site config (sitemap, site URL) |
