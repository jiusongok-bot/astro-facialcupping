# SEO Audit: `/about/review-process`

**URL:** `https://facialcupping.com/about/review-process`
**File:** `src/content/articles/about/review-process.md`
**Date:** 2026-06-29

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **SEO Health Score** | **72/100** |
| **Page Type** | About / Trust-building |
| **Content Words** | ~650 |
| **Indexable** | Yes |
| **Canonical URL** | https://facialcupping.com/about/review-process |

This page serves a critical trust-building function — it explains how content is reviewed and fact-checked, which directly supports **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness). Google's quality rater guidelines place heavy weight on transparent review processes for health/medical content (Your Money or Your Life pages). The page is fundamentally sound but has several missed optimization opportunities.

---

## Category Scores

### 1. On-Page SEO — 65/100

| Element | Status | Issue |
|---------|--------|-------|
| Title tag | OK | "How We Review Facial Cupping Content \| FacialCupping.com" — clear, keyword-inclusive |
| Meta description | **WARNING** | "Our content review and fact-checking process." — only 45 chars (should be 120–158) |
| H1 | OK | Matches title tag without the brand suffix — good |
| H2 hierarchy | OK | 6 H2s, logical flow: Research → Writing → Review → Update → Correction → Who Reviews |
| Image alt text | N/A | No images on page |
| Internal links | **MISSING** | Zero internal links. No cross-reference to `/about/editorial`, `/about/mission`, or `/about/contact` |
| External links | **MISSING** | Cites PubMed, Google Scholar, Cochrane Library in text but does not link to any |

**Recommendations:**
- Expand meta description to 120–158 chars, e.g.: "Learn how FacialCupping.com reviews and fact-checks all health content. Our structured process covers research, peer review, updates, and corrections."
- Add internal links to related about pages (`/about/editorial`, `/about/mission`, `/about/contact`)
- Add external links to PubMed, Google Scholar, and Cochrane Library where mentioned
- Consider adding a table of contents anchor links for long-scrolling sections

---

### 2. Content Quality & E-E-A-T — 80/100

| Criteria | Status | Notes |
|----------|--------|-------|
| Experience | OK | Mentions named contributors with real credentials (Sarah Chen, Licensed Esthetician; James Liu, TCM Practitioner) |
| Expertise | **PARTIAL** | No specific author listed in frontmatter — uses default "FacialCupping.com Team" |
| Authoritativeness | OK | Describes structured review process, source verification, correction log |
| Trustworthiness | OK | Correction process, limitation disclosure, benefit-risk language mentioned |
| Readability | OK | Plain language, clear section breaks, no jargon without explanation |
| Content depth | **WARNING** | ~650 words — functional but thin for a page that needs to inspire trust. Compare to mission.md (~580 words) which is similarly short |

**Recommendations:**
- Set explicit `author`, `datePublished`, and `dateUpdated` in frontmatter to avoid defaults
- Add named citations / links to the review protocol or editorial policy
- Expand content to 1,000+ words with concrete examples of how reviews changed an article
- Add a "Review Checklist" or visual of the review workflow
- Add credentials / bios of the review team members (expand from just names)

---

### 3. Structured Data (JSON-LD) — 70/100

| Schema | Status | Notes |
|--------|--------|-------|
| `WebSite` | OK | Injected by BaseLayout |
| `Article` | OK | Injected by `[slug].astro` |
| `BreadcrumbList` | OK | Injected by `Breadcrumb.astro` |
| `AboutPage` | **MISSING** | This is an about/process page, would benefit from `@type: AboutPage` or `WebPage` |
| `Person` for author | **MISSING** | Uses `Organization` as default since no author is set |

**Recommendations:**
- Add `datePublished` and `author` frontmatter so JSON-LD emits a real Person author rather than Organization default
- The Auto-generated `datePublished` ("2026-01-01") and `dateModified` (same, since no `dateUpdated` set) produce misleading timestamps in structured data
- Consider `@type: AboutPage` schema for clearer semantic meaning

---

### 4. Technical SEO — 85/100

| Element | Status | Notes |
|---------|--------|-------|
| robots meta | OK | `index, follow` (default from BaseLayout) |
| canonical URL | OK | `https://facialcupping.com/about/review-process` |
| sitemap inclusion | OK | Auto-included via `@astrojs/sitemap` (status is `published`) |
| page speed | OK | Static Astro page, no client JS |
| mobile responsiveness | OK | Tailwind + responsive layout |
| viewport | OK | `width=device-width, initial-scale=1.0` |
| HTML lang | OK | `en` |
| Open Graph | OK | Title, description, URL, type, image all present |
| Twitter Card | **MINOR** | `summary_large_image` set, but no explicit `twitter:image` (falls back to OG image) |

No technical blockers. The page is a static Astro `.md` file rendered via `[slug].astro` — zero JavaScript, fast to load.

