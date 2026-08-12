import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "trans.melbourne — practical info for trans people in Melbourne",
  description:
    "Healthcare, housing, money, safety, work, legal help and transition — practical information for trans and gender-diverse people in Melbourne, Victoria. No bullshit.",
  openGraph: {
    title: "trans.melbourne — practical info for trans people in Melbourne",
    description:
      "Healthcare, housing, money, safety, work, legal help and transition — practical information for trans and gender-diverse people in Melbourne, Victoria.",
    url: "https://trans.melbourne",
    siteName: "trans.melbourne",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "trans.melbourne",
    description:
      "Practical information for trans and gender-diverse people in Melbourne. No bullshit.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
