"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-copper focus:ring-2 focus:ring-copper/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-copper/30 bg-copper/5 p-8">
        <h2 className="font-display text-2xl font-extrabold text-neutral-900">
          Thanks, we&apos;ve got it.
        </h2>
        <p className="mt-2 text-neutral-600">
          We&apos;ll get back to you by email. If it&apos;s urgent, write to{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-700">
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-neutral-700">
          Business name
          <input name="business" maxLength={120} autoComplete="organization" className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-neutral-700">
          Email
          <input name="email" type="email" required maxLength={150} autoComplete="email" className={field} />
        </label>
        <label className="block text-sm font-medium text-neutral-700">
          Phone / WhatsApp (optional)
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-neutral-700">
        What are you doing by hand today?
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="e.g. We track stock in Excel and send quotes over WhatsApp."
          className={field}
        />
      </label>
      {/* Honeypot: hidden from people, filled by bots */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error} You can also email{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
