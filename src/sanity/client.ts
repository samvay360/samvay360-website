import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: "published" })
  : null;

/** Every Sanity query is cached under this tag; the webhook at /api/revalidate clears it. */
export const SANITY_TAG = "sanity";

export async function sanityFetch<T>(query: string, params: QueryParams = {}): Promise<T> {
  if (!client) throw new Error("Sanity is not configured");
  return client.fetch<T>(query, params, {
    next: { tags: [SANITY_TAG], revalidate: 3600 },
  });
}
