import type { ReactNode } from "react";

type LessonFrameProps = {
  number: string;
  title: string;
  description: string;
  route: string;
  file: string;
  code: string;
  children: ReactNode;
};

export function LessonFrame({
  number,
  title,
  description,
  route,
  file,
  code,
  children,
}: LessonFrameProps) {
  return (
    <article className="lesson-frame">
      <header className="lesson-header">
        <div className="lesson-meta">
          <span className="eyebrow">实验 {number}</span>
          <span className="route-label">{route}</span>
        </div>
        <h1>{title}</h1>
        <p className="lesson-description">{description}</p>
      </header>

      <div className="lesson-layout">
        <section className="demo-panel" aria-labelledby="demo-title">
          <h2 id="demo-title">运行结果</h2>
          {children}
        </section>

        <section className="code-panel" aria-label={`${file} 代码`}>
          <div className="code-header">
            <span className="code-dot" aria-hidden="true" />
            <span>{file}</span>
          </div>
          <pre>
            <code>{code}</code>
          </pre>
        </section>
      </div>
    </article>
  );
}

export function ConceptNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="info-panel">
      <h2>{title}</h2>
      {children}
    </aside>
  );
}
