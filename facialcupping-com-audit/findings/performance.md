# Performance (Core Web Vitals) — facialcupping.com

**Score: 75/100** | **Weight: 10%**

## Architecture Advantages

- **Static Site Generation**: Every page is pre-built HTML. TTFB should be sub-100ms on CDN.
- **Minimal JavaScript**: Only `MobileMenu.tsx` is hydrated via React (`client:load`). No analytics, trackers, or third-party scripts.
- **Tailwind CSS JIT**: Generated CSS is purged of unused classes, resulting in minimal file sizes (< 10KB typical).
- **Image lazy loading**: Non-hero images use `loading="lazy"`.
- **No render-blocking resources** beyond the built CSS bundle.

## Issues Found

### All images use PNG/JPG — no WebP/AVIF (High)
7 section images (PNG) + 19 article images (JPG). WebP would reduce file sizes by 25-35%. AVIF could achieve 50%+ savings.

**Fix**: Convert in bulk:
- Section images: `/public/images/hero.png`, `benefits.png`, `learn.png`, `howto.png`, `safety.png`, `research.png` → `.webp`
- Article images: `/public/images/articles/*.jpg` → `.webp`
- Update all references in `.astro` and `.md` files

### Images lack width/height attributes (Medium — CLS Risk)
No `<img>` tag includes explicit dimensions. Browsers must wait for image download to allocate space, causing layout shift.

**Fix**: Add `width` and `height` to all `<img>` tags:
```astro
<img src="/images/hero.png" alt="..." width="800" height="600" />
```
For content images in markdown, use HTML syntax:
```html
<img src="/images/cupping-glass.jpg" alt="..." width="640" height="480" />
```

### No resource hints (Medium)
No `preload`, `preconnect`, or `prefetch` hints are used. Critical resources (hero image, fonts, CSS) are discovered late.

**Fix** in `BaseLayout.astro`:
```html
<link rel="preload" href="/images/hero.webp" as="image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preload" href="/_astro/Footer.xxxxx.css" as="style" />
```

### Font-display strategy (Low)
Outfit font via `@fontsource` — verify `font-display: swap` is effective. During the swap period, text may render in fallback font.

**Verify**: Check that `@fontsource/outfit` CSS uses `font-display: swap`. If using `block` or `optional`, swap is preferable for FOUT over FOIT.

## Estimated CWV Scores

Since no field data is available (no CrUX / GSC integration), these are lab estimates based on site architecture:

| Metric | Estimated Score | Benchmark |
|--------|----------------|-----------|
| LCP | < 1.5s (Good) | < 2.5s |
| INP | < 50ms (Good) | < 200ms |
| CLS | ~0.15 (Needs Improvement) | < 0.1 |

The CLS estimate accounts for images without dimensions being the primary contributor.
