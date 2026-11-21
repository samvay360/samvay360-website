import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "page",
      title: "Show on",
      type: "string",
      options: { list: [{ title: "Home page", value: "home" }, { title: "Services page", value: "services" }], layout: "radio" },
      initialValue: "home",
      validation: (r) => r.required(),
    }),
    orderField,
  ],
  orderings: [{ title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "question", subtitle: "page" } },
});
