import { defineArrayMember, defineField, defineType } from "sanity";
import { imageWithAlt, orderField, stringList } from "./shared";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "card", title: "Card", default: true },
    { name: "caseStudy", title: "Case study page" },
  ],
  fields: [
    defineField({ name: "name", type: "string", group: "card", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "ID / URL slug",
      description: "Used in /projects/<slug> when the project has a case study page.",
      type: "slug",
      group: "card",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      group: "card",
      options: { list: ["Product", "Solution", "Project", "Website"], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tagline", type: "string", group: "card" }),
    defineField({ name: "description", type: "text", rows: 3, group: "card" }),
    { ...stringList("tags", "Tags"), group: "card" },
    defineField({
      name: "href",
      title: "Link",
      description: "A case study path like /projects/brokersnet, or a full URL for live sites.",
      type: "string",
      group: "card",
      validation: (r) => r.required(),
    }),
    defineField({ name: "status", type: "string", group: "card", description: "For example Live, 2024 or Open testing." }),
    defineField({
      name: "image",
      title: "Card image",
      type: "image",
      group: "card",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    { ...orderField, group: "card" },

    defineField({ name: "overview", type: "text", rows: 3, group: "caseStudy" }),
    defineField({ name: "sector", type: "string", group: "caseStudy" }),
    defineField({ name: "year", type: "string", group: "caseStudy" }),
    { ...stringList("stack", "Built with"), group: "caseStudy" },
    defineField({ name: "challenge", type: "text", rows: 4, group: "caseStudy" }),
    { ...stringList("highlights", "Highlights"), group: "caseStudy" },
    { ...stringList("workflow", "Workflow steps"), group: "caseStudy" },
    defineField({
      name: "roles",
      title: "User roles",
      type: "array",
      group: "caseStudy",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "text", type: "string" }),
          ],
        }),
      ],
    }),
    { ...stringList("outcomes", "Outcomes (list)"), group: "caseStudy" },
    defineField({ name: "outcome", title: "Outcome (paragraph)", type: "text", rows: 3, group: "caseStudy" }),
    defineField({ name: "gallery", type: "array", group: "caseStudy", of: [imageWithAlt] }),
  ],
  orderings: [{ title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "type", media: "image" } },
});
