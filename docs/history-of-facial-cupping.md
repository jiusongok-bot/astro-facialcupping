# Article SEO Audit: History of Facial Cupping

**URL:** `https://facialcupping.com/learn/history-of-facial-cupping/`
**Source:** `src/content/articles/learn/history-of-facial-cupping.md`
**Template:** `src/pages/[section]/[slug].astro` → `ArticleLayout.astro` → `BaseLayout.astro`
**Date:** June 27, 2026

---

## Executive Summary

**Article SEO Score: 58/100**

This article provides a concise historical overview of cupping therapy across four civilizations. It benefits from strong technical SEO (schema, meta tags, canonicals) and a named expert author, but is held back by critically thin content (~350 words), zero external citations, no images, and poor internal linking (only 1 inbound link).

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 85% | 22% | 18.7 |
| Content Quality & E-E-A-T | 40% | 23% | 9.2 |
| On-Page SEO | 80% | 20% | 16.0 |
| Schema / Structured Data | 60% | 10% | 6.0 |
| Performance (CWV) | 85% | 10% | 8.5 |
| AI Search Readiness | 35% | 10% | 3.5 |
| Images | 0% | 5% | 0.0 |
| **Total** | | **100%** | **58.4** |

### Top Issues

| # | Issue | Severity | Category |
|---|-------|----------|----------|
| 1 | Article is critically thin (~350 words) for a 3,000-year historical topic | High | Content |
| 2 | Zero external citations or outbound links — no sources for any historical claim | High | Content |
| 3 | Zero images on a visual/historical topic (timeline, artifacts, maps) | High | Images |
| 4 | Only 1 inbound internal link — largely orphaned in the link graph | High | On-Page |
| 5 | Missing BreadcrumbList schema (template-level gap) | Medium | Schema |
| 6 | No contextual cross-section links (only links within /learn/) | Medium | On-Page |
| 7 | Author name and credentials not displayed on page despite being in frontmatter | Medium | Content |
| 8 | No llms.txt for AI crawler discoverability | Medium | GEO |

### Quick Wins

| # | Action | Effort |
|---|--------|--------|
| 1 | Display existing author ("James Liu, TCM Practitioner") and dates in ArticleLayout | 15 min |
| 2 | Add inbound links from 2+ related articles (what-is-facial-cupping, safety-guide) | 15 min |
| 3 | Add a basic timeline infographic or table | 30 min |
| 4 | Add BreadcrumbList JSON-LD site-wide | 30 min |
| 5 | Add external citations linking to historical sources (Ebers Papyrus, Hippocrates texts) | 30 min |

---

## 1. Technical SEO (85/100)

### What's Working

- **Canonical URL**: Auto-generated from `Astro.site + Astro.url.pathname`
- **Robots meta**: `index, follow`
- **Clean URL**: `/learn/history-of-facial-cupping/`
- **HTML lang**: `lang="en"`
- **Viewport**: Proper `<meta name="viewport">`
- **SSG**: Pre-built static HTML, minimal TTFB
- **Sitemap**: Included automatically via `@astrojs/sitemap`

### Issues

| Issue | Severity | Detail | Fix |
|-------|----------|--------|-----|
| No BreadcrumbList schema | Medium | Visual breadcrumbs exist in HTML but no JSON-LD | Add BreadcrumbList to ArticleLayout |
| Article schema `image` uses relative path | Low | Verify absolute URL resolution in schema | Ensure `https://facialcupping.com${ogImage}` |
| No hreflang | Info | Single-language site | Add self-referencing `hreflang="en"` |

---

## 2. Content Quality & E-E-A-T (40/100)

**Word count: ~350 (body text only) — critically thin**

This article covers 3,000+ years of history across 4 civilizations in ~350 words. Each civilization gets 1-2 sentences. There is no depth, no critical analysis, no discussion of how techniques differed, and no geographical/spread context.

