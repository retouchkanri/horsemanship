import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { GlobalNav } from "@/components/GlobalNav";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
});

const shippori = Shippori_Mincho({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori",
});

const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: "全国中高生馬術選手権大会のウェブサイトです。",
  openGraph: {
    siteName: `${SITE_NAME} | 全国中高生馬術選手権大会のウェブサイトです。`,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f3ee",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${shippori.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <HeroCarousel />
        <GlobalNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
