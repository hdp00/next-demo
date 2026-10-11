import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") ?? "学习者";

  return Response.json({
    message: `你好，${name}！`,
    source: "app/api/hello/route.ts",
    time: new Date().toISOString(),
  });
}
