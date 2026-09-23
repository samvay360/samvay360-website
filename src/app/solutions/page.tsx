import type { Metadata } from "next";
import Link from "next/link";
import solutions from "@/data/solutions.json";
import { Reveal } from "@/components/reveal";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";
import { IconBox, IconDocument, IconLayers, IconGlobe, IconFlow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions — Samvay360",
  description: solutions.hero.description,
};

const iconMap = {
  box: IconBox,
  document: IconDocument,
  layers: IconLayers,
  globe: IconGlobe,
  flow: IconFlow,
};

export default function SolutionsPage() {
  const { hero, story, statement, painPoints, built, capabilities, process, whyUs, reach } =
    solutions;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-wide text-copper-light">
              {hero.eyebrow}
            </span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-neutral-400">
              {hero.description}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
            >
              Tell us how you work
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Story — honest origin, sets up why "built" vs "capabilities" are different */}
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <Reveal>
            <p className="leading-7 text-neutral-500">{story}</p>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="dot-grid relative bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              {painPoints.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {painPoints.items.map((point, i) => (
              <Reveal key={point} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-lg hover:shadow-copper/10">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-copper/10 text-xs font-bold text-copper"
                  >
                    ?
                  </span>
                  <p className="text-neutral-700">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="px-6 py-24 text-center">
        <Reveal>
          <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-3xl">
            {statement}
          </p>
        </Reveal>
      </section>

      {/* What we've built — real, proven work, one entry per actual thing */}
      <section className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-copper">
              What we&apos;ve built
            </span>
            <p className="mt-3 max-w-xl text-neutral-500">
              Three real things, not a long menu. Each one started as a
              specific problem for a specific business.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {built.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <article
                    id={item.id}
                    className="group relative scroll-mt-32 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-xl hover:shadow-copper/10"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-4 font-display text-8xl font-extrabold leading-none text-neutral-900/[0.03] transition-colors duration-300 group-hover:text-copper/[0.08]"
                    >
                      {item.number}
                    </span>
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors duration-300 group-hover:bg-copper group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="relative mt-5 font-display text-xl font-extrabold tracking-tight text-neutral-900">
                      {item.name}
                    </h3>
                    <p className="relative mt-2 font-medium text-neutral-700">
                      {item.tagline}
                    </p>
                    <p className="relative mt-3 leading-7 text-neutral-500">
                      {item.description}
                    </p>
                    {"href" in item && item.href && (
                      <Link
                        href={item.href}
                        className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:gap-3 hover:text-copper"
                      >
                        See the product →
                      </Link>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we can build next — clearly separate from proven work above */}
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-copper">
              What we can build next
            </span>
            <p className="mt-3 max-w-xl text-neutral-500">
              Not a fixed list — a way of thinking about a new problem.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {capabilities.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <div className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-copper/10 text-copper">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 leading-6 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-copper">
              How we work
            </span>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-neutral-900">
              Coordination first. Then a demo, a trial, and feedback that never really stops.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <div className="border-t-2 border-copper/30 pt-4">
                  <span className="font-display text-sm font-bold text-copper">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl border-t border-neutral-100 px-6 py-20 sm:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-copper">
            Why Samvay360
          </span>
        </Reveal>
        <div className="mt-8 grid gap-10 sm:grid-cols-3">
          {whyUs.map((point, i) => (
            <Reveal key={point.title} delay={i * 60}>
              <h3 className="font-display text-lg font-bold tracking-tight text-neutral-900">
                {point.title}
              </h3>
              <p className="mt-2 leading-7 text-neutral-500">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-16 border-t border-neutral-100 pt-8 text-sm text-neutral-400">
            {reach}
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <BrandRing
          spin={false}
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 opacity-10"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              Tell us how your operation actually works
            </h2>
            <p className="mt-3 max-w-md text-neutral-400">
              We&apos;ll start there — not with a template.
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
