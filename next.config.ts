import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#name", permanent: true },
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/privacy", destination: "/#", permanent: true },
      { source: "/terms", destination: "/#", permanent: true },

    ];
  },
};

export default nextConfig;
