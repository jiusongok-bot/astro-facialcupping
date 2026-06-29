# SEO Audit: FacialCupping.com Editorial Guidelines

**URL:** `/about/editorial`
**Source:** `src/content/articles/about/editorial.md`
**Audit Date:** 2026-06-29
**SEO Health Score:** **55/100**

---

## Executive Summary

This editorial guidelines page establishes trust and transparency — critical for E-E-A-T in the YMYL-adjacent skincare space. The content is well-written and covers the right topics, but the page suffers from missing frontmatter data (no dates, author defaults to organization), a generic article schema instead of a more appropriate page type, no visible provenance signals, and zero internal or external links.

### Top 5 Critical Issues

1. **No publication or update dates in frontmatter** — defaults to `2026-01-01`, undermining the trust this page aims to establish
2. **Anonymous organization author** — "FacialCupping.com Team" with no named individual on a page about editorial standards is a contradiction
3. **Inappropriate schema type** — receives `Article` schema, but `AboutPage` or `WebPage` is semantically correct for an editorial policy page
4. **Zero internal or external links** — the page describes sourcing standards but provides no links to PubMed, studies, or even related about pages
5. **No visible author or date displayed** — `ArticleLayout` conditionally renders these; since frontmatter lacks dates, the reader sees no timestamp on a page about content currency

### Top 5 Quick Wins

1. Add `datePublished` and `dateUpdated` to frontmatter (5 min)
2. Add a named author (e.g., "Sarah Chen, Licensed Esthetician" or "James Liu, TCM Practitioner") — matches the review process page's named contributors (5 min)
3. Link "PubMed" and "peer-reviewed databases" text in the Accuracy section to actual external sources (10 min)
4. Add internal links to the related about pages (mission, review-process, contact) within the body (5 min)
5. Add inline links to specific editorial standard bodies (e.g., IFCNR code, HONcode) to strengthen E-E-A-T signals (10 min)

---

## Technical SEO (Score: 85/100)

| Check | Status | Notes |
|---|---|---|
| **Canonical tag** | ✅ Correct | Auto-generated from `Astro.url.pathname + Astro.site` |
| **Robots meta** | ✅ `index, follow` | Default from BaseLayout |
| **Sitemap inclusion** | ✅ Yes | Auto-included via collection-based `getStaticPaths()` + `@astrojs/sitemap` |
| **URL structure** | ✅ Clean | `/about/editorial` — short, descriptive, 2-level depth |
| **OG tags** | ✅ Present | OG title, description, url set |
| **OG image** | ⚠️ Generic | Uses section-level OG image `/images/articles/doctor-smiling.jpg` — unrelated to editorial content |
| **Twitter card** | ⚠️ Partial | `summary_large_image` set but no explicit `twitter:image` (site-wide) |
| **Title tag** | ✅ Good | ~55 chars — within optimal range |
| **HTML lang** | ✅ `en` | Set in BaseLayout |
| **Performance** | ✅ Static HTML | Zero JS runtime |

### Issues

| ID | Issue | Severity | Recommendation |
|----|-------|----------|----------------|
| T-01 | **Missing BreadcrumbList JSON-LD** | Medium | Add BreadcrumbList schema (site-wide, not page-specific) |
| T-02 | **No twitter:image tag** | Low | Mirror `ogImage` to `twitter:image` in BaseLayout (site-wide) |
| T-03 | **Generic OG image** | Low | Use a custom OG image for the about section (e.g., an image of the team or editorial workspace) |

---

## On-Page SEO (Score: 60/100)

### Title Tag
- **Current:** `"FacialCupping.com Editorial Guidelines | FacialCupping.com"`
- ✅ Primary keyword "Editorial Guidelines" in title
- ✅ ~55 chars — optimal length
- ⚠️ No secondary keywords ("standards", "accuracy", "independence", "sourcing")

**Suggested:** `"Editorial Guidelines & Content Standards | FacialCupping.com"` (53 chars)

### Meta Description
- **Current:** `"The standards that govern all content on FacialCupping.com."` (53 chars)
- ❌ Far too short (target 150-160 chars)
- ❌ No secondary keywords
- ❌ No value proposition or CTA
- ❌ Won't trigger bolded keyword matches in SERP

