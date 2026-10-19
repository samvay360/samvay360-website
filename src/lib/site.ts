export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.samvay360.com";

export const CONTACT_EMAIL = "hello@samvay360.com";
export const ALU360_EMAIL = "alu360@samvay360.com";
export const ALU360_URL = "https://alu360.samvay360.com";

// Set NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, with country code) to enable
// the floating WhatsApp button. It stays hidden until a number is configured.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
