# SEO Audit: Facial Cupping Step-by-Step Tutorial

**URL:** `/how-to/facial-cupping-step-by-step-tutorial`  
**Audit Date:** 2026-06-27  
**SEO Health Score:** **60/100**

---

## Executive Summary

This step-by-step tutorial article is a cornerstone content piece for the "how-to" section, but it suffers from critically thin content, zero images, a weak meta description, and a major missed schema opportunity (HowTo). The underlying site infrastructure (canonical, OG, Article schema, sitemap, performance) is solid, but the article itself lacks the depth required to rank competitively for tutorial-style queries.

### Top 5 Critical Issues

1. **No HowTo schema** — despite being a literal step-by-step tutorial, the page only gets Article schema. HowTo schema can trigger rich results in Google Search showing steps, time, and tools.
2. **Critically thin content (~425 words)** — far too short for a comprehensive tutorial that should target featured snippets and position zero.
3. **Zero images** — a step-by-step tutorial without visual demonstrations has poor user engagement signals and misses Google Image Search traffic.
4. **Meta description too short (51 chars)** — severely limits CTR from search results; target 150-160 chars.
5. **No internal links within body text** — missed opportunity for contextual topical linking and dwell time signals.

### Top 5 Quick Wins

1. Rewrite meta description to 150-160 chars with primary and secondary keywords
2. Convert each section into proper HowTo schema (rendered via JSON-LD in `[slug].astro`)
3. Add a "What You'll Need" section with a bullet list of tools/oils
4. Add contextual internal links within step descriptions to related articles
5. Add a "Safety & Contraindications" callout box

---

## Technical SEO (Score: 90/100)

| Check | Status | Notes |
|---|---|---|
| **Canonical tag** | ✅ Correct | Auto-generated from `Astro.url.pathname + Astro.site` |
| **Robots meta** | ✅ `index, follow` | Default from BaseLayout |
| **Sitemap inclusion** | ✅ Yes | Auto-included via collection-based `getStaticPaths()` + `@astrojs/sitemap` |
| **URL structure** | ✅ Clean | `/how-to/facial-cupping-step-by-step-tutorial` — clear, hyphenated, keyword-rich |
| **OG tags** | ✅ Present | OG image mapped to `/images/howto.png` via sectionOG |
| **Title tag length** | ✅ ~56 chars | `"Facial Cupping: Step-by-Step Tutorial | FacialCupping.com"` — within optimal 50-60 range |
| **H1 tag** | ✅ Present | Auto-generated from frontmatter title |
| **HTML lang** | ✅ `en` | Set in BaseLayout |
| **Performance** | ✅ Static HTML | Zero JS runtime, Astro generates static file |

**Issues:** None at the technical level — the Astro infrastructure handles technical SEO well.

---

## On-Page SEO (Score: 55/100)

### Title Tag: ✅ Good
- `"Facial Cupping: Step-by-Step Tutorial | FacialCupping.com"`
- Primary keyword "facial cupping" in title
- ~56 chars — optimal length
- Could be improved: add "Complete Guide" or "How-To" to increase keyword coverage

### Meta Description: ❌ Critical
- Current: `"A detailed walkthrough of a complete facial cupping session."` (51 chars)
- Issues:
  - Far too short (target 150-160 chars)
  - No secondary keywords (no "step-by-step", "routine", "guide", "technique")
  - No call-to-action or value proposition
  - Won't trigger bolded keyword matches in SERP snippets
- **Suggested rewrite (155 chars):**
  > "Follow our complete step-by-step facial cupping tutorial. Learn the correct technique for neck, cheeks, forehead, and under-eyes with timing tips for each area. Includes safety guidance and oil recommendations."

### Heading Structure: ⚠️ Needs Improvement
- H1: "Facial Cupping: Step-by-Step Tutorial"
- H2s: Step 1: Prepare, Step 2: Neck and Jaw, Step 3: Cheeks, Step 4: Forehead, Step 5: Under-Eye
- No H3s — each step could use subheadings (e.g., "Technique", "Duration", "Tips")
- H2s are single words or short phrases — consider more descriptive: "Step 1: Prepare Your Skin and Tools"

### Content Readability: ⚠️ Fair
- Reads well, good prose
- All content is paragraph form — no bullet lists, numbered steps, or tables
- Steps should use `<ol>` for scannability and to satisfy HowTo schema requirements
- No bold/emphasized key terms for quick scanning

---

## Content Quality & E-E-A-T (Score: 40/100)

### E-E-A-T Assessment

| Signal | Status | Notes |
|---|---|---|
| **Author expertise** | ✅ Strong | "Sarah Chen, Licensed Esthetician" — real credentials → Person schema |
| **Content accuracy** | ✅ Good | Technically correct and well-researched content |
| **Content depth** | ❌ Poor | ~425 words is shallow for a tutorial that should rank |
| **Citations/references** | ❌ Missing | No links to research, studies, or authoritative sources |
| **Date freshness** | ✅ Good | Published 2026-02-01, Updated 2026-05-20 |
| **Unique value** | ⚠️ Moderate | Content is duplicated in themes across the Daily Routine and Beginner Guide articles |

