import type { Metadata } from "next";
import alu360 from "@/data/alu360.json";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";

export const metadata: Metadata = {
  title: "Alu360 — Aluminium Calculator | Samvay360",
  description: alu360.hero.description,
};

const PRODUCT_URL = "https://alu360.samvay360.com";

export default function Alu360Page() {
  const { hero } = alu360;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
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
            <a
              href={PRODUCT_URL}
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-light hover:text-white hover:shadow-lg hover:shadow-copper/20"
            >
              Visit Alu360
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
