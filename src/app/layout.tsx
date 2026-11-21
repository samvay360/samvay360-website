import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Devanagari, Chivo_Mono } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-deva",
  subsets: ["devanagari"],
  weight: ["500", "700"],
});

const mono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: { type: "website", siteName: "Samvay360", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  title: {
    default: "Samvay360 | Custom Software, AI Apps, Automation & IoT, Gujarat",
    template: "%s",
  },
  description:
    "Samvay360 builds custom software and ERP, AI-native apps, business automations, IoT systems and websites around how your business already works, plus Alu360 for aluminium fabricators. Based in Gujarat, India.",
  keywords: [
    "custom software development",
    "ERP development",
    "AI app development",
    "business automation",
    "IoT software development",
    "software company Gujarat",
    "inventory management software",
    "aluminium fabrication software",
    "website development Gujarat",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${devanagari.variable} ${mono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
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
      </body>
    </html>
  );
}
