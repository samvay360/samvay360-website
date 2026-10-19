import type { Metadata } from "next";
import alu360 from "@/data/alu360.json";
import { FadeIn } from "@/components/fade-in";
import { Reveal } from "@/components/reveal";
import { BrandRing } from "@/components/brand-ring";
import { ALU360_EMAIL, ALU360_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alu360 — Aluminium Calculator | Samvay360",
  description: alu360.hero.description,
  alternates: { canonical: "/products/alu360" },
};

const btn =
  "inline-flex rounded-lg px-6 py-3.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5";

export default function Alu360Page() {
  const { hero, sections } = alu360;

  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
          <FadeIn>
            <p className="label-bracket font-mono text-xs uppercase tracking-widest text-copper">{hero.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">{hero.name}</h1>
            <p className="mt-4 max-w-xl text-xl text-neutral-700">{hero.tagline}</p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-600">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={ALU360_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn} bg-ink text-white hover:bg-copper`}
              >
                Visit the Alu360 website
              </a>
              <a
                href={`mailto:${ALU360_EMAIL}?subject=Alu360%20demo%20request`}
                className={`${btn} border border-ink/20 text-ink hover:border-copper hover:text-copper`}
              >
                Request a demo
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="dot-grid bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-5 lg:grid-cols-2">
            {sections.map((section, i) => (
              <Reveal key={section.id} delay={(i % 2) * 60}>
                <article
                  id={section.id}
                  className="h-full rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
                >
                  <span className="text-xs font-bold text-copper">{section.number}</span>
                  <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight text-neutral-900">
                    {section.title}
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-copper" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">See Alu360 on your own jobs.</h2>
        <p className="mx-auto mt-3 max-w-md text-neutral-600">
          Pricing is shared on request. Write to us and we&apos;ll arrange a demo.
        </p>
        <a
          href={`mailto:${ALU360_EMAIL}?subject=Alu360%20demo%20request`}
          className={`${btn} mt-8 bg-ink text-white hover:bg-copper`}
        >
          Request a demo
        </a>
      </section>
    </div>
  );
}
