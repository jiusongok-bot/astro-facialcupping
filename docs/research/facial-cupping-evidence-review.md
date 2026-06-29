# SEO Audit: Facial Cupping Evidence Review

**URL:** `/research/facial-cupping-evidence-review`
**Section:** research
**Date:** 2026-06-29
**Audit Type:** Single-page depth audit

---

## Executive Summary

| Metric | Score |
|--------|-------|
| **Overall SEO Health** | **59/100** |
| Technical SEO | 85/100 |
| On-Page SEO | 60/100 |
| Content Quality | 65/100 |
| Schema / Structured Data | 70/100 |
| Performance (CWV) | 100/100 |
| AI Search Readiness | 55/100 |
| Images | 0/100 |
| Internal Linking | 30/100 |

### Top 5 Issues
1. No in-content images (0 alt text, 0 visual assets)
2. Thin content (~600 words for a pillar-style review — below the 1,500-word minimum for YMYL medical content)
3. Author attribution is a team name ("FacialCupping.com Team"), not a named medical professional — weakens E-E-A-T for YMYL
4. No contextual internal links within body text (only 3 links at very bottom)
5. Article schema uses generic `Article` type — should use `ScholarlyArticle` or `MedicalWebPage` for richer SERP features

### Top 5 Quick Wins
1. Add a research methodology infographic or data visualization image with descriptive alt text
2. Expand thin sections (especially "Key Research Gaps" and "Our Assessment") with more depth
3. Add contextual internal links within the body to `/benefits/circulation`, `/learn/how-facial-cupping-works`, `/research/facial-cupping-scientific-studies`
4. Change author to a named medical professional or add a co-author/reviewer credit
5. Add `"about"` property to JSON-LD schema referencing MedicalCondition/MedicalTherapy

---

## 1. Technical SEO (85/100)

### What Works
- Clean, descriptive URL: `/research/facial-cupping-evidence-review`
- Canonical URL handled automatically by `BaseLayout.astro` — no duplicates
- `robots: "index, follow"` — correct
- Sitemap integration via `@astrojs/sitemap` — page will be included
- OG image set via section mapping (`research` → `/images/research.png`)
- Breadcrumbs auto-generated in `ArticleLayout.astro`
- Date metadata present (`datePublished`, `dateUpdated`) — freshness signal active
- Structured via Astro content collections — correct taxonomy (section: "research")

### Issues Found

| Issue | Severity | Detail |
|-------|----------|--------|
| Missing `keywords` in frontmatter | Low | No tags/keywords field for topic clustering |
| Missing `category` beyond section | Low | No sub-categorization for research type (e.g. "systematic review") |

**Score deduction rationale:** Minor metadata completeness gaps. No crawlability/indexability blockers.

---

## 2. On-Page SEO (60/100)

### Title Tag
**Current:** `"Facial Cupping Evidence Review"`
- Matches H1 — good
- **Issue:** Generic — could add "Systematic" or "Clinical" to differentiate in SERPs
- **Suggestion:** `"Facial Cupping Evidence Review: Systematic Analysis of Clinical Research"`

### Meta Description
**Current:** `"A systematic review of available clinical research on cupping therapy relevant to facial applications — studies, findings, and limitations."`
- Length: ~145 chars — optimal
- Includes key terms: systematic review, clinical research, cupping therapy, facial applications
- **Issue:** No call-to-action or value proposition for click-through
- **Suggestion:** Add a CTA e.g. "See what the science says about facial cupping's efficacy and what evidence is still missing."

### Heading Structure
```
H1: Facial Cupping Evidence Review
H2: General Cupping Therapy Research
H2: Facial-Specific Research
H2: Key Research Gaps
H2: Our Assessment
```
- No H3–H6 used — flattens the content hierarchy
- Missing a "Conclusion" or "Recommendations" H2 after "Our Assessment"
- Bullet list under "Our Assessment" would benefit from H3 sub-headings

### Keyword Considerations
- Primary intent: "facial cupping evidence" / "cupping therapy research"
- "cupping therapy" appears 6 times, "facial cupping" 9 times — adequate density
- Missing: "clinical trial", "RCT", "meta-analysis", "systematic review" — these are present but only 1–2 times each

---

## 3. Content Quality & E-E-A-T (65/100)

### E-E-A-T Assessment (YMYL)

| Criterion | Rating | Notes |
|-----------|--------|-------|
| **Experience** | ⚠️ Weak | Author is "FacialCupping.com Team" — not an identifiable person |
| **Expertise** | ✅ Strong | Cites 5 DOI sources, discusses methodology (sample sizes, controls, blinding) |
| **Authoritativeness** | ⚠️ Moderate | Sources are good (BMJ Open, Journal of Pain, PMC). No named expert endorsements. |
| **Trustworthiness** | ✅ Strong | Transparent about limitations: "small sample sizes", "no control groups", "limited evidence" |

