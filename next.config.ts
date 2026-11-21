import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images uploaded in the Sanity Studio are served from Sanity's CDN.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#name", permanent: true },
      { source: "/custom-software", destination: "/services", permanent: true },
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/privacy", destination: "/#", permanent: true },
      { source: "/terms", destination: "/#", permanent: true },

    ];
  },
};

export default nextConfig;
