# Next.js 学习实验室

这是一个面向初学者的 Next.js 16 App Router 学习项目。每个实验只讲一个概念，并且都能在浏览器中直接运行。

## 开始使用

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)，从首页或左侧学习地图开始。

## 实验目录

| 实验 | 路由 | 重点文件 | 你会看到什么 |
| --- | --- | --- | --- |
| 01 | `/learn/routing` | `app/learn/routing/page.tsx` | 文件夹如何变成 URL，`Link` 如何导航 |
| 02 | `/learn/server-client` | `app/ui/counter.tsx` | Server Component 和 Client Component 如何组合 |
| 03 | `/learn/data` | `app/learn/data/loading.tsx` | 服务端等待数据和路由级 loading |
| 04 | `/learn/pagination` | `app/learn/pagination/page.tsx` | `searchParams`、搜索和服务器分页 |
| 05 | `/learn/dynamic/hello` | `app/learn/dynamic/[slug]/page.tsx` | 动态参数、`generateMetadata`、`notFound` |
| 06 | `/learn/errors` | `app/learn/errors/error.tsx` | 错误边界和 `retry()` |
| 07 | `/learn/api` | `app/api/hello/route.ts` | Route Handler 和 JSON API |
| 08 | `/learn/actions` | `app/learn/actions/actions.ts` | Server Action、表单提交和 pending 状态 |

## 推荐学习顺序

1. 先理解 `page.tsx`、目录和 URL 的关系。
2. 再理解默认 Server Component，以及什么时候需要 `use client`。
3. 观察 `loading.tsx`、`error.tsx` 和 `not-found.tsx` 如何包裹路由段。
4. 学习用 `searchParams` 做查询/分页，用动态目录读取 `params`。
5. 最后看 Route Handler 和 Server Action，理解页面之外的服务器能力。

## 项目约定

- 页面和说明使用简体中文，Next.js 文件名/API 保留英文。
- 示例数据尽量写在项目内，不依赖第三方 API，保证初学者可以离线阅读和运行。
- `DESIGN.md` 记录视觉 token 与界面语言。
- `UX-CONTRACT.md` 记录跨页面的导航、加载、错误和可访问性约定。

## 校验

```bash
pnpm lint
```

如果 pnpm 在本机没有及时返回，也可以直接运行已安装的 CLI：

```powershell
& .\node_modules\.bin\tsc.cmd --noEmit
& .\node_modules\.bin\eslint.cmd app
```