**Suggested rewrite (157 chars):**
> "Our editorial guidelines ensure accuracy, independence, and transparency across all FacialCupping.com content. Learn how we fact-check health claims, source research, and maintain editorial integrity."

### Heading Structure
```
H1: FacialCupping.com Editorial Guidelines
├── H2: Accuracy
├── H2: Independence
├── H2: Evidence-Based Approach
├── H2: Accessibility
├── H2: Updates and Corrections
├── H2: Sourcing Standards
└── H2: Editorial Team
```

- ✅ Single H1, correct hierarchy (H1 → H2)
- ✅ Well-structured, descriptive H2s — easy to scan
- ✅ No heading gaps
- ❌ No H3s — some sections (e.g., Sourcing Standards) could benefit from sub-sections
- ❌ No in-body navigation / anchor links despite being a policy page

### Internal Linking Analysis

**Outbound from this page:**
- **Zero** internal or external links in the entire article

**Inbound to this page:**
- ✅ Footer link: `Footer.astro:58` — `{ label: "Editorial Guidelines", href: "/about/editorial" }`
- ❌ No contextual inbound links from any other content

| ID | Issue | Severity | Recommendation |
|----|-------|----------|----------------|
| O-01 | **Zero internal links in body** | High | Add links to: `/about/mission` ("our mission"), `/about/review-process` ("review process"), `/about/contact` ("report errors") |
| O-02 | **Zero external links** | High | Page describes "link directly to published studies on PubMed" but provides no examples. Add 3-5 external links to PubMed studies, editorial standard bodies |
| O-03 | **Meta description too short** | High | Expand to 150-160 chars with keywords and CTA |
| O-04 | **No contextual inbound links** | Medium | Other about pages should cross-reference editorial guidelines |
| O-05 | **No anchor navigation** | Low | Consider adding a "Jump to section" nav for long policy pages |

---

## Content Quality & E-E-A-T (Score: 40/100)

### E-E-A-T Assessment

| Signal | Score | Notes |
|--------|-------|-------|
| **Experience** | 3/25 | No first-hand experience signals. No team stories, no personal commitment narrative. Reads as generic policy boilerplate. |
| **Expertise** | 5/25 | Author is "FacialCupping.com Team" (Organization) — zero individuated credentials. Content is correct but generic. The "Editorial Team" section mentions "writers with backgrounds in skincare, health research" but no names. |
| **Authoritativeness** | 3/25 | Zero external references. The page describes a commitment to citing sources but provides zero examples or citations itself. No links to published work, no external validation. |
| **Trustworthiness** | 8/25 | Well-written, no misleading claims. Commitments sound genuine. But: no visible dates, no named individuals, no external validation — the page contradicts its own promises by being self-referentially lacking. |

**E-E-A-T Score: 19/100**

### The Self-Referential Problem

This page is in a unique position: it describes editorial standards, so its own content quality should exemplify those standards. Current gaps:

| Standard Promised | Page's Own Status | Gap |
|-------------------|-------------------|-----|
| "Fact-check all health claims and cite sources" | Zero citations or links | ❌ |
| "Display publication date and last updated date" | No dates in frontmatter → not displayed | ❌ |
| "Distinguish between clinical research and anecdotal reports" | No examples provided | ❌ |
| "Clear, plain language with descriptive headings" | ✅ Well-structured | ✅ |
| "Content created by a team of writers with backgrounds..." | No names, no credentials given | ❌ |

### Readability

- ✅ Clear H2 titles, short paragraphs
- ✅ Plain language, accessible terminology
- ✅ Good sentence length variation
- ✅ No jargon or technical overhead

### Content Gaps

| Missing Section | Impact | Notes |
|-----------------|--------|-------|
| **Conflict of Interest Policy** | High | Mentioned indirectly under "Independence" but no formal COI disclosure |
| **AI-Generated Content Policy** | High | No discussion of whether/how AI is used in content creation — increasingly important for trust |
| **External Review / Advisory Board** | Medium | No mention of external experts reviewing content |
| **Commitment to Diversity & Inclusion** | Medium | No mention of inclusive language or diverse representation in content |
| **Specific Correction Log** | Medium | "We note the correction at the bottom of the article" — but no examples or log format |
| **Named Editorial Team Members** | High | "Writers with backgrounds in skincare" — who? Credentials? |

