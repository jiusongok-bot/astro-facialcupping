# Research 章节 SEO 审计报告

**审计日期**: 2026-06-29
**审计范围**: `/research` 章节索引页 + 3 篇研究文章
**站点**: https://facialcupping.com
**业务类型**: 内容型网站（教育/信息类），美容护肤垂直领域

---

## 总体评分: 79/100

| 类别 | 权重 | 得分 | 加权分 |
|------|------|------|--------|
| 技术 SEO | 22% | 85 | 18.7 |
| 内容质量 | 23% | 90 | 20.7 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / 结构化数据 | 10% | 65 | 6.5 |
| 性能 (CWV) | 10% | 75 | 7.5 |
| AI 搜索就绪度 | 10% | 80 | 8.0 |
| 图片 | 5% | 50 | 2.5 |
| **总分** | **100%** | | **79.5** |

---

## 1. 技术 SEO (85/100)

### ✅ 做得好
- **robots.txt**: `Allow: /`, 正确指向 Sitemap ✓
- **Sitemap**: `@astrojs/sitemap` 构建时自动生成 `sitemap-index.xml` ✓
- **Canonical URL**: `BaseLayout` 中基于 `Astro.url.pathname + Astro.site` 正确设置 ✓
- **HTML lang**: `<html lang="en">` ✓
- **Mobile**: Tailwind 响应式网格 (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) ✓
- **页面状态**: 静态构建生成，HTTP 200 ✓
- **外部链接**: 通过 `rehype-external-links` 自动添加 `rel="nofollow noopener noreferrer" target="_blank"` ✓

### ⚠️ 需改进
- **安全标头**: 无 `X-Robots-Tag`、`X-Frame-Options` 等安全标头（需服务器配置层面检查）
- **Hreflang**: 未实现（单语言站点，可接受，仅作 info 记录）
- **robots meta**: 仅未明确设置 `robots` prop 时默认为 `"index, follow"`，未针对不同环境做差异化

---

## 2. 内容质量 (90/100) ⭐ 最强项

### ✅ 做得好
- **E-E-A-T 信号**: 引用同行评审期刊（Skin Research & Technology, The Journal of Pain, BMJ Open 等），含 DOI 链接 ✓
- **透明度**: 主动承认证据局限性（样本量小、缺乏面部特异性 RCT、安慰剂效应）✓
- **时效性**: 所有文章最近更新于 2026-06-29 ✓
- **可读性**: 结构清晰，使用表格、关键要点摘要、FAQ 增强可读性 ✓
- **内容充实度**: 每篇文章 120-132 行，数据驱动，非浅薄内容 ✓
- **内部链接网络**: 跨章节链接丰富（链接到 /benefits/, /safety/, /learn/, /how-to/, /tools/, /oils/, /comparisons/）✓
- **无重复内容**: 3 篇文章各具独立角度（科学研究 / 专家观点 / 证据综述）✓

### ⚠️ 需改进
- **作者署名**: 所有文章作者为 "FacialCupping.com Team"，非实名作者。建议添加真实作者/医学顾问署名以增强 E-E-A-T
- **Section 索引页无独立内容**: `/research` 页面仅有 Hero + 文章卡片网格，无独立介绍性正文内容

---

## 3. On-Page SEO (78/100)

### `/research` — 章节索引页

| 元素 | 内容 | 评估 |
|------|------|------|
| Title | `Research \| FacialCupping.com` | ⚠️ 过于简短，建议包含关键词如 "Facial Cupping Research & Clinical Evidence" |
| Meta Description | 约 280 字符，高质量描述 | ✅ 优秀 |
| H1 | "Research" (来自 PageHero) | ⚠️ 太简短，建议 "Facial Cupping Research: Clinical Evidence & Scientific Studies" |
| H2-H6 | 无（仅文章卡片 H3） | ⚠️ 索引页缺乏内容标题层级 |
| URL | `/research` | ✅ 简洁清晰 |
| Breadcrumb | `Research`（无 Home 链接） | ⚠️ 索引页面包屑只有当前章节，建议添加 `Home / Research` |

### 3 篇研究文章列表页

| 元素 | 评估 |
|------|------|
| Title 标签 | ✅ 每篇均含关键词，如 "Facial Cupping Scientific Studies: Key Published Research on Circulation, Pain & Cosmetic Effects" |
| Meta Description | ✅ 描述质量高 |
| H1 | ✅ 与标题匹配 |
| H2-H4 层级 | ✅ 清晰逻辑层级 |
| URL Slug | ✅ 清晰描述性 slug |

### ⚠️ Bug 发现
`src/pages/[section]/[slug].astro:44` — **OG 图片映射错误**
```typescript
tools: "/images/research.png",  // ❌ 应为 /images/tools.png
research: "/images/research.png",
```
`tools` 章节错误地引用了 `research.png` 作为 OG 图片。

---

## 4. Schema / 结构化数据 (65/100)

### ✅ 做得好
- **全局 WebSite Schema**: `BaseLayout` 中统一注入 ✓
- **文章 Article Schema**: 包含 headline, description, url, image, author, publisher, datePublished, dateModified ✓
- **常见问题页面 FAQPage Schema**: 文章 slug 含 "faq" 时自动切换 ✓
- **联系页面 ContactPage Schema**: contact 路由正确使用 ✓

