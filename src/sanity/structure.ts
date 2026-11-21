import type { StructureResolver } from "sanity/structure";

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type).title(title));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Samvay360")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "homePage", "Home page"),
              singleton(S, "servicesPage", "Services page"),
              singleton(S, "alu360Page", "Alu360 page"),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("project").title("Projects & case studies"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.documentTypeListItem("journeyEntry").title("Journey"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
