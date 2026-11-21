import type { Metadata } from "next";
import { getAlu360 } from "@/lib/content";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";
import { Reveal } from "@/components/reveal";
import { ALU360_EMAIL, ALU360_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alu360: Aluminium Window Calculator, Quotation & GST Billing Software | Samvay360",
  description:
    "Alu360 is software for aluminium window and door fabricators: design windows, calculate material and cutting plans, make quotations and generate GST invoices in one place.",
  keywords: [
    "aluminium window calculator",
    "aluminium fabrication software",
    "aluminium cutting optimisation",
    "window quotation software",
    "GST invoice software for fabricators",
    "Alu360",
  ],
  alternates: { canonical: "/products/alu360" },
  openGraph: {
    title: "Alu360 by Samvay360",
    description:
      "Design windows, work out material and cutting plans, make quotations and generate GST invoices in one place.",
    url: "/products/alu360",
  },
};

const BROCHURE = "/downloads/alu360-brochure.pdf";

const jsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alu360",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  url: ALU360_URL,
  publisher: { "@type": "Organization", name: "Samvay360" },
});

function DownloadIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
    </svg>
  );
}

const btn =
  "inline-flex rounded-lg px-6 py-3.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5";

export default async function Alu360Page() {
  const { hero, sections } = await getAlu360();

  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-widest text-copper">{hero.eyebrow}</p>
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
              <a
                href={BROCHURE}
                download="Alu360-Brochure.pdf"
                className={`${btn} group items-center gap-2 border border-copper/40 bg-copper/5 text-copper hover:bg-copper hover:text-white`}
              >
                <DownloadIcon />
                Download brochure (PDF)
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
        <p className="mt-5 text-sm text-neutral-500">
          Prefer to read first?{" "}
          <a href={BROCHURE} download="Alu360-Brochure.pdf" className="font-medium text-copper underline decoration-copper/40 underline-offset-4 transition-colors hover:text-ink">
            Download the Alu360 brochure
          </a>{" "}
          (PDF, 180 KB)
        </p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(hero.description)) }}
      />
    </div>
  );
}
