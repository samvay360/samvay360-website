import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = ["", "/services", "/products", "/products/alu360", "/projects", "/contact", "/projects/extrusion-inventory", "/projects/powder-coating-inventory", "/projects/aluminium-stock-management", "/projects/brokersnet"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}
