import { Reveal } from "@/components/reveal";
import testimonials from "@/data/testimonials.json";

type Testimonial = { quote: string; name: string; role: string; business: string };

// Renders nothing until real, approved quotes are added to data/testimonials.json.
export function Testimonials() {
  const items = testimonials as Testimonial[];
  if (items.length === 0) return null;
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.quote} delay={i * 60}>
              <figure className="h-full rounded-2xl border border-neutral-200 p-6">
                <blockquote className="leading-7 text-neutral-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-neutral-500">
                  {t.name}, {t.role}, {t.business}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
