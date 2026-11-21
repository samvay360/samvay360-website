"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border border-neutral-900/10 bg-white/85 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? "shadow-lg shadow-black/10" : "shadow-sm shadow-black/5"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <Link href="/" aria-label="Samvay360 home" className="flex items-center transition hover:opacity-80">
            <Logo tone="light" className="text-base" />
          </Link>

          <nav className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wider md:flex">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-lg px-3.5 py-2.5 transition-colors duration-300 ${
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
              className="hidden rounded-lg border border-ink/20 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors duration-300 hover:border-copper hover:bg-copper hover:text-white md:inline-block"
            >
              Contact
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink transition-colors duration-300 hover:border-copper hover:text-copper md:hidden"
            >
              <span aria-hidden className="relative block h-3.5 w-5">
                <span className={`absolute left-0 top-0 h-[1.8px] w-5 rounded bg-current transition-transform duration-300 ease-out ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[1.8px] w-5 rounded bg-current transition-transform duration-300 ease-out ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav id="mobile-menu" aria-hidden={!open} inert={!open} className="overflow-hidden">
            <ul className="border-t border-ink/10 px-3 pb-3 pt-2 font-mono text-sm uppercase tracking-wider">
              {[...links, { href: "/contact", label: "Contact" }].map((link, i) => (
                <li
                  key={link.href}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                  className={`transition-all duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3.5 text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