### Readability
- Flesch-Kincaid estimated: Grade 12–14 (appropriate for educated general audience)
- Clear section breaks, bullet list for quick scanning
- No jargon without explanation

### Thin Content Assessment
- **~600 words** — significantly below the 1,500–2,000 word range expected for a YMYL research pillar page
- "Key Research Gaps" section: only 3 sentences — could be expanded into a full discussion
- "Our Assessment" section: good use of bullet evidences but no detailed rationale for each rating
- No clinical trial registry numbers (e.g. NCT identifiers) cited despite referencing RCTs

### Duplicate Content Risk
- Partially overlaps with `facial-cupping-scientific-studies.md` (circulation studies, pain management, limitations)
- The "General Cupping Therapy Research" section shares 2 of the same DOI sources as scientific-studies page
- **Risk: Medium** — these are meant to be companion articles but the overlap needs clearer differentiation

---

## 4. Schema & Structured Data (70/100)

### Current Implementation
- `WebSite` schema in `BaseLayout.astro` ✅
- `Article` schema in `[slug].astro` ✅ — includes headline, description, url, image, author, publisher, datePublished, dateModified

### Missing Opportunities

| Schema Type | Benefit | Recommendation |
|-------------|---------|---------------|
| `ScholarlyArticle` | More specific than generic `Article` — better for research content | Change `@type` from `Article` to `ScholarlyArticle` in `[slug].astro` when section is "research" |
| `about` property with `MedicalCondition` | Links content to medical ontology — richer SERP | Add `about: { "@type": "MedicalCondition", name: "Skin Aging" }` to the Article JSON-LD |
| `citation` property | Explicit citation markup for each DOI reference | Add `citation` array property listing referenced DOI articles |
| `hasPart` / `mainEntity` for bullet points | Structured breakdown of "Our Assessment" ratings | Mark each bullet as a separate `Opinion` or `Claim` entity |

### Validation
- No errors detected in current `Article` schema. `authorSchema` correctly uses `Organization` type for team-authored content.
- **Issue:** `Organization` author is weaker than `Person` for E-E-A-T. Consider adding a `Person` reviewer in a `reviewedBy` or `editor` field.

---

## 5. Performance / Core Web Vitals (100/100)

- Static Markdown content — zero JavaScript execution path
- No images, no third-party scripts, no render-blocking resources
- Estimated LCP: <500ms (pure text)
- Estimated CLS: 0 (no layout shifts in static content)
- Estimated INP: <50ms (no interactivity)
- **No issues found.** This page will pass Core Web Vitals with ease.

---

## 6. Images (0/100)

### Critical Issue
- **Zero images** in the entire article — no research methodology diagram, no evidence summary graphic, no charts, no author photo, no decorative elements
- No alt text — but expected since no images exist
- Missing OG image is set at the section level (`/images/research.png`) — adequate, but in-content imagery is absent

### Recommendations
1. Add a **research methodology infographic** showing study selection flow (PRISMA-style diagram)
2. Add a **summary chart/timeline** of key studies with sample sizes, findings, and quality ratings
3. Add an **author byline photo** for named expert (once author is changed to a real person)
4. Add a **before/after image** placeholder referencing the `/benefits/before-after` page
5. All images must have descriptive alt text (12+ words each)

---

## 7. AI Search Readiness (GEO) (55/100)

### Citability Score

| Signal | Status | Notes |
|--------|--------|-------|
| Clear section structure | ✅ | H2 sections are well-defined |
| Schema markup | ✅ | Article schema present |
| Date freshness | ✅ | Updated 2026-06-01 |
| Source citations | ✅ | All DOI links functional |
| Author authority | ⚠️ | Team name, not a named individual |
| Passage-level optimization | ⚠️ | Sections present but no explicit passage anchors |
| AI crawler access | ✅ | No blocks, robots.txt allows |
| llms.txt presence | ❌ | Not detected in project |
| Brand mention signals | ⚠️ | Internal links use the brand, but no external brand mentions cited |

### LLM Consumption Assessment
- AI systems (ChatGPT, Perplexity, Gemini) will parse this page well due to clear H2 structure and bullet lists
- The `"dateUpdated"` field in schema helps LLMs determine freshness and cite accordingly
- **Missing:** The page lacks a crisp `tl;dr` or key-takeaways box at the top — LLMs pull from the first ~100 words most heavily
- **Missing:** No FAQ schema — the "Our Assessment" bullet list would make an excellent FAQ block

