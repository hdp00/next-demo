import type { Metadata } from "next";
import { Counter } from "../../ui/counter";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "Server 与 Client Components",
  description: "理解 Next.js 中服务器组件和客户端组件的边界。",
};

const code = `// page.tsx 默认是 Server Component
import { Counter } from "./Counter";

export default function Page() {
  const renderedOn = "服务器";

  return (
    <div>
      <p>这段文字来自：{renderedOn}</p>
      <Counter />
    </div>
  );
}

// Counter.tsx
"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`;

export default function ServerClientPage() {
  return (
    <LessonFrame
      number="02"
      title="Server / Client Components"
      description="页面默认运行在服务器；只有需要 state、事件或浏览器 API 的小组件才添加 use client。"
      route="/learn/server-client"
      file="page.tsx + ui/counter.tsx"
      code={code}
    >
      <div className="status-row" data-tone="warning">
        当前页面和说明由服务器渲染，下面的计数器由客户端接管。
      </div>
      <Counter />
      <ConceptNote title="为什么不把整个页面都设为 client？">
        <p>
          `use client` 会把它的导入模块放进客户端 bundle。把边界放在交互组件上，可以少发送 JavaScript，也能让服务器安全地访问数据。
        </p>
      </ConceptNote>
    </LessonFrame>
  );
}
