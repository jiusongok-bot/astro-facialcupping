# SEO Audit: /how-to/ Section (Listing + 6 Articles)

**Domain:** facialcupping.com
**Section:** how-to
**Audit Date:** 2026-06-29
**Pages Audited:** 7 (1 listing + 6 articles)

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **Overall SEO Health Score** | **84 / 100** (Good) |
| Business Type | Content / Educational Resource |
| Total Pages in Section | 7 |
| Pages with Issues | 3 |

### Top Critical Issues
1. **Missing `twitter:image` meta tag** — social previews lack image on Twitter/X
2. **`og:image` uses relative paths** — platforms may fail to resolve the image URL
3. **No `BreadcrumbList` JSON-LD** — breadcrumb navigation has no structured data backing

### Top Quick Wins
1. Add absolute URL prefix to `ogImage` in `BaseLayout.astro` (5-min fix)
2. Add `twitter:image` meta tag alongside existing Twitter cards (5-min fix)
3. Add `BreadcrumbList` JSON-LD to `Breadcrumb.astro` (15-min fix)

---

## 1. Technical SEO (Score: 85/100, Weight: 22%)

### What Works
- **robots.txt** — `Allow: /` with correct sitemap reference at `public/robots.txt`
- **Sitemap** — `@astrojs/sitemap` integration generates `sitemap-index.xml` automatically
- **Canonical URLs** — dynamically constructed per-page in `BaseLayout.astro:20`
- **Meta robots** — defaults to `index, follow`; overridable per page
- **Clean URL structure** — `/how-to/article-slug` (flat, keyword-rich)
- **No broken internal links** — all cross-references verified against content collection
- **Draft control** — `status` field in frontmatter prevents draft/dev pages from being built

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| T1 | `og:image` uses relative path | **Medium** | `BaseLayout.astro:40` passes `ogImage` prop as-is (e.g., `/images/howto.png`). Should be `https://facialcupping.com/images/howto.png` for correct resolution by Facebook, LinkedIn, etc. |
| T2 | No `twitter:image` meta tag | **Medium** | Twitter card has `summary_large_image`, `title`, `description` but no `twitter:image`. Images won't display in Twitter/X cards. |
| T3 | No custom 404 page | **Low** | No `src/pages/404.astro` found. Astro default 404 is minimal, not on-brand. |
| T4 | No `hreflang` tags | **Info** | Site is English-only, so this is acceptable. Add if multi-language support is planned. |
| T5 | PageHero uses CSS background-image | **Low** | `PageHero.astro:15` — hero banner has no `<img>` tag with `alt` attribute. Acceptable for decorative background, but misses a semantic signal. |

