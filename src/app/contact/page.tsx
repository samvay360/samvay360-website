import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { BrandRing } from "@/components/brand-ring";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Samvay360",
  description:
    "Tell us how your business works today and we'll show you what we can build around it.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <section className="dot-grid relative overflow-hidden">
        <BrandRing className="pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
          <FadeIn>
            <span className="label-bracket font-mono text-xs uppercase tracking-widest text-copper">
              Contact
            </span>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Tell us how you work.
            </h1>
            <p className="mt-4 max-w-md text-neutral-600">
              We start by listening. Share what you do by hand today and we&apos;ll
              come back with what we could build around it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-neutral-50/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_20rem]">
          <ContactForm />
          <aside className="space-y-6 text-sm text-neutral-600">
            <div>
              <h2 className="font-semibold text-neutral-900">Email</h2>
              <a className="underline decoration-neutral-300 underline-offset-4 hover:text-copper" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
            {WHATSAPP_NUMBER && (
              <div>
                <h2 className="font-semibold text-neutral-900">WhatsApp</h2>
                <a
                  className="underline decoration-neutral-300 underline-offset-4 hover:text-copper"
                  href={whatsappLink("Hi Samvay360, I'd like to set up an intro call.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a chat
                </a>
              </div>
            )}
            <div>
              <h2 className="font-semibold text-neutral-900">Where we work</h2>
              <p>Based in Gujarat, India. Working with businesses wherever they are.</p>
            </div>
            <div>
              <h2 className="font-semibold text-neutral-900">What happens next</h2>
              <p>We read your message, then follow up by email to arrange a conversation and, after that, a demo.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
