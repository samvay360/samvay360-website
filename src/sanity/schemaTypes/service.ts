import { defineArrayMember, defineField, defineType } from "sanity";
import { iconField, imageWithAlt, orderField, stringList } from "./shared";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Anchor",
      description: "Used in /services#<anchor>.",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    iconField,
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    stringList("points", "What you get"),
    defineField({
      name: "examples",
      title: "Built for (client links)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "Screenshots",
      description: "Up to two. Leave empty to show the flow steps instead.",
      type: "array",
      of: [imageWithAlt],
      validation: (r) => r.max(2),
    }),
    stringList("flow", "Flow steps", "Shown as a step diagram when there are no screenshots."),
    orderField,
  ],
  orderings: [{ title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "tagline" } },
});
