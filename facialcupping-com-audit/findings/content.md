# Content Quality — facialcupping.com

**Score: 70/100** | **Weight: 23%**

## What Works

- 52 original articles across 10 content categories
- Well-organized topical structure (Learn → Benefits → How To → Safety → Tools → Research)
- E-E-A-T foundation: editorial guidelines, medical review process, about page
- Evidence-based approach with research citations and expert references
- Comprehensive coverage of user intents (informational, instructional, evaluative)

## Issues Found

### Missing author bylines (High — E-E-A-T Critical)
No article displays an author name. Google's search quality rater guidelines emphasize author expertise as a key E-E-A-T signal.

**Fix**: Add `author` frontmatter to article collection schema, display in `ArticleLayout`:
```yaml
author:
  name: "Jane Smith"
  bio: "Licensed esthetician with 10+ years of experience"
  url: "https://linkedin.com/in/jane-smith"
```

### Missing publish/update dates (High)
No dates visible on any article. Freshness is a ranking signal. Only the homepage research section shows dates inline.

**Fix**: Add `datePublished` and `dateUpdated` frontmatter; display in ArticleLayout with `<time>` element:
```yaml
datePublished: "2026-01-15"
dateUpdated: "2026-06-01"
```

### Thin content articles (Medium)
Several articles are under 300 words of body content:

| Article | Approx. Words |
|---------|--------------|
| benefits/wrinkles.md | ~150 |
| benefits/jawline.md | ~150 |
| benefits/puffiness.md | ~150 |
| learn/history.md | ~170 |
| learn/therapy.md | ~170 |
| tools/oils.md | ~200 |

**Fix**: Expand each to 500+ words with detailed guidance, examples, citations, and FAQs.

### Section landing pages lack content (Medium)
Pages like `/benefits/`, `/safety/`, `/tools/` contain only article card grids with no introductory text.

**Fix**: Add 100-200 words of descriptive content above the article grid on each section page, using the section's `description` field as a base.

## Content Inventory

| Section | Articles | Avg Content Length | Quality |
|---------|----------|-------------------|---------|
| Learn | 5 | ~300 words | Moderate |
| Benefits | 6 | ~250 words | Low |
| How To | 5 | ~400 words | Good |
| Safety | 7 | ~350 words | Moderate |
| Tools | 5 | ~300 words | Moderate |
| Research | 6 | ~400 words | Good |
| Comparisons | 3 | ~500 words | Good |
| Brands | 4 | ~450 words | Good |
| GlowCup | 5 | ~300 words | Moderate |
| About | 4 | ~350 words | Good |
