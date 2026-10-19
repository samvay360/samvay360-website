import { Reveal } from "@/components/reveal";
import journey from "@/data/journey.json";

type Step = (typeof journey)[number] & { href?: string; external?: boolean };

export function Journey({ light = false }: { light?: boolean }) {
  return (
    <ol className="relative">
      {/* Centre spine (desktop) / left spine (mobile) */}
      <span
        aria-hidden
        className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-copper/50 to-transparent lg:left-1/2"
      />
      {(journey as Step[]).map((step, i) => {
        const left = i % 2 === 0;
        return (
          <li key={step.title} className="relative list-none pb-16 last:pb-0 lg:pb-24">
            <span
              aria-hidden
              className={`absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-copper-light ${light ? "bg-background" : "bg-ink"} shadow-[0_0_0_6px_rgba(201,121,61,0.15)] lg:left-1/2`}
            />
            <div
              className={`pl-12 lg:grid lg:grid-cols-2 lg:gap-24 lg:pl-0 ${
                left ? "" : "lg:[&>*]:col-start-2"
              }`}
            >
              <Reveal>
                <div
                  className={`relative rounded-3xl border p-8 transition-colors duration-300 hover:border-copper/60 sm:p-10 ${light ? "border-neutral-200 bg-white" : "border-white/15 bg-white/[0.07] backdrop-blur-sm"} ${
                    left ? "lg:text-right" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-8 select-none font-display text-8xl font-extrabold leading-none ${light ? "text-neutral-900/[0.05]" : "text-white/[0.09]"} sm:text-9xl ${
                      left ? "right-6" : "left-6 lg:left-auto lg:right-6"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative text-xs font-bold uppercase tracking-widest text-copper-light">
                    {step.when || `Chapter ${i + 1}`}
                  </span>
                  <h3 className={`relative mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl ${light ? "text-neutral-900" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className={`relative mt-4 text-base leading-7 ${light ? "text-neutral-600" : "text-neutral-300"}`}>
                    {step.description}
                  </p>
                  {step.href && (
                    <a
                      href={step.href}
                      {...(step.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="relative mt-5 inline-block font-mono text-xs uppercase tracking-wider text-copper underline-offset-4 hover:underline"
                    >
                      {step.external ? "Visit ↗" : "View →"}
                    </a>
                  )}
                  <div className={`relative mt-6 flex flex-wrap gap-2 ${left ? "lg:justify-end" : ""}`}>
                    {step.tags.map((t) => (
                      <span key={t} className={`rounded-full border px-3 py-1 font-mono text-xs ${light ? "border-neutral-200 text-neutral-600" : "border-white/15 text-neutral-300"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
