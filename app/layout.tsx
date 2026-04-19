import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micka Wilk — Ingénieur IA",
  description: "Ingénieur IA basé à Bordeaux. Projets, CV et univers culturel.",
  openGraph: {
    title: "Micka Wilk — Ingénieur IA",
    description: "Ingénieur IA basé à Bordeaux. Projets, CV et univers culturel.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={geist.className}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-14">{children}</main>
        <footer className="border-t border-[#1e2330] py-6 text-center text-xs text-[#3d4558]">
          Micka Wilk · {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
