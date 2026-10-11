import type { Metadata } from "next";
import Link from "next/link";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "文件路由与 Link",
  description: "学习 Next.js App Router 的文件路由和 Link 组件。",
};

const code = `// app/learn/routing/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>这是一个路由页面</h1>
      <Link href="/learn/server-client">
        去下一个实验
      </Link>
    </main>
  );
}`;

export default function RoutingPage() {
  return (
    <LessonFrame
      number="01"
      title="文件路由与 Link"
      description="在 App Router 中，一个文件夹代表一个路由段，page.tsx 让这个路由真正公开可访问。"
      route="/learn/routing"
      file="app/learn/routing/page.tsx"
      code={code}
    >
      <div className="demo-toolbar">
        <span className="demo-label">当前页面</span>
        <span className="route-label">/learn/routing</span>
      </div>
      <p>下面两个链接都是真实的 Next.js 客户端导航，不是手写的 window.location。</p>
      <div className="inline-actions">
        <Link className="button-primary" href="/learn/server-client">
          去实验 02 →
        </Link>
        <Link className="button-secondary" href="/">
          回到首页
        </Link>
      </div>
      <ConceptNote title="记住这件事">
        <p>
          `app/about/page.tsx` 对应 `/about`。`layout.tsx` 可以包住一组子页面，但只有 `page.tsx` 会成为最终页面。
        </p>
      </ConceptNote>
    </LessonFrame>
  );
}
