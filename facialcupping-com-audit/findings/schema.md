# Schema & Structured Data — facialcupping.com

**Score: 55/100** | **Weight: 10%**

## Current Implementation

| Schema Type | Page(s) | Status |
|-------------|---------|--------|
| WebSite | All pages (BaseLayout.astro:43) | ✅ Present but minimal |
| Article | Article pages ([slug].astro:69) | ✅ Present but incomplete |

## Issues Found

### Article schema missing critical fields (High)
Current Article JSON-LD (`[slug].astro:69-80`):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "url": "...",
  "image": "...",
  "isPartOf": { "@type": "WebPage", "url": "..." }
}
```

**Missing required/recommended fields**: `author`, `datePublished`, `dateModified`, `publisher`

Without author and dates, articles are **ineligible** for Google News/Top Stories rich results and less likely to be cited by AI crawlers.

**Fix**:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FacialCupping.com"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-06-01",
  "image": "...",
  "url": "...",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "..."
  }
}
```

### Missing BreadcrumbList schema (Medium)
Breadcrumb navigation is rendered in HTML (`Breadcrumb.astro`) but no JSON-LD breadcrumb data exists. This is a missed rich result opportunity.

**Fix**: Add BreadcrumbList schema to `ArticleLayout.astro`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://facialcupping.com/" },
    { "@type": "ListItem", "position": 2, "name": "Section", "item": "https://facialcupping.com/section/" },
    { "@type": "ListItem", "position": 3, "name": "Article", "item": "https://facialcupping.com/section/article" }
  ]
}
```

### Missing FAQPage schema (Medium)
Articles with FAQ content (`/learn/faq`, `/safety/faq`) lack FAQPage schema, missing eligibility for FAQ rich results in SERPs.

**Fix**: Parse FAQ content and inject FAQPage schema with Question/Answer pairs.

### Missing HowTo schema (Medium)
Tutorial articles (`/how-to/beginner`, `/how-to/techniques`, `/how-to/tutorial`) contain step-by-step instructions but lack HowTo schema.

**Fix**: Add HowTo schema with `step` array, `tool` list, and `totalTime` where applicable.

### Missing Organization schema (Low)
No Organization schema exists for the brand. This could enable Google Knowledge Panel features.

**Fix**: Add to BaseLayout:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FacialCupping.com",
  "url": "https://facialcupping.com",
  "logo": "https://facialcupping.com/images/logo.png",
  "sameAs": ["...social links..."]
}
```

### WebSite schema lacks SearchAction (Low)
Current WebSite schema has no `potentialAction`. Adding this enables Sitelinks Search Box in Google SERPs.

**Fix**: Add to existing WebSite schema:
```json
"potentialAction": {
  "@type": "SearchAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://facialcupping.com/search?q={search_term_string}"
  },
  "query-input": "required name=search_term_string"
}
```
