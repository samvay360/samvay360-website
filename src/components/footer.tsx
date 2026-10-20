import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative min-h-[70vw] overflow-hidden border-t border-ink/10 bg-white sm:min-h-[34vw]"
    >
      {/* Watermark: full-width word anchored to the footer bottom, behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none whitespace-nowrap text-center font-devanagari text-[32vw] font-bold leading-[0.95] text-ink/[0.05]"
      >
        समवाय
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Tell us how you work. We&apos;ll show you what we can build.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-ink px-7 py-4 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
            >
              Get in touch
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 block w-fit text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 hover:text-copper hover:decoration-copper"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-1 text-sm text-neutral-600 sm:max-w-lg sm:justify-end">
            <Link href="/" className="inline-block py-2 transition-colors duration-300 hover:text-copper">
              Home
            </Link>
            <Link
              href="/projects"
              className="inline-block py-2 transition-colors duration-300 hover:text-copper"
            >
              Projects
            </Link>
            <Link href="/contact" className="inline-block py-2 transition-colors duration-300 hover:text-copper">
              Contact
            </Link>
            <Link
              href="/products/alu360"
              className="inline-block py-2 transition-colors duration-300 hover:text-copper"
            >
              Alu360
            </Link>
          </nav>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Samvay360</span>
          {/* <span className="flex gap-4">
            <Link href="/privacy" className="inline-block py-2 hover:text-copper">Privacy</Link>
            <Link href="/terms" className="inline-block py-2 hover:text-copper">Terms</Link>
          </span> */}
          <span>Technology that brings business together.</span>
        </div>
      </div>
    </footer>
  );
}