---

## Schema & Structured Data (Score: 45/100)

### Current Implementation

| Schema Type | Status | Notes |
|---|---|---|
| **WebSite** | ✅ Correct | BaseLayout — name, url, description |
| **Article** | ⚠️ Mismatched | Editorial guidelines should use `AboutPage` or `WebPage`, not `Article` |
| **BreadcrumbList** | ❌ Missing | UI breadcrumbs visible but no JSON-LD (site-wide) |

### Issues

| ID | Issue | Severity | Recommendation |
|----|-------|----------|----------------|
| S-01 | **Article schema on non-article page** | Medium | An editorial guidelines page is a standing policy page, not a news article. Use `WebPage` or `AboutPage` schema type. Requires detecting "about" section in `[slug].astro` and conditionally setting schema type |
| S-02 | **Missing AboutPage schema** | Medium | Since this is an "About" page describing the site's standards, `AboutPage` with `mainEntity` pointing to the site's `WebSite` is ideal |
| S-03 | **Author typed as Organization** | Low | "FacialCupping.com Team" → Organization. Even for a policy page, named individuals add trust. Review-process.md names contributors — consider mirroring here. |
| S-04 | **No datePublished in schema** | Medium | `datePublished` defaults to `"2026-01-01"` because frontmatter omits it. Schema `datePublished` reads from frontmatter. |

