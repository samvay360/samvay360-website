import Link from "next/link";
import Image from "next/image";
import { BrandRing } from "@/components/brand-ring";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { FadeIn } from "@/components/fade-in";
import { IconBox, IconDocument, IconGlobe, IconLayers } from "@/components/icons";
import { Journey } from "@/components/journey";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { getFaq, getHome, type HomeCard } from "@/lib/content";

const iconMap = {
  box: IconBox,
  document: IconDocument,
  globe: IconGlobe,
  layers: IconLayers,
};

const label = "font-mono text-xs uppercase tracking-widest text-copper";

export default async function Home() {
  const [home, faq] = await Promise.all([getHome(), getFaq("home")]);

  return (
    <div className="bg-background text-ink">
      {/* Hero */}
      <section className="dot-grid relative overflow-hidden pt-28 sm:pt-36">
        <BrandRing className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] opacity-40" />

        {/* Hindi wordmark: full-width watermark behind the hero content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-16 select-none whitespace-nowrap text-center font-devanagari text-[32vw] font-bold leading-[0.95] text-ink/[0.06]"
        >
          समवाय
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div>
            <FadeIn>
              <p className={label}>Software &amp; product studio · Gujarat, India</p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
                Software for how{" "}
                <span className="text-copper">you already work.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
                Custom software, AI-native apps, automations, IoT and websites
                for growing businesses. Plus Alu360, our product for aluminium
                fabricators.
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

          <FadeIn delay={200}>
            <figure>
              <div className="relative pb-8 pr-8 sm:pr-12">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-2xl shadow-ink/10">
                  <Image
                    src="/projects/aluminium-stock-management/1.jpg"
                    alt="Stock and dispatch dashboard we built for an aluminium factory"
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-left-top"
                  />
                </div>
                <div className="absolute bottom-0 right-0 aspect-[9/19] w-[26%] overflow-hidden rounded-[1.2rem] border-4 border-ink bg-white shadow-2xl shadow-ink/30">
                  <Image src="/projects/brokersnet/1.jpg" alt="BrokersNet real estate app" fill sizes="160px" className="object-cover object-top" />
                </div>
              </div>
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                Live client work: factory stock system and real estate app
              </figcaption>
            </figure>
          </FadeIn>
        </div>

        <div className="relative border-y border-ink/10 bg-white/60 py-4">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            Built for
          </p>
          <Marquee items={home.builtFor} light />
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-40">
        <span className={label}>Who we are</span>
        <WordReveal
          text={home.manifesto}
          className="mt-8 font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl"
        />
        <Link
          href="/#journey"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-wider hover:text-copper"
        >
          See our journey →
        </Link>
      </section>

      {/* What the name means */}
      <section id="name" className="relative overflow-hidden bg-ink text-white">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div
              aria-hidden
              className="select-none font-devanagari text-[26vw] font-bold leading-none text-copper-light sm:text-[9rem] xl:text-[11rem]"
            >
              समवाय
            </div>
          </Reveal>
          <Reveal delay={100}>
            <span className="font-mono text-xs uppercase tracking-widest text-copper-light">
              What the name means
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span lang="hi" className="font-devanagari">समवाय</span> (samavāya) means inseparable connection.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              We pair it with 360° because we aim to stay involved from the
              first conversation to long after launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we've built */}
      <section id="what-we-build" className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="max-w-xl font-display text-4xl font-extrabold tracking-tight">
                Services for your business. Products for your trade.
              </h2>
            </div>
            <Link href="/projects" className="font-mono text-xs uppercase tracking-wider transition-colors hover:text-copper">
              See all projects →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {home.built.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const featured = i === 0;
              return (
                <Reveal key={item.id} delay={i * 80} className={featured ? "lg:col-span-2" : undefined}>
                  <Link
                    href={item.href}
                    {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group grid h-full gap-8 overflow-hidden rounded-2xl border border-ink/10 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl hover:shadow-copper/10 sm:p-8 ${
                      featured ? "lg:grid-cols-[1fr_1.1fr] lg:items-center" : ""
                    }`}
                  >
                    <div>
                      <Icon className="h-6 w-6 text-copper" />
                      <h3 className={`mt-4 font-display font-extrabold tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                        {item.name}
                      </h3>
                      <p className="mt-2 text-lg font-medium text-ink/80">{item.tagline}</p>
                      <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">{item.line}</p>
                      {item.tags && item.tags.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <li key={t} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-neutral-700 transition-colors duration-300 group-hover:border-copper/30">
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-copper">
                        {item.cta}
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                    <OfferingVisual item={item} />
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
            <h2 className="max-w-xl font-display text-4xl font-extrabold tracking-tight">
              From first call to a demo built on your process.
            </h2>
          </Reveal>
          <ol className="mt-12 grid border-y border-ink/10 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-ink/10">
            {home.process.map((step, i) => (
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
      <section id="journey" className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <Reveal className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
              How we got here.
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
            {home.whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-ink/10 bg-white p-7 transition-colors duration-300 hover:border-copper/60">
                  <h3 className="font-display text-xl font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-center font-mono text-xs uppercase tracking-wider text-neutral-500">
              {home.reach}
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Reveal>
            <h2 className="mb-8 font-display text-4xl font-extrabold tracking-tight">
              Questions we usually get.
            </h2>
          </Reveal>
          <Faq items={faq} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>
    </div>
  );
}

function OfferingVisual({ item }: { item: HomeCard }) {
  if (item.flow && item.flow.length > 0) {
    return (
      <ol className="flex flex-wrap items-center gap-2 self-end">
        {item.flow.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-lg border border-ink/10 bg-white px-3 py-2 text-xs font-semibold shadow-sm transition-colors duration-300 group-hover:border-copper/30">
              {step}
            </span>
            {i < item.flow!.length - 1 && <span aria-hidden className="text-copper">→</span>}
          </li>
        ))}
      </ol>
    );
  }

  const images = item.images ?? [];
  if (images.length === 0) return null;
  const [main, second] = images;

  return (
    <div className={`relative ${second?.phone ? "pb-6 pr-6 sm:pr-10" : ""}`}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-ink/10 bg-neutral-100 shadow-lg shadow-ink/5">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      {second?.phone && (
        <div className="absolute bottom-0 right-0 aspect-[9/19] w-[24%] overflow-hidden rounded-[1.1rem] border-4 border-ink bg-neutral-100 shadow-2xl shadow-ink/30 transition-transform duration-500 group-hover:-translate-y-1">
          <Image src={second.src} alt={second.alt} fill sizes="160px" className="object-cover object-top" />
        </div>
      )}
    </div>
  );
}
