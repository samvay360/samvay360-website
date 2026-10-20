import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = ["", "/projects", "/products/alu360", "/contact", "/privacy", "/terms", "/projects/extrusion-inventory", "/projects/powder-coating-inventory", "/projects/aluminium-stock-management", "/projects/brokersnet", "/projects/kb-buildchem", "/projects/structonix", "/projects/k2k-holidays"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}
