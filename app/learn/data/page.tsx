import type { Metadata } from "next";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "服务端取数与 loading",
  description: "在 Server Component 中获取数据，并使用 loading.tsx 提供即时反馈。",
};

const code = `async function getLessons() {
  await wait(1200); // 模拟慢数据源
  return ["Server Component", "loading.tsx"];
}

export default async function Page() {
  const lessons = await getLessons();

  return <ul>{lessons.map((item) => <li key={item}>{item}</li>)}</ul>;
}

// 同目录的 loading.tsx 会自动成为 Suspense fallback。`;

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getLessons() {
  await wait(1200);
  return [
    { name: "Server Component", note: "可以直接 await 数据" },
    { name: "loading.tsx", note: "等待期间先显示 fallback" },
    { name: "Streaming", note: "数据好了再替换页面" },
  ];
}

export default async function DataPage() {
  const data = await getLessons();

  return (
    <LessonFrame
      number="03"
      title="服务端取数与 loading"
      description="页面在服务器上等待数据；同目录的 loading.tsx 会在路由段准备好之前显示。"
      route="/learn/data"
      file="app/learn/data/page.tsx"
      code={code}
    >
      <div className="data-table-wrap">
        <table className="data-table">
          <caption className="sr-only">服务端数据示例</caption>
          <thead>
            <tr>
              <th scope="col">概念</th>
              <th scope="col">说明</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConceptNote title="怎么观察 loading？">
        <p>从左侧导航进入本页，或刷新页面。在开发模式下故意等待的 1.2 秒里，你会看到 loading.tsx。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
