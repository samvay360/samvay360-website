import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Samvay360",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        DRAFT — requires sign-off from Horizontal leadership and legal review before publication.
      </p>
      <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated 20 October 2026</p>
      <div className="mt-8 space-y-5 leading-7 text-neutral-700">
        <p>This website provides information about Samvay360 and its products. Content is for general information and does not form an offer or a binding commitment.</p>
        <p>Any services, pricing or delivery commitments are agreed separately in writing. [Governing law and legal entity name to be confirmed.]</p>
        <p>Alu360 and other products are covered by their own terms where applicable. Questions: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </div>
    </section>
  );
}
