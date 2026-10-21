import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import studies from "@/data/case-studies.json";
import { FadeIn } from "@/components/fade-in";
import { Reveal } from "@/components/reveal";
import { BrandRing } from "@/components/brand-ring";
import { Gallery, type GalleryImage } from "@/components/gallery";

type Study = {
  overview: string;
  sector: string;
  highlights: string[];
  stack?: string[];
  year?: string;
  challenge: string;
  outcome: string;
  workflow?: string[];
  roles?: { name: string; text: string }[];
  outcomes?: string[];
  images: GalleryImage[];
};

const caseStudies = studies as Record<string, Study>;
const find = (slug: string) => projects.find((p) => p.id === slug);

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = find(slug);
  if (!project || !caseStudies[slug]) return {};
  return {
    title: `${project.name} — Samvay360`,
    description: caseStudies[slug].overview,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = find(slug);
  const study = caseStudies[slug];
  if (!project || !study) notFound();

  const facts = [
    ["Sector", study.sector],
    ["Type", project.type],
    ["Year", study.year ?? ""],
    ["Built with", study.stack?.join(", ") ?? ""],
  ].filter(([, v]) => v);

  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
          <FadeIn>
            <Link href="/projects" className="font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-copper">
              ← All projects
            </Link>
            <p className="mt-6 label-bracket font-mono text-xs uppercase tracking-widest text-copper">
              {project.type}
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-600">{project.tagline}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_18rem]">
          <div className="min-w-0 space-y-12">
            {study.images.length > 0 && (
              <Reveal>
                <Gallery images={study.images} />
              </Reveal>
            )}
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold text-neutral-900">Overview</h2>
              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{study.overview}</p>
            </Reveal>
            {study.challenge && (
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-neutral-900">The challenge</h2>
                <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{study.challenge}</p>
              </Reveal>
            )}
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold text-neutral-900">What we built</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {study.highlights.map((h) => (
                  <li key={h} className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700">
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
            {study.workflow && study.workflow.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-neutral-900">How it works</h2>
                <ol className="mt-4 space-y-3">
                  {study.workflow.map((step, i) => (
                    <li key={step} className="flex gap-4 text-neutral-600">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-copper/10 font-mono text-xs text-copper">{i + 1}</span>
                      <span className="pt-0.5 leading-7">{step}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}
            {study.roles && study.roles.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-neutral-900">Who uses it</h2>
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {study.roles.map((r) => (
                    <div key={r.name} className="rounded-xl border border-neutral-200 px-4 py-3">
                      <dt className="font-semibold text-neutral-900">{r.name}</dt>
                      <dd className="text-sm text-neutral-600">{r.text}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
            {study.outcomes && study.outcomes.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-neutral-900">Business impact</h2>
                <ul className="mt-4 space-y-2 text-neutral-600">
                  {study.outcomes.map((o) => (
                    <li key={o} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-copper" />{o}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {study.outcome && (
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-neutral-900">Outcome</h2>
                <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{study.outcome}</p>
              </Reveal>
            )}
          </div>
          <aside className="h-fit rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6">
            <dl className="space-y-4 text-sm">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-semibold text-neutral-900">{k}</dt>
                  <dd className="text-neutral-600">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
            >
              Discuss a similar project
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
