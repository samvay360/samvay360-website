import { project } from "./project";
import { service } from "./service";
import { faq } from "./faq";
import { journeyEntry } from "./journey";
import { testimonial } from "./testimonial";
import { alu360Page, homePage, servicesPage } from "./pages";

export const schemaTypes = [homePage, servicesPage, alu360Page, service, project, faq, journeyEntry, testimonial];

/** Page documents that exist once; the Studio opens them directly instead of as lists. */
export const singletonTypes = new Set(["homePage", "servicesPage", "alu360Page"]);
