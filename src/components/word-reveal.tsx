"use client";

import { useEffect, useRef } from "react";

/**
 * Large manifesto paragraph. Words darken one by one as the block scrolls
 * through the viewport. Not pinned: the page scrolls normally.
 */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const root = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const { top, height } = el.getBoundingClientRect();
      // 0 when the block's top hits 85% of the viewport, 1 when its bottom reaches 45%
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.45 - height;
      const p = reduce ? 1 : Math.min(Math.max((start - top) / (start - end), 0), 1);
      const lit = p * spans.length;
      spans.forEach((s, i) => {
        s.style.opacity = String(Math.min(Math.max(lit - i, 0), 1) * 0.8 + 0.2);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <p ref={root} className={className}>
      {words.map((w, i) => (
        <span key={i} data-w style={{ opacity: 0.2 }} className="transition-opacity duration-150">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
