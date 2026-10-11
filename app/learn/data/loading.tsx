export default function Loading() {
  return (
    <div className="lesson-frame">
      <div className="loading-state" role="status" aria-live="polite">
        <span className="spinner" aria-hidden="true" />
        <strong>服务器正在准备数据…</strong>
        <p>这个状态来自 app/learn/data/loading.tsx</p>
      </div>
    </div>
  );
}
