---
name: chen-ai-daily
description: >
  每日AI新闻概览——抓取近24小时内AI领域重要新闻，生成中文精华摘要HTML页面。
  当用户提到"AI日报"、"AI新闻"、"每日AI"、"AI资讯"、"AI动态"、"人工智能新闻"、
  "AI industry news"、"daily AI digest"、"AI newsletter"、"AI速览"、"今日AI"、
  "AI早报"、"AI晚报"、"诚诚日报"、"chen-ai-daily"等关键词，或想要了解最新AI行业动态、
  科技新闻汇总时，请务必使用此技能。即使用户只是问"最近AI有什么新闻"或"今天AI圈发生了什么"，
  也应该使用此技能来提供规范完整的资讯概览。
---

# 每日AI新闻概览 (chen-ai-daily)

为用户生成一份精美的每日AI行业资讯HTML页面，涵盖近24小时内全球AI领域最重要的动态。

## 核心原则

- **时效性优先**：聚焦近24小时内的新闻，过期信息一律排除
- **质量过滤**：排除纯公关稿、低质重复内容、非AI领域的泛科技新闻
- **中文精炼**：每条资讯提炼50-100字中文核心要点，让读者快速获取关键信息
- **来源多样**：覆盖不同视角的权威来源，避免信息茧房
- **原文可溯**：每篇资讯必须附带可点击的原文链接

## 工作流程

### 第一步：资讯抓取

并行搜索多个来源，确保覆盖面。使用 `WebSearch` 工具，针对每个来源/方向独立搜索。

**必须覆盖的来源方向：**

| 方向 | 搜索策略 |
|------|----------|
| 综合AI新闻 | `AI news today 2026`、`artificial intelligence latest news` |
| TechCrunch AI | `TechCrunch AI artificial intelligence latest` |
| The Verge AI | `The Verge AI artificial intelligence latest` |
| Hacker News | `Hacker News AI machine learning trending` |
| Reddit | `Reddit r/MachineLearning top this week`、`Reddit r/artificial hot` |
| 模型/产品发布 | `new AI model release today`、`AI product launch latest` |
| 融资/商业 | `AI startup funding news this week`、`AI industry investment latest` |

> 搜索使用英文关键词以获取更全面的国际资讯。每个方向至少使用1-2个搜索词。所有搜索应并行发起以节省时间。

### 第二步：深度读取（按需）

对于搜索结果中摘要信息不足以提炼完整要点的资讯，使用 `WebFetch` 获取原文详情。优先获取：
- 标题看起来重要但摘要不完整的
- 排名靠前的头部新闻
- 涉及重大模型发布、融资事件、政策变化的

> 注意：搜索结果的 snippet 通常已足够提炼50-100字的摘要，仔细阅读 snippet 后再决定是否需要进一步 fetch。避免不必要的 fetch 调用。

### 第三步：筛选与去重

从所有搜索结果中，按以下标准筛选：

**入选标准：**
- 涉及AI/ML技术进展（模型发布、算法突破、开源项目）
- AI产品/功能发布或重大更新
- AI行业商业动态（融资、收购、IPO）
- AI政策/监管/伦理重要进展
- AI研究前沿（重要论文、基准测试突破）
- 知名AI公司/人物的重大动态

**排除标准：**
- 超过72小时的旧闻（优先24小时内）
- 纯观点/评论类文章（除非作者为行业权威）
- 明显的公关软文
- 与AI无关的泛科技新闻
- 相同事件的不同媒体报道（去重，保留信息最全的1-2篇）

**目标数量：** 最终精选 8-15 条资讯，保证日报的信息密度和可读性。

### 第四步：中文摘要生成

对每条入选资讯，生成中文精华摘要：

- **字数**：50-100字
- **内容**：5W1H（发生了什么、谁做的、为什么重要、影响是什么）
- **语言**：专业但不晦涩，让非技术背景的读者也能理解
- **格式**：一句话核心事实 + 一句补充/影响说明

**示例：**
> OpenAI发布GPT-5系列模型，在推理、编码和多模态能力上全面超越前代。新模型支持128K上下文窗口，API价格降低60%，即日起向Plus用户开放。

### 第五步：关键词标签

为每条资讯标注 2-4 个中文关键词标签，用于快速定位。标签应：
- 反映资讯的核心主题维度（如：大模型、开源、融资、多模态）
- 使用统一的标签词汇，避免同义不同词
- 优先使用以下标准标签：

