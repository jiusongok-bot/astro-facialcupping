现在我已经掌握了所有信息，以下是 `faq.md` 页面的完整中文 SEO 审计报告。

---

## /learn/faq/ 页面 SEO 审计报告

### 评分总览

```
整体评分:      52/100

On-Page SEO:   65/100  ███████░░░
内容质量:      45/100  █████░░░░░
技术 SEO:      80/100  ████████░░
结构化数据:    30/100  ███░░░░░░░
AI 搜索就绪度:  55/100  ██████░░░░
```

---

### 问题发现（按优先级排序）

#### 🔴 严重（Critical）

| # | 问题 | 详情 |
|---|------|------|
| C1 | **结构化数据类型错误** | 当前使用 `@type: Article`，但这是一个 FAQ 页面。Article 语义不匹配问答内容。应当使用 `QAPage` 类型 + `mainEntity` 嵌套问答对 |
| C2 | **元描述过短** | 仅 67 字符（"Answers to the most commonly asked questions about facial cupping."），要求 150-160 字符。严重浪费了搜索摘要的展示空间 |
| C3 | **缺少 `http-equiv="X-Robots-Tag"`** | 每页建议使用 `<meta name="robots" content="index, follow">` 显式声明，目前完全未设置 |

#### 🟠 高（High）

| # | 问题 | 详情 |
|---|------|------|
| H1 | **内容过于单薄** | 仅 5 个问题、约 280 词。面部拔罐的 FAQ 至少应覆盖 12-15 个问题（如：孕期能否做、痘痘肌是否适合、需要多久见效、与微针的区别等），建议扩至 1500+ 词 |
| H2 | **作者权威性不足** | `FacialCupping.com Team` 是通用署名，无真实作者姓名/资质/链接。E-E-A-T 信号弱。建议改为真人署名并附简短 bio 或 LinkedIn 链接 |
| H3 | **OG 图片未优化** | `/images/learn.png` 图片路径在 `og:image` 中使用相对路径，某些爬虫可能解析失败。应使用完整 URL |
| H4 | **缺少外部权威引用** | 没有任何外部引用链接（如 PubMed 研究、FDA 声明、行业协会指南）。AI 摘要引用时无法从外部权威源验证信息 |

#### 🟡 中（Medium）

| # | 问题 | 详情 |
|---|------|------|
| M1 | **问答数量不足** | 5 个问答对于 2026 年的内容期待来说太少。建议至少增至 12 个 |
| M2 | **缺少目录/锚点导航** | FAQ 是天然适合页面内锚点导航的内容类型，建议添加可点击的目录 |
| M3 | **og:type 应为 article** | 当前为 `website`，文章页应使用 `og:type: article` |
| M4 | **H1 与 title 完全相同** | H1 和 title 都是 "Facial Cupping FAQ"，缺乏差异化 |
| M5 | **没有 FAQPage schema** | FAQPage 富媒体摘要虽然已于 2026 年 5 月退役，但仍可作为 AI 引用信号。建议保留 FAQPage 或改用 QAPage |

#### 🟢 低（Low）

| # | 问题 | 详情 |
|---|------|------|
| L1 | **frontmatter 缺少 `published: true`** | 虽然默认值为 true，显式声明更规范 |
| L2 | **无视频内容** | FAQ 非常适合嵌入短视频回答，提升用户参与度 |
| L3 | **相关链接使用管道符 `|` 分隔** | 语义不清晰，建议用 `<ul>` 列表 |

---

### 按类别详细分析

#### 1. On-Page SEO（65/100）

| 元素 | 状态 | 说明 |
|------|------|------|
| Title | ✅ 良好 | "Facial Cupping FAQ \| FacialCupping.com"，31 字符，关键词靠前 |
| Meta Description | ❌ 严重 | 仅 67 字符，需扩充至 150-160 字符 |
| H1 | ✅ 良好 | 自动生成，包含主关键词 |
| H2 层级 | ✅ 良好 | 5 个 H2，无跳级，逻辑清晰的问答结构 |
| URL | ✅ 良好 | `/learn/faq/` 简短且语义清晰 |
| Canonical | ✅ 良好 | 自引用 canonical URL 正确 |
| OG/Twitter | ⚠️ 中等 | og:image 未使用绝对 URL；og:description 与 meta description 同样过短 |

**优化建议 - 元描述（150-160 字符）：**
```
"New to facial cupping? Get answers to your top questions about pain, marks, frequency, home use, and products. Learn how to practice safely and effectively with expert-backed guidance."
```

