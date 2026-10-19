import type { Metadata } from "next";
import Link from "next/link";
import solutions from "@/data/solutions.json";
import { Journey } from "@/components/journey";
import { Testimonials } from "@/components/testimonials";
import { FadeIn } from "@/components/fade-in";
import { Reveal } from "@/components/reveal";
import { BrandRing } from "@/components/brand-ring";

export const metadata: Metadata = {
  title: "About — Samvay360",
  description: "Where Samvay360 started, how we work, and what the name means.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
          <FadeIn>
            <span className="label-bracket font-mono text-xs uppercase tracking-widest text-copper">About</span>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              We started by fixing our own problems.
            </h1>
            <p className="mt-4 max-w-lg text-neutral-600">{solutions.story}</p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-copper-light">Our journey</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              How we got here.
            </h2>
          </Reveal>
          <Journey light />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-neutral-900">What the name means</h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              <span className="font-devanagari">समवाय</span> (samavāya) means inseparable connection. We
              pair it with 360° because we aim to stay involved from the first conversation to long
              after launch.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {solutions.whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-neutral-200 p-6">
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-neutral-500">{solutions.reach}</p>
          {/* TODO(content): add team members and photos once supplied. */}
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
          >
            Talk to us
          </Link>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