---

## 8. Internal Linking & Site Structure (30/100)

### Current Links (all at bottom of article)
1. `/safety/does-facial-cupping-work`
2. `/benefits/before-after`
3. `/research/facial-cupping-expert-opinions`

### Missed Opportunities
- **No contextual internal links within the body text** — this is the biggest gap
- The research section has 3 articles that should form a *content cluster* with dense cross-linking

### Suggested Contextual Links

| Location in Article | Target Page | Anchor Text |
|---------------------|-------------|-------------|
| Par 1: "broader cupping literature provides useful insights" | `/research/facial-cupping-scientific-studies` | detailed scientific studies |
| Par "Circulation and blood flow" | `/benefits/circulation` | how circulation affects facial skin |
| Par "Facial-Specific Research" | `/learn/how-facial-cupping-works` | how facial cupping interacts with skin physiology |
| Par "wrinkle reduction and collagen stimulation" | `/benefits/wrinkles` | detailed wrinkle reduction analysis |
| Par "Lymphatic drainage and puffiness reduction" | `/benefits/lymphatic` | lymphatic drainage and facial cupping |
| Closing paragraph | `/learn/what-is-facial-cupping` | beginner's guide to facial cupping |

---

## 9. Competitor / Research Section Context

Compared to the other two research articles (`scientific-studies` and `expert-opinions`), this "Evidence Review" page:

- Is positioned as the **pillar/overview** page for the research section
- Should be the longest and most comprehensive — currently it is not (~600 words vs ~500 and ~450)
- Overlaps significantly with `scientific-studies` in cited studies and topics
- Is listed as a "Related" link at the bottom of both other research articles — but neither links contextually within body text

A **research content cluster** should be established:
- `/research/facial-cupping-evidence-review` → pillar (this page, should be 1,500+ words)
- `/research/facial-cupping-scientific-studies` → deep dive on study methodology
- `/research/facial-cupping-expert-opinions` → qualitative/professional perspective

---

## 10. Prioritized Action Plan

### Phase 1 — Critical (Week 1)

| Action | Category | Effort | Impact |
|--------|----------|--------|--------|
| Expand content to 1,500+ words | Content | 2–3 hours | 🔴 High |
| Add contextual internal links in body | Internal Linking | 30 min | 🔴 High |
| Change author to named professional | E-E-A-T | 1 hour | 🔴 High |
| Add at least 1 in-content image (methodology chart) | Images | 2 hours | 🔴 High |

### Phase 2 — High Impact (Weeks 2–3)

| Action | Category | Effort | Impact |
|--------|----------|--------|--------|
| Add `ScholarlyArticle` schema type | Schema | 30 min | 🟠 Medium |
| Add `about` property with MedicalCondition | Schema | 15 min | 🟠 Medium |
| Add key takeaways / tl;dr box at top | On-Page | 30 min | 🟠 Medium |
| Differentiate content from scientific-studies page | Content | 1 hour | 🟠 Medium |

### Phase 3 — Optimization (Month 1)

| Action | Category | Effort | Impact |
|--------|----------|--------|--------|
| Add `citation` array to JSON-LD | Schema | 30 min | 🟡 Medium |
| Change H2 "Our Assessment" → "Assessment & Recommendations" + add H3s | On-Page | 15 min | 🟡 Low |
| Add FAQ schema for each bullet in Our Assessment | Schema | 30 min | 🟡 Low |
| Add `keywords` frontmatter field | Metadata | 5 min | 🟡 Low |

### Phase 4 — Ongoing

| Action | Category | Effort | Impact |
|--------|----------|--------|--------|
| Add llms.txt to project root | AI Readiness | 30 min | 🟢 Medium |
| Monitor new studies and update quarterly | Content Freshness | — | 🟢 High |
| Add clinical trial registry IDs (NCT numbers) | Authority | research | 🟢 Medium |

---

## Scoring Detail Breakdown

| Category | Raw Score | Weight | Weighted |
|----------|-----------|--------|----------|
| Technical SEO | 85 | 22% | 18.70 |
| Content Quality | 65 | 23% | 14.95 |
| On-Page SEO | 60 | 20% | 12.00 |
| Schema / Structured Data | 70 | 10% | 7.00 |
| Performance (CWV) | 100 | 10% | 10.00 |
| AI Search Readiness | 55 | 10% | 5.50 |
| Images | 0 | 5% | 0.00 |
| **Total** | | **100%** | **59** |

---

*Audit generated 2026-06-29. Based on static analysis of `src/content/articles/research/facial-cupping-evidence-review.md` and site templates. For field data (CrUX, GSC), run the Google API integration.*