#### 2. 内容质量（45/100）

| 维度 | 状态 | 评估 |
|------|------|------|
| 字数 | ❌ 严重 | 仅 ~280 词，远低于 FAQ 页建议的 1500+ 词 |
| E-E-A-T | ❌ 弱 | 无真实作者、无引用、无资格声明、无外部背书 |
| 可读性 | ✅ 良好 | 口语化问答，语言通俗易懂 |
| 新鲜度 | ✅ 良好 | 发布于 2026-04，更新于 2026-06 |
| 关键词密度 | ⚠️ 中等 | "facial cupping" 自然出现约 15 次，约 5%，略偏高但可接受 |

**建议新增的 FAQ 问题（共需约 7-10 个）：**
1. Can I do facial cupping if I have acne or rosacea?
2. How long does it take to see results?
3. Can facial cupping be combined with other treatments?
4. Is facial cupping safe during pregnancy?
5. What size cup should I use for different areas of my face?
6. How do I clean and maintain my facial cupping cups?
7. What ingredients should I look for in a cupping glide oil?
8. Can facial cupping help with fine lines and wrinkles?
9. What is the difference between silicone and glass facial cups?
10. Should I see a professional or can I do it myself?

#### 3. 技术 SEO（80/100）

| 元素 | 状态 | 说明 |
|------|------|------|
| robots.txt | ✅ | 允许所有，sitemap 指向正确 |
| Sitemap | ✅ | 通过 `@astrojs/sitemap` 自动生成，页面已包含 |
| Canonical | ✅ | 正确自引用 |
| Meta robots | ⚠️ 缺少 | 建议添加显式声明 |
| HTTPS | ✅ | 假设部署时启用 |
| 页面速度 | ✅ | Astro SSG 生成纯静态 HTML，性能优秀 |
| 移动端适配 | ✅ | 使用 Tailwind + responsive 设计 |

#### 4. 结构化数据（30/100）

**当前实现：**
```json
{
  "@type": "Article",
  "headline": "Facial Cupping FAQ",
  ...
}
```

**问题：**
1. `Article` 用于 FAQ 内容属于类型错配
2. `author` 设为 `Person` 但值为一个团队名，误导爬虫
3. 没有嵌套的 `mainEntity` 问答对
4. FAQPage 模式缺失（AI 引用信号）

**建议方案 - 使用 QAPage schema：**
```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "Is facial cupping painful?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. Facial cupping should feel like a gentle pulling sensation..."
    }
  }
}
```
或者保留 FAQPage 作为 AI 信号（已在页面上退役但仍被 AI 引用），改为 QAPage 类型更准确。

#### 5. AI 搜索就绪度（55/100）

| 维度 | 评分 | 说明 |
|------|------|------|
| 结构清晰度 | 高 | Q&A 格式是 AI 摘要的最佳结构 |
| 权威信号 | 低 | 通用署名，无真人作者，无外部引用 |
| 引用友好度 | 中 | 每个答案自成段落，易于引用 |
| llms.txt | ❌ 未配置 | 建议创建 `/llms.txt` 提供 AI 爬虫路线图 |

---

### 优先行动方案

#### 第一阶段：严重修复（本周）

1. ✅ 扩展 meta description 至 150-160 字符
2. ✅ 添加 QAPage 或 FAQPage 结构化数据
3. ✅ 修正 author schema 类型（团队名改为 Organization 类）
4. ✅ 添加显式 robots meta 标签

#### 第二阶段：高影响力改进（1-2 周）

1. ✅ 扩展 FAQ 内容至 12-15 个问题（2000+ 词）
2. ✅ 引入真实作者或专家署名
3. ✅ 添加外部权威引用链接
4. ✅ 修正 og:image 为绝对 URL

#### 第三阶段：内容与权威性（第 2 个月）

1. ✅ 添加目录锚点导航
2. ✅ 制作短视频嵌入问答中
3. ✅ 创建 llms.txt 文件
4. ✅ 生成 FAQPage 专用 OG 图片

---

### 总结

该页面在技术实现上基础扎实（Astro SSG、canonical、sitemap、响应式设计），但在**内容深度**和**结构化数据精准度**方面有较大提升空间。最大的机会在于：将 FAQ 从 5 个问题大幅扩展、使用正确的 QAPage schema、以及加强 E-E-A-T 信号。这些改进对 AI 搜索可见度（GEO）的边际收益尤其显著。