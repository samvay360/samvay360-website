import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Devanagari } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
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

export const metadata: Metadata = {
  title: "Samvay360 — 360° software & product solutions",
  description:
    "Samvay360 builds software that eases your workflow and products like Alu360 that put it to work — all in coordination with you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${devanagari.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
