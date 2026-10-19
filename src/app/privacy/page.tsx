import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Samvay360",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        DRAFT — requires sign-off from Horizontal leadership and legal review before publication.
      </p>
      <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated 20 October 2026</p>
      <div className="mt-8 space-y-5 leading-7 text-neutral-700">
        <p>When you use our contact form we collect your name, business name, email address, optional phone number and your message. We use them only to reply to your enquiry.</p>
        <p>Messages are delivered to us by email through an email service provider. We do not sell your information. [Retention period, hosting location and provider details to be confirmed.]</p>
        <p>This site does not currently use advertising cookies. [Update this section if analytics are added.]</p>
        <p>To ask about or delete your information, write to <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </div>
    </section>
  );
}
