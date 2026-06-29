# Full Website SEO Audit: facialcupping.com

**Audit Date:** June 29, 2026
**Audit Method:** Local build analysis (`dist/`) — domain `www.astro-facialcupping.com` does not resolve; actual site domain (`facialcupping.com`) also not live. All findings based on built static output.
**Pages Discovered:** 23 (via sitemap)
**Site Type:** Health / Wellness Content Publisher (non-ecommerce, non-local)

---

## Executive Summary

**Overall SEO Health Score: 71/100**

The site has strong foundational SEO: clean HTML structure, proper meta tags, Open Graph/Twitter Card support, JSON-LD structured data, sitemap, robots.txt with AI crawler allowances, and an `llms.txt` file. Content quality is excellent — evidence-based, authored by named professionals, with clear editorial standards and citations.

**However, the site is not yet deployed.** There are also significant broken internal links (~20+ links pointing to non-existent pages), a missing "Benefits" section despite being referenced everywhere, incomplete navigation (per the PRD plan), and missing alt text on all hero/background images.

### Top 5 Critical Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | Site not live — no DNS resolution for any domain | Critical |
| 2 | ~20+ broken internal links to `/benefits/`, `/tools/`, `/safety/`, `/comparisons/`, `/oils/` pages that don't exist | Critical |
| 3 | llms.txt references `/benefits/` URLs that 404 (10 of 40 entries) | High |
| 4 | No alt text on any image (all hero/background images use CSS `background-image`) | High |
| 5 | Missing critical content sections: Benefits, Tools, Safety, GlowCup — per PRD these are core to the site architecture | High |

### Top 5 Quick Wins

| # | Quick Win | Effort |
|---|-----------|--------|
| 1 | Deploy the site to facialcupping.com (DNS + hosting) | Medium |
| 2 | Build missing sections (Benefits, Tools, Safety) or remove broken links | High |
| 3 | Fix llms.txt to only reference existing pages | Low |
| 4 | Add `alt` attributes to all images | Low |
| 5 | Reduce `title` tag length on interior pages (currently >60 chars with site name appended) | Low |

---

## Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 82/100 | 22% | 18.0 |
| Content Quality | 88/100 | 23% | 20.2 |
| On-Page SEO | 70/100 | 20% | 14.0 |
| Schema / Structured Data | 90/100 | 10% | 9.0 |
| Performance (CWV) | 60/100 | 10% | 6.0 |
| AI Search Readiness | 85/100 | 10% | 8.5 |
| Images | 30/100 | 5% | 1.5 |
| **Total** | | **100%** | **77.2** |

*Adjusted to 71/100 due to broken internal links penalty.*

---

## 1. Technical SEO (Score: 82/100)

### What Works

- **Robots.txt** — Excellent. Allows all crawlers, explicitly allows AI crawlers (GPTBot, Claude-Web, CCBot, Google-Extended, PerplexityBot), includes sitemap reference.
- **Sitemap** — Properly formatted sitemap-index.xml → sitemap-0.xml with 23 URLs. All pages included.
- **Canonical URLs** — Every page has a correct `<link rel="canonical">` pointing to the `https://facialcupping.com/` version.
- **HTTPS readiness** — All internal URLs use `https://` protocol. Astro config sets `site: "https://facialcupping.com"`.
- **No index bloat** — Only 23 pages; no thin content.
- **Mobile responsiveness** — Uses Tailwind responsive classes, `clamp()` font sizing, mobile-first design.
- **No orphan pages** — All pages linked in sitemap are reachable from navigation or internal links.

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| Site not deployed | Critical | Both `www.astro-facialcupping.com` and `facialcupping.com` fail DNS resolution. No hosting detected. |
| No HTTP security headers | High | Cannot verify HSTS, CSP, X-Frame-Options, etc. (expected to be addressed at hosting/CDN level) |
| No `navigator.mediaDevices` | Low | Not relevant |
| No print stylesheet | Low | Not critical but nice to have |
| `rehype-external-links` adds `nofollow` to all external links | Info | This is intentional, but note that outbound links to PubMed, Cochrane, etc. use `nofollow` — acceptable for editorial policy |

