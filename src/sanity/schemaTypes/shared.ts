import { defineArrayMember, defineField } from "sanity";

/** A list of short text lines (bullets, tags, steps). */
export const stringList = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  });

/** An image with required alt text, used for screenshots. */
export const imageWithAlt = defineArrayMember({
  type: "image",
  name: "screenshot",
  title: "Screenshot",
  options: { hotspot: true },
  fields: [
    defineField({ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "phone",
      title: "Show in a phone frame",
      description: "Turn on for tall mobile app screenshots.",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

export const orderField = defineField({
  name: "order",
  title: "Order",
  description: "Lower numbers show first.",
  type: "number",
  initialValue: 100,
});

export const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: [
      { title: "Layers (custom software)", value: "layers" },
      { title: "Spark (AI)", value: "spark" },
      { title: "Flow (automation)", value: "flow" },
      { title: "Chip (IoT)", value: "chip" },
      { title: "Globe (websites)", value: "globe" },
      { title: "Document", value: "document" },
      { title: "Box", value: "box" },
    ],
  },
});
