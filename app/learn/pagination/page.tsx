import type { Metadata } from "next";
import Link from "next/link";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "searchParams 与分页",
  description: "用 URL searchParams 实现一个简单的服务器分页列表。",
};

const products = [
  { id: "NX-01", name: "文件路由", type: "Routing" },
  { id: "NX-02", name: "服务器组件", type: "Rendering" },
  { id: "NX-03", name: "客户端组件", type: "Rendering" },
  { id: "NX-04", name: "流式加载", type: "Streaming" },
  { id: "NX-05", name: "动态路由", type: "Routing" },
  { id: "NX-06", name: "错误边界", type: "Resilience" },
  { id: "NX-07", name: "Route Handler", type: "Backend" },
  { id: "NX-08", name: "Server Action", type: "Mutation" },
  { id: "NX-09", name: "Metadata", type: "SEO" },
];

const code = `export default async function Page({ searchParams }) {
  const { page = "1", query = "" } = await searchParams;
  const filtered = products.filter((item) =>
    item.name.includes(query)
  );
  const currentItems = filtered.slice((page - 1) * 4, page * 4);

  return (
    <>
      <form method="get">
        <input name="query" defaultValue={query} />
      </form>
      {currentItems.map((item) => <p key={item.id}>{item.name}</p>)}
    </>
  );
}`;

type PaginationPageProps = {
  searchParams: Promise<{ page?: string; query?: string }>;
};

export default async function PaginationPage({ searchParams }: PaginationPageProps) {
  const params = await searchParams;
  const query = params.query ?? "";
  const requestedPage = Number(params.page ?? "1");
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / 4));
  const page = Math.min(Math.max(requestedPage || 1, 1), pageCount);
  const items = filtered.slice((page - 1) * 4, page * 4);

  function pageHref(nextPage: number) {
    const nextParams = new URLSearchParams({ page: String(nextPage) });
    if (query) nextParams.set("query", query);
    return `/learn/pagination?${nextParams.toString()}`;
  }

  return (
    <LessonFrame
      number="04"
      title="searchParams 与分页"
      description="把查询和页码放在 URL 中，服务器组件读取它们，再返回当前页的数据。"
      route="/learn/pagination"
      file="app/learn/pagination/page.tsx"
      code={code}
    >
      <form className="form-stack" method="get" noValidate>
        <label htmlFor="query">按概念搜索</label>
        <input id="query" name="query" defaultValue={query} placeholder="例如：路由" />
        <div className="inline-actions">
          <button className="button-primary" type="submit">应用筛选</button>
          <Link className="button-secondary" href="/learn/pagination">清除</Link>
        </div>
      </form>

      {items.length > 0 ? (
        <>
          <p className="status-row" aria-live="polite">
            显示第 {(page - 1) * 4 + 1}–{Math.min(page * 4, filtered.length)} 条，共 {filtered.length} 条
          </p>
          <div className="data-table-wrap">
            <table className="data-table">
              <caption className="sr-only">分页学习概念列表</caption>
              <thead>
                <tr><th scope="col">编号</th><th scope="col">概念</th><th scope="col">类别</th></tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.type}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav className="pagination" aria-label="分页导航">
            <Link className="page-link" href={pageHref(Math.max(1, page - 1))} aria-disabled={page === 1 ? "true" : undefined}>←</Link>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <Link className="page-link" key={pageNumber} href={pageHref(pageNumber)} data-current={pageNumber === page} aria-current={pageNumber === page ? "page" : undefined}>{pageNumber}</Link>
            ))}
            <Link className="page-link" href={pageHref(Math.min(pageCount, page + 1))} aria-disabled={page === pageCount ? "true" : undefined}>→</Link>
          </nav>
        </>
      ) : (
        <div className="empty-state" role="status">
          <strong>没有匹配的概念</strong>
          <p>试试“路由”或点击“清除”。</p>
        </div>
      )}

      <ConceptNote title="这个分页为什么是 Server Component？">
        <p>分页按钮是普通 Link，页码来自 URL，真正的数据筛选发生在服务器。这样刷新、分享和浏览器后退都能保留状态。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