---

## 2. Content Quality (Score: 88/100)

### What Works

- **E-E-A-T Signals** — Excellent:
  - Named authors with credentials: Sarah Chen (Licensed Esthetician), James Liu (TCM Practitioner)
  - Detailed editorial guidelines page
  - Detailed review process page (5-phase: Research → Writing → Review → Update → Correction)
  - AI-Assisted Content Policy disclosed
  - Conflict of Interest Policy
  - Published and updated dates on every article
  - Correction log format defined
- **Readability** — Content uses plain language, technical terms explained on first use, bullet points, descriptive headings.
- **Evidence-based** — Every health claim cites peer-reviewed sources (PubMed, Cochrane). Source hierarchy defined.
- **Original content** — Not duplicated. Each page has unique value.
- **Word count** — Articles are comprehensive (e.g., "What Is Facial Cupping" is ~1,500 words with tables, references, FAQ).
- **No thin content** — Every page provides substantive information.

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| ~20+ broken internal links | Critical | Pages reference `/benefits/lymphatic`, `/benefits/rejuvenation`, `/comparisons/vs-gua-sha`, `/tools/silicone`, `/safety/safety-guide`, `/oils/best-oil`, etc. None of these pages exist in the build. |
| Missing core content sections | High | Per PRD: Benefits, Tools, Safety, GlowCup are core site sections. Only Learn, How-To, Research, About are built. |
| Homepage lacks freshness signal | Medium | Homepage has no published/updated date visible. Only interior articles show dates. |

### Broken Internal Links (Inventory)

Pages referenced in content but not built:

| Missing URL | Referenced From |
|------------|-----------------|
| `/benefits/lymphatic` | What Is Facial Cupping |
| `/benefits/rejuvenation` | What Is Facial Cupping |
| `/benefits/facial-cupping-benefits` | What Is Facial Cupping |
| `/benefits/results-timeline` | What Is Facial Cupping |
| `/comparisons/vs-gua-sha` | What Is Facial Cupping |
| `/comparisons/vs-jade-roller` | What Is Facial Cupping |
| `/tools/silicone` | What Is Facial Cupping |
| `/tools/best-facial-cupping-sets` | What Is Facial Cupping |
| `/oils/best-oil` | What Is Facial Cupping |
| `/safety/safety-guide` | What Is Facial Cupping |
| `/safety/contraindications` | What Is Facial Cupping |
| `/safety/damage-skin` | What Is Facial Cupping |
| `/benefits/facial-cupping-benefits` | Learn / What Is Facial Cupping (related links) |
| `/benefits/before-after` | llms.txt |
| `/benefits/lymphatic` | llms.txt |
| `/benefits/circulation` | llms.txt |
| `/benefits/puffiness` | llms.txt |
| `/benefits/rejuvenation` | llms.txt |
| `/benefits/wrinkles` | llms.txt |
| `/benefits/jawline` | llms.txt |
| `/benefits/results-timeline` | llms.txt |
| `/benefits/how-long-to-work` | llms.txt |

---

## 3. On-Page SEO (Score: 70/100)

### What Works

