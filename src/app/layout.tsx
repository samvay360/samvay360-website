import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Devanagari, Chivo_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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
        {children}
      </body>
    </html>
  );
}
