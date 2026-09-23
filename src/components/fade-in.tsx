import type { ReactNode } from "react";

/**
 * Plays the fade-up animation immediately on first paint via pure CSS —
 * no IntersectionObserver, no client JS. Use for above-the-fold content
 * so it never depends on hydration to become visible.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal is-visible ${className ?? ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
