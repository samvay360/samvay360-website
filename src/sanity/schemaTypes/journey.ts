import { defineField, defineType } from "sanity";
import { orderField, stringList } from "./shared";

export const journeyEntry = defineType({
  name: "journeyEntry",
  title: "Journey entry",
  type: "document",
  fields: [
    defineField({ name: "when", type: "string", description: "For example 2024 or October 2025.", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    stringList("tags", "Tags"),
    defineField({ name: "href", title: "Link", type: "string" }),
    defineField({ name: "external", title: "Opens another website", type: "boolean", initialValue: false }),
    orderField,
  ],
  orderings: [{ title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "when" } },
});
