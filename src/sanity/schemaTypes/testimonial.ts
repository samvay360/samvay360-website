import { defineField, defineType } from "sanity";
import { orderField } from "./shared";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  description: "Only add real quotes that the client approved.",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "business", type: "string" }),
    orderField,
  ],
  preview: { select: { title: "name", subtitle: "business" } },
});
