// Builds a Sanity import file from the JSON content in src/data, including the
// screenshots in /public. Run it once to fill a new, empty Sanity dataset:
//
//   node scripts/sanity-seed.mjs
//   npx sanity dataset import sanity-seed.ndjson production --replace
//
// Document ids are fixed (e.g. "project-brokersnet"), so running it again with
// --replace overwrites the same documents instead of making duplicates.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => JSON.parse(readFileSync(resolve(root, "src/data", name), "utf8"));

const solutions = read("solutions.json");
const faq = read("faq.json");
const projects = read("projects.json");
const caseStudies = read("case-studies.json");
const services = read("services.json");
const journey = read("journey.json");
const testimonials = read("testimonials.json");
const alu360 = read("alu360.json");

let keyCounter = 0;
const key = () => `k${(keyCounter++).toString(36)}`;
const keyed = (items = []) => items.map((item) => ({ _key: key(), ...item }));
const slug = (current) => ({ _type: "slug", current });

/** A local /public image path as an image the import uploads to Sanity. */
const asset = (src) => `image@${pathToFileURL(resolve(root, "public", src.replace(/^\//, ""))).href}`;
const screenshot = (img) => ({
  _type: "screenshot",
  _key: key(),
  alt: img.alt,
  ...(img.caption ? { caption: img.caption } : {}),
  phone: Boolean(img.phone),
  _sanityAsset: asset(img.src),
});

const docs = [];

docs.push({
  _id: "homePage",
  _type: "homePage",
  builtFor: solutions.builtFor,
  manifesto: solutions.manifesto,
  built: solutions.built.map((card) => ({
    _key: key(),
    _type: "card",
    id: card.id,
    icon: card.icon,
    name: card.name,
    tagline: card.tagline,
    line: card.line,
    tags: card.tags,
    href: card.href,
    cta: card.cta,
    images: card.images?.map(screenshot),
    flow: card.flow,
  })),
  process: keyed(solutions.process),
  whyUs: keyed(solutions.whyUs),
  reach: solutions.reach,
});

docs.push({ _id: "servicesPage", _type: "servicesPage", seo: services.seo, hero: services.hero });

docs.push({
  _id: "alu360Page",
  _type: "alu360Page",
  hero: alu360.hero,
  sections: keyed(alu360.sections),
});

services.services.forEach((s, i) =>
  docs.push({
    _id: `service-${s.id}`,
    _type: "service",
    name: s.name,
    slug: slug(s.id),
    icon: s.icon,
    tagline: s.tagline,
    summary: s.summary,
    points: s.points,
    examples: keyed(s.examples),
    images: s.images?.map(screenshot),
    flow: s.flow,
    order: (i + 1) * 10,
  }),
);

projects.forEach((p, i) => {
  const study = caseStudies[p.id];
  docs.push({
    _id: `project-${p.id}`,
    _type: "project",
    name: p.name,
    slug: slug(p.id),
    type: p.type,
    tagline: p.tagline,
    description: p.description,
    tags: p.tags,
    href: p.href,
    status: p.status,
    ...(p.image ? { image: { _type: "image", alt: p.imageAlt ?? p.name, _sanityAsset: asset(p.image) } } : {}),
    order: (i + 1) * 10,
    ...(study
      ? {
          overview: study.overview,
          sector: study.sector,
          year: study.year,
          stack: study.stack,
          challenge: study.challenge || undefined,
          highlights: study.highlights,
          workflow: study.workflow,
          roles: keyed(study.roles),
          outcomes: study.outcomes,
          outcome: study.outcome || undefined,
          gallery: study.images.map(screenshot),
        }
      : {}),
  });
});

const addFaqs = (items, page) =>
  items.forEach((f, i) =>
    docs.push({ _id: `faq-${page}-${i + 1}`, _type: "faq", question: f.q, answer: f.a, page, order: (i + 1) * 10 }),
  );
addFaqs(faq, "home");
addFaqs(services.faq, "services");

journey.forEach((j, i) =>
  docs.push({ _id: `journey-${i + 1}`, _type: "journeyEntry", ...j, order: (i + 1) * 10 }),
);

testimonials.forEach((t, i) => docs.push({ _id: `testimonial-${i + 1}`, _type: "testimonial", ...t, order: (i + 1) * 10 }));

// Drop undefined values so the import file stays clean.
const out = docs.map((d) => JSON.stringify(d, (_k, v) => (v === undefined ? undefined : v))).join("\n") + "\n";
const file = resolve(root, "sanity-seed.ndjson");
writeFileSync(file, out);
console.log(`Wrote ${docs.length} documents to ${file}`);
