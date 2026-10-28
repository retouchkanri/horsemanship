import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_JP, Roboto } from "next/font/google";
import { GlobalNav } from "@/components/GlobalNav";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const roboto = Roboto({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${roboto.variable}`}>
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
