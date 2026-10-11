import type { Metadata } from "next";
import { ApiDemo } from "../../ui/api-demo";
import { ConceptNote, LessonFrame } from "../../ui/lesson";

export const metadata: Metadata = {
  title: "Route Handler",
  description: "使用 app/api/hello/route.ts 创建一个 JSON API。",
};

const code = `// app/api/hello/route.ts
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");

  return Response.json({
    message: \`你好，\${name}！\`,
  });
}`;

export default function ApiPage() {
  return (
    <LessonFrame
      number="07"
      title="Route Handler"
      description="App Router 可以在 app/api 下直接定义后端处理器，使用 Web Request/Response API 返回 JSON。"
      route="/learn/api"
      file="app/api/hello/route.ts"
      code={code}
    >
      <ApiDemo />
      <ConceptNote title="页面和 API 是两条路由">
        <p>页面地址是 `/learn/api`，接口地址是 `/api/hello`。客户端组件用 fetch 调用接口，也可以直接在浏览器打开 JSON。</p>
      </ConceptNote>
    </LessonFrame>
  );
}