### E-E-A-T Assessment

| Factor | Score | Assessment |
|--------|-------|------------|
| **Experience** | 2/25 | No personal experience shared. No first-hand account or clinical anecdotes. |
| **Expertise** | 8/25 | Named author (TCM Practitioner) is a strong signal — but credentials NOT displayed. Content is surface-level. |
| **Authoritativeness** | 3/25 | Zero external citations. No links to historical sources, museum collections, or academic papers. |
| **Trustworthiness** | 7/25 | Claims are accurate but unverifiable. No sources, no process disclosure. |
| **E-E-A-T Total** | **20/100** | |

### Content Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| **C-01: Critically thin content** | High | ~350 words insufficient. Should be 800-1,200 words. Missing: specific dynasties, key figures, regional variations, tool evolution. |
| **C-02: Zero external citations** | High | Ebers Papyrus, Hippocrates, and Islamic texts mentioned but never linked. No PubMed, Wikipedia, or academic references. |
| **C-03: No author display** | Medium | `entry.data.author` = "James Liu, TCM Practitioner" but never rendered on page. |
| **C-04: Modern coverage is weak** | Medium | 2010s-2017 gets 1 short paragraph. Missing key influencers, clinical studies, market data. |
| **C-05: No publication date visible** | Medium | `datePublished` and `dateUpdated` exist in frontmatter and schema but not displayed to readers. |
| **C-06: No Key Takeaways summary** | Low | No summary box or key points section for AI extraction. |

### Readability
- **Flesch-Kincaid**: ~60-70 — good, accessible language
- **Structure**: Clear H2 headings, short paragraphs, bold key terms
- **No complex jargon**: Appropriate for general audience

---

## 3. On-Page SEO (80/100)

### Title Tag
`History of Facial Cupping | FacialCupping.com` — ✅ Concise, keyword-rich, ~46 chars

### Meta Description
```
Tracing the origins of cupping therapy from ancient civilizations 
to modern facial applications — a 3,000-year journey.
```
✅ 140 characters, includes "cupping therapy," "ancient civilizations," "modern facial applications"

### Heading Structure
```
H1: History of Facial Cupping
├── H2: Ancient Origins
├── H2: The Transition to Facial Use
└── H2: Modern Recognition
```
- ✅ Single H1, correct hierarchy
- ⚠️ No H3 subheadings — 4 civilizations collapsed into one H2

### Open Graph & Twitter

| Tag | Present | Value |
|-----|---------|-------|
| `og:title` | ✅ | `History of Facial Cupping` |
| `og:description` | ✅ | From frontmatter |
| `og:type` | ✅ | `article` |
| `og:url` | ✅ | `https://facialcupping.com/learn/history-of-facial-cupping` |
| `og:image` | ✅ | `/images/learn.png` (section-level default) |
| `twitter:card` | ✅ | `summary_large_image` |
| `twitter:title` | ✅ | Same as og:title |
| `twitter:description` | ✅ | Same as og:description |
| `twitter:image` | ❌ | Missing — not set in any template |

### Internal Linking

**Outbound from this article (3 links, all within /learn/):**
| Link Text | Target |
|-----------|--------|
| What Is Facial Cupping | `/learn/what-is-facial-cupping` |
| How It Works | `/learn/how-facial-cupping-works` |
| Facial Cupping Therapy | `/learn/facial-cupping-therapy` |

> ⚠️ These 3 links duplicate the template-generated related cards at the bottom of the page.

**Inbound to this article:**
| Source | Context |
|--------|---------|
| `/learn/facial-cupping-therapy` | **Related:** ... \| History of Facial Cupping |

> ❌ **Only 1 inbound link** — largely orphaned. `/learn/what-is-facial-cupping` discusses history but does not link here.

**Cross-section links**: Zero. No connections to `/benefits/`, `/research/`, `/safety/`, or `/how-to/`.

### Issues Summary

