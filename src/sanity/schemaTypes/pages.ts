import { defineArrayMember, defineField, defineType } from "sanity";
import { iconField, imageWithAlt, stringList } from "./shared";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    stringList("builtFor", "Built for (scrolling strip)"),
    defineField({
      name: "manifesto",
      title: "Who we are",
      description: "The paragraph whose words light up as you scroll.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "built",
      title: "What we build cards",
      description: "The first card is shown wide.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "card",
          fields: [
            defineField({ name: "id", type: "string", validation: (r) => r.required() }),
            iconField,
            defineField({ name: "name", type: "string" }),
            defineField({ name: "tagline", type: "string" }),
            defineField({ name: "line", title: "Short description", type: "text", rows: 2 }),
            stringList("tags", "Tags"),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({ name: "cta", title: "Link text", type: "string" }),
            defineField({ name: "images", type: "array", of: [imageWithAlt], validation: (r) => r.max(2) }),
            stringList("flow", "Flow steps"),
          ],
          preview: { select: { title: "name", subtitle: "tagline" } },
        }),
      ],
    }),
    defineField({
      name: "process",
      title: "How we work steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        }),
      ],
    }),
    defineField({
      name: "whyUs",
      title: "Why us cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),
    defineField({ name: "reach", title: "Location line", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services page",
  type: "document",
  fields: [
    defineField({
      name: "seo",
      title: "Search engine",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        stringList("keywords", "Keywords"),
      ],
    }),
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Services page", subtitle: "Services and FAQs are edited in their own lists" }) },
});

export const alu360Page = defineType({
  name: "alu360Page",
  title: "Alu360 page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "name", type: "string" }),
        defineField({ name: "tagline", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Feature sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", type: "string" }),
            defineField({ name: "number", type: "string" }),
            defineField({ name: "title", type: "string" }),
            stringList("items", "Features"),
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Alu360 page" }) },
});
