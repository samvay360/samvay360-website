"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-copper/20 bg-ink/95 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_28px_-16px_rgba(0,0,0,0.65)] backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_16px_36px_-14px_rgba(0,0,0,0.75)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center transition hover:opacity-80">
          <Logo className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-neutral-400 sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 transition-all duration-300 ${
                  active
                    ? "bg-copper text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
