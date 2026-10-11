import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConceptNote, LessonFrame } from "../../../ui/lesson";

const topics = {
  hello: {
    title: "你好，动态路由",
    description: "这个页面来自 /learn/dynamic/[slug]/page.tsx。",
  },
  layout: {
    title: "嵌套路由布局",
    description: "layout.tsx 可以为一组动态页面共享结构。",
  },
} as const;

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "layout" }];
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics[slug as keyof typeof topics];

  return {
    title: topic?.title ?? "找不到实验",
    description: topic?.description ?? "这个动态路由不存在。",
  };
}

const code = `// app/learn/dynamic/[slug]/page.tsx
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { slug } = await params;
  const topic = topics[slug];

  if (!topic) notFound();
  return <h1>{topic.title}</h1>;
}

export function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "layout" }];
}`;

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const topic = topics[slug as keyof typeof topics];

  if (!topic) notFound();

  return (
    <LessonFrame
      number="05"
      title="动态路由与 metadata"
      description="方括号目录会捕获 URL 中的动态片段；同一个 page.tsx 可以渲染多个 slug。"
      route={`/learn/dynamic/${slug}`}
      file="app/learn/dynamic/[slug]/page.tsx"
      code={code}
    >
      <div className="demo-highlight">
        <span className="eyebrow">slug = {slug}</span>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
      </div>
      <div className="inline-actions">
        <Link className="button-secondary" href="/learn/dynamic/hello">hello</Link>
        <Link className="button-secondary" href="/learn/dynamic/layout">layout</Link>
        <Link className="button-secondary" href="/learn/dynamic/missing">测试 notFound()</Link>
      </div>
      <ConceptNote title="两个小功能叠在一起">
        <p>`params` 提供 slug；`generateMetadata` 根据 slug 改标题；无效 slug 调用 `notFound()` 进入同目录的 not-found.tsx。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
