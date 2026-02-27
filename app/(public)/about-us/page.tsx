import AboutBanner from "@/components/about-us/AboutBanner";
import AboutUsShowcase from "@/components/about-us/AboutUsShowcase";
import StrategicIdentity from "@/components/about-us/StrategicIdentity";
import WhyChooseUsSection from "@/components/about-us/WhyChooseUsSection";
import CTA from "@/components/cta";
import ServiceLocations from "@/components/ServiceSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),

  title: "About Us | Codexa Digital | Best Web Design & SEO Agency",

  description:
    "Learn more about Codexa Digital and how we help businesses grow online with data-driven SEO, SMM, PPC, and web development strategies. Get to know us today!",

  keywords: [
    "About Codexa Digital",
    "Web Design Agency Australia",
    "SEO Agency Australia",
    "Digital Marketing Experts",
    "PPC & SMM Agency",
    "Best Web Design Company",
  ],

  authors: [{ name: "Codexa Digital" }],
  creator: "Codexa Digital",
  publisher: "Codexa Digital",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.codexadigital.com.au/about-us",
  },

  openGraph: {
    title: "About Us | Codexa Digital | Best Web Design & SEO Agency",
    description:
      "Discover how Codexa Digital helps Australian businesses grow through SEO, PPC, SMM, and modern web development.",
    url: "https://www.codexadigital.com.au/about-us",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Codexa Digital - Web Design & SEO Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Codexa Digital | Best Web Design & SEO Agency",
    description:
      "Meet Codexa Digital — a performance-focused web design and SEO agency helping businesses grow online.",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutBanner />
      <AboutUsShowcase />
      <WhyChooseUsSection />
      <StrategicIdentity />
      <ServiceLocations />
      <CTA />
    </div>
  );
}
