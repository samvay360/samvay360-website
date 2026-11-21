// Sanity connection settings. When NEXT_PUBLIC_SANITY_PROJECT_ID is not set,
// the site reads content from the JSON files in src/data instead.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-11-01";

export const isSanityConfigured = projectId.length > 0;
