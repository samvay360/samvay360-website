import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { BrandRing } from "@/components/brand-ring";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-ink"
    >
      <BrandRing
        spin={false}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 opacity-10"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-sm font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something together.
            </h2>
            <a
              href="mailto:hello@samvay360.com"
              className="mt-4 inline-block text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-copper-light"
            >
              hello@samvay360.com
            </a>
          </div>

          <nav className="flex gap-8 text-sm text-neutral-400">
            <Link href="/" className="transition-colors duration-300 hover:text-white">
              Home
            </Link>
            <Link
              href="/projects"
              className="transition-colors duration-300 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/products/alu360"
              className="transition-colors duration-300 hover:text-white"
            >
              Alu360
            </Link>
          </nav>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Samvay360</span>
          <span>Technology that brings business together.</span>
        </div>
      </div>
    </footer>
  );
}