### Recommendations
1. **Fix `og:image` URLs** (Medium, Week 1): In `BaseLayout.astro`, prepend `Astro.site` or hardcode the domain:
   ```astro
   {ogImage && <meta property="og:image" content={`https://facialcupping.com${ogImage}`} />}
   ```
2. **Add `twitter:image`** (Medium, Week 1): Add alongside existing Twitter meta:
   ```astro
   {ogImage && <meta name="twitter:image" content={`https://facialcupping.com${ogImage}`} />}
   ```
3. **Create 404 page** (Low, Month 1): Add `src/pages/404.astro` for better UX and SEO.

---

## 2. Content Quality & E-E-A-T (Score: 92/100, Weight: 23%)

### What Works
- **Author expertise** — All 6 articles authored by "Sarah Chen, Licensed Esthetician" (real person, credentials shown)
- **Dates** — Every article has `datePublished` and `dateUpdated` (current: 2026 dates)
- **Comprehensive coverage** — 6 articles covering beginner guide, mistakes, daily routine, 11-lines, tutorial, techniques
- **Scientific references** — Multiple articles cite PubMed, NCBI, *PLoS One*, *Dermatology* journal
- **Readability** — Short paragraphs, clear headings, tables, bullet lists
- **Internal linking** — Rich cross-linking between articles creates topical authority
- **Key Takeaways sections** — Present in multiple articles for quick scanning
- **FAQ sections** — Addressed directly in the 11-lines article

### Article-by-Article Assessment

| Article | Word Count (est.) | E-E-A-T Signals | Issues |
|---------|-------------------|-----------------|--------|
| Beginner Guide | 1,100+ | Author, dates, citations, external links | None significant |
| Common Mistakes | 800+ | Author, dates, PubMed citation | None significant |
| Daily Routine | 750+ | Author, dates, NCBI citations | None significant |
| 11 Lines | 1,100+ | Author, dates, *PLoS One* citation, FAQ section | None significant |
| Step-by-Step Guide | 1,200+ | Author, dates, FAQ section | None significant |
| Techniques | 1,100+ | Author, dates, references section | None significant |

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| C1 | Section description could be richer | **Low** | `sections/how-to.md` description is 25 words. For the listing page, a more keyword-diverse description (35-50 words) could improve topical signaling. |
| C2 | No author bio or credential link | **Low** | "Sarah Chen, Licensed Esthetician" is shown but no link to author bio or credentials page. Adding an `/about/sarah-chen` or linking to an editorial page strengthens E-E-A-T. |
| C3 | No article exceeds 1,500 words | **Info** | Content is thorough but none are "comprehensive guides." For competitive keywords, longer content (2,000+) may perform better. |

### Recommendations
1. **(Low)** Expand the section description in `sections/how-to.md` to 35-50 words with more keyword variety.
2. **(Low)** Create a linked author bio page listing credentials and linking to all articles by Sarah Chen.
3. **(Low)** Consider expanding "How to Do Facial Cupping" into a 2,000+ word definitive guide to target competitive head terms.

---

## 3. On-Page SEO (Score: 93/100, Weight: 20%)

### What Works
- **Unique title tags** — Format: `{article title} | FacialCupping.com`, unique per page
- **Meta descriptions** — Unique, actionable, keyword-rich per page
- **H1 headings** — Match the `title` frontmatter; descriptive and unique
- **Heading hierarchy** — Proper `H1 > H2 > H3` structure throughout
- **Breadcrumb navigation** — Semantic `<nav aria-label="Breadcrumb">` with `<ol>` on all pages
- **URL structure** — Clean, hyphenated, keyword-targeted slugs
- **Semantic HTML** — `<article>`, `<nav>`, `<main>` used correctly
- **Internal linking** — Extensive contextual cross-links between articles and sections

### Page-by-Page Title Tag Audit

| Page | Title Tag | Length | Issue |
|------|-----------|--------|-------|
| `/how-to/` | How To \| FacialCupping.com | 28 chars | Short but acceptable for a section listing |
| `/how-to/how-to-do-facial-cupping` | How to Do Facial Cupping: Beginner Guide & First Session Tips \| FacialCupping.com | 87 chars | ✓ |
| `/how-to/common-facial-cupping-mistakes` | 10 Common Facial Cupping Mistakes Beginners Make (And How to Fix Them) \| FacialCupping.com | 96 chars | ✓ |
| `/how-to/facial-cupping-daily-routine` | 5-Minute Facial Cupping Daily Routine \| FacialCupping.com | 53 chars | ✓ |
| `/how-to/facial-cupping-for-11-lines` | Facial Cupping for 11 Lines: Reduce Frown Lines Naturally \| FacialCupping.com | 75 chars | ✓ |
| `/how-to/facial-cupping-step-by-step-tutorial` | Facial Cupping: Step-by-Step Tutorial (Complete Guide) \| FacialCupping.com | 73 chars | ✓ |
| `/how-to/facial-cupping-techniques` | Facial Cupping Techniques: Gliding, Flash & Stationary Methods \| FacialCupping.com | 83 chars | ✓ |

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| O1 | Listing page H1 is "How To" | **Low** | Functional but flat. Consider "How to Do Facial Cupping: Complete Guides & Tutorials" for better keyword coverage. |
| O2 | No meta description on listing page overtly targets "how to" keywords | **Low** | Current description is good but doesn't surface specific article topics (tutorial, techniques, mistakes, 11 lines). |
| O3 | ArticleCard truncates descriptions at 2 lines | **Low** | `ArticleCard.astro:25` uses `line-clamp-2`. Could clip important keyword context on listing page. |

### Recommendations
1. **(Low)** Enhance the section listing page title to include key subtopics.
2. **(Low)** Update listing page meta description to enumerate the 6 sub-topics for richer SERP snippets.

---

## 4. Schema & Structured Data (Score: 75/100, Weight: 10%)

### What Works
- **WebSite schema** — Present on all pages via `BaseLayout.astro:48-54`
- **Article schema** — Dynamic on all article pages with `headline`, `description`, `author`, `publisher`, `datePublished`, `dateModified`, `mainEntityOfPage`, `image`
- **FAQPage schema** — Generated automatically for FAQ articles via `buildSchema()` in `[slug].astro:68-89`
- **Author discrimination** — `Organization` for team vs `Person` for named authors (`[slug].astro:60-63`)
- **Publisher** — Correctly set to `"FacialCupping.com"` as Organization

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| S1 | **No BreadcrumbList JSON-LD** | **Medium** | `Breadcrumb.astro` renders semantic HTML breadcrumbs but no structured data. Google uses BreadcrumbList for rich results. |
| S2 | Listing page missing CollectionPage schema | **Medium** | The `/how-to/` listing page uses only WebSite schema. Adding `CollectionPage` with `mainEntity` pointing to the listed articles improves semantic understanding. |
| S3 | No `isPartOf` in Article schema | **Low** | Article schema could include `isPartOf: { "@type": "WebPage", "@id": "https://facialcupping.com/how-to" }` to establish the section relationship. |
| S4 | No sitelinks search box schema | **Info** | Adding `SearchAction` to the WebSite schema could enable sitelinks search. |
| S5 | No `HowTo` schema on tutorial/technique articles | **Info** | The tutorial and techniques articles are natural candidates for `HowTo` schema with `step`, `tool`, `supply`, and `totalTime` properties — a missed opportunity for rich results. |

### Recommendations
1. **Add BreadcrumbList JSON-LD** (Medium, Week 1): Add structured data to `Breadcrumb.astro`:
   ```astro
   <script type="application/ld+json" set:html={JSON.stringify({
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": [
       { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://facialcupping.com/" },
       ...items.map((item, i) => ({
         "@type": "ListItem",
         "position": i + 2,
         "name": item.label,
         "item": `https://facialcupping.com${item.href}`
       }))
     ]
   })} />
   ```
2. **Add CollectionPage schema** (Medium, Month 1): On the listing page, include `CollectionPage` with `mainEntity` referencing the listed articles.
3. **Add HowTo schema** (Medium, Month 1): On the step-by-step tutorial and techniques pages, implement `HowTo` schema with `step` arrays.

---

## 5. Performance — Core Web Vitals (Score: 90/100, Weight: 10%)

> Note: Lab data could not be collected without runtime tools. Score is based on codebase analysis.

### What Works
- **Static site** — Astro generates fully static HTML, minimal JS
- **No render-blocking resources** inferred — Tailwind CSS via Vite, no heavy third-party CSS
- **Minimal JavaScript** — Only React component is `MobileMenu.tsx`, likely small
- **No external fonts blocking** — `@fontsource/outfit` is typically self-hosted in the build
- **No images on article pages** — Content is pure text, no image loading overhead

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| P1 | PageHero images unoptimized | **Medium** | CSS `background-image` doesn't benefit from Astro's image optimization. File format/size of `/images/howto.png` unknown — could be large PNGs. |
| P2 | No explicit lazy-loading strategy | **Low** | No images to lazy-load on article pages, but no `loading="lazy"` on any images site-wide. |
| P3 | No CWV monitoring configured | **Info** | No CrUX, Lighthouse CI, or Web Vitals tracking detected. |

### Recommendations
1. **(Medium)** Convert hero images to WebP/AVIF format and serve appropriately sized versions.
2. **(Low)** Add `loading="lazy"` attribute to images if they are added to article pages in the future.

---

## 6. AI Search Readiness / GEO (Score: 72/100, Weight: 10%)

### What Works
- **Clear heading structure** — AI crawlers (Claude, ChatGPT, Perplexity) parse H2/H3 hierarchies well
- **Structured Data** — Article and FAQPage schemas improve AI citability
- **Author Expertise** — Real author name and credentials on every article
- **Factual citations** — Links to PubMed, NCBI, scholarly sources (perceived as authoritative by AI models)
- **FAQ format** — Question-answer format is highly citeable by AI assistants
- **Internal linking** — Clear topical clustering helps AI understand knowledge graph

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| G1 | **No `llms.txt` file** | **Medium** | No `/llms.txt` at the site root. This file tells AI crawlers which pages to prioritize for training/citation. |
| G2 | No explicit AI crawler directives in robots.txt | **Medium** | `robots.txt` treats all crawlers equally (allows all). AI crawlers (GPTBot, Claude-Web, CCBot) get no specific instructions or hints. |
| G3 | No `.well-known/` AI resources | **Low** | No `llms-full.txt` or AI-specific resource discovery. |
| G4 | No author bio/credential page | **Low** | AI models look for entity authority. A dedicated author page with credentials, certifications, and linked articles would strengthen author entity signals. |
| G5 | Passage-level anchoring could be stronger | **Low** | Some sections lack a single "key quote" or "takeaway" that AI models can easily cite verbatim. |

### Recommendations
1. **Create `/llms.txt`** (Medium, Week 1): Add a crawler-friendly file listing key how-to articles:
   ```
   # FacialCupping.com — How To Guides
   ## Essential Articles
   - How to Do Facial Cupping: https://facialcupping.com/how-to/how-to-do-facial-cupping
   - Common Mistakes: https://facialcupping.com/how-to/common-facial-cupping-mistakes
   - Step-by-Step Tutorial: https://facialcupping.com/how-to/facial-cupping-step-by-step-tutorial
   ```
2. **(Medium)** Update `robots.txt` to allow all AI crawlers explicitly with helpful crawl-delay hints.
3. **(Low)** Create an author bio page for Sarah Chen linking to her articles.

---

## 7. Images (Score: 40/100, Weight: 5%)

### What Works
- Section listing page has a branded hero image
- OG image mapping exists for social sharing

### Findings

| # | Finding | Severity | Detail |
|---|---------|----------|--------|
| I1 | **No images in any of the 6 articles** | **Medium** | How-to/tutorial content performs significantly better with images showing technique, cup placement, before/after results. Missed opportunity for engagement and image search traffic. |
| I2 | Hero image is CSS background (not `<img>`) | **Medium** | `PageHero.astro:13-17` uses inline CSS background-image. No `alt` attribute, no `loading="lazy"`, no responsive sizing. |
| I3 | No image sitemap | **Low** | Images aren't indexed for Google Image Search. |
| I4 | File format unknown | **Low** | Not confirmed if `/images/howto.png` is PNG, WebP, or AVIF. |

### Recommendations
1. **Add technique/step images to articles** (Medium, Month 1): Add images showing cupping technique, cup placement, facial zones — these are highly searchable and improve engagement.
2. **(Medium)** Convert hero images to modern formats (WebP/AVIF) with `<picture>` for responsive delivery.
3. **(Medium)** Add descriptive `alt` text to all images for accessibility and image SEO.

---

## Scoring Summary

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 85 | 22% | 18.70 |
| Content Quality | 92 | 23% | 21.16 |
| On-Page SEO | 93 | 20% | 18.60 |
| Schema / Structured Data | 75 | 10% | 7.50 |
| Performance (CWV) | 90 | 10% | 9.00 |
| AI Search Readiness | 72 | 10% | 7.20 |
| Images | 40 | 5% | 2.00 |
| **Total** | | **100%** | **84 / 100** |

---

## Action Plan

### Phase 1: Critical Fixes (Week 1)
| # | Item | Effort | Impact | Category |
|---|------|--------|--------|----------|
| 1 | Fix `og:image` URLs to absolute in `BaseLayout.astro` | 5 min | High | Technical |
| 2 | Add `twitter:image` meta tag | 5 min | High | Technical |
| 3 | Add `BreadcrumbList` JSON-LD to `Breadcrumb.astro` | 15 min | Medium | Schema |

### Phase 2: High-Impact Improvements (Weeks 2-3)
| # | Item | Effort | Impact | Category |
|---|------|--------|--------|----------|
| 4 | Create `/llms.txt` for AI crawler guidance | 15 min | Medium | GEO |
| 5 | Add `CollectionPage` schema to listing page | 30 min | Medium | Schema |
| 6 | Add `HowTo` schema to step-by-step tutorial | 1 hr | High | Schema |

### Phase 3: Content & Authority (Month 2)
| # | Item | Effort | Impact | Category |
|---|------|--------|--------|----------|
| 7 | Add technique images to key how-to articles | 2-4 hrs | Medium | Images |
| 8 | Create author bio page for Sarah Chen | 1 hr | Medium | Content |
| 9 | Expand section description for richer listing page | 15 min | Low | Content |

### Phase 4: Monitoring & Iteration (Ongoing)
| # | Item | Effort | Impact | Category |
|---|------|--------|--------|----------|
| 10 | Convert hero images to WebP/AVIF | 1 hr | Low | Images |
| 11 | Create custom 404 page | 30 min | Low | Technical |
| 12 | Set up CWV monitoring (CrUX, Search Console) | 1 hr | Medium | Performance |

---

## Analyzed Files

| File | Path |
|------|------|
| Section listing data | `src/content/sections/how-to.md` |
| Listing page template | `src/pages/[section]/index.astro` |
| Article page template | `src/pages/[section]/[slug].astro` |
| Base layout (SEO head) | `src/layouts/BaseLayout.astro` |
| Article layout | `src/layouts/ArticleLayout.astro` |
| Breadcrumb component | `src/components/Breadcrumb.astro` |
| ArticleCard component | `src/components/ArticleCard.astro` |
| PageHero component | `src/components/PageHero.astro` |
| Blog article 1 | `src/content/articles/how-to/how-to-do-facial-cupping.md` |
| Blog article 2 | `src/content/articles/how-to/common-facial-cupping-mistakes.md` |
| Blog article 3 | `src/content/articles/how-to/facial-cupping-daily-routine.md` |
| Blog article 4 | `src/content/articles/how-to/facial-cupping-for-11-lines.md` |
| Blog article 5 | `src/content/articles/how-to/facial-cupping-step-by-step-tutorial.md` |
| Blog article 6 | `src/content/articles/how-to/facial-cupping-techniques.md` |
| Robots.txt | `public/robots.txt` |
| Astro config | `astro.config.mjs` |

---

*Audit methodology: Codebase analysis of all 7 pages in the how-to section, 14 supporting template/component files, site configuration, and content schemas. Performance scores are codebase-estimated (lab data was not collected).*
