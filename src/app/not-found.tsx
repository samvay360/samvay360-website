import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-neutral-500">That page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-8 inline-flex rounded-lg bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper">
        Back to home
      </Link>
    </section>
  );
}
