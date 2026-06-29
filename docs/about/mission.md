# SEO Audit: Our Mission — Facial Cupping Resource Center

**URL:** `/about/mission`
**Section:** about
**Date:** 2026-06-29
**Audit Type:** Single-page depth audit

---

## Executive Summary

| Metric | Score |
|--------|-------|
| **Overall SEO Health** | **60/100** |
| Technical SEO | 75/100 |
| On-Page SEO | 55/100 |
| Content Quality | 55/100 |
| Schema / Structured Data | 60/100 |
| Performance (CWV) | 100/100 |
| AI Search Readiness | 45/100 |
| Images | 30/100 |

### Top 5 Issues
1. Meta description is only 54 characters (needs 150-160) — severely underutilized SERP real estate
2. Thin content (~315 words) — below the ~500-word minimum for an about/mission page
3. OG image uses relative URL (`/images/articles/doctor-smiling.jpg`) — Facebook, Twitter, and other platforms will not resolve it
4. No inline images or visual assets — missed engagement and ranking opportunity
5. Author attribution is "FacialCupping.com Team" (Organization type) — weakens E-E-A-T for a page making editorial independence claims

### Top 5 Quick Wins
1. Expand meta description to 150-160 characters with keyword-rich, compelling copy
2. Add a team photo, brand imagery, or mission infographic with descriptive alt text
3. Add contextual internal links within body text to `/about/editorial`, `/about/review-process`, and `/about/contact`
4. Fix OG image URL to absolute: `https://facialcupping.com/images/articles/doctor-smiling.jpg`
5. Add 1-2 external citations or references to strengthen the evidence-based commitment claim

---

## 1. Technical SEO (75/100)

### What Works
- Clean, descriptive URL: `/about/mission`
- Canonical URL handled automatically by `BaseLayout.astro` — self-referencing, no duplicates
- `robots: "index, follow"` — correct for a published page
- Sitemap integration via `@astrojs/sitemap` — page will be included
- Breadcrumbs auto-generated in `ArticleLayout.astro`
- Date metadata present (`datePublished`, `dateUpdated`) — freshness signal active
- Structured via Astro content collections — correct taxonomy (section: "about")

### Issues Found

#### Medium
- **OG image uses relative path** (`/images/articles/doctor-smiling.jpg`). BaseLayout.astro:40 passes `ogImage` directly into `<meta property="og:image" content={ogImage} />` without converting to absolute URL. Social platforms require absolute URLs to render preview images. The JSON-LD on line 172 of `[slug].astro` correctly uses `https://facialcupping.com${ogImage}` — the OG meta tag does not.

