import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { ProjectsGrid } from "@/components/projects-grid";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";

export const metadata: Metadata = {
  title: "Projects — Samvay360",
  description:
    "Products and projects built by Samvay360, from in-house tools to custom software for our partners.",
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
          <FadeIn>
            <span className="label-bracket font-mono text-xs uppercase tracking-widest text-copper">
              Our work
            </span>
            <h1 className="mt-4 max-w-lg font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Products &amp; projects.
            </h1>
            <p className="mt-4 max-w-md text-neutral-600">
              What we&apos;ve built — our own products, and software delivered
              for the businesses we work with.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="dot-grid bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <ProjectsGrid items={projects} />
        </div>
      </section>
    </div>
  );
}
