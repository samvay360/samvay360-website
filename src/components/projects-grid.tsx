"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";

type ProjectItem = {
  id: string;
  type: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
};

export function ProjectsGrid({ items }: { items: ProjectItem[] }) {
  const filters = useMemo(() => {
    const types = Array.from(new Set(items.map((item) => item.type)));
    return ["All", ...types];
  }, [items]);

  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? items : items.filter((item) => item.type === active);

  return (
    <div>
      {filters.length > 2 && (
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === filter
                  ? "border-ink bg-ink text-white"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-20 text-center text-neutral-400">
          Nothing here yet — check back soon.
        </p>
      ) : (
        <div className={`grid gap-5 ${filters.length > 2 ? "mt-8" : ""}`}>
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <Link
                href={item.href}
                className="group relative grid grid-cols-[auto_1fr] items-start gap-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-xl hover:shadow-copper/10 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-6 font-display text-[9rem] font-extrabold leading-none text-neutral-900/[0.03] transition-colors duration-300 group-hover:text-copper/[0.08]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative flex items-baseline gap-2 font-display text-sm font-bold text-neutral-300 transition-colors duration-300 group-hover:text-copper sm:flex-col sm:gap-0 sm:border-r sm:border-neutral-100 sm:pr-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-copper">
                      {item.type}
                    </span>
                    <span className="text-xs text-neutral-300">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-2 flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
                    {item.name}
                    <span className="font-sans text-base font-normal text-neutral-400">
                      {item.tagline}
                    </span>
                  </h3>
                  <p className="mt-2 max-w-xl text-neutral-500">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-copper/20 group-hover:text-copper"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  aria-hidden
                  className="relative flex h-11 w-11 flex-none items-center justify-center self-end rounded-full border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:border-copper group-hover:bg-copper group-hover:text-white sm:self-center"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