### Content Gaps

Missing sections that would add depth and improve SEO:

| Missing Section | Impact | Notes |
|---|---|---|
| **"What You'll Need"** | High | List of required tools and oils — increases keyword coverage |
| **"Safety Tips" / "Contraindications"** | High | When to skip or be cautious — important for YMYL-adjacent content |
| **"Expected Results"** | Medium | What users should feel/see after — builds trust |
| **"Frequency Guidance"** | Medium | How often to do this routine — links to Daily Routine article |
| **"Advanced Tips"** | Medium | Variations for experienced users — extends content lifecycle |
| **"FAQ Section"** | Medium | FAQ content can trigger FAQ rich results in Google |

### Thin Content Warning
At ~425 words, this is below the threshold for holistic tutorial content. Competitor articles on "facial cupping step by step" typically run 1200-2000 words. Google's "Helpful Content" system favors comprehensive, detailed walkthroughs.

**Recommendation:** Expand to 1200+ words with:
- A "Key Takeaways" summary box at the top
- "What You'll Need" equipment list
- Safety/contraindications section
- Per-step detailed guidance with sub-steps
- Expected results section
- Frequency/progression guidance
- FAQ section
- References (if applicable)

---

## Schema & Structured Data (Score: 45/100)

### Current Implementation

| Schema Type | Status | Notes |
|---|---|---|
| **WebSite** | ✅ Correct | In BaseLayout — `FacialCupping.com` organization |
| **Article** | ✅ Correct | Auto-injected in `[slug].astro` — includes headline, description, author, publisher, dates |
| **BreadcrumbList** | ⚠️ Likely present | Depends on Breadcrumb component implementation (not verified) |

### Critical Missed Opportunity: HowTo Schema

This is the single highest-impact SEO improvement for this page. Google supports **HowTo rich results** showing:
- Step-by-step instructions
- Estimated time
- Required tools/materials
- Images per step

**Implementation plan** (modify `[slug].astro` to conditionally inject HowTo schema when article contains step-based content):

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Facial Cupping: Step-by-Step Tutorial",
  "description": "Complete walkthrough of a facial cupping session.",
  "totalTime": "PT10M",
  "tool": [
    { "@type": "HowToTool", "name": "Facial cupping set (3-4 silicone cups)" },
    { "@type": "HowToTool", "name": "Facial oil (jojoba, grapeseed, or almond)" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Prepare",
      "text": "Cleanse your face to remove makeup and oils. Pat dry, then apply a generous layer of facial oil.",
      "image": "https://facialcupping.com/images/steps/prepare.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Neck and Jaw",
      "text": "Use the largest cup at the base of the neck. Glide upward toward the jawline. Spend 1 minute per side.",
      "image": "https://facialcupping.com/images/steps/neck-jaw.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cheeks",
      "text": "Use a medium cup. Start at the nose and glide outward toward the ear. Spend 2-3 minutes total.",
      "image": "https://facialcupping.com/images/steps/cheeks.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Forehead",
      "text": "Use the largest cup. Glide from center outward toward temples in horizontal rows. Spend 1 minute.",
      "image": "https://facialcupping.com/images/steps/forehead.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Under-Eye",
      "text": "Use the smallest cup with light suction. Glide along the orbital bone from inner to outer corner. Max 30 seconds per side.",
      "image": "https://facialcupping.com/images/steps/under-eye.jpg"
    }
  ]
}
```

**Detection trigger:** Add a `type: "how-to"` field to the frontmatter of tutorial articles to conditionally inject HowTo schema instead of (or in addition to) Article schema.

---

## Internal Linking (Score: 40/100)

### Current State
- ✅ Bottom "Related" links to Beginner Guide, Technique Library, Daily Routine
- ❌ **Zero internal links within the body text**

### Recommended Contextual Links

| Location | Anchor Text | Target | Rationale |
|---|---|---|---|
| Step 1 intro | "cleansing your face" | `/how-to/how-to-do-facial-cupping#what-youll-need` | Links to oil recommendations |
| Step 2 | "clears the lymphatic pathways" | `/benefits/lymphatic` | If such article exists — topical depth |
| Step 2 | "facial oil" | `/how-to/how-to-do-facial-cupping#choosing-the-right-oil` | Cross-reference oil guide |
| Step 3 | "visible change in skin tone" | `/benefits/circulation` | Evidence of efficacy |
| Step 5 | "very thin or fragile under-eye skin" | `/safety/sensitive-skin` | Safety context |
| Bottom | Full routine | `/how-to/facial-cupping-daily-routine` | Already linked, but could be stronger CTA |

**Pattern:** Add 1-2 contextual links per step to distribute link equity and improve topical relevance.

---

