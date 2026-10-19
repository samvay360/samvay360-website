import Script from "next/script";

// Enabled only when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set (privacy-friendly, no cookies).
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
}
