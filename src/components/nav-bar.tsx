"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border border-neutral-900/10 bg-white/85 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? "shadow-lg shadow-black/10" : "shadow-sm shadow-black/5"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <Link href="/" aria-label="Samvay360 home" className="flex items-center transition hover:opacity-80">
            <Logo tone="light" className="text-base" />
          </Link>

          <nav className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wider sm:flex">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2.5 transition-colors duration-300 ${
                    active ? "bg-ink text-white" : "text-neutral-500 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-lg border border-ink/20 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors duration-300 hover:border-copper hover:bg-copper hover:text-white sm:inline-block"
            >
              Contact
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink sm:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" className="border-t border-ink/10 px-3 pb-3 pt-2 sm:hidden">
            <ul className="font-mono text-sm uppercase tracking-wider">
              {[...links, { href: "/contact", label: "Contact" }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3.5 text-neutral-600 hover:bg-neutral-100 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
