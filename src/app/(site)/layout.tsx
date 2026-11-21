import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";

// Public website chrome. The Sanity Studio at /studio sits outside this
// route group, so it renders full-screen without the header and footer.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900">
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Samvay360",
              url: SITE_URL,
              logo: `${SITE_URL}/brand/samvay360-logo.png`,
              email: CONTACT_EMAIL,
              slogan: "Technology that brings business together",
              address: { "@type": "PostalAddress", addressRegion: "Gujarat", addressCountry: "IN" },
              areaServed: ["India", "Worldwide"],
              knowsAbout: [
                "Custom software development",
                "ERP development",
                "AI-native app development",
                "Business process automation",
                "IoT software",
                "Inventory management software",
                "Aluminium fabrication software",
                "Website development",
              ],
            }),
          }}
        />
    </>
  );
}
