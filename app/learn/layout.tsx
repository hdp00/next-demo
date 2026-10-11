import type { ReactNode } from "react";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return <div data-route-layout="learn">{children}</div>;
}
