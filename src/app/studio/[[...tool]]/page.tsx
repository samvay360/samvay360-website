import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

// The Studio is a client-side app; the route itself can be served statically.
export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="mx-auto max-w-xl px-6 py-32 font-sans text-ink">
        <h1 className="text-3xl font-extrabold">Sanity isn&apos;t connected yet</h1>
        <p className="mt-4 leading-7 text-neutral-600">
          Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> to
          your environment, then restart the server. Until then the site keeps using the JSON files in{" "}
          <code>src/data</code>. See <code>docs/cms.md</code> for the full setup.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