### ⚠️ 缺失
- **BreadcrumbList Schema**: 所有页面均未实现面包屑结构化数据 🟡 中优先级
- **WebPage Schema**: 章节索引页无 WebPage 结构化数据 🟡 中优先级
- **ItemList Schema**: 索引页为文章列表，适合用 ItemList 标记 🟡 低优先级
- **Organization Schema**: 全局 WebSite 详略不足，缺少 logo, sameAs, contactPoint 🟢 低优先级

---

## 5. 性能 (75/100)

### ✅ 做得好
- **SSG 静态生成**: Astro 构建时预渲染，无运行时动态内容 ✓
- **轻量依赖**: 无重型第三方脚本 ✓
- **字体优化**: 仅加载 Outfit 字体（`@fontsource/outfit`）✓

### ⚠️ 需改进
- **OG 图片过大**: `public/images/research.png` **1.8MB** PNG 格式，建议压缩并转为 WebP/AVIF
- **无显式图片尺寸**: OG `<meta>` 标签未指定 `og:image:width` 和 `og:image:height`
- **Tailwind 构建**: 使用 Tailwind v4，建议确认构建后 CSS 大小已优化

---

## 6. 图片 (50/100) ⚠️ 最薄弱环节

| 图片 | 格式 | 大小 | 评估 |
|------|------|------|------|
| `public/images/research.png` | PNG | **1.8 MB** | ❌ 过大，需优化 |
| 文章内嵌图片 | — | — | ✅ 无内嵌图片（纯文字内容） |

### 建议
- 将 `research.png` 转为 **WebP** 格式（预期可缩减至 200-400KB）
- 为 `<meta property="og:image">` 添加 `og:image:width` 和 `og:image:height`
- 建议头像尺寸: 1200×630px (OG 推荐比例)

---

## 7. AI 搜索就绪度 / GEO (80/100)

### ✅ 做得好
- **段落结构化清晰**: 良好标题层级便于 AI 抽取段落内容 ✓
- **可引用性**: 包含 DOI 链接至 PubMed 和同行评审期刊 ✓
- **无歧义内容**: 对证据局限性有明确声明 ✓
- **内部链接上下文**: 内部链接使用描述性锚文本 ✓

### ⚠️ 缺失
- **llms.txt**: 未创建。建议添加 `/llms.txt` 和 `/llms-full.txt` 以提升 AI 爬虫可发现性
- **AI 爬虫可访问性**: robots.txt 目前未针对 AI 爬虫（GPTBot, Claude-Web, CCBot 等）做限制或优化
- **摘要段落**: 每篇文章开头的 "Key Takeaways" 段落非常适合 AI 直接引用，但缺少显式的 passage-level 标记

---

## 优先行动项

### Critical (立即修复)
| # | 问题 | 影响 | 位置 |
|---|------|------|------|
| 1 | `tools` 章节 OG 图片错误映射为 `research.png` | 错误的社交媒体分享预览 | `[slug].astro:44` |
| 2 | `research.png` 1.8MB，严重拖慢页面加载和社交预览 | LCP 和 OG 加载性能 | `public/images/research.png` |

### High (1 周内修复)
| # | 问题 | 影响 |
|---|------|------|
| 3 | 索引页 H1 "Research" 过于简短 | 关键词信号弱 |
| 4 | 缺少 BreadcrumbList Schema | 错失富媒体摘要机会 |
| 5 | 作者签名为团队名而非实名 | 降低 E-E-A-T 评分 |

### Medium (1 个月内修复)
| # | 问题 | 影响 |
|---|------|------|
| 6 | 索引页无独立内容（仅文章卡片） | 页面价值低，Google 可能视为薄内容 |
| 7 | 缺少 WebPage Schema | 结构化覆盖不完整 |
| 8 | 缺少 llms.txt | AI 爬虫发现性不足 |
| 9 | OG 图片缺少 width/height | 社交媒体加载优化 |

### Low (待办事项)
| # | 问题 |
|---|------|
| 10 | 添加 Organization Schema（logo, sameAs） |
| 11 | 考虑为文章列表页添加 ItemList Schema |
| 12 | AI 爬虫 user-agent 策略优化 |

---

## 建议修复优先级路线图

```
Week 1: Critical
  ├── 修复 tools → tools.png OG 映射
  └── 压缩 research.png → WebP

Week 2-3: High
  ├── 优化索引页 H1 和 Title
  ├── 添加 BreadcrumbList Schema
  └── 考虑添加实名作者/医学顾问

Month 2: Medium
  ├── 为索引页添加简介内容
  ├── 添加 WebPage Schema
  └── 创建 llms.txt

Ongoing: Low
  ├── 扩展 Organization Schema
  ├── ItemList Schema 研究
  └── AI 爬虫策略优化
```

---

## 审计页面清单

| 页面 | URL | 状态 |
|------|-----|------|
| 章节索引页 | `/research` | ✅ 已审计 |
| 科学研究文章 | `/research/facial-cupping-scientific-studies` | ✅ 已审计 |
| 专家观点文章 | `/research/facial-cupping-expert-opinions` | ✅ 已审计 |
| 证据综述文章 | `/research/facial-cupping-evidence-review` | ✅ 已审计 |

---

*审计方式: 源代码分析 + 静态文件检查。未运行实时爬虫或 Lighthouse 测试。*
