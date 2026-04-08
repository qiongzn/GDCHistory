# 中国计算几何四十年（1982–2025）

> 一段与国家工业、学科命运同行的记忆

本仓库是《中国计算几何四十年》在线书籍的 VitePress 源码。

---

## 快速开始

### 环境要求

- Node.js 18+
- pnpm（推荐）或 npm

### 安装依赖

```bash
pnpm install
# 或
npm install
```

### 本地预览

```bash
pnpm dev
# 浏览器打开 http://localhost:5173
```

### 构建生产版本

```bash
pnpm build
# 输出到 docs/.vitepress/dist/
```

### 本地预览构建结果

```bash
pnpm preview
```

---

## 项目结构

```
cagd-book/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # 站点配置（导航、侧边栏等）
│   │   └── theme/
│   │       ├── index.ts        # 主题入口（图片放大插件）
│   │       └── custom.css      # 自定义样式
│   ├── public/
│   │   ├── logo.svg
│   │   └── images/             # 图片目录（按章节分文件夹）
│   │       ├── placeholder.svg
│   │       ├── chapter1/
│   │       ├── chapter2/
│   │       └── ...
│   ├── index.md                # 首页
│   └── chapters/
│       ├── preface.md          # 序言
│       ├── about.md            # 关于本书
│       ├── 01-dawn/            # 第一篇：需求的召唤
│       │   ├── ch01.md
│       │   └── ch02.md
│       ├── 02-spark/           # 第二篇：星火初燃
│       │   ├── ch03.md
│       │   ├── ch04.md
│       │   └── ch05.md
│       ├── 03-schools/         # 第三篇：学派并行
│       │   ├── ch06.md
│       │   ├── ch07.md
│       │   ├── ch08.md
│       │   └── ch09.md
│       ├── 04-nineties/        # 第四篇：风雨九十年代
│       │   ├── ch10.md
│       │   ├── ch11.md
│       │   └── ch12.md
│       ├── 05-inheritance/     # 第五篇：薪火相传
│       │   ├── ch13.md
│       │   ├── ch14.md
│       │   └── ch15.md
│       ├── 06-flourish/        # 第六篇：百花齐放
│       │   ├── ch16.md
│       │   ├── ch17.md
│       │   └── ch18.md
│       ├── epilogue/           # 终篇
│       │   ├── ch19.md
│       │   └── ch20.md
│       └── appendix/           # 附录
│           ├── committee.md
│           ├── timeline.md
│           ├── biographies.md
│           ├── oral-history.md
│           └── sources.md
└── package.json
```

---

## 图片管理规范

所有图片存放在 `docs/public/images/` 下，按篇章分子目录：

```
images/
├── placeholder.svg      # 通用占位图
├── chapter01/           # 第1章图片
│   ├── fig1-1_船体放样.jpg
│   └── fig1-2_数控机床.jpg
├── chapter02/
└── ...
```

**图片命名规范**：`fig{章节}-{序号}_{简短描述}.{扩展名}`

**图片格式建议**：
- 几何图形、示意图 → `.svg`（清晰，体积小）
- 历史照片 → `.jpg`（压缩率高）
- 需要透明背景的图 → `.png`

**在 Markdown 中引用**：
```markdown
![图片描述](../../public/images/chapter01/fig1-1_船体放样.jpg)
*图 1-1　图注文字写在这里*
```

图片支持**点击放大**（已集成 medium-zoom）。

---

## 写作规范

### 章节结构

每章建议包含：
- 章节标题（`# 第N章　标题`）
- 引言引用块（`> 引用文字`）
- 若干节（`## N.N 节标题`）
- 章末关键词提示块
- 下一章导航链接

### 人物时间线

使用内置的 `.timeline` CSS 类：

```html
<ul class="timeline">
  <li><strong>1982</strong> — 事件描述</li>
  <li><strong>1986</strong> — 事件描述</li>
</ul>
```

### 信息提示框

```markdown
::: tip 本章关键词
关键词1 · 关键词2 · 关键词3
:::

::: info 待补充
需要进一步核实或补充的内容。
:::
```

---

## 部署

### GitHub Pages

1. 修改 `docs/.vitepress/config.mts` 中的 `base` 为你的仓库名：
   ```ts
   base: '/cagd-book/',
   ```
2. 推送到 GitHub，启用 Pages（选择 GitHub Actions）
3. 创建 `.github/workflows/deploy.yml`（参考 VitePress 官方文档）

### 部署到现有网站子路径

修改 `base` 为目标子路径，构建后将 `dist/` 目录内容复制到服务器对应目录。

---

## 贡献指南

欢迎以下形式的贡献：
- 补充历史资料、更正史实错误
- 提供历史照片（请确认版权）
- 完善附录中的人物小传和时间轴
- 口述回忆（可联系编委会）

提交 PR 前请先开 Issue 说明修改意图。

---

## 许可证

本书文字内容版权归编委会所有，未经授权不得转载。  
代码部分（VitePress 配置、主题样式）采用 MIT 许可证。
