# Technical SEO — facialcupping.com

**Score: 85/100** | **Weight: 22%**

## What Works

- **Sitemap**: Auto-generated via `@astrojs/sitemap` — 61 URLs in `sitemap-0.xml`, referenced from `sitemap-index.xml`
- **robots.txt**: Properly configured — allows all crawlers (`User-agent: * Allow: /`), references sitemap
- **Canonicals**: All pages have `<link rel="canonical">` via `BaseLayout.astro:28`
- **URL Structure**: Clean hierarchy `/section/slug` with no query parameters or session IDs
- **HTML lang**: Correct `lang="en"` on all pages
- **SSG**: Static site generation means no server-side rendering overhead, fast TTFB
- **HTTPS**: Site configured for `https://facialcupping.com` (SSL-ready in `astro.config.mjs`)
- **Viewport**: Proper `<meta name="viewport">` on all pages

## Issues Found

### No robots meta tags (Medium)
No page uses `<meta name="robots">`. While all pages are meant to be indexed, this prevents controlling indexation of thin content pages individually.

**Fix**: Add to `BaseLayout.astro`:
```astro
const { robots = "index,follow" } = Astro.props;
...
<meta name="robots" content={robots} />
```

### No custom 404 page (Medium)
Default Astro error page shown on 404. No guidance for lost visitors.

**Fix**: Create `src/pages/404.astro` with navigation links and search.

### No self-referencing hreflang (Info)
Single-language English site; low priority but recommended.

**Fix**: Add `<link rel="alternate" hreflang="en" href={canonicalURL}>`

## Crawl Summary

| Metric | Value |
|--------|-------|
| Total pages built | 61 |
| Sitemap URLs | 61 (all accounted for) |
| Crawl depth | 2 levels max (section → article) |
| Page types | 1 homepage, 10 section indexes, 50 articles |
| Broken internal links | None detected |
| Orphan pages | None detected |
