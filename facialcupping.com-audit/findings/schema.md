# Schema / Structured Data Analysis

## Score: 85/100

### What Works
- WebSite schema with SearchAction on every page
- CollectionPage + ItemList JSON-LD on every list page with full article metadata
- BreadcrumbList JSON-LD on every list page (Home > Section)
- Correct @context and @type usage throughout
- ItemList includes position, name, description, and URL per article
- SearchAction target correctly formatted

### Findings

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | Missing Article schema on detail pages | **High** | Individual article pages lack Article/NewsArticle schema. Major missed opportunity for rich snippets. |
| 2 | Missing FAQPage schema | Medium | /learn/facial-cupping-faq contains Q&A content without FAQPage markup. |
| 3 | Missing Organization schema | Low | No publisher/brand schema defined. Add Organization with logo, URL, sameAs. |
| 4 | SearchAction has no actual search | Low | Search target exists but no search functionality implemented. |