**Fix:**
```diff
- {ogImage && <meta property="og:image" content={ogImage} />}
+ {ogImage && <meta property="og:image" content={`https://facialcupping.com${ogImage}`} />}
```

#### Low
- Missing `twitter:image` — though Twitter falls back to `og:image`, explicitly setting `twitter:image` is a best practice
- Missing `twitter:site` and `twitter:creator` — no publisher account attribution

---

## 2. On-Page SEO (55/100)

### What Works
- Title tag is well-constructed (~58 chars): `"Our Mission: Facial Cupping Resource Center | FacialCupping.com"` — includes primary keyword, within 50-60 character range
- One H1, matches page intent ✓
- H2-H6 hierarchy is logical with no skipped levels (H2 → body text)
- URL is short, descriptive, hyphenated

### Issues Found

#### High
- **Meta description is 54 characters** (frontmatter: `"Why we built FacialCupping.com and what we aim to achieve."`). The target range is 150-160 characters. Search engines will auto-generate a snippet, which typically results in a less compelling SERP entry. Missing secondary keywords like "facial cupping information," "evidence-based skincare," "editorial independence."

**Recommended:**
```
Discover why we built the internet's most comprehensive, evidence-based facial cupping resource. Our mission: honest, independent information to help you make informed decisions.
```
(196 chars — trim to fit)

- **No contextual internal links within body text.** Three links exist at the very bottom (`/glowcup/story`, `/glowcup/philosophy`, `/about/review-process`), but there are zero internal links within the narrative. A mission page should link to `/about/editorial`, `/about/review-process`, and section hub pages to distribute authority and improve crawl efficiency.

#### Medium
- H2 headings are descriptive but could incorporate more target keywords. For example:
  - "Why We Built the Site" → "Why We Built a Trusted Facial Cupping Resource"
  - "What We Cover" → "Comprehensive Facial Cupping Coverage"
  - "How We Are Different" → "How We Are Different from Other Skincare Websites"

#### Low
- Bottom links use relevant anchor text (e.g., "Our Story," "Review Process") ✓, but the external link at `/glowcup/philosophy` points to a "glowcup" section that should be verified as an internal path

---

## 3. Content Quality (55/100)

### What Works
- Clear, plain language with short paragraphs — accessible to a general audience
- Publication and last-updated dates are present and recent (Mar → May 2026)
- Transparent editorial stance: acknowledges limitations, independence, evidence-based approach
- Editorial standards are referenced and supported by separate dedicated articles (editorial.md, review-process.md)
- No grammatical or spelling errors

### Issues Found

#### High
- **Thin content: ~315 words.** For an about/mission page (which serves as a trust signal for the entire site), the content is undersized. The existing content covers:
  - Why the site was built (1 paragraph)
  - What it covers (1 paragraph listing 12 topic areas)
  - Commitment statement (1 paragraph)
  - Differentiation (1 paragraph)

  Recommended target: **500-800 words** minimum. Suggested expansions:
  - Add a "Who We Serve" section describing target audience (beginners, practitioners, researchers)
  - Expand "Our Commitment" with specific examples or case studies
  - Add a "Site Statistics" section (number of articles, monthly updates, research sources tracked)
  - Include a brief timeline of the site's development

- **No external citations or references.** The page claims "evidence-based content" but provides zero citations. For a page that asserts editorial integrity and evidence-based methodology, linking to at least one authoritative source (e.g., PubMed study on facial cupping, or a recognized medical journal) would substantiate the claim.

#### Medium
- **E-E-A-T weakness: Author is "FacialCupping.com Team" (Organization).** The schema marks this as `"@type": "Organization"`. For a page making trust and authority claims, having a named individual (founder, editor-in-chief, licensed esthetician) as the byline would significantly strengthen E-E-A-T. Consider adding a named author or at minimum an editorial oversight credit.

- **No first-hand experience markers.** The page says "The result is over 50 articles covering benefits, techniques, safety, tools, research, brand comparisons, and more" — but doesn't share specific lessons learned, reader feedback, or real-world impact. Adding a brief testimonial or metric ("Over 10,000 monthly readers trust our content") would add social proof.

#### Low
- Keyword density is reasonable but semantic variation is limited. Consider using: "trusted resource," "skincare information," "editorial standards," "facial cupping guide."

---

## 4. Schema / Structured Data (60/100)

### What Works
- WebSite schema present in BaseLayout (name, url, description)
- Article schema auto-injected in `[slug].astro` with: `headline`, `description`, `url`, `image`, `author`, `publisher`, `datePublished`, `dateModified`, `mainEntityOfPage`
- `author` correctly typed as `Organization` for team name
- `publisher` set to `"FacialCupping.com"` — consistent with site identity
- `datePublished` and `dateModified` populated from frontmatter ✓
- Breadcrumbs present in HTML (though not in JSON-LD)

### Issues Found

#### Medium
- **Schema uses generic `Article` type.** For an about/mission page, the semantically correct type is `AboutPage` (a subtype of `WebPage`). The `Article` type is designed for news/blog content. Using `AboutPage` helps search engines understand the page's role in the site structure.

- **Missing `about` property.** The schema should include an `about` property specifying the page's subject (e.g., facial cupping, skincare, wellness). This improves topical relevance signals.

- **Publisher missing `logo`.** The `Organization` publisher block only has `name`. Adding a `logo` property with the site's logo URL enables Google to display the logo in knowledge panels and search results.

#### Low
- **No BreadcrumbList schema.** Breadcrumbs are visually present but not marked up in JSON-LD. Adding BreadcrumbList schema enables breadcrumb rich results in SERPs.
- **`author` as Organization rather than Person** is technically correct but less authoritative. If a named individual is added as author, switch to `"@type": "Person"` with `name`, `url` (optional), and `sameAs` (optional) for professional profiles.

### Recommended Schema Addition

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Our Mission: Facial Cupping Resource Center",
  "description": "Why we built FacialCupping.com and what we aim to achieve.",
  "url": "https://facialcupping.com/about/mission",
  "about": {
    "@type": "Thing",
    "name": "Facial Cupping",
    "description": "A non-invasive skincare technique using suction cups on the face"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FacialCupping.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://facialcupping.com/logo.png"
    }
  },
  "datePublished": "2026-03-15",
  "dateModified": "2026-05-18"
}
```

---

## 5. Performance (100/100)

