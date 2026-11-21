import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";
import { Reveal } from "@/components/reveal";
import { ALU360_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products: Alu360 & SafarSetu | Samvay360",
  description:
    "Products built by Samvay360: Alu360, aluminium window calculation, quotation and GST billing software for fabricators, and SafarSetu, an app for organising trips.",
  alternates: { canonical: "/products" },
};

const label = "font-mono text-xs uppercase tracking-widest text-copper";

export default function ProductsPage() {
  return (
    <div className="bg-background text-ink">
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pb-20">
          <FadeIn>
            <p className={label}>Products</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Products that started as one client&apos;s problem.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              When the same problem keeps coming up, we turn the solution into a
              product that any business in that trade can use.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
          {/* Alu360 */}
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-background p-8 transition-colors duration-300 hover:border-copper/50 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">For aluminium fabricators</span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight">Alu360</h2>
              <p className="mt-2 text-lg font-medium text-ink/80">Design, pricing and billing in one tool.</p>
              <p className="mt-4 max-w-lg leading-7 text-neutral-600">
                For aluminium window and door businesses. Enter a window size once and get the
                material list, a low-wastage cutting plan, a customer quotation and a GST invoice.
              </p>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {["Window size", "Material & cutting plan", "Quotation", "GST invoice"].map((step, i, arr) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-ink/10 bg-white px-3 py-2 text-xs font-semibold shadow-sm">{step}</span>
                    {i < arr.length - 1 && <span aria-hidden className="text-copper">→</span>}
                  </li>
                ))}
              </ol>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Link
                  href="/products/alu360"
                  className="rounded-lg bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
                >
                  Explore Alu360 →
                </Link>
                <a
                  href="/downloads/alu360-brochure.pdf"
                  download="Alu360-Brochure.pdf"
                  className="rounded-lg border border-copper/40 bg-copper/5 px-5 py-3 font-mono text-xs uppercase tracking-wider text-copper transition-colors duration-300 hover:bg-copper hover:text-white"
                >
                  Brochure (PDF)
                </a>
                <a
                  href={`mailto:${ALU360_EMAIL}?subject=Alu360%20demo%20request`}
                  className="rounded-lg border border-ink/20 px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors duration-300 hover:border-copper hover:text-copper"
                >
                  Request a demo
                </a>
              </div>
            </article>
          </Reveal>

          {/* SafarSetu */}
          <Reveal delay={100}>
            <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-background p-8 transition-colors duration-300 hover:border-copper/50 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Open testing</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">Android</span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight">SafarSetu</h2>
              <p className="mt-2 text-lg font-medium text-ink/80">Trip organising app.</p>
              <p className="mt-4 leading-7 text-neutral-600">
                An app for organising trips, in open testing on Google Play since March 2026.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.safarsetu.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-ink/20 px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors duration-300 hover:border-copper hover:text-copper"
                >
                  Try it on Google Play ↗
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-20 text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold tracking-tight">
          Need something built for your own business?
        </h2>
        <Link
          href="/services"
          className="mt-8 inline-block rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
        >
          See our services
        </Link>
      </section>
    </div>
  );
}