- **Title tags** — Every page has a unique, descriptive `<title>` tag. Keywords are front-loaded (e.g., "What Is Facial Cupping: Benefits, Techniques & Complete Guide | FacialCupping.com").
- **Meta descriptions** — Every page has a unique `<meta name="description">` tag (120-160 chars).
- **Heading structure** — Proper `h1` → `h2` → `h3` hierarchy. Single `h1` per page.
- **Open Graph tags** — Complete OG tags on every page (title, description, url, image).
- **Twitter Card tags** — Complete `summary_large_image` cards on every page.
- **Breadcrumbs** — Implemented on all interior pages with BreadcrumbList JSON-LD.
- **URL structure** — Clean, descriptive, hyphen-separated slugs: `/learn/what-is-facial-cupping/`, `/about/editorial/`.
- **Internal linking** — Good cross-linking between related articles (Related sections at bottom of articles).

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| Title tags too long (>60 chars) | Medium | Many titles include site name suffix making them 70-80 chars. E.g., "Editorial Guidelines & Content Standards | FacialCupping.com | FacialCupping.com" — **double site name in title!** |
| Missing navigation items | Medium | Per PRD, nav should include Benefits, Safety, Tools, GlowCup. Currently only Home, Learn, How-To, Research, About. |
| Homepage H1 uses `<br>` tag | Low | "Facial Cupping,<br>Explained." — semantic but slightly awkward for screen readers |
| No mobile hamburger menu visible in HTML | Low | Mobile trigger uses Astro island with JS — works but relies on JS execution |

### Title Tag Audit

| Page | Title | Length | Issue |
|------|-------|--------|-------|
| Home | "Facial Cupping: Complete Guide to Benefits, Techniques & Safety | FacialCupping.com" | 78 chars | OK |
| About | "About FacialCupping.com: Our Mission & Editorial Team | FacialCupping.com" | 73 chars | OK |
| Editorial | "Editorial Guidelines & Content Standards | FacialCupping.com | FacialCupping.com" | 85 chars | **Double brand** |
| Learn | "Facial Cupping: Learn What It Is, How It Works & Expert Guides | FacialCupping.com" | 79 chars | OK |
| Research | "Facial Cupping Research: Science, Studies & Evidence | FacialCupping.com" | 70 chars | OK |

---

## 4. Schema & Structured Data (Score: 90/100)

### What Works

- **WebSite schema** — On every page with SearchAction (site search).
- **BreadcrumbList schema** — On every interior page.
- **Article schema** — On all article pages with `headline`, `description`, `url`, `image`, `author` (Person), `publisher` (Organization), `datePublished`, `dateModified`, `mainEntityOfPage`, `isPartOf`.
- **CollectionPage/ItemList schema** — On section hub pages (About, Research) listing child pages with positions, names, and descriptions.
- **Valid JSON** — All JSON-LD is valid, properly formatted, correctly escaped.

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| No Organization/LocalBusiness schema on About/Contact | Low | Contact page lacks `Organization` schema with contactPoint |
| No FAQ schema on FAQ pages | Low | FAQ content uses semantic HTML but no `FAQPage` schema — could enable rich results |
| No HowTo schema on how-to pages | Medium | How-to articles could use `HowTo` schema with steps, tools, time required for rich result eligibility |
| No Product schema | Info | Not applicable yet (no product pages) |
| No ArticleSchema on some hub pages | Info | Hub pages (Learn, How-To) could use `CollectionPage` schema consistently |

---

## 5. Performance (CWV) — Lab Estimate (Score: 60/100)

**Note:** Cannot run real Lighthouse / CrUX field data since site is not live. Estimates based on build analysis.

### Estimated Scores

| Metric | Estimate | Assessment |
|--------|----------|------------|
| LCP | Good | No large images above fold (CSS background-images, no hero images in `<img>` tags) |
| INP | Unknown | Minimal JS — only Astro island for mobile menu and React hydration. Should be Good. |
| CLS | Good | No dynamic layout shifts detected. Fixed header with stable layout. |
| FCP | Good | Small CSS bundle (single Footer.Cmy_0SpT.css) |

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| No font-display: swap | Medium | Outfit font loaded via `@fontsource/outfit` — need to verify swap behavior in rendered CSS |
| All images loaded as CSS backgrounds | Medium | Hero images use `background-image` — no lazy loading, no explicit dimensions, could cause layout shifts on slow connections |
| Astro islands require JS | Low | MobileMenu and React islands need JS hydration — negligible impact on CWV |

---

## 6. Images (Score: 30/100)

### What Works

