import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  if (!WHATSAPP_NUMBER) return null;
  return (
    <a
      href={whatsappLink("Hi Samvay360, I'd like to set up an intro call.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M20 11.5A8.500 8.500 0 0 1 8 19.200L4 20l.9-3.800A8.500 8.500 0 1 1 20 11.500Z" stroke="currentColor" strokeWidth="1.800" fill="none" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
