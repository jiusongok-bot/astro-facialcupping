# 文章 SEO 审计报告：Facial Cupping Therapy

**URL:** `https://facialcupping.com/learn/facial-cupping-therapy/`
**源文件:** `src/content/articles/learn/facial-cupping-therapy.md`
**作者:** Sarah Chen, Licensed Esthetician
**审计日期:** 2026-06-27

---

## 评分总览：68/100

| 维度 | 分数 | 权重 | 加权分 |
|------|------|------|--------|
| 技术/页面 SEO | 90 | 22% | 19.8 |
| 内容质量 | 45 | 23% | 10.4 |
| 页面元数据 | 85 | 20% | 17.0 |
| Schema 结构化数据 | 80 | 10% | 8.0 |
| 性能 | 90 | 10% | 9.0 |
| AI 搜索就绪度 | 40 | 10% | 4.0 |
| 图片 | 0 | 5% | 0.0 |
| **总分** | | | **68.2** |

---

## 已修复项（较站点审计有改进）

| 问题 | 状态 |
|------|------|
| 作者署名未显示 | ✅ **已修复** — Sarah Chen 已显示 |
| 发布日期未显示 | ✅ **已修复** — 显示 2026-01-12（更新于 2026-06-01） |
| Article Schema 缺少必填字段 | ✅ **已修复** — author, datePublished, publisher 均已存在 |
| 缺少 OG 图片 | ✅ 已修复 — 使用 `/images/learn.png` |

---

## 关键问题

### 🔴 严重（2项）

| ID | 问题 | 建议 |
|----|------|------|
| C-01 | **内容过薄 (390字)** — 低于信息类文章 500 字最低标准 | 拓展至 **800+字**，增加禁忌症、治疗频次、费用范围、预期效果、准备指南 |
| C-02 | **零外部引用** — 文章无任何研究或权威来源链接 | 添加 3-5 条出站链接：PubMed 研究、皮肤科资源、持证美容师协会 |

### 🟠 高优先级（3项）

| ID | 问题 | 建议 |
|----|------|------|
| H-01 | **正文无图片** — 面部疗法相关文章完全无视觉内容 | 添加 2-3 张 WebP 图片（杯具放置示意图、操作照片、前后对比） |
| H-02 | **无上下文内链** — 所有内链仅出现在底部"相关文章"区域 | 在正文添加内链："淋巴引流"→ `/benefits/lymphatic/`，"刮痧"→ `/comparisons/vs-gua-sha/` |
| H-03 | **缺少 twitter:image** — 社交分享时缺少视觉素材 | 在 BaseLayout 中将 og:image 镜像到 twitter:image |

### 🟡 中优先级（4项）

| ID | 问题 | 建议 |
|----|------|------|
| M-01 | **缺少 BreadcrumbList Schema** — 面包屑导航缺少结构化数据 | 在 ArticleLayout 中添加 JSON-LD BreadcrumbList |
| M-02 | **缺少禁忌症板块** — 未提及哪些人群应避免面部拔罐 | 增加"谁应避免"提示框，链接至安全指南相关文章 |
| M-03 | **缺少下一步行动引导** — 读者读完无明确操作指引 | 增加"下一步"板块，引导至 `/how-to/` 或 `/safety/` |
| M-04 | **缺少 H3 子标题** — H2 下方内容无分层，不利于 AI 解析 | 在 H2 下增加 H3（如"淋巴引流""促进循环""缓解紧张"） |

### 🟢 低优先级（3项）

| ID | 问题 | 建议 |
|----|------|------|
| L-01 | **缺少 Organization Schema** | 在 BaseLayout 中增加 Organization 结构化数据 |
| L-02 | **无作者简介板块** — 作者姓名已显示但无资质证明 | 添加作者简介板块，链接至 `/about/` 页面 |
| L-03 | **底部"相关"链接为硬编码** — 应使用内容集合查询 | 使用 ArticleLayout 已有的 `related` prop |

---

## E-E-A-T 评估

| 因素 | 分数 | 说明 |
|------|------|------|
| **Experience（经验）** | 3/10 | 作者为持证美容师，但无第一手经验证据（案例、前后对比照、个人心得） |
| **Expertise（专业度）** | 5/10 | 作者资质已显示，内容事实准确但仅停留在表层 |
| **Authoritativeness（权威性）** | 2/10 | 零外部引用，无专业组织链接 |
| **Trustworthiness（信任度）** | 6/10 | 日期透明、作者署名、用语得当、无虚假宣传 |

**E-E-A-T 总分：40/100**

---

## AI 搜索就绪度（GEO）

| 标准 | 分数 | 说明 |
|------|------|------|
| 可引用统计数据 | 2/20 | 无可供 AI 提取的具体数据 |
| 外部来源链接 | 0/15 | 零引用 = 零可验证性 |
| 结构化数据完整性 | 12/15 | Article Schema 完整，但缺少 BreadcrumbList |
| 问答格式 | 3/20 | 内容为描述性，非 Q&A 格式 |
| 标题层级 | 12/15 | H1→H2 结构清晰，无 H3 |
| 表格/列表 | 5/15 | 无表格、无要点列表 |

**AI 可引用性评分：34/100**

---

## 快速致胜项（<30分钟）

1. 在正文添加 2-3 个上下文内链
2. 在 BaseLayout 添加 twitter:image 元标签（5分钟代码修改）
3. 在 H2 下方增加 H3 子标题，提升可浏览性
4. 在文末添加"下一步"指引，链接至操作指南和安全文章

---

## 元数据快照

```yaml
标题: "Facial Cupping Therapy"
描述: "How facial cupping is used as a therapeutic practice for skin health and wellness..."
作者: "Sarah Chen, Licensed Esthetician"
发布日期: 2026-01-12
更新日期: 2026-06-01
分类: learn
URL: /learn/facial-cupping-therapy/
正文字数: ~390
H1: "Facial Cupping Therapy"
H2: Therapeutic Applications, A Typical Session, At-Home vs Professional Treatment, Choosing a Practitioner
图片: 0
外部链接: 0
内部链接: 3（底部相关文章）
```

---

## 操作优先级矩阵

| 优先级 | 操作 | 耗时 | 影响 | E-E-A-T | AI 就绪度 |
|--------|------|------|------|---------|-----------|
| 严重 | 扩充内容至 800+ 字 | 2-3h | 高 | ★★★★★ | ★★★★★ |
| 严重 | 添加外部引用 (3-5条) | 30min | 高 | ★★★★★ | ★★★★★ |
| 高 | 添加图片 (2-3张) | 1h 拍摄+30min 编辑 | 中 | ★★★☆☆ | ★★★☆☆ |
| 高 | 添加上下文内链 | 15min | 中 | ★★☆☆☆ | ★★☆☆☆ |
| 高 | 添加 twitter:image | 5min | 低 | ☆ | ☆ |
| 中 | 添加 BreadcrumbList Schema | 15min | 低 | ☆ | ★★☆☆☆ |
| 中 | 添加禁忌症板块 | 30min | 中 | ★★★★☆ | ★★★☆☆ |
| 中 | 添加作者简介 | 30min | 中 | ★★★★☆ | ★★★☆☆ |
| 中 | 添加 H3 子标题 | 15min | 低 | ★★☆☆☆ | ★★★☆☆ |
| 低 | 添加 Organization Schema | 10min | 低 | ★★☆☆☆ | ★☆☆☆☆ |
