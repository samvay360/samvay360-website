import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Devanagari, Chivo_Mono } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
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
  title: "Samvay360 — 360° software & product solutions",
  description:
    "Samvay360 builds software that eases your workflow and products like Alu360 that put it to work — all in coordination with you.",
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
        <ScrollProgress />
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
              "@type": "Organization",
              name: "Samvay360",
              url: SITE_URL,
              email: CONTACT_EMAIL,
            }),
          }}
        />
      </body>
    </html>
  );
}
