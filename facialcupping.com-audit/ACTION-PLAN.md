# FacialCupping.com — SEO Action Plan

**Prioritized recommendations** (Critical > High > Medium > Low)

---

## Phase 1: Critical Fixes (Week 1)

| # | Action | Category | Effort | Priority |
|---|--------|----------|--------|----------|
| 1 | **Deploy site to production** — Fix DNS/SSL/hosting so facialcupping.com is accessible | Technical | 1-2 days | Critical |
| 2 | **Fix sitemap-index.xml** — Verify `@astrojs/sitemap` generates sitemap-index.xml at build; reference correct path in robots.txt | Technical | 2 hours | Critical |
| 3 | **Add Article schema** — Add `Article` JSON-LD to `[slug].astro` with headline, author, datePublished, dateModified, image, publisher | Schema | 4 hours | Critical |
| 4 | **Create custom 404 page** — Add `src/pages/404.astro` with navigation links and search | Technical | 2 hours | High |
| 5 | **Compress hero images** — Reduce hero.webp, research.webp, tools.webp below 40KB each | Performance | 1 hour | High |

### Article Schema Template

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ title }}",
  "description": "{{ description }}",
  "author": {
    "@type": "Person",
    "name": "{{ author }}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FacialCupping.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://facialcupping.com/favicon.svg"
    }
  },
  "datePublished": "{{ datePublished }}",
  "dateModified": "{{ dateUpdated || datePublished }}",
  "mainEntityOfPage": "{{ canonicalURL }}",
  "image": "{{ ogImage }}"
}
```

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Action | Category | Effort | Priority |
|---|--------|----------|--------|----------|
| 6 | **Implement responsive images** — Use Astro `<Image />` or `<Picture />` with srcset/sizes for hero images | Performance | 1 day | High |
| 7 | **Fix hero alt text** — Change from `alt={title}` to descriptive alt (e.g., "Woman performing facial cupping with silicone cups") | Images | 1 hour | High |
| 8 | **Add lazy loading** — Set `loading="lazy"` on all article body images | Performance | 2 hours | Medium |
| 9 | **Add longDescription** — Add `longDescription` frontmatter to all sections (brands, comparisons, oils, etc.) | Content | 2 hours | Medium |
| 10 | **Add heading anchor IDs** — Auto-generate `id` attributes on all h2/h3 for AI passage citation | AI Readiness | 1 hour | Medium |
| 11 | **Expand llms.txt** — Add section descriptions after each `## heading` | AI Readiness | 1 hour | Medium |
| 12 | **Add Organization schema** — Add `Organization` JSON-LD to BaseLayout | Schema | 1 hour | Medium |
| 13 | **Add FAQPage schema** — Add `FAQPage` JSON-LD to `/learn/facial-cupping-faq` | Schema | 1 hour | Medium |

---

## Phase 3: Content & Authority (Month 2)

| # | Action | Category | Effort | Priority |
|---|--------|----------|--------|----------|
| 14 | **Expand thin sections** — Add 2+ articles to editorial, contact, review-process, oils sections | Content | 5 days | Medium |
| 15 | **Audit article word counts** — Ensure all articles have 600+ words; expand shorter pieces | Content | 3 days | Medium |
| 16 | **Named author credentials** — Replace default "FacialCupping.com Team" with named authors on all About-section articles | Content | 1 day | Low |
| 17 | **Add article OG meta tags** — Set `og:type='article'`, `article:published_time`, `article:author` on detail pages | On-Page | 2 hours | Low |
| 18 | **Add cross-linking widget** — Add "Related Sections" module to bottom of each list page | On-Page | 1 day | Medium |
| 19 | **Review title lengths** — Audit article titles; keep under 60 characters for SERP display | On-Page | 2 hours | Low |

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Action | Category | Effort | Priority |
|---|--------|----------|--------|----------|
| 20 | **Set up Google Search Console** — Verify domain, submit sitemap, monitor index status | Monitoring | 1 day | High |
| 21 | **Set up Bing Webmaster Tools** — Verify domain, submit sitemap, enable IndexNow | Monitoring | 1 hour | Medium |
| 22 | **Add security headers** — Configure HSTS, CSP, X-Content-Type-Options, Referrer-Policy at CDN/host level | Technical | 1 day | Medium |
| 23 | **Lighthouse CI** — Integrate Lighthouse CI in deployment pipeline | Performance | 1 day | Medium |
| 24 | **Implement search** — Add site search so SearchAction schema delivers real value | Schema | 3 days | Low |
| 25 | **Generate llms-full.txt** — Add complete article text version for AI crawlers | AI Readiness | 2 hours | Low |
| 26 | **Monitor CrUX data** — Track Core Web Vitals field data regularly | Performance | Ongoing | Medium |
| 27 | **Content freshness cadence** — Set quarterly review schedule for article updates | Content | Ongoing | Low |

---

## Effort Summary

| Phase | Timeframe | Items | Total Effort | Impact |
|-------|-----------|-------|-------------|--------|
| 1: Critical Fixes | Week 1 | 5 | ~3-4 days | 🔴 Site goes from 0 to functioning SEO |
| 2: Improvements | Weeks 2-3 | 8 | ~2-3 days | 🟡 CWV +50%, structured data coverage +100% |
| 3: Content | Month 2 | 6 | ~2 weeks | 🟢 Content depth, authority signals |
| 4: Monitoring | Ongoing | 7 | ~3 days setup | 🔵 Long-term health and iteration |

---

## Estimated SEO Impact by Phase

```ascii
Phase 1 (Critical):    ████████████████░░░░  [80% — site becomes crawlable]
Phase 2 (Improvements): ██████████░░░░░░░░░░  [50% — CWV + schema wins]
Phase 3 (Content):      ███████░░░░░░░░░░░░░  [35% — authority signals]
Phase 4 (Monitoring):   ████░░░░░░░░░░░░░░░░  [20% — ongoing optimization]
```

**Target score after full implementation: 88-92/100**