| Issue | Severity | Recommendation |
|-------|----------|---------------|
| Only 1 inbound link — orphaned | High | Add links from what-is-facial-cupping, safety-guide, evidence |
| Duplicate related links | Medium | Remove inline Related section (template handles it) |
| No cross-section outbound links | Medium | Add links to /benefits/, /research/, /safety/ |
| twitter:image missing | Medium | Add `<meta name="twitter:image">` to BaseLayout |
| No H3 subheadings | Low | Split Ancient Origins into H3 per civilization |

---

## 4. Schema & Structured Data (60/100)

### Current JSON-LD (generated by template)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "History of Facial Cupping",
  "description": "Tracing the origins of cupping therapy...",
  "url": "https://facialcupping.com/learn/history-of-facial-cupping",
  "image": "https://facialcupping.com/images/learn.png",
  "author": { "@type": "Person", "name": "James Liu, TCM Practitioner" },
  "publisher": { "@type": "Organization", "name": "FacialCupping.com" },
  "datePublished": "2026-01-10",
  "dateModified": "2026-06-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." }
}
```

### ✅ Working
- All critical Article schema fields present
- Author typed as Person (not generic Organization)
- `dateModified` set from `dateUpdated` frontmatter
- `mainEntityOfPage` correctly set

### ❌ Missing / Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| No BreadcrumbList schema | Medium | HTML breadcrumbs exist site-wide but no JSON-LD |
| No standalone Organization schema | Low | Only appears as publisher in Article, not as standalone markup |
| WebSite schema lacks SearchAction | Low | No sitemaps search box feature |

---

## 5. Performance / CWV (85/100)

### Estimated Scores (lab-only, no CrUX data)

| Metric | Estimated | Rating |
|--------|-----------|--------|
| LCP | < 1.0s | ✅ Good |
| INP | < 50ms | ✅ Good |
| CLS | ~0.05 | ✅ Good |

**Why this article scores well:**
- Zero images — no image loading to slow LCP or cause CLS
- Minimal JS (only shared MobileMenu component)
- SSG — pre-built HTML served instantly
- No third-party scripts, trackers, or ads

---

## 6. AI Search Readiness / GEO (35/100)

### AI Citation Readiness Score: 26/100

| Criteria | Score | Notes |
|----------|-------|-------|
| Quotable facts/statistics | 2/20 | Only 2 numeric facts (3,000 years, 1550 BCE) |
| Structured data | 6/15 | Article schema present, no BreadcrumbList |
| Heading hierarchy | 10/15 | Clean H1→H2, no H3s |
| Q&A / direct answer format | 3/15 | Not formatted for AI extraction |
| Summary / key takeaways | 0/10 | No summary section |
| External citations | 0/15 | Zero outbound links for verification |
| Author authority signals | 5/10 | Name in schema but no bio or external profiles |
| llms.txt | 0/5 | Not created at domain level |

### Key Gaps

| Issue | Severity | Recommendation |
|-------|----------|---------------|
| No quotable data points | High | Add statistics, specific dates, percentages per civilization |
| Zero external citations | High | Add Wikipedia and academic links for each historical claim |
| No llms.txt | Medium | Create `public/llms.txt` for AI crawler guidance |
| No summary section | Medium | Add "Key Takeaways" bullet list at top |
| No author authority signals | Low | Add author bio with external profile links |

---

## 7. Images (0/100)

### Current State
**Zero images** in the article. No diagrams, infographics, or charts.

### Impact
A historical article is the most image-reliant content type. Missing visuals:
- Ancient cupping tools (animal horns, bamboo cups, bronze cups)
- Historical timeline infographic
- Geographical spread map
- Modern silicone cup comparison
- Historical illustrations or museum artifact photos

### Recommendations

| Priority | Action | Impact |
|----------|--------|--------|
| High | Timeline infographic: 1550 BCE → 400 BCE → 300 BCE → 600 CE → 2010s | Visual engagement, shareability |
| High | Ancient cupping tools image: horn → bamboo → bronze → glass → silicone | Historical context |
| Medium | Unique OG image instead of generic /images/learn.png | Social sharing |
| Medium | Geographical spread map | Visual context |

---

## Action Plan

### Phase 1: Quick Wins (< 30 min each)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Display author name and dates in ArticleLayout (already in frontmatter) | 15 min | High |
| 2 | Add inbound link from /learn/what-is-facial-cupping (body already discusses history) | 15 min | Medium |
| 3 | Remove redundant inline related links that duplicate template cards | 5 min | Low |
| 4 | Add twitter:image meta tag to BaseLayout site-wide | 15 min | Medium |

### Phase 2: Content Expansion (Week 1)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 5 | Expand article from 350 to 800-1,200 words | 2h | High |
| 6 | Split Ancient Origins into H3 subsections per civilization | 30 min | Medium |
| 7 | Expand modern section with brands, studies, celebrity adoption, market data | 1h | Medium |
| 8 | Add Key Takeaways summary box at top for AI extractability | 15 min | Medium |

### Phase 3: Citations & Authority (Week 1-2)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 9 | Add external citations for Ebers Papyrus, Hippocrates, Islamic medicine | 1h | High |
| 10 | Create author bio for James Liu with credentials and external profile links | 30 min | High |
| 11 | Add cross-section links to /benefits/, /research/, /safety/ | 15 min | Medium |
| 12 | Add BreadcrumbList JSON-LD site-wide | 30 min | Medium |

### Phase 4: Visual & Schema (Week 2)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 13 | Add historical timeline infographic | 30 min | Medium |
| 14 | Add image of ancient cupping tools | 30 min | Medium |
| 15 | Create unique article OG image | 30 min | Low |
| 16 | Create llms.txt for AI crawler guidance | 30 min | Medium |

### Effort Summary

| Phase | Hours | Timeline |
|-------|-------|----------|
| Phase 1: Quick Wins | 0.8h | Day 1 |
| Phase 2: Content Expansion | 3.8h | Days 2-4 |
| Phase 3: Citations & Authority | 2.5h | Days 5-7 |
| Phase 4: Visual & Schema | 1.5h | Days 8-10 |
| **Total** | **~8.5h** | **~10 days** |

---

## Appendix: Rendered HTML Structure

```
<title>History of Facial Cupping | FacialCupping.com</title>
<meta name="description" content="Tracing the origins of cupping therapy...">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://facialcupping.com/learn/history-of-facial-cupping">
<meta property="og:title" content="History of Facial Cupping">
<meta property="og:description" content="Tracing the origins...">
<meta property="og:type" content="article">
<meta property="og:url" content="https://facialcupping.com/learn/history-of-facial-cupping">
<meta property="og:image" content="/images/learn.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="History of Facial Cupping">
<meta name="twitter:description" content="Tracing the origins...">

<!-- WebSite schema -->
<script type="application/ld+json">
{ "@type": "WebSite", "name": "FacialCupping.com", ... }
</script>

<!-- Article schema -->
<script type="application/ld+json">
{ "@type": "Article", "headline": "History of Facial Cupping", ... }
</script>

<nav>...11 section links...</nav>
<nav aria-label="Breadcrumb">
  <a href="/">Home</a> > <a href="/learn/">Learn</a> > History of Facial Cupping
</nav>
<article>
  <h1>History of Facial Cupping</h1>
  <!-- Content rendered from markdown -->
</article>
<div><!-- Template-generated related cards --></div>
```

---

## Priority Definitions

| Priority | Definition |
|----------|-----------|
| **Critical** | Blocks indexing or causes penalties (fix immediately) |
| **High** | Significantly impacts rankings (fix within 1 week) |
| **Medium** | Optimization opportunity (fix within 1 month) |
| **Low** | Nice to have (backlog) |
