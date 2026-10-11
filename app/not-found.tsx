import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-stack">
      <div className="error-state">
        <span className="eyebrow">404 / NOT FOUND</span>
        <strong>这个页面不存在</strong>
        <p>检查一下 URL，或者回到学习实验室首页。</p>
        <Link className="button-primary" href="/">回到首页</Link>
      </div>
    </div>
  );
}
