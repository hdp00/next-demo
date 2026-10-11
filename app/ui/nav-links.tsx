"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { number: "00", href: "/", label: "实验室首页" },
  { number: "—", href: "/learn", label: "学习路线" },
  { number: "01", href: "/learn/routing", label: "文件路由与 Link" },
  { number: "02", href: "/learn/server-client", label: "Server / Client" },
  { number: "03", href: "/learn/data", label: "取数与 loading" },
  { number: "04", href: "/learn/pagination", label: "分页与 searchParams" },
  { number: "05", href: "/learn/dynamic/hello", label: "动态路由" },
  { number: "06", href: "/learn/errors", label: "错误边界" },
  { number: "07", href: "/learn/api", label: "Route Handler" },
  { number: "08", href: "/learn/actions", label: "Server Action" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-list" aria-label="学习实验导航">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : link.href === "/learn/dynamic/hello"
              ? pathname.startsWith("/learn/dynamic/")
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            className="nav-link"
            data-active={active}
            href={link.href}
            aria-current={active ? "page" : undefined}
          >
            <span className="nav-index">{link.number}</span>
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
