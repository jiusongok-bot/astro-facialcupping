# Performance (CWV) Analysis

## Score: 65/100

### What Works
- Minimal third-party scripts (only React hydration)
- Static content pre-rendered by Astro for fast initial load
- Eager loading on hero images with fetchpriority='high'
- WOFF2 font format with unicode-range subsets
- Tailwind CSS utility-first approach (smaller CSS output)

### Findings

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | No responsive image srcset | **High** | All images serve single resolution. 1280px hero images served to mobile. |
| 2 | CSS inlined in dev mode | Medium | Production build likely extracts CSS, but verify code-splitting works. |
| 3 | No lazy loading on article images | Medium | All images eager-loaded. Add loading='lazy' to below-fold images. |
| 4 | No production CWV data | Info | Lighthouse/CrUX data unavailable until deployed. |
