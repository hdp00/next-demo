"use client";

import { useState } from "react";

type ApiResult = {
  message: string;
  source: string;
  time: string;
};

export function ApiDemo() {
  const [result, setResult] = useState<ApiResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function callApi() {
    setIsLoading(true);
    const response = await fetch("/api/hello?name=学习者");
    const data = (await response.json()) as ApiResult;
    setResult(data);
    setIsLoading(false);
  }

  return (
    <div>
      <div className="inline-actions">
        <button
          className="button-primary"
          type="button"
          onClick={callApi}
          disabled={isLoading}
        >
          {isLoading ? "请求中…" : "运行请求"}
        </button>
        <a className="button-secondary" href="/api/hello?name=浏览器">
          直接打开 API
        </a>
      </div>
      <div className="status-row" data-tone={result ? undefined : "warning"} aria-live="polite">
        {result ? `${result.message}（来自 ${result.source}）` : "点击按钮，让客户端请求 Route Handler。"}
      </div>
    </div>
  );
}
