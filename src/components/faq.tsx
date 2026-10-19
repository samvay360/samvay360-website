import { Reveal } from "@/components/reveal";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={i * 40}>
          <details className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-copper/10 text-copper transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