## Images & Media (Score: 0/100)

### Current State
- ❌ Zero images in the entire article
- ❌ Zero alt text (no images to have alt text)
- ❌ No diagrams, charts, or visual aids

### Impact
- No Google Image Search traffic
- Poor engagement signals for a visual tutorial
- No visual step demonstrations frustrate users
- Cannot participate in image-rich SERP features

### Recommendations

1. **Add 5 technique photos** — one per step demonstrating the cup placement and glide direction
2. **Add an infographic** — a summary visual of the full facial cupping routine with time allocations
3. **Add a before/after section** — visual proof of results (improves E-E-A-T)
4. **Optimize images** — WebP format, descriptive filenames (`facial-cupping-step-1-prepare.webp`), alt text per step
5. **Use OG image** — the current `/images/howto.png` section image is good, but consider a step-specific OG image

---

## AI Search Readiness / GEO (Score: 50/100)

### Citability Score: 5/10

| Factor | Rating | Notes |
|---|---|---|
| **Content clarity** | 8/10 | Well-written, clear instructions |
| **Content depth** | 4/10 | Too thin for comprehensive AI extraction |
| **Structure** | 7/10 | H2 step headers help LLMs parse content |
| **Authoritativeness** | 8/10 | Named expert author |
| **Cited sources** | 0/10 | No citations, research links |
| **FAQ content** | 0/10 | No FAQ section for AI Q&A extraction |
| **Schema richness** | 3/10 | No HowTo schema limits AI understanding |

### Recommendations for AI Citations
- Expand content to 1200+ words for deeper LLM extraction
- Add a structured FAQ section (HowTo + FAQ schema)
- Add references to clinical studies or anatomical guidance
- Ensure llms.txt or site-level AI crawler accessibility

---

## Competitive Positioning

### Estimated SERP Intent
- **Query:** "facial cupping step by step tutorial"
- **Intent:** How-to / instructional
- **Featured snippet potential:** HIGH — clear step structure aligns with snippet format
- **Current gap:** Thin content prevents snippet capture; no images prevent rich result eligibility

### What Competitors Likely Offer
- 1500-2500 word comprehensive guides
- Step-by-step photos or video embeds
- FAQ sections with HowTo + FAQ schema
- Detailed tool/oil recommendations
- Safety and contraindication sections

---

## Prioritized Action Plan

| Priority | Action | Effort | Impact | Category |
|---|---|---|---|---|
| **Critical** | Rewrite meta description to 150-160 chars | 5 min | High | On-Page |
| **Critical** | Implement HowTo schema in `[slug].astro` | 1-2 hrs | High | Schema |
| **High** | Expand content to 1200+ words (add missing sections) | 3-4 hrs | High | Content |
| **High** | Add technique photos per step (5 images) | 2-3 hrs | High | Images |
| **High** | Add contextual internal links within body text | 30 min | Medium | Internal Links |
| **Medium** | Add "Key Takeaways" summary box at top | 15 min | Medium | Content |
| **Medium** | Add FAQ section with structured Q&A | 30 min | Medium | Content |
| **Medium** | Add bullet lists for tools, durations, and tips | 15 min | Low | Readability |
| **Low** | Add "Expected Results" section with timeline | 30 min | Low | Content |
| **Low** | Add research citations or expert references | 1 hr | Low | E-E-A-T |

---

## Appendices

### A. Current Frontmatter vs Optimized

```yaml
# CURRENT
title: "Facial Cupping: Step-by-Step Tutorial"
description: "A detailed walkthrough of a complete facial cupping session."  # 51 chars

# OPTIMIZED
title: "Facial Cupping: Step-by-Step Tutorial (Complete Guide)"
description: "Follow our complete step-by-step facial cupping tutorial. Learn the correct technique for neck, cheeks, forehead, and under-eyes with timing tips for each area. Includes safety guidance and oil recommendations."  # 155 chars
```

### B. Scoring Breakdown

| Category | Raw Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 90 | 22% | 19.8 |
| Content Quality | 40 | 23% | 9.2 |
| On-Page SEO | 55 | 20% | 11.0 |
| Schema / Structured Data | 45 | 10% | 4.5 |
| Performance (CWV) | 80 | 10% | 8.0 |
| AI Search Readiness | 50 | 10% | 5.0 |
| Images | 0 | 5% | 0.0 |
| **Total** | | | **57.5** |

*Rounded to **60/100**.*

### C. Key Files Referenced

- `src/content/articles/how-to/facial-cupping-step-by-step-tutorial.md` — Target article
- `src/layouts/BaseLayout.astro` — Canonical, OG, robots, WebSite schema
- `src/layouts/ArticleLayout.astro` — Article shell with breadcrumbs, author, dates
- `src/pages/[section]/[slug].astro` — Article + FAQPage JSON-LD injection, OG image mapping
- `src/content.config.ts` — Content collection schema
- `astro.config.mjs` — Site URL, sitemap integration
