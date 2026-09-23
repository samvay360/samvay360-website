import Link from "next/link";
import { BrandRing } from "@/components/brand-ring";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { FadeIn } from "@/components/fade-in";
import { IconBox, IconGauge, IconDocument, IconLayers } from "@/components/icons";
import solutions from "@/data/solutions.json";

const iconMap = {
  box: IconBox,
  gauge: IconGauge,
  document: IconDocument,
  layers: IconLayers,
};

const keywords = [
  "Custom software",
  "Product engineering",
  "Workflow automation",
  "Alu360",
  "360° coordination",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="grain relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-ink text-white">
        <BrandRing className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-60 sm:-right-24 sm:-top-32" />
        <BrandRing
          reverse
          className="pointer-events-none absolute -bottom-56 -left-48 h-[26rem] w-[26rem] opacity-20"
        />

        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 -rotate-6 select-none font-devanagari text-[7rem] font-bold text-white/[0.04] blur-[0.5px] sm:block lg:text-[9rem]"
        >
          समवाय
        </span>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-copper-light">
              Samvay360
              <span className="h-1 w-1 rounded-full bg-copper-light/60" />
              <span className="font-devanagari text-base">समवाय</span>
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="mt-6 max-w-3xl text-6xl font-extrabold leading-[1.04] tracking-tight sm:text-7xl">
              Software for how
              <br />
              <span className="text-copper-light">you already work.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 max-w-md text-lg text-neutral-400">
              We build the tools your business runs on — and the products
              that come from building so many of them.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
              >
                See our work
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
              >
                Talk to us
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={340} className="relative border-t border-white/10">
          <Marquee items={keywords} className="py-6" />
        </FadeIn>

        <Link
          href="#statement"
          aria-label="Scroll to learn more"
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-neutral-500 transition-colors duration-300 hover:text-neutral-300 sm:flex"
        >
          <span className="h-8 w-px animate-bounce bg-neutral-600" />
        </Link>
      </section>

      {/* One statement */}
      <section
        id="statement"
        className="dot-grid relative bg-neutral-50/60 px-6 py-28 text-center"
      >
        <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-2xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
            We design software around how your business actually operates —
            then, sometimes, we turn it into a product of its own.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-sm text-neutral-400">
            That&apos;s how <span className="text-copper">Alu360</span> started.
          </p>
        </Reveal>
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-copper">
                What we build
              </span>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold tracking-tight text-neutral-900">
                Not web development. Not app development. Software modeled on
                how your operation actually runs.
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:gap-3 hover:text-copper"
            >
              See all solutions →
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.solutions.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.id} delay={i * 60}>
                  <Link
                    href={`/solutions#${item.id}`}
                    className="group block h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-lg hover:shadow-copper/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors duration-300 group-hover:bg-copper group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-neutral-900">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-neutral-500">
                      {item.tagline}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured product */}
      <section className="bg-ink">
        <Link
          href="/products/alu360"
          className="group relative flex overflow-hidden transition-colors duration-500 hover:bg-ink-soft"
        >
          <BrandRing className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 opacity-[0.12] transition-opacity duration-500 group-hover:opacity-30" />
          <BrandRing
            reverse
            spin={false}
            className="pointer-events-none absolute -right-6 bottom-10 h-40 w-40 opacity-[0.16] transition-opacity duration-500 group-hover:opacity-35"
          />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 sm:flex-row sm:items-end">
            <Reveal className="relative">
              <span className="text-xs font-semibold uppercase tracking-wide text-copper-light">
                Featured product
              </span>
              <h2 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                Alu360
              </h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Design, material calculation, quotations and invoicing — one
                tool for aluminium fabricators.
              </p>
            </Reveal>
            <span className="relative flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3 group-hover:text-copper-light">
              View product
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
