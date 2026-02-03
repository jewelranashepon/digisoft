import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codexadigital.com.au"),

  title: {
    default: "Codexa Digital | Web Design & SEO Agency Australia",
    template: "%s | Codexa Digital",
  },

  description:
    "Codexa Digital is an Australian web design, development & SEO agency helping businesses grow online.",

  keywords: [
    "web design Australia",
    "SEO agency Australia",
    "Next.js agency",
    "Codexa Digital",
  ],

  openGraph: {
    title: "Codexa Digital",
    description: "Web Design, Development & SEO Agency in Australia",
    url: "https://codexadigital.com.au",
    siteName: "Codexa Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codexa Digital",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Codexa Digital",
    description: "Web Design, Development & SEO Agency in Australia",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
