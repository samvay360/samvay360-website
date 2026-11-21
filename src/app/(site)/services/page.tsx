import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getHome, getServicesPage, type ServicesPageContent, type Service } from "@/lib/content";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { IconChip, IconFlow, IconGlobe, IconLayers, IconSpark } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getServicesPage();
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: "/services" },
    openGraph: { title: "Services | Samvay360", description: seo.description, url: "/services" },
  };
}

const iconMap = {
  layers: IconLayers,
  spark: IconSpark,
  flow: IconFlow,
  chip: IconChip,
  globe: IconGlobe,
} as const;

const label = "font-mono text-xs uppercase tracking-widest text-copper";

function buildJsonLd({ services, faq }: ServicesPageContent) {
  return [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Samvay360 services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: `${SITE_URL}/services#${s.id}`,
        areaServed: ["India", "Worldwide"],
        provider: { "@type": "Organization", name: "Samvay360", url: SITE_URL },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];
}

function ServiceVisual({ service }: { service: Service }) {
  if (service.flow) {
    return (
      <div className="dot-grid rounded-2xl border border-ink/10 bg-background p-7 sm:p-9">
        <ol className="space-y-3">
          {service.flow.map((step, i) => (
            <li key={step}>
              <div className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white px-5 py-3.5 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[11px] text-white">
                  {i + 1}
                </span>
                <span className="font-display font-bold">{step}</span>
              </div>
              {i < service.flow!.length - 1 && (
                <div aria-hidden className="ml-8 h-3 border-l-2 border-dashed border-copper/50" />
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const [main, second] = service.images ?? [];
  if (!main) return null;
  return (
    <div className="relative pb-8 pr-8 sm:pr-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-neutral-100 shadow-xl shadow-ink/5">
        <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-left-top" />
      </div>
      {second &&
        (second.phone ? (
          <div className="absolute bottom-0 right-0 aspect-[9/19] w-[26%] overflow-hidden rounded-[1.2rem] border-4 border-ink bg-white shadow-2xl shadow-ink/30">
            <Image src={second.src} alt={second.alt} fill sizes="160px" className="object-cover object-top" />
          </div>
        ) : (
          <div className="absolute bottom-0 right-0 aspect-[16/10] w-3/5 overflow-hidden rounded-xl border-4 border-white bg-neutral-100 shadow-2xl shadow-ink/20">
            <Image src={second.src} alt={second.alt} fill sizes="320px" className="object-cover object-top" />
          </div>
        ))}
    </div>
  );
}

export default async function ServicesPage() {
  const [data, home] = await Promise.all([getServicesPage(), getHome()]);
  const { services } = data;
  const jsonLd = buildJsonLd(data);

  return (
    <div className="bg-background text-ink">
      {/* Hero */}
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pb-20">
          <FadeIn>
            <p className={label}>{data.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{data.hero.description}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <nav aria-label="Services" className="mt-10 flex flex-wrap gap-2">
              {services.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-copper"
                  >
                    <Icon className="h-4 w-4 text-copper" />
                    {s.name}
                  </a>
                );
              })}
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap];
        const flip = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-24 border-t border-ink/10 ${i % 2 === 0 ? "bg-white" : ""}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
              <Reveal className={flip ? "lg:order-2" : undefined}>
                <Icon className="h-7 w-7 text-copper" />
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{s.name}</h2>
                <p className="mt-2 text-lg font-medium text-ink/80">{s.tagline}</p>
                <p className="mt-4 leading-7 text-neutral-600">{s.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-6 text-neutral-700">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      {p}
                    </li>
                  ))}
                </ul>
                {s.examples && (
                  <p className="mt-6 text-sm text-neutral-500">
                    Built for:{" "}
                    {s.examples.map((ex, j) => (
                      <span key={ex.name}>
                        {j > 0 && ", "}
                        <Link
                          href={ex.href}
                          {...(ex.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="font-medium text-ink underline decoration-copper/40 underline-offset-4 transition-colors hover:text-copper"
                        >
                          {ex.name}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </Reveal>
              <Reveal delay={100} className={flip ? "lg:order-1" : undefined}>
                <ServiceVisual service={s} />
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* How we work */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">How a project runs</h2>
          </Reveal>
          <ol className="mt-10 grid border-y border-ink/10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-ink/10">
            {home.process.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <li className="h-full list-none border-b border-ink/10 p-6 last:border-b-0 sm:border-b-0">
                  <span className="font-mono text-xs text-copper">{step.number}</span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Questions about our services</h2>
          </Reveal>
          <Faq items={data.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 bg-white px-6 py-24 text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold tracking-tight">
          Show us one process you still do by hand.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-neutral-600">
          We&apos;ll come back with a working demo built around it.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
        >
          Start the conversation
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