---

### 5. Performance (CWV) — 90/100

- **LCP:** Very likely excellent (static page, no images, minimal CSS)
- **INP:** No interactive elements — score will be near-perfect
- **CLS:** Stable layout (no dynamic content or images without dimensions)
- **JS:** 0 KB client-side JavaScript
- **CSS:** Shared global stylesheet only

No performance concerns.

---

### 6. AI Search Readiness (GEO) — 60/100

| Signal | Status | Notes |
|--------|--------|-------|
| Citability | **PARTIAL** | Clear process description is quotable, but lacks specific stats or verifiable claims |
| Passage structure | OK | Well-defined H2 sections; AI crawlers can parse |
| Author authority | **WEAK** | No individual author; "Team" authorship reduces citation likelihood in AI responses |
| Date freshness | **WEAK** | Default dates do not signal freshness to AI crawlers |
| llms.txt | N/A | Site-wide concern, not page-specific |
| Brand mention signals | **MINOR** | No internal/external links pointing to this page as authority signal |

**Recommendations:**
- Set real dates so AI crawlers see fresh, time-stamped content
- Add explicit author bylines to increase AI citation likelihood
- Cite specific studies with PMID/DOI links to boost verifiability
- Add a "Last reviewed" badge with a real date

---

### 7. Images — N/A (No images)

The page contains no images. This is acceptable for a process page, but adding a visual workflow diagram could improve engagement and reduce bounce rate.

---

## Detailed Findings

### Critical (0)

None.

### High (2)

| # | Finding | Recommendation |
|---|---------|---------------|
| H1 | No author, dates set in frontmatter — defaults produce stale timestamps | Add `author: "Sarah Chen, Licensed Esthetician"`, `datePublished`, and `dateUpdated` to frontmatter |
| H2 | Meta description is too short (45 chars) | Expand to 120–158 chars with details on the 5-phase review process |

### Medium (3)

| # | Finding | Recommendation |
|---|---------|---------------|
| M1 | No internal links to related about pages | Link to `/about/editorial`, `/about/mission`, `/about/contact` |
| M2 | No external citation links to PubMed, Google Scholar, Cochrane | Add hyperlinks where these resources are mentioned |
| M3 | Content is relatively thin (~650 words) | Expand to 1,000+ words with concrete examples, team bios, review criteria details |

### Low (3)

| # | Finding | Recommendation |
|---|---------|---------------|
| L1 | No H3 sub-headings within the 6 H2 sections | Add sub-sections for readability and featured snippet targeting |
| L2 | No visual elements (diagram, icon, workflow) | Add a simple review process flowchart or icon set |
| L3 | `twitter:image` not explicitly set (only OG) | Add twitter:image meta tag for complete Twitter Card rendering |

---

## Action Plan

| Priority | Task | Effort | Impact |
|----------|------|--------|--------|
| **High** | Set author, datePublished, dateUpdated in frontmatter | 5 min | High — fixes JSON-LD, freshness, E-E-A-T |
| **High** | Expand meta description to 120–158 chars | 5 min | High — improves CTR from SERP |
| **Medium** | Add internal links to editorial, mission, contact pages | 10 min | Medium — improves site structure, reduces bounce |
| **Medium** | Add external citation links (PubMed, Google Scholar, Cochrane) | 15 min | Medium — boosts credibility signals |
| **Medium** | Expand content with concrete examples and review criteria details | 1–2 hr | Medium — strengthens E-E-A-T |
| **Low** | Add review workflow diagram | 30 min | Low — visual engagement |
| **Low** | Add H3 sub-headings to long sections | 15 min | Low — readability improvement |

---

## Quick Wins (Implement in <30 min)

1. `src/content/articles/about/review-process.md`: Add frontmatter fields — `author: "FacialCupping.com Team"` (or a named person), `datePublished: "2026-03-15"`, `dateUpdated: "2026-06-01"`
2. Expand description in frontmatter to: "Learn how FacialCupping.com reviews and fact-checks all health content. Our 5-phase process covers research, writing, peer review, updates, and corrections."
3. Add internal links to `/about/editorial` and `/about/mission` in the body text
4. Add hyperlinks to `[PubMed](https://pubmed.ncbi.nlm.nih.gov/)`, `[Google Scholar](https://scholar.google.com/)`, `[Cochrane Library](https://www.cochranelibrary.com/)`

---

## Final Recommendations Summary

This is a solid trust-building page that already serves its core E-E-A-T function. The biggest gaps are **frontmatter metadata** (missing author/dates), **meta description length**, and **internal linking**. All fixes are low-effort with meaningful SEO impact. The page ranks well technically but would benefit from expanded content to fully satisfy the informational intent of users looking for publication trust signals — a key consideration for YMYL (Your Money or Your Life) content in Google's evaluation framework.
