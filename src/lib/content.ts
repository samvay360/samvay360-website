import "server-only";
import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

import solutionsJson from "@/data/solutions.json";
import faqJson from "@/data/faq.json";
import projectsJson from "@/data/projects.json";
import caseStudiesJson from "@/data/case-studies.json";
import servicesJson from "@/data/services.json";
import journeyJson from "@/data/journey.json";
import testimonialsJson from "@/data/testimonials.json";
import alu360Json from "@/data/alu360.json";

/*
 * One place for all site content.
 *
 * With NEXT_PUBLIC_SANITY_PROJECT_ID set, content comes from Sanity and each
 * query is shaped to match the JSON files below, so pages don't care where
 * it came from. Without it, or if Sanity can't be reached, the JSON files in
 * src/data are used, so the site never renders empty.
 */

// ---------- Types ----------

export type Screenshot = { src: string; alt: string; caption?: string; phone?: boolean };

export type HomeCard = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  line: string;
  tags?: string[];
  href: string;
  cta: string;
  images?: Screenshot[];
  flow?: string[];
};

export type HomeContent = {
  builtFor: string[];
  manifesto: string;
  built: HomeCard[];
  process: { number: string; title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  reach: string;
};

export type FaqItem = { q: string; a: string };

export type Project = {
  id: string;
  type: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
  image?: string;
  imageAlt?: string;
};

export type CaseStudy = {
  overview: string;
  sector: string;
  highlights: string[];
  stack?: string[];
  year?: string;
  challenge: string;
  outcome: string;
  images: Screenshot[];
  workflow?: string[];
  roles?: { name: string; text: string }[];
  outcomes?: string[];
};

export type Service = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  summary: string;
  points: string[];
  examples?: { name: string; href: string }[];
  images?: Screenshot[];
  flow?: string[];
};

export type ServicesPageContent = {
  seo: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; title: string; description: string };
  services: Service[];
  faq: FaqItem[];
};

export type JourneyStep = {
  when: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  external?: boolean;
};

export type Testimonial = { quote: string; name: string; role: string; business: string };

export type Alu360Content = {
  hero: { eyebrow: string; name: string; tagline: string; description: string };
  sections: { id: string; number: string; title: string; items: string[] }[];
};

// ---------- Helpers ----------

/** Use Sanity when configured; fall back to the JSON content if it isn't or the request fails. */
async function fromSanity<T>(query: string, fallback: () => T, params: Record<string, unknown> = {}): Promise<T> {
  if (!isSanityConfigured) return fallback();
  try {
    const result = await sanityFetch<T | null>(query, params);
    return result ?? fallback();
  } catch (error) {
    console.error("[content] Sanity query failed, using JSON content instead.", error);
    return fallback();
  }
}

// GROQ projection that turns an image-with-alt into the Screenshot shape.
const screenshot = groq`{ "src": asset->url, alt, caption, phone }`;

// ---------- Queries ----------

export function getHome(): Promise<HomeContent> {
  return fromSanity<HomeContent>(
    groq`*[_type == "homePage"][0]{
      builtFor,
      manifesto,
      built[]{ id, icon, name, tagline, line, tags, href, cta, "images": images[]${screenshot}, flow },
      process[]{ number, title, description },
      whyUs[]{ title, description },
      reach
    }`,
    () => ({
      builtFor: solutionsJson.builtFor,
      manifesto: solutionsJson.manifesto,
      built: solutionsJson.built as HomeCard[],
      process: solutionsJson.process,
      whyUs: solutionsJson.whyUs,
      reach: solutionsJson.reach,
    }),
  );
}

const faqQuery = groq`*[_type == "faq" && page == $page] | order(order asc){ "q": question, "a": answer }`;

export function getFaq(page: "home" | "services"): Promise<FaqItem[]> {
  return fromSanity<FaqItem[]>(faqQuery, () => (page === "home" ? faqJson : servicesJson.faq), { page });
}

const projectFields = groq`
  "id": slug.current, type, name, tagline, description, tags, href, status,
  "image": image.asset->url, "imageAlt": image.alt`;

export function getProjects(): Promise<Project[]> {
  return fromSanity<Project[]>(
    groq`*[_type == "project"] | order(order asc){ ${projectFields} }`,
    () => projectsJson as Project[],
  );
}

/** Case studies keyed by project id, for projects that have a case study page. */
export function getCaseStudies(): Promise<Record<string, CaseStudy>> {
  return fromSanity<Record<string, CaseStudy>>(
    groq`*[_type == "project" && defined(overview)] | order(order asc){
      "id": slug.current, overview, sector, highlights, stack, year, challenge, outcome,
      workflow, roles[]{ name, text }, outcomes, "images": coalesce(gallery[]${screenshot}, [])
    }`,
    () => caseStudiesJson as Record<string, CaseStudy>,
  ).then((result) =>
    Array.isArray(result)
      ? Object.fromEntries(
          (result as (CaseStudy & { id: string })[]).map(({ id, ...study }) => [
            id,
            { ...study, highlights: study.highlights ?? [], challenge: study.challenge ?? "", outcome: study.outcome ?? "" },
          ]),
        )
      : result,
  );
}

export function getServicesPage(): Promise<ServicesPageContent> {
  return fromSanity<ServicesPageContent>(
    groq`{
      "page": *[_type == "servicesPage"][0]{ seo, hero },
      "services": *[_type == "service"] | order(order asc){
        "id": slug.current, icon, name, tagline, summary, points, examples[]{ name, href },
        "images": images[]${screenshot}, flow
      },
      "faq": *[_type == "faq" && page == "services"] | order(order asc){ "q": question, "a": answer }
    }{ "seo": page.seo, "hero": page.hero, services, faq }`,
    () => servicesJson as ServicesPageContent,
  ).then((data) => ({
    // Keep the page usable if the page document hasn't been filled in yet.
    seo: data.seo ?? servicesJson.seo,
    hero: data.hero ?? servicesJson.hero,
    services: data.services?.length ? data.services : (servicesJson.services as Service[]),
    faq: data.faq ?? [],
  }));
}

export function getJourney(): Promise<JourneyStep[]> {
  return fromSanity<JourneyStep[]>(
    groq`*[_type == "journeyEntry"] | order(order asc){ when, title, description, tags, href, external }`,
    () => journeyJson as JourneyStep[],
  );
}

export function getTestimonials(): Promise<Testimonial[]> {
  return fromSanity<Testimonial[]>(
    groq`*[_type == "testimonial"] | order(order asc){ quote, name, role, business }`,
    () => testimonialsJson as Testimonial[],
  );
}

export function getAlu360(): Promise<Alu360Content> {
  return fromSanity<Alu360Content>(
    groq`*[_type == "alu360Page"][0]{ hero, sections[]{ id, number, title, items } }`,
    () => alu360Json as Alu360Content,
  );
}
