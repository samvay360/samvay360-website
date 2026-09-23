import type { Metadata } from "next";
import Link from "next/link";
import alu360 from "@/data/alu360.json";
import { Reveal } from "@/components/reveal";
import { FadeIn } from "@/components/fade-in";
import { Marquee } from "@/components/marquee";
import { BrandRing } from "@/components/brand-ring";

export const metadata: Metadata = {
  title: "Alu360 — Aluminium Calculator | Samvay360",
  description: alu360.hero.description,
};

export default function Alu360Page() {
  const { hero, sections } = alu360;
  const keywords = sections.map((section) => section.title);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-copper-light">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
              {hero.name}
            </h1>
            <p className="mt-4 max-w-xl text-xl text-neutral-300">
              {hero.tagline}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-400">
              {hero.description}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
            >
              Request a demo
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="relative border-t border-white/10">
          <Marquee items={keywords} className="py-5" />
        </FadeIn>
      </section>

      {/* On-page nav */}
      <nav className="sticky top-[68px] z-40 hidden border-b border-neutral-100 bg-background/90 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-6 py-3 text-xs text-neutral-400">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="transition-colors duration-300 hover:text-neutral-900"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Feature sections */}
      <div className="dot-grid relative bg-neutral-50/60">
      <div className="relative mx-auto max-w-6xl px-6">
        <div
          aria-hidden
          className="absolute left-[200px] top-0 bottom-0 hidden w-px bg-neutral-200 sm:block"
        />
        {sections.map((section, i) => (
          <Reveal key={section.id} delay={Math.min(i, 4) * 60}>
            <article
              id={section.id}
              className="scroll-mt-40 grid gap-6 border-t border-neutral-100 py-16 first:border-t-0 sm:grid-cols-[200px_1fr] sm:gap-10"
            >
              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-copper/10 px-2.5 py-1 text-xs font-semibold text-copper">
                  {section.number}
                </span>
                <h2 className="mt-2 text-lg font-medium tracking-tight text-neutral-900">
                  {section.title}
                </h2>
              </div>
              <ul className="max-w-xl space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 leading-7 text-neutral-600">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1 w-1 flex-none rounded-full bg-copper"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <BrandRing
          spin={false}
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 opacity-10"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              See Alu360 running your next project
            </h2>
            <p className="mt-3 max-w-md text-neutral-400">
              From first sketch to a signed quotation and a tax invoice —
              talk to us about bringing Alu360 to your fabrication business.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