```
标准标签库：大模型、开源、闭源、多模态、Agent、具身智能、机器人、
视频生成、图像生成、代码生成、GPU/算力、芯片、融资、收购、IPO、
政策/监管、安全/AI安全、学术/论文、基准测试、产品发布、API、
应用/工具、中国市场、医疗AI、自动驾驶、AI人才
```

### 第六步：生成HTML页面

使用以下模板生成精美的可视化HTML页面。页面内直接内嵌所有CSS和内容，无需外部依赖。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>诚诚AI日报 - [YYYY年MM月DD日]</title>
    <style>
        :root {
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
            --text-secondary: #64748b;
            --border: #e2e8f0;
            --accent: #6366f1;
            --accent-light: #eef2ff;
            --tag-bg: #f1f5f9;
            --tag-text: #475569;
            --tag-hover: #e2e8f0;
            --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06);
            --shadow-hover: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
            --radius: 12px;
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --bg: #0f172a;
                --card-bg: #1e293b;
                --text: #f1f5f9;
                --text-secondary: #94a3b8;
                --border: #334155;
                --accent: #818cf8;
                --accent-light: #1e1b4b;
                --tag-bg: #334155;
                --tag-text: #cbd5e1;
                --tag-hover: #475569;
                --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3);
                --shadow-hover: 0 10px 15px -3px rgb(0 0 0 / 0.4);
            }
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 24px 20px 60px;
        }

        /* ---------- Header ---------- */
        .header {
            text-align: center;
            padding: 40px 20px 32px;
            position: relative;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, var(--accent), #a78bfa);
            border-radius: 2px;
        }

        .header .logo {
            font-size: 14px;
            font-weight: 500;
            color: var(--accent);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 8px;
        }

        .header h1 {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 1px;
            background: linear-gradient(135deg, var(--accent), #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header .date {
            font-size: 14px;
            color: var(--text-secondary);
            margin-top: 6px;
        }

        /* ---------- Stats Bar ---------- */
        .stats-bar {
            display: flex;
            justify-content: center;
            gap: 32px;
            margin-bottom: 32px;
            padding: 16px 24px;
            background: var(--card-bg);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            border: 1px solid var(--border);
        }

        .stat-item {
            text-align: center;
        }

        .stat-item .number {
            font-size: 24px;
            font-weight: 700;
            color: var(--accent);
        }

        .stat-item .label {
            font-size: 12px;
            color: var(--text-secondary);
            margin-top: 2px;
        }

        /* ---------- News Cards ---------- */
        .news-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .news-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 20px 24px;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .news-card:hover {
            box-shadow: var(--shadow-hover);
            transform: translateY(-2px);
            border-color: var(--accent);
        }

        .news-card .source-badge {
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 4px;
            color: var(--accent);
            background: var(--accent-light);
            margin-bottom: 10px;
            letter-spacing: 0.5px;
        }

        .news-card h3 {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 10px;
            line-height: 1.5;
            color: var(--text);
        }

        .news-card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 14px;
        }

        .news-card .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .news-card .tag {
            font-size: 12px;
            padding: 3px 10px;
            border-radius: 100px;
            background: var(--tag-bg);
            color: var(--tag-text);
            transition: background 0.15s;
            white-space: nowrap;
        }

        .news-card .tag:hover {
            background: var(--tag-hover);
        }

        .news-card .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--border);
            font-size: 12px;
            color: var(--text-secondary);
        }

        .news-card .read-more {
            font-size: 12px;
            color: var(--accent);
            font-weight: 500;
        }

        /* ---------- Footer ---------- */
        .footer {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-secondary);
            font-size: 12px;
            line-height: 1.8;
        }

        .footer a {
            color: var(--accent);
            text-decoration: none;
        }

        /* ---------- Empty State ---------- */
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }

        .empty-state .icon { font-size: 48px; margin-bottom: 16px; }

        /* ---------- Responsive ---------- */
        @media (max-width: 640px) {
            .container { padding: 16px 12px 40px; }
            .header h1 { font-size: 22px; }
            .news-card { padding: 16px; }
            .stats-bar { gap: 20px; padding: 12px 16px; }
        }

        /* ---------- Print ---------- */
        @media print {
            body { background: white; }
            .news-card { break-inside: avoid; box-shadow: none; border: 1px solid #ddd; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="logo">CHENG AI · DAILY</div>
            <h1>诚诚AI日报</h1>
            <div class="date">[YYYY年MM月DD日 星期X]</div>
        </header>

        <!-- Stats Bar -->
        <div class="stats-bar">
            <div class="stat-item">
                <div class="number" id="newsCount">0</div>
                <div class="label">精选资讯</div>
            </div>
            <div class="stat-item">
                <div class="number" id="sourceCount">0</div>
                <div class="label">信息来源</div>
            </div>
            <div class="stat-item">
                <div class="number" id="tagCount">0</div>
                <div class="label">覆盖标签</div>
            </div>
        </div>

        <!-- News Grid -->
        <div class="news-grid" id="newsGrid">
            <!-- News cards will be inserted here -->
        </div>

        <!-- Footer -->
        <footer class="footer">
            <p>📡 数据来源：TechCrunch · The Verge · Hacker News · Reddit 等</p>
            <p>⏰ 更新时间：[YYYY年MM月DD日 HH:MM] · 由诚诚AI自动生成</p>
            <p style="margin-top:8px;font-size:11px;">资讯内容仅供参考，原文观点不代表本站立场</p>
        </footer>
    </div>

    <!-- Inline data: news items array. Replace CONTENT_PLACEHOLDER with the actual JSON array. -->
    <script>
    (function() {
        const newsData = CONTENT_PLACEHOLDER;

        // Update stats
        const uniqueSources = new Set(newsData.map(n => n.source));
        const uniqueTags = new Set(newsData.flatMap(n => n.tags));
        document.getElementById('newsCount').textContent = newsData.length;
        document.getElementById('sourceCount').textContent = uniqueSources.size;
        document.getElementById('tagCount').textContent = uniqueTags.size;

        // Render cards
        const grid = document.getElementById('newsGrid');
        newsData.forEach(item => {
            const card = document.createElement('a');
            card.className = 'news-card';
            card.href = item.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.innerHTML = `
                <span class="source-badge">${escapeHtml(item.source)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.summary)}</p>
                <div class="tags">
                    ${item.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
                </div>
                <div class="card-footer">
                    <span>${escapeHtml(item.time || '')}</span>
                    <span class="read-more">阅读原文 →</span>
                </div>
            `;
            grid.appendChild(card);
        });

        function escapeHtml(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    })();
    </script>
</body>
</html>
```

### 数据格式

HTML 模板中 `CONTENT_PLACEHOLDER` 需替换为以下 JSON 格式的数组：

```json
[
  {
    "title": "中文新闻标题",
    "summary": "50-100字中文核心要点摘要",
    "source": "TechCrunch",
    "url": "https://原文章链接",
    "time": "3小时前",
    "tags": ["大模型", "开源"]
  },
  ...
]
```

字段说明：
- `title`: 中文翻译后的标题，简洁准确
- `summary`: 50-100字中文摘要，包含核心事实和影响
- `source`: 来源媒体名称（英文原名）
- `url`: 原文链接，必须可访问
- `time`: 相对时间描述（如"2小时前"、"昨天"）
- `tags`: 2-4个中文关键词标签

## 输出流程

1. **并行搜索**：7个来源方向同时搜索，节省时间
2. **去重筛选**：合并结果，按入选/排除标准筛选，保留8-15条
3. **按需深读**：对信息不完整的头部新闻进行 fetch
4. **生成摘要**：为每条资讯撰写中文摘要 + 标注标签
5. **写入HTML**：将数据嵌入模板，写入文件
6. **告知用户**：输出文件路径，并用简短的 markdown 列出今日要闻概览

## 文件输出

将生成的HTML文件保存到用户工作目录下，文件命名格式：
```
诚诚AI日报-[YYYY-MM-DD].html
```

## 注意事项

1. **日期使用当天实际日期**（`currentDate`），不要编造
2. **所有标题必须翻译为中文**，但保持技术术语的准确性（如"GPT-5"、"Llama 4"等原文保留）
3. **来源名称使用英文原名**（如 TechCrunch、The Verge），便于识别
4. **如果某条资讯的URL无法确认**，不要编造URL，改用来源网站首页URL
5. **HTML页面必须完整可独立打开**，所有样式和脚本内嵌，无外部依赖
6. **确保暗色模式适配**：CSS已内置 `prefers-color-scheme: dark` 支持
7. **标签尽量使用标准标签库中的词汇**，保持一致性
8. **卡片排序**：按重要性和时效性综合排序，最重要的新闻排在最前面
9. **并行化优先**：搜索阶段所有请求应并行发起，不要串行等待