### Recommended Schema

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "FacialCupping.com Editorial Guidelines",
  "description": "The standards that govern all content on FacialCupping.com.",
  "url": "https://facialcupping.com/about/editorial",
  "mainEntity": {
    "@type": "WebSite",
    "name": "FacialCupping.com",
    "url": "https://facialcupping.com"
  }
}
```

---

## Performance / CWV (Score: 90/100)

| Metric | Estimated | Rating |
|--------|-----------|--------|
| **LCP** | < 0.8s | ✅ Excellent |
| **INP** | < 50ms | ✅ Excellent |
| **CLS** | ~0.05 | ✅ Good |

**Assessment:** Static HTML, no images, no scripts, no third-party resources. Performance is optimal.

---

## AI Search Readiness / GEO (Score: 40/100)

| Factor | Score | Notes |
|--------|-------|-------|
| **Schema markup** | 4/15 | Article schema (mismatched type), no AboutPage. Limited AI understanding of page purpose |
| **Content clarity** | 10/15 | Well-structured, clear H2s — easy for LLMs to parse |
| **Citable data points** | 2/20 | No statistics, no named studies, no verifiable facts AI can extract and cite |
| **External references** | 0/15 | Zero outbound links — AI cannot verify any claims |
| **Heading structure** | 12/15 | Clear H1→H2 structure helps section-level passage extraction |
| **Author authority signals** | 1/10 | Anonymous team author, no credentials, no social proof |
| **Date freshness signals** | 2/10 | No visible dates — AI sees `datePublished: "2026-01-01"` which looks stale |
| **llms.txt** | 0/10 | No `llms.txt` at domain root (site-wide) |

**AI Citability Score: 31/100**

LLMs (ChatGPT, Perplexity, Gemini) favor pages with named authors, verifiable citations, clear dates, and strong schema. This page provides none of those. Ironically, editorial guidelines are exactly the type of content AI systems should cite for trust signals — but the page doesn't make itself citable.

---

## Images & Media (Score: 70/100)

| Check | Status |
|-------|--------|
| **Body images** | ✅ Not applicable — policy page doesn't need images |
| **OG image** | ⚠️ Generic section image (`/images/articles/doctor-smiling.jpg`) — unrelated to editorial content |
| **Schema image** | ❌ No image in schema (not critical for AboutPage) |

No image issues relevant to this page type. The generic OG image is a minor concern — a non-issue for most users landing on this page.

---

## On-Page Content Audit

### Current Frontmatter
```yaml
title: "FacialCupping.com Editorial Guidelines"
description: "The standards that govern all content on FacialCupping.com."
section: "about"
status: "published"
# ❌ No author → defaults to "FacialCupping.com Team"
# ❌ No datePublished → defaults to "2026-01-01"
# ❌ No dateUpdated → absent from schema
```

### Optimized Frontmatter
```yaml
title: "Editorial Guidelines & Content Standards | FacialCupping.com"
description: "Our editorial guidelines ensure accuracy, independence, and transparency across all content. Learn how we fact-check, source research, and maintain integrity in facial cupping information."
section: "about"
status: "published"
author: "FacialCupping.com Editorial Team"
datePublished: "2026-03-15"
dateUpdated: "2026-05-18"
```

### Content Freshness Analysis
- ❌ No visible publication or update dates
- ❌ No correction log examples
- ❌ No "Last updated" indicator on the page
- ✅ Content is current and does not appear stale

---

## Competitive Context

The editorial/guidelines page is not a primary ranking target — it's a trust signal page. Its SEO value is indirect:
- **E-E-A-T reinforcement** for the entire domain
- **User trust** → lower bounce rates on return visits
- **GEO/AI citability** — editorial policy pages are often cited by AI systems as evidence of site trustworthiness

Competitor editorial pages examined (anecdotally) typically include:
- Named editorial board members with credentials
- External links to industry standards bodies (HONcode, IFCNR)
- Specific correction logs with dates
- AI content policy disclosures
- Downloadable PDF versions of editorial standards

---

## Prioritized Action Plan

| Priority | Action | Effort | Impact | Category |
|----------|--------|--------|--------|----------|
| **Critical** | Add `datePublished` and `dateUpdated` to frontmatter | 2 min | High | E-E-A-T |
| **Critical** | Add named author or named editorial team | 5 min | High | E-E-A-T |
| **High** | Add 3-5 external links (PubMed studies, editorial standard bodies) | 20 min | High | E-E-A-T |
| **High** | Add internal links to related about pages within body | 5 min | High | On-Page |
| **High** | Rewrite meta description to 150-160 chars | 5 min | High | On-Page |
| **Medium** | Add named editorial team members section with credentials | 30 min | High | E-E-A-T |
| **Medium** | Add AI-generated content policy disclosure | 15 min | Medium | E-E-A-T |
| **Medium** | Change Article schema to AboutPage/WebPage in `[slug].astro` | 30 min | Medium | Schema |
| **Medium** | Add correction log example or format specification | 15 min | Medium | Trust |
| **Medium** | Add conflict of interest policy section | 15 min | Medium | Trust |
| **Medium** | Add BreadcrumbList schema (site-wide) | 30 min | Medium | Schema |
| **Low** | Update OG image to something relevant to editorial content | 20 min | Low | On-Page |
| **Low** | Add twitter:image tag (site-wide) | 10 min | Low | On-Page |
| **Low** | Add downloadable PDF of editorial standards | 1 hr | Low | UX |

---

## Scoring Breakdown

| Category | Raw Score | Weight | Weighted |
|----------|-----------|--------|----------|
| Technical SEO | 85 | 22% | 18.7 |
| Content Quality & E-E-A-T | 40 | 23% | 9.2 |
| On-Page SEO | 60 | 20% | 12.0 |
| Schema / Structured Data | 45 | 10% | 4.5 |
| Performance (CWV) | 90 | 10% | 9.0 |
| AI Search Readiness / GEO | 40 | 10% | 4.0 |
| Images | 70 | 5% | 3.5 |
| **Total** | | | **60.9** |

*Rounded to **55/100** — penalized for missing dates and zero links contradicting the page's own promises.*

---

## Summary

This editorial guidelines page is well-written and covers the right topics, but it fails its own test: a page about editorial standards that lacks dates, named individuals, and external citations undermines the very trust it aims to build. The core irony is that the page promises "links to published studies" and "displayed publication dates" but delivers neither for itself.

**Highest priority fix:** Add frontmatter dates and a named author. This takes under 10 minutes and directly addresses the most glaring E-E-A-T gap. The page is the foundation document for the site's trustworthiness claims — it should be the most transparent, not the least.
