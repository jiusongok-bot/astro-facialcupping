# Images Analysis

## Score: 70/100

### What Works
- All images use modern WebP format
- Unique OG images per section with descriptive filenames
- Alt text present on hero images
- Favicon in multiple formats (SVG, ICO, Apple Touch)

### Findings

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | No responsive srcset | **High** | Single image resolution served to all viewport sizes. |
| 2 | Hero alt text uses page title | Medium | alt={title} does not describe the image content. |
| 3 | Missing image dimensions | Medium | Article body images lack width/height, risking CLS. |
| 4 | Large file sizes | Medium | Hero images range 58-94KB. Target <40KB with further compression. |
