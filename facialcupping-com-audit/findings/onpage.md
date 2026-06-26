# On-Page SEO — facialcupping.com

**Score: 80/100** | **Weight: 20%**

## Page-by-Page Analysis

### Homepage (`/`)
| Element | Value | Verdict |
|---------|-------|---------|
| Title | `Home | FacialCupping.com` | ⚠️ Suboptimal — too generic |
| H1 | `Facial Cupping, Explained.` | ✅ Good, clear |
| Meta description | `The Facial Cupping Resource Center — learn benefits, techniques, safety and tools.` | ⚠️ Functional but not compelling |
| Canonical | `https://facialcupping.com/` | ✅ Correct |
| OG image | None | ❌ Missing |

### Section Pages (`/learn/`, `/benefits/`, etc.)
| Element | Value | Verdict |
|---------|-------|---------|
| Title | `{Section Title} | FacialCupping.com` | ✅ Consistent |
| H1 | `{Section Title}` | ✅ Clear |
| Meta description | From section frontmatter | ✅ Present |
| Breadcrumbs | Home > Section | ✅ Correct |
| OG image | From sectionImages map | ⚠️ tools maps to research.png |

### Article Pages (`/learn/what-is`, etc.)
| Element | Value | Verdict |
|---------|-------|---------|
| Title | `{Article Title} | FacialCupping.com` | ✅ Consistent |
| H1 | `{Article Title}` | ✅ Clear |
| Meta description | From article frontmatter | ✅ Present |
| Breadcrumbs | Home > Section > Article | ✅ Correct |
| Article schema | Present (incomplete) | ⚠️ Missing author/date |
| Related articles | 3 articles from same section | ✅ Good internal linking |

## Cross-Page Issues

### Title tag format
Format: `{page} | FacialCupping.com` — consistent but misses keyword opportunities at the start.

### Heading structure
- All pages have exactly one H1 ✅
- H2 used for section titles ✅
- H3 used for sub-sections ✅
- No heading skipping ✅

### Internal linking
- Navigation: 11 links in header covering all sections ✅
- Footer: Detailed link columns with 18 links ✅
- Homepage: Links to popular guides, sections, tools, research ✅
- Article pages: Related articles section at bottom (up to 3) ✅
- **No sidebar or contextual inline links** within article body ⚠️

### Breadcrumb implementation
- Present on section and article pages ✅
- Uses `aria-label="Breadcrumb"` ✅
- Current page is text (not link) ✅
- No structured data for breadcrumbs ❌

## Social Meta

| Tag | Homepage | Articles | Sections |
|-----|----------|----------|----------|
| og:title | ✅ | ✅ | ✅ |
| og:description | ✅ | ✅ | ✅ |
| og:url | ✅ | ✅ | ✅ |
| og:image | ❌ | ⚠️ (section-level only) | ⚠️ (section-level) |
| twitter:title | ✅ | ✅ | ✅ |
| twitter:description | ✅ | ✅ | ✅ |
| twitter:image | ❌ | ❌ | ❌ |
| twitter:card | `summary_large_image` | `summary_large_image` | `summary_large_image` |
