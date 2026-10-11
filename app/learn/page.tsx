import type { Metadata } from "next";
import Link from "next/link";
import { lessons } from "../lib/lessons";

export const metadata: Metadata = {
  title: "学习路线",
  description: "Next.js 学习实验室的推荐学习顺序。",
};

export default function LearnOverview() {
  return (
    <div className="page-stack">
      <section className="hero">
        <span className="eyebrow">START HERE</span>
        <h1>一条从路由走到服务器的路线。</h1>
        <p>
          不需要一次记住整个框架。把每个实验当成一个问题：文件放在哪里？代码运行在哪里？页面如何加载？失败后怎么办？
        </p>
        <div className="hero-actions">
          <Link className="button-primary" href="/learn/routing">
            开始实验 01
          </Link>
        </div>
      </section>

      <section className="info-panel">
        <h2>学习地图</h2>
        <ol>
          {lessons.map((lesson) => (
            <li key={lesson.href}>
              <Link href={lesson.href}>{lesson.title}</Link> — {lesson.summary}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
