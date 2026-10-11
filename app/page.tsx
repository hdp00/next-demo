import Link from "next/link";
import { lessons } from "./lib/lessons";
import { LessonCard } from "./ui/lesson-card";

export default function Home() {
  return (
    <div className="page-stack">
      <section className="hero">
        <span className="eyebrow">NEXT.JS / LEARNING LAB</span>
        <h1>把 Next.js 拆成 8 个能运行的小实验。</h1>
        <p>
          这是一个给初学者的 App Router 学习项目。每个页面只聚焦一个概念：先观察运行结果，再看独立代码，最后回到编辑器修改它。
        </p>
        <div className="hero-actions">
          <Link className="button-primary" href="/learn/routing">
            从第一个实验开始 →
          </Link>
          <Link className="button-secondary" href="/learn">
            查看学习路线
          </Link>
        </div>
      </section>

      <section className="stats-grid" aria-label="项目概览">
        <div className="stat-card">
          <strong>08</strong>
          <span>独立功能实验</span>
        </div>
        <div className="stat-card">
          <strong>01</strong>
          <span>共享学习壳层</span>
        </div>
        <div className="stat-card">
          <strong>0</strong>
          <span>外部 API 依赖</span>
        </div>
      </section>

      <section className="page-stack" aria-labelledby="lessons-title">
        <div className="section-heading">
          <span className="eyebrow">实验目录</span>
          <h2 id="lessons-title">按文件理解行为</h2>
          <p>每张卡都标出了真实文件位置，方便你边看边在项目里定位。</p>
        </div>
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.href} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className="info-panel">
        <h2>推荐顺序</h2>
        <ol>
          <li>先理解 `page.tsx`、目录和 URL 的关系。</li>
          <li>再区分 Server Component 与 Client Component。</li>
          <li>接着观察加载、错误、动态路由和分页。</li>
          <li>最后尝试 API Route Handler 与 Server Action。</li>
        </ol>
      </section>
    </div>
  );
}
