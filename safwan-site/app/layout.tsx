import type { Metadata } from "next";
import { Jost, Alegreya } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  variable: "--font-alegreya",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Personal Portfolio`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${alegreya.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
