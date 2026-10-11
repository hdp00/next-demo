import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { NavLinks } from "./ui/nav-links";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js 学习实验室",
    template: "%s — Next.js 学习实验室",
  },
  description: "用独立实验理解 Next.js App Router 的核心功能。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="brand" href="/" aria-label="返回学习实验室首页">
              <span className="brand-mark">NX</span>
              <span>
                <strong>Next.js 学习实验室</strong>
                <small>App Router · 从文件到行为</small>
              </span>
            </Link>
            <span className="header-note">本项目使用 Next.js 16</span>
          </header>

          <div className="site-body">
            <aside className="sidebar">
              <div className="sidebar-heading">
                <span className="eyebrow">学习地图</span>
                <span className="sidebar-count">8 个实验</span>
              </div>
              <NavLinks />
              <div className="sidebar-tip">
                <strong>阅读方法</strong>
                <p>先看“运行结果”，再展开代码，最后改一个值验证你的理解。</p>
              </div>
            </aside>

            <main className="main-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
