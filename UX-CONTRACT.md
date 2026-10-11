# UX Contract

## Product context

- Audience: Next.js App Router 初学者
- Primary jobs: 了解一个框架机制、运行对应示例、阅读最小代码
- Target market(s): 中文学习场景
- Active locales: `zh-CN`
- Language/content register and native-review policy: 简体中文解释；Next.js 文件名、API 名称和代码保持原样
- Timezone/calendar policy: 示例不展示业务时间，不涉及时区
- Accessibility target: WCAG 2.2 AA

## Business-context sources

本项目是教学实验，不包含业务权限、支付、隐私或不可逆数据操作。Next.js 当前版本的本地文档位于 `node_modules/next/dist/docs/`，是 API 行为的实现参考。

## Visual contract

- Project `DESIGN.md`: `DESIGN.md`
- Token ownership model: existing runtime canonical
- Runtime design-system/token source: `app/globals.css`
- Mapping/export/adapters: CSS variables → Tailwind v4 `@theme inline` → shared classes
- Token drift gate: review changed variables against `DESIGN.md`
- Supported themes: light; follows system text rendering but keeps a stable learning canvas
- Design-context owner/review policy: shared shell and lesson frame own cross-screen consistency

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Scrollbar | `app/globals.css` | `DESIGN.md` | code-panel horizontal overflow | typecheck + browser review |
| Search | URL GET form in the pagination lesson | page `searchParams` | query + page | route behavior review |
| Pagination | URL `Link` controls | page `searchParams` | server page navigation | range/current/disabled review |
| Form | native labeled form + `ActionForm` | lesson page | server action demo | typecheck + browser review |

## Component behavior

| Component | Default | Hover | Focus | Active | Disabled | Busy | Error |
|---|---|---|---|---|---|---|---|
| Button | labeled action | stronger border | visible primary ring | darker surface | muted + no action | stable size + status text | inline message |
| Input | visible label | border contrast | visible ring | n/a | muted | stable width | inline correction hint |
| Search | URL-backed GET input | border contrast | visible ring | n/a | n/a | route loading UI | no-results explanation |
| Table/list | stable row height | row tint | focusable links | current page marker | n/a | loading route state | retry/instruction |

## Dataset navigation

- Admin tables: not applicable; the pagination lesson uses server pagination as the safe bounded example.
- Exploratory lists: not applicable.
- URL state: query and page are committed to the URL so refresh and Back preserve the lesson state.
- Page size: fixed at 4 items to keep the teaching example readable.
- Empty/no-results/error/loading treatment: no-results text, `loading.tsx` for slow server rendering, `error.tsx` for thrown route errors.
- Back/scroll restoration: use native Next.js Link navigation and URL state.

## Navigation and responsive behavior

- Route document title policy: `{页面名} — Next.js 学习实验室` through `metadata` or `generateMetadata`.
- Route error / 403 page behavior: route error shows a retry action; teaching-only not-found shows a link home and explains the dynamic slug.
- Breadcrumb/tab/route-state policy: left navigation is persistent on desktop and horizontally scrollable on narrow screens; no tabs are needed.
- Sidebar/drawer/bottom-sheet transformation: sidebar becomes horizontal navigation below `lg`.
- Responsive table strategy: the table frame scrolls horizontally; the page does not hide overflow.
- Truncation/full-value access: code wraps only at the panel boundary; route and file labels remain visible.

## Overlays and feedback

- Dialog primitive: not applicable
- Destructive confirmation levels: not applicable
- Toast placement/duration/deduplication: not applicable; examples use inline status text
- Alert/banner scope and persistence: inline to the relevant lesson
- Tooltip delay/dismissal: not applicable
- Unsaved-changes behavior: not applicable
- Layer/z-index contract: no overlays in the learning shell

## Async and resilience

- Mutation default: server action is pessimistic and returns a message after server acknowledgement.
- Idempotency and duplicate-submit policy: the action button uses `useFormStatus` and disables while pending.
- Auto-save/draft recovery: not applicable
- Offline/read-stale/write behavior: examples use local data and do not claim offline mutation support.
- Retry/backoff/timeout behavior: route error exposes `retry()`; no automatic retry loop.
- Stale-request cancellation/invalidation and pending-state ownership: server route navigation owns loading; client API demo owns one request at a time.
- Dialog/form preservation and retry after mutation failure: inline form state remains in the client component.

## Validation

- Schema/validation layer: small teaching examples use explicit string checks.
- Trigger timing: submit for the server action form.
- Error summary/inline policy: one inline status message close to the form.
- Sensitive-value handling: no secrets or PII in examples.
- `noValidate`, first-invalid focus, duplicate-submit prevention, unsaved changes, and submit recovery: form uses `noValidate`, labels, stable pending button, and inline recovery.

## Verification

- Required static commands: `node_modules/.bin/tsc.cmd --noEmit`; `node_modules/.bin/eslint.cmd app` when available.
- Browser/device/locale/theme matrix: desktop and narrow viewport, `zh-CN` copy.
- Accessibility checks: semantic links/buttons/forms, focus-visible styles, labels, live status text.
- Component-state/visual regression coverage: manually review loading, error, not-found, empty query, and pending form states.
