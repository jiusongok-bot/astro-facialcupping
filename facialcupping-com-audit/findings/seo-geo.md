# AI Search Readiness (GEO) — facialcupping.com

**Score: 70/100** | **Weight: 10%**

## Current State

The site has good foundational elements for AI search visibility but lacks several specific optimizations:

### Strengths
- Clean semantic HTML with proper heading hierarchy
- Schema.org markup (though incomplete)
- Well-organized topical content
- Clear article descriptions available for AI extraction

### Weaknesses

#### Missing llms.txt (Medium)
No `/llms.txt` file exists. This standard (proposed by AI search tools like Perplexity, ChatGPT) helps AI crawlers understand site structure and content.

**Fix**: Create `public/llms.txt`:
```
# FacialCupping.com
> The Facial Cupping Resource Center — learn benefits, techniques, safety and tools.

## Key pages
- Learn: https://facialcupping.com/learn/
- Benefits: https://facialcupping.com/benefits/
- How To: https://facialcupping.com/how-to/
- Safety: https://facialcupping.com/safety/
- Tools: https://facialcupping.com/tools/
- Research: https://facialcupping.com/research/

## Featured articles
- What Is Facial Cupping: https://facialcupping.com/learn/what-is
- Facial Cupping Benefits Overview: https://facialcupping.com/benefits/overview
- Beginner's Guide: https://facialcupping.com/how-to/beginner
- Does Facial Cupping Work?: https://facialcupping.com/safety/does-it-work
```

#### Incomplete Article schema reduces AI citability (Medium)
AI crawlers often extract citation data from schema.org markup. Missing `author`, `datePublished`, and `publisher` fields means AI tools may not properly attribute content.

#### No author authority signals (Low)
Author bios with links to professional profiles (LinkedIn, Google Scholar, professional certifications) would strengthen citability for AI tools that evaluate source authority.

#### No FAQ sections for AI direct answers (Low)
AI search tools often extract directly from FAQ content. Adding FAQPage schema would increase chances of being used as a cited source.

## AI Citation Readiness Score

| Criteria | Score | Notes |
|----------|-------|-------|
| Schema markup | ⚠️ Partial | Article schema present but missing key fields |
| Clear headings | ✅ Good | Proper h1→h2→h3 hierarchy |
| Content structure | ✅ Good | Logical sections, lists, paragraphs |
| Author authority | ❌ Missing | No author bylines at all |
| Publish dates | ❌ Missing | No dates on articles |
| llms.txt | ❌ Missing | Not created |
| FAQ structured data | ❌ Missing | FAQ articles lack schema |
| Summary content | ⚠️ Partial | No consistent summary/key-takeaways format |
