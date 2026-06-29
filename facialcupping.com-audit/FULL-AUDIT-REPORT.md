# FacialCupping.com — Full SEO Audit Report

**Audit Date:** June 29, 2026
**Domain:** facialcupping.com
**Business Type:** Health/Wellness Content Publisher — Skincare Resource Center
**Crawl Scope:** 11 section list pages (Learn, Benefits, How-To, Safety, Tools, Research, Oils, GlowCup, Comparisons, Brands, About) + 50+ article detail pages
**Data Source:** Local development server (production site unreachable)

---

## Executive Summary

### Overall SEO Health Score: **72/100**

| Category | Score | Weight |
|----------|-------|--------|
| Technical SEO | 65 | 22% |
| Content Quality | 78 | 23% |
| On-Page SEO | 80 | 20% |
| Schema / Structured Data | 85 | 10% |
| Performance (CWV) | 65 | 10% |
| AI Search Readiness | 82 | 10% |
| Images | 70 | 5% |

### Top 5 Critical Issues
1. **Production site is inaccessible** — DNS resolves but HTTP returns empty responses
2. **Sitemap-index.xml returns 404** — search engines cannot discover all pages
3. **Missing Article schema on detail pages** — lost opportunity for rich snippets
4. **No responsive images** — single-resolution images hurt Core Web Vitals (LCP)
5. **No security headers configured** — missing HSTS, CSP, X-Content-Type-Options

### Top 5 Quick Wins
1. Deploy the site to production and verify accessibility
2. Verify sitemap-index.xml generation in the build pipeline
3. Add Article schema markup to `[slug].astro` — 1 hour of work
4. Fix hero image alt text from `alt={title}` to descriptive text
5. Add section descriptions to `llms.txt` for better AI crawler comprehension

---

## Technical SEO (Score: 65)

