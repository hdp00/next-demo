import Link from "next/link";

export default function DynamicNotFound() {
  return (
    <div className="error-state">
      <strong>这个实验不存在</strong>
      <p>动态路由没有找到对应的 slug。</p>
      <Link className="button-secondary" href="/learn/dynamic/hello">回到有效示例</Link>
    </div>
  );
}
