import Link from "next/link";
import { BrandRing } from "@/components/brand-ring";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { FadeIn } from "@/components/fade-in";
import { WordReveal } from "@/components/word-reveal";
import { IconBox, IconDocument, IconGlobe } from "@/components/icons";
import { Journey } from "@/components/journey";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import solutions from "@/data/solutions.json";
import faq from "@/data/faq.json";

const iconMap = {
  box: IconBox,
  document: IconDocument,
  globe: IconGlobe,
};

const builtFor = [
  "Aluminium fabrication",
  "Extrusion",
  "Powder coating",
  "Manufacturing",
  "Real estate",
  "Websites",
  "Quotations & invoicing",
];

const manifesto =
  "We design software around how your business actually operates. Websites came first. Stock tracking and Alu360 followed, one client's problem at a time. Not a vendor you hand a brief to, but a team you stay connected to.";

const label = "font-mono text-xs uppercase tracking-widest text-copper";

export default function Home() {
  return (
    <div className="bg-background text-ink">
      {/* Hero */}
      <section className="dot-grid relative flex min-h-screen flex-col overflow-hidden pt-28 sm:pt-32">
        <BrandRing className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-40" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <FadeIn>
            <p className={label}>[ Software &amp; product solutions · Gujarat, India ]</p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              Software for how{" "}
              <span className="text-copper">you already work.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 max-w-md text-lg text-neutral-600">
              We build the tools your business runs on, and the products that
              come from building so many of them.
            </p>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
              >
                See our work
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-ink/20 px-6 py-3.5 font-mono text-xs uppercase tracking-wider transition-colors duration-300 hover:border-copper hover:text-copper"
              >
                Talk to us
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Hindi wordmark: full-width watermark behind the hero content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-20 select-none whitespace-nowrap text-center font-devanagari text-[32vw] font-bold leading-[0.95] text-ink/[0.06]"
        >
          समवाय
        </div>
        <div className="flex-1" />

        <div className="relative border-y border-ink/10 bg-white/60 py-4">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            Built for
          </p>
          <Marquee items={builtFor} light />
        </div>
      </section>

      {/* Manifesto: words light up as you scroll */}
      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-40">
        <span className={label}>[ Who we are ]</span>
        <WordReveal
          text={manifesto}
          className="mt-8 font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl"
        />
        <Link
          href="/about"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-wider hover:text-copper"
        >
          Read our story →
        </Link>
      </section>

      {/* What we've built */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className={label}>[ What we&apos;ve built ]</span>
              <h2 className="mt-3 max-w-lg font-display text-4xl font-extrabold tracking-tight">
                Three real things, not a long service menu.
              </h2>
            </div>
            <Link href="/solutions" className="font-mono text-xs uppercase tracking-wider hover:text-copper">
              See how we work →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {solutions.built.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.id} delay={i * 80}>
                  <Link
                    href={item.href ?? `/solutions#${item.id}`}
                    className="group flex h-full min-h-72 flex-col justify-between rounded-2xl border border-ink/10 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-neutral-500 group-hover:text-copper-light">
                        0{i + 1}
                      </span>
                      <Icon className="h-6 w-6 text-copper transition-colors group-hover:text-copper-light" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-extrabold tracking-tight">{item.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600 group-hover:text-neutral-300">
                        {item.tagline}
                      </p>
                      <span className="mt-5 inline-block font-mono text-xs uppercase tracking-wider text-copper transition-transform duration-300 group-hover:translate-x-1 group-hover:text-copper-light">
                        Explore →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <span className={label}>[ How we work ]</span>
            <h2 className="mt-3 max-w-lg font-display text-4xl font-extrabold tracking-tight">
              Listen, show, trial, refine.
            </h2>
          </Reveal>
          <ol className="mt-12 grid border-y border-ink/10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-ink/10">
            {solutions.process.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <li className="group h-full list-none border-b border-ink/10 p-6 transition-colors duration-300 hover:bg-white last:border-b-0 sm:border-b-0">
                  <span className="font-mono text-xs text-copper">{step.number}</span>
                  <h3 className="mt-6 font-display text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <span className={label}>[ Our journey ]</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              From websites to products, one client at a time.
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Every product we make started as a problem someone brought to us.
            </p>
          </Reveal>
          <Journey light />
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-5 sm:grid-cols-3">
            {solutions.whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-7 transition-colors duration-300 hover:border-copper/60">
                  <span className="font-mono text-xs text-copper">0{i + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-center font-mono text-xs uppercase tracking-wider text-neutral-500">
              {solutions.reach}
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Reveal>
            <span className={label}>[ FAQ ]</span>
            <h2 className="mb-8 mt-3 font-display text-4xl font-extrabold tracking-tight">
              Questions we usually get.
            </h2>
          </Reveal>
          <Faq items={faq} />
        </div>
      </section>
    </div>
  );
}