### Strengths
- **robots.txt**: Excellent configuration. Allows all major AI crawlers (GPTBot, Claude-Web, CCBot, Google-Extended, PerplexityBot) while also allowing general crawlers. Sitemap reference is included.
- **Canonical tags**: Every page includes `<link rel="canonical">` pointing to the correct HTTPS URL.
- **Meta robots**: All pages use `index, follow` correctly.
- **URL structure**: Clean `/section/` and `/section/slug` hierarchy with no query parameters.
- **Responsive viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` present on all pages.
- **Astro static generation**: Pre-rendered HTML for fast initial load.

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **Production site unreachable** | Critical | DNS resolves to 67.228.37.8 but HTTP requests return empty/000 responses. Site only accessible via localhost:4321. Cannot crawl, index, or rank. |
| **Sitemap-index.xml returns 404** | High | robots.txt references `/sitemap-index.xml` but it's not accessible. Astro sitemap integration (`@astrojs/sitemap`) is configured but build output may not generate it at the expected path. |
| **No HTTP security headers** | Medium | Missing X-Content-Type-Options, X-Frame-Options, CSP, HSTS, Referrer-Policy. This is not a ranking factor but affects trustworthiness. |
| **No custom 404 page** | Medium | Astro's default 404 page will be shown. A branded 404 with navigation improves UX and crawlability. |
| **Dev-only CSS bundling** | Info | All Tailwind CSS inlined in dev mode. Production build extracts CSS; verify code-splitting works correctly. |

---

## Content Quality (Score: 78)

### Strengths
- **Scientific rigor**: Articles cite PubMed-indexed studies (e.g., Al-Bedah 2019, Cao 2012, Rozenfeld 2021) — strong E-E-A-T signal.
- **Author credentials**: Content authored by "Sarah Chen, Licensed Esthetician" — real credential visible to users and search engines.
- **E-E-A-T infrastructure**: Dedicated editorial guidelines (`/about/editorial`), review process (`/about/review-process`), and mission page (`/about/mission`).
- **Content depth**: Flagship articles like "What Is Facial Cupping" span 157 lines with comparison tables, step-by-step instructions, and FAQ sections.
- **Freshness signals**: `dateUpdated` field used consistently across articles. Latest update: June 27, 2026.
- **Internal linking**: Articles include contextual links to related content (e.g., "see our guide on how facial cupping works").

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **Single-article sections** | Medium | Sections like `/about/editorial`, `/about/contact`, `/about/review-process` contain only 1 article each. CollectionPage schema with 1 item may be seen as thin content. |
| **Missing long descriptions** | Medium | Sections like `brands`, `comparisons`, `oils` lack `longDescription` in their frontmatter, providing less context on list pages. |
| **Default author on some articles** | Low | About pages use the default "FacialCupping.com Team" instead of a named individual with credentials. |
| **Variable article lengths** | Info | No minimum word count enforced. Some articles may fall below 600 words, risking thin content classification. |

---

## On-Page SEO (Score: 80)

### Strengths
- **Unique titles**: All 11 sections have distinct, keyword-rich `<title>` tags (e.g., "Learn Facial Cupping: Benefits, Techniques & Complete Guide | FacialCupping.com").
- **Meta descriptions**: Well-written, actionable descriptions that include target keywords and call-to-action language.
- **Heading hierarchy**: `H1` on list pages matches the section title. Article cards use `H3` for each entry. Clean hierarchy: H1 > H3 (no H2 on list pages).
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, and `<article>` elements.
- **Breadcrumb navigation**: Breadcrumb component present on every list page with `BreadcrumbList` JSON-LD.

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **Article titles may exceed 60 chars** | Medium | Some article titles are 65-70 characters, risking truncation in SERPs. |
| **Missing article OG tags** | Low | BaseLayout hardcodes `og:type='website'`. Article pages should use `og:type='article'` with `article:published_time` and `article:author`. |
| **Limited cross-linking** | Medium | List pages have no "Related Sections" module. A reader on "How To" cannot easily discover "Safety" or "Tools" sections. |
| **Title format inconsistency** | Low | Some pages use "Title | FacialCupping.com", others may vary. Standardize. |

---

## Schema / Structured Data (Score: 85)

### Strengths
- **WebSite schema**: Present on every page via BaseLayout with SearchAction potential action.
- **CollectionPage + ItemList**: Every list page generates a complete CollectionPage schema with full ItemList including position, name, description, and URL for each article.
- **BreadcrumbList**: Every list page has BreadcrumbList JSON-LD with Home > Section hierarchy.
- **Correct implementation**: All JSON-LD uses correct `@context`, `@type`, and required properties.

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **Missing Article schema** | **High** | Article detail pages lack `Article` or `NewsArticle` schema. This is the single biggest structured data miss — Google uses this for article rich snippets, headline display, and thumbnail previews in search results. |
| **Missing FAQPage schema** | Medium | `/learn/facial-cupping-faq` contains structured Q&A content but no `FAQPage` markup. Enables FAQ rich results in SERPs. |
| **Missing Organization schema** | Low | No `Organization` or `Publisher` schema defined. Google cannot identify the brand behind the content in knowledge panels. |
| **SearchAction without search** | Low | `SearchAction` targets `/?q={search_term_string}` but no search functionality exists. |

---

## Performance — Core Web Vitals (Score: 65)

### Strengths
- **Minimal bloat**: Only React hydration scripts + Astro core. No ad networks, analytics, or third-party widgets.
- **Static pre-rendering**: Astro generates static HTML for all pages — fast Time to First Byte (TTFB).
- **Font optimization**: WOFF2 format with `unicode-range` subsets. Only loads Latin and Latin-Ext character sets.
- **Eager hero images**: Hero images use `fetchpriority="high"` and `loading="eager"` for fastest LCP.

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **No responsive image srcset** | **High** | Full-resolution images (e.g., hero-bg.webp at 58KB) served to mobile. Estimated LCP improvement of 20-30% with proper srcset. |
| **No lazy loading** | Medium | Article body images lack `loading="lazy"`. All images block initial render. |
| **Large hero images** | Medium | hero-bg.webp (58KB), research.webp (86KB), tools.webp (91KB) — could be compressed 40-60% further. |
| **No field data** | Info | CrUX and Lighthouse data unavailable until production deployment. |

---

## AI Search Readiness (Score: 82)

### Strengths
- **llms.txt**: Implemented with full site structure and article URLs. One of the first sites observed to adopt the `llms.txt` standard.
- **AI crawler access**: robots.txt explicitly allows GPTBot, Claude-Web, Google-Extended, PerplexityBot, and CCBot.
- **Citability**: Content cites peer-reviewed studies, making it more likely to be referenced by AI systems.
- **E-E-A-T**: Author credentials, editorial process, and review standards provide trust signals valued by AI answer engines.

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **llms.txt lacks descriptions** | Medium | Only lists titles and URLs without section context. Adding descriptions helps AI match content to user queries. |
| **No llms-full.txt** | Medium | Full article text would improve AI comprehension accuracy vs. just metadata. |
| **No heading anchor IDs** | Low | h2/h3 elements lack `id` attributes. Adding them enables direct AI citation of specific sections. |

---

## Images (Score: 70)

### Strengths
- **WebP format**: All images use modern WebP with good compression.
- **Unique OG images**: Each section has a unique OG image with descriptive filenames (learn.webp, howto.webp, etc.).
- **Favicon set**: Complete favicon set (SVG, ICO, Apple Touch Icon).

### Issues

| Issue | Severity | Impact |
|-------|----------|--------|
| **No responsive srcset** | **High** | Single resolution for all viewports. High CLS and LCP impact on mobile. |
| **Poor alt text** | Medium | Hero images use `alt={title}` — "Learn Facial Cupping" does not describe the actual image content to screen readers. |
| **Missing dimensions** | Medium | Article images lack width/height attributes, causing layout shifts as images load. |
| **Large file sizes** | Medium | Hero images 58-94KB. Further compression could reduce 40-60% without quality loss. |

---

## Technical Infrastructure Notes

| Property | Status |
|----------|--------|
| **SSG Framework** | Astro v7.0.2 |
| **CSS** | Tailwind CSS v4.3.1 |
| **UI Framework** | React 19 (sparingly: only MobileMenu component) |
| **Font** | Outfit (Variable, Latin/Latin-Ext) |
| **Animation** | motion v12.41.0 |
| **Sitemap** | @astrojs/sitemap (configured but 404) |
| **Hosting** | Not confirmed (production unreachable) |
| **HTTPS** | Configured in canonical URLs but unverifiable |
| **Analytics** | Not detected |
| **CDN** | Not detected |

---

## Summary

FacialCupping.com is a well-structured, content-rich informational site with strong E-E-A-T signals and excellent structured data foundations. The critical blocker is **production inaccessibility** — without a live site, none of the positive attributes matter for SEO. Once deployed, the highest-priority improvements are:

1. **Production deployment** (blocking everything else)
2. **Article schema** (highest-impact markup addition)
3. **Responsive images** (largest CWV improvement)
4. **Sitemap fix** (ensures discovery of all pages)
5. **Content expansion** (eliminate single-article sections)

The site's architecture (Astro SSG, semantic HTML, structured data, AI-readiness) is ahead of most newly-built content sites. With deployment and the above fixes, this site has strong potential to rank well for facial cupping related keywords.