- **WebP format** — All images use `.webp` format (modern, efficient).
- **Decent image count** — 12 images in `dist/images/` (hero-bg, about, benefits, glowcup, hero, howto, learn, oils, research, safety, tools, plus one hashed image).
- **Background images** — Hero banners use `background-size: cover` which avoids `srcset` issues.

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| **No alt text on any image** | **High** | All hero/banner images use CSS `background-image` — screen readers cannot access them. This is a WCAG failure. |
| No `<img>` tags for content images | High | No inline `<img>` tags found. All images are CSS backgrounds. Missing semantic image markup. |
| No responsive images | Medium | No `srcset` or `<picture>` elements. Single resolution per image. |
| No lazy loading | Medium | CSS background images load with the stylesheet — no `loading="lazy"`. |
| Image dimensions not explicit | Low | CSS background images need explicit `aspect-ratio` or dimensions to prevent CLS. |

---

## 7. AI Search Readiness (Score: 85/100)

### What Works

- **llms.txt** — Present and well-structured with 40 links across 5 sections. This is excellent AI crawler support.
- **Robots.txt allows AI crawlers** — Explicitly allows GPTBot, Claude-Web, CCBot, Google-Extended, PerplexityBot.
- **Content citability** — Excellent: named authors, credentials, published/updated dates, peer-reviewed citations, clear evidence grading.
- **Structured data** — Comprehensive JSON-LD helps AI understand entity relationships.
- **No paywall** — All content freely accessible.
- **Clean HTML** — Semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`).

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| llms.txt references non-existent pages | High | 10 of 40 URLs in llms.txt point to `/benefits/` pages that don't exist. AI crawlers hitting these will get 404s. |
| No `llms-full.txt` | Low | Consider adding `llms-full.txt` for complete content access by AI crawlers. |
| No brand mention signals elsewhere | Medium | As a new site with no live deployment, there are zero external mentions. Need content marketing / link building. |

---

## 8. Site Architecture & Internal Linking (Score: 65/100)

### What Works

- **Hub-and-spoke model** — Content hubs (Learn, How-To, Research, About) each link to child articles.
- **Breadcrumbs** — Full breadcrumb trail on all interior pages.
- **Footer links** — Footer organizes links by category (Learn, Explore, Company).
- **Related articles** — Each article ends with a "Related in [Section]" grid.

### Issues Found

| Finding | Severity | Detail |
|---------|----------|--------|
| Navigation incomplete | Medium | Only 5 nav items. Per PRD, should be: Home, Learn, Benefits, How To, Safety, Tools, Research, GlowCup, About. Benefits, Safety, Tools, GlowCup are missing. |
| Footer Learn section thin | Low | Footer's Learn section only has 2 links (What Is Facial Cupping, How To) despite having 6 learn articles. |
| Deep link structure | Low | Max depth is 3 clicks (Home → About → Editorial). Good. |
| No pagination | Info | Not needed for 23 pages. |

---

## 9. Security

| Finding | Severity | Detail |
|---------|----------|--------|
| No live site | Critical | Cannot verify HTTPS, HSTS, CSP, or other security headers |
| External links use `rel="noopener noreferrer nofollow"` | Good | Security best practice for external links |
| No inline scripts with sensitive data | Good | No API keys, tokens, or secrets found in HTML |

---

## Action Plan

### Phase 1: Critical Fixes (Week 1)

| # | Action | Category |
|---|--------|----------|
| 1 | **Deploy the site.** Set up DNS for `facialcupping.com`, configure hosting (Vercel/Cloudflare Pages/Netlify recommended for Astro), enable HTTPS. | Technical |
| 2 | **Remove or redirect broken internal links.** Either build all referenced pages (`/benefits/*`, `/tools/*`, `/safety/*`, `/comparisons/*`, `/oils/*`) or remove links to non-existent pages from article content. | Content |
| 3 | **Fix llms.txt.** Remove the 10 `/benefits/` URLs that 404. Only list existing pages. | AI Readiness |

### Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Action | Category |
|---|--------|----------|
| 4 | **Build missing core sections.** Per PRD: Benefits (10 pages), Safety (5 pages), Tools (5 pages), GlowCup (4 pages). These are the highest-value content gaps. | Content |
| 5 | **Add alt text to all images.** Every hero/banner image needs descriptive `alt` text. Convert critical background images to `<img>` tags where possible. | Images |
| 6 | **Fix Editorial page title.** Double site name "| FacialCupping.com | FacialCupping.com" needs to be deduplicated. | On-Page |

### Phase 3: Content & Authority (Month 2)

| # | Action | Category |
|---|--------|----------|
| 7 | **Add FAQPage and HowTo schema** to appropriate articles for rich result eligibility. | Schema |
| 8 | **Shorten title tags** to under 60 characters where possible. Consider removing site name suffix on interior pages. | On-Page |
| 9 | **Expand navigation** to include Benefits, Safety, Tools, GlowCup once those sections are built. | Architecture |
| 10 | **Build backlink profile** through guest posts, expert roundups, and resource page outreach. | Authority |

### Phase 4: Monitoring & Iteration (Ongoing)

| # | Action | Category |
|---|--------|--------|
| 11 | Set up Google Search Console and Google Analytics 4 post-launch. | Monitoring |
| 12 | Monitor Core Web Vitals in CrUX post-launch. | Performance |
| 13 | Add `hreflang` tags if multi-language support is planned. | Technical |
| 14 | Create `llms-full.txt` for comprehensive AI crawler access. | AI Readiness |
| 15 | Add last-modified dates to sitemap for freshness signals. | Technical |

---

## Technical Details

### Build Info
- **Framework:** Astro v7.0.2
- **CSS:** Tailwind CSS v4
- **JS Framework:** React 19 (islands)
- **Font:** Outfit (Latin + Latin Extended)
- **Image format:** WebP
- **Sitemap:** 1 sitemap-index → 1 sitemap with 23 URLs
- **Total pages built:** 23

### Pages Discovered
```
/ (Home)
/about/
/about/contact/
/about/editorial/
/about/mission/
/about/review-process/
/how-to/
/how-to/common-facial-cupping-mistakes/
/how-to/facial-cupping-daily-routine/
/how-to/facial-cupping-for-11-lines/
/how-to/facial-cupping-step-by-step-tutorial/
/how-to/facial-cupping-techniques/
/how-to/how-to-do-facial-cupping/
/learn/
/learn/facial-cupping-faq/
/learn/facial-cupping-therapy/
/learn/history-of-facial-cupping/
/learn/how-facial-cupping-works/
/learn/what-is-facial-cupping/
/research/
/research/facial-cupping-evidence-review/
/research/facial-cupping-expert-opinions/
/research/facial-cupping-scientific-studies/
```

### Missing Pages (per PRD / internal links)
```
/benefits/ (hub)
/benefits/facial-cupping-benefits/
/benefits/before-after/
/benefits/lymphatic/
/benefits/circulation/
/benefits/puffiness/
/benefits/rejuvenation/
/benefits/wrinkles/
/benefits/jawline/
/benefits/results-timeline/
/benefits/how-long-to-work/
/safety/ (hub)
/safety/safety-guide/
/safety/contraindications/
/safety/damage-skin/
/safety/does-it-work/
/tools/ (hub)
/tools/best-facial-cupping-sets/
/tools/best-facial-cupping-tools/
/tools/silicone/
/tools/oils/
/oils/best-oil/
/comparisons/vs-gua-sha/
/comparisons/vs-jade-roller/
/glowcup/ (hub)
/glowcup/our-story/
/glowcup/product-standards/
/glowcup/partnership/
/glowcup/contact/
```

---

*Audit performed against local build (`dist/`) on June 29, 2026. Real performance metrics, security headers, and server-side SEO factors cannot be assessed until the site is deployed. Recommend re-audit post-launch with PageSpeed Insights, Google Search Console, and CrUX field data.*