### What Works
- No images in content — zero image-related performance issues
- No heavy JavaScript, third-party embeds, or render-blocking resources detected in the markdown content
- Astro static rendering ensures minimal JS on the page
- Tailwind CSS v4 with Vite bundling — efficient CSS delivery
- Font: Outfit via `@fontsource/outfit` — self-hosted, no external font requests
- No performance concerns from the content layer

### Notes
- Page loads through `ArticleLayout` → `BaseLayout`, which includes Nav and Footer components. Nav includes the React mobile menu component — the JS bundle should be verified to be small and deferred.
- True performance assessment requires Lighthouse/CrUX field data.

---

## 6. AI Search Readiness (45/100)

### What Works
- Content is written in clear, plain English — good for AI extractive summarization
- Transparent language about editorial independence and evidence-based approach
- Publication dates clearly displayed — freshness signal
- Structured with descriptive H2 headings — good passage segmentation

### Issues Found

#### High
- **No citations or references.** AI systems (ChatGPT, Perplexity, Gemini) preferentially cite content with verifiable sources. A mission page making claims about "evidence-based content" with zero citations will not be cited as an authoritative source.

- **Team author attribution.** Named individual authors are significantly more likely to be cited by AI systems. "FacialCupping.com Team" provides no personal credibility signal.

#### Medium
- **No llms.txt support.** The site does not appear to have an `llms.txt` or `llms-full.txt` file, which provides AI crawlers with a structured summary of the site's content. This is becoming a standard AI discovery signal.

- **No social proof or authority metrics.** Adding quantifiable trust signals ("50+ articles," "updated monthly," "cited by practitioners") would improve AI citability.

#### Low
- No FAQ or Q&A format — but this is appropriate for a mission page

---

## 7. Images (30/100)

### What Works
- No broken images
- No oversized images (zero images is a different problem)

### Issues Found

#### High
- **No in-content images.** The page has zero images. A mission page should include at least one relevant visual:
  - Team photo (builds trust and personal connection)
  - Brand logo or site mascot
  - Infographic showing the 12 content topic areas
  - Photo of facial cupping equipment or treatment (contextual, even for an about page)

#### Medium
- **OG image is a generic article photo** (`/images/articles/doctor-smiling.jpg`). For the mission page, a dedicated OG image with the site branding and mission statement text would be more effective for social sharing.

---

## 8. Internal Linking (40/100)

### What Works
- 3 bottom links to related content (`/glowcup/story`, `/glowcup/philosophy`, `/about/review-process`)
- Auto-generated "Related in About" section (driven by `related` prop in `[slug].astro`)
- Breadcrumbs link to section hub

### Issues Found

#### High
- **No contextual internal links within body text.** The mission page is a prime spot to link to:
  - `/about/editorial` — "Learn more about our editorial standards" (in "Our Commitment" section)
  - `/about/review-process` — "See how we review content" (in "How We Are Different" section)
  - `/about/contact` — "Share your feedback" (as a call to action)
  - Section hub pages: `/learn`, `/benefits`, `/research` — when mentioning "12 topic areas"

#### Low
- The bottom link format is good (`**Related:** ...`) but could be more prominent

---

## Prioritized Action Plan

### Critical (Fix Immediately)
1. **Fix OG image URL to absolute** — `BaseLayout.astro` line 40: change `content={ogImage}` to `content={\`https://facialcupping.com${ogImage}\`}`
2. **Expand meta description** to 150-160 characters in frontmatter

### High (Fix Within 1 Week)
3. **Add 2-3 contextual internal links** within body text to `/about/editorial`, `/about/review-process`, `/about/contact`
4. **Add 1 in-content image** (team photo, brand asset, or topic infographic) with descriptive alt text
5. **Expand content to 500-800 words** — add "Who We Serve," "Site Statistics," or specific examples

### Medium (Fix Within 1 Month)
6. **Switch schema from `Article` to `AboutPage`** — more semantically accurate for a mission page
7. **Add `about` property to schema** referencing facial cupping as the subject
8. **Add publisher `logo` to Organization schema**
9. **Add named author or editorial oversight credit** to strengthen E-E-A-T
10. **Add 1-2 external citations** to substantiate the evidence-based claim

### Low (Backlog)
11. Add BreadcrumbList JSON-LD schema
12. Add `twitter:image` and `twitter:site` meta tags
13. Create and link to an `/llms.txt` file for AI crawler discovery
14. Add a dedicated OG image for the mission page with branded text overlay

---

*Audit generated 2026-06-29. Based on static analysis of rendered content, Astro template code, and content frontmatter. Performance score assumes typical Astro static site delivery. True CWV data requires CrUX field data or Lighthouse lab testing.*
