"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/reveal";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <Reveal key={item.q} delay={i * 40}>
            <div className="px-6">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-neutral-900 transition-colors duration-200 hover:text-copper"
                >
                  {item.q}
                  <span
                    aria-hidden
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full transition-all duration-300 ease-out ${
                      open ? "rotate-45 bg-copper text-white" : "bg-copper/10 text-copper group-hover:bg-copper/20"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`max-w-2xl pb-5 leading-7 text-neutral-600 transition-transform duration-400 ease-out ${
                      open ? "translate-y-0" : "-translate-y-2"
                    }`}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
