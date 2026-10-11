import type { Metadata } from "next";
import Link from "next/link";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "error.tsx 与 retry",
  description: "用 error.tsx 处理路由段中的运行时错误。",
};

const code = `// app/learn/errors/page.tsx
if (shouldFail) {
  throw new Error("演示一个运行时错误");
}

// app/learn/errors/error.tsx
"use client";

export default function Error({ retry }) {
  return <button onClick={() => retry()}>重试</button>;
}`;

type ErrorPageProps = {
  searchParams: Promise<{ fail?: string }>;
};

export default async function ErrorLessonPage({ searchParams }: ErrorPageProps) {
  const { fail } = await searchParams;

  if (fail === "1") {
    throw new Error("这是一个故意抛出的学习错误");
  }

  return (
    <LessonFrame
      number="06"
      title="error.tsx 与 retry"
      description="错误边界让一个路由段在出错时显示自己的恢复界面，而不是让整个应用变成空白。"
      route="/learn/errors"
      file="app/learn/errors/error.tsx"
      code={code}
    >
      <div className="status-row" data-tone="warning">
        当前页面正常。点击下面的链接，进入同一路由段的错误状态。
      </div>
      <div className="inline-actions">
        <Link className="button-primary" href="/learn/errors?fail=1">故意触发错误</Link>
        <Link className="button-secondary" href="/learn/errors">恢复正常</Link>
      </div>
      <ConceptNote title="error.tsx 的限制">
        <p>错误组件必须是 Client Component，因为它需要响应“重试”按钮。生产环境不要把敏感的原始错误细节直接渲染给用户。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
