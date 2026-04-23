import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mithryl Labs — Software forged for small business",
  description:
    "Custom websites, AI agents, and automations for small businesses. Built in Palatine, IL by Ben Williamson.",
  icons: {
    icon: "/logos/mithryl-mark.png",
  },
  openGraph: {
    title: "Mithryl Labs",
    description:
      "Custom websites, AI agents, and automations for small businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
