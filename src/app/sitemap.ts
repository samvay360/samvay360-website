import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = ["", "/solutions", "/projects", "/products/alu360", "/about", "/contact", "/privacy", "/terms", "/projects/extrusion-inventory", "/projects/powder-coating-inventory", "/projects/aluminium-stock-management", "/projects/brokersnet"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}
