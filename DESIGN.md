---
version: alpha
name: "Next.js 学习实验室"
description: "面向初学者的 Next.js App Router 实验台：安静的纸面背景、清晰的路由标签和可复制的代码片段。"
colors:
  primary: "#2457D6"
  primary-soft: "#EAF0FF"
  ink: "#182230"
  muted: "#657386"
  paper: "#F7F9FC"
  surface: "#FFFFFF"
  code: "#F2F5F8"
  line: "#DDE5EF"
  success: "#147A5A"
  warning: "#A85B00"
  danger: "#B42318"
typography:
  sans:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    lineHeight: "1.6"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Microsoft YaHei, monospace"
    fontSize: "0.82rem"
    lineHeight: "1.65"
rounded:
  DEFAULT: "0.75rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
spacing:
  section-gap: "2.5rem"
  page-max: "80rem"
components:
  button:
    height: "2.5rem"
    radius: "0.75rem"
  card:
    radius: "1rem"
    border: "1px solid var(--line)"
  code:
    radius: "0.75rem"
    background: "var(--code)"
---

# Next.js 学习实验室设计系统

## Overview

### Creative North Star

这是一本可以运行的“实验记录册”：每个功能像一张带路由标签的实验卡，左侧给出概念和文件位置，右侧给出真实运行结果与最小代码。它服务于刚开始接触 App Router 的学习者，而不是追求产品发布感。

### Product context and register

- **Audience and primary job:** 初学 Next.js App Router 的前端开发者；快速理解一个框架机制、打开对应路由、对照一段独立代码。
- **Target market(s) and evidence:** 中文学习场景；证据来自当前用户要求“供初学者使用”和“对应文档说明”。
- **Locale(s) and language policy:** `zh-CN`；Next.js API 名称和文件名保留英文，解释使用简体中文。
- **Usage scene:** 桌面端编辑器旁的浏览器，也要能在手机上顺序阅读；信息密度中等，代码可横向滚动。
- **Register:** 产品型学习工具，克制、清楚、可操作。
- **Memorable signature:** 每个实验都显示真实路由标签和对应文件名，让“文件结构 → 页面行为”的关系一眼可见。
- **Restraint:** 不使用复杂插画、渐变背景、无意义的动画或装饰性图标。
- **Anti-references:** 不做成课程营销落地页、仪表盘或堆满徽章的代码游乐场；它应优先帮助读者定位概念。
- **Token ownership/runtime mapping:** 本项目采用 Model B；`app/globals.css` 是运行时 token 的 canonical source，本文档镜像其语义值，Tailwind v4 的 `@theme inline` 只负责适配。

## Colors

纸面背景 `paper` 保持轻微冷灰，内容面板使用 `surface`，正文使用 `ink`，说明使用 `muted`。`primary` 只用于导航、链接和主要动作；`success`、`warning`、`danger` 仅表达状态。代码面板固定使用 `code`，不与状态色混用。焦点环使用 primary 的可感知外圈，不能只依赖颜色表达当前状态。

## Typography

正文使用系统无衬线字体，中文直接使用平台可用的中文字体；文件名、路由和代码使用系统等宽字体。这样项目不需要联网下载字体，克隆后即可构建。标题通过字号和留白建立层级，不依赖全大写。代码面板允许横向滚动，长中文说明正常换行。

## Layout

桌面端使用“固定宽度学习地图 + 自然滚动内容”的双栏结构，内容最大宽度约 80rem。移动端学习地图变成横向可滚动导航，内容区域保持文档顺序。代码区是自己的横向滚动面，不限制页面整体高度，也不隐藏全局滚动条。

## Elevation & Depth

层级主要由背景色和 1px 边框表达；卡片只使用非常轻的底色变化，不依赖大阴影。代码区域与演示区域保持独立，加载、错误和空状态不改变外框尺寸。

## Shapes

卡片和代码面板使用 `1rem` 圆角，按钮使用 `0.75rem`，导航标签使用小圆角。边框统一使用 `line`，不使用随页面变化的随机圆角。交互元素必须保留清晰的 hover、focus-visible、active 和 disabled 状态。

## Components

### Foundational visual states

默认状态使用白色面板；hover 提高边框对比度；focus-visible 使用 2px primary 外环；busy 状态保持控件尺寸；错误使用文字说明加语义色；加载使用稳定高度的轻量 spinner/文字，不让页面跳动。

### Buttons and actions

主要动作使用 primary 实心按钮，次要动作使用边框按钮，路由跳转使用真实的 `Link`。按钮文案使用具体动词，如“运行请求”“重试”，不使用无含义的“确定”。

### Navigation and data display

左侧导航标出当前路由；实验页提供当前概念、运行区域和代码区域。分页使用 URL + `Link`，表格使用原生语义元素，窄屏允许横向滚动。

### Forms and overlays

示例表单使用原生 label、`noValidate` 和文字状态反馈。当前项目没有需要模态框、toast 或复杂选择器的业务流程，不引入伪造的组件。

### Iconography

不依赖图标库；用短标签、箭头字符和语义文字表达导航，避免图标含义不清。

### Motion

只保留控件 hover 和 loading 的必要反馈。尊重 `prefers-reduced-motion`，学习内容不通过动画才能理解。

### Content and data visualization

文案直接回答“这个文件做什么”和“你可以如何验证”。示例数据是本地固定数据，避免初学者因为第三方 API 或网络失败无法运行。

## Do's and Don'ts

- **Do:** 每个实验只突出一个 Next.js 机制，并展示文件路径。
- **Do:** 用 URL、真实 Link、原生表格和可访问的按钮展示基础行为。
- **Don't:** 把所有页面都标记成 Client Component。
- **Don't:** 用装饰性动画或复杂组件掩盖框架原理。
