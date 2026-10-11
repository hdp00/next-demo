"use client";

export default function ErrorBoundary({ retry }: { retry: () => void }) {
  return (
    <div className="error-state" role="alert">
      <strong>这个实验发生了一个错误</strong>
      <p>这是由 page.tsx 主动抛出的演示错误，页面外壳仍然可用。</p>
      <button className="button-primary" type="button" onClick={() => retry()}>
        重试
      </button>
    </div>
  );
}
