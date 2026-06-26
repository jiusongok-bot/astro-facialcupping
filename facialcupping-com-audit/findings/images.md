# Images — facialcupping.com

**Score: 55/100** | **Weight: 5%**

## Image Inventory

| Image | Format | Usage | Alt Text |
|-------|--------|-------|----------|
| /images/hero.png | PNG | Homepage hero | "Facial cupping therapy illustration" ✅ |
| /images/learn.png | PNG | Topic card + articles | "Learn" (via alt="") ❌ |
| /images/benefits.png | PNG | Topic card + articles | "Benefits" ❌ |
| /images/howto.png | PNG | Topic card + articles | "How To" ❌ |
| /images/safety.png | PNG | Topic card + articles | "Safety" ❌ |
| /images/research.png | PNG | Topic card + articles | "Research" ❌ |
| /images/articles/*.jpg (×19) | JPG | Article content images | Mostly present ✅ |

## Issues Found

### Outdated image formats (High — Performance)
All 26 images use PNG or JPG. Modern formats would reduce payload significantly:
- **PNG → WebP**: 25-35% smaller (lossy) or 20-50% smaller (lossless)
- **JPG → WebP**: 25-35% smaller at same quality
- **WebP → AVIF**: Additional 20-30% savings (growing browser support)

### No responsive image srcsets (Medium)
Every image serves a single resolution regardless of viewport. Mobile devices on 3G connections download full 1200px images unnecessarily.

**Fix**: Use `srcset` with breakpoints:
```astro
<img
  src="/images/hero.webp"
  srcset="/images/hero-480.webp 480w, /images/hero-768.webp 768w, /images/hero-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="..."
/>
```

### No image dimensions (Medium — CLS)
All `<img>` tags lack `width` and `height`, causing layout shifts during load.

**Fix**: Add dimensions to all `<img>` tags.

### Duplicate article images (Low)
All articles within a section share the same section-level image (e.g., all 5 Learn articles use `/images/learn.png`). Unique images per article would improve visual variety and relevance.

**Fix**: Add `image` field to article frontmatter and reference unique images per article.

### Tools section image mismatch (Low)
In `[section]/index.astro:35`: `tools: "/images/research.png"` — the Tools section shows the Research image. Should use a dedicated tools image.

## Recommendations Summary

| Priority | Action | Impact |
|----------|--------|--------|
| High | Convert all images to WebP | -30% page weight, better LCP |
| Medium | Add srcset to all content images | -50% mobile data usage |
| Medium | Add width/height to all img tags | Reduce CLS |
| Low | Unique article lead images | Better UX |
| Low | Fix tools→research image mapping | Correctness |
