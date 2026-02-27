import AboutUs from "@/components/AboutUs";
import Clients from "@/components/clients";
import CTA from "@/components/cta";
import FAQComponent from "@/components/FAQComponent";
import Hero from "@/components/hero";
import ProcessFlow from "@/components/process-flow";
import ProcessTimeline from "@/components/process-timeline";
import ServiceCards from "@/components/service-cards";
import Services from "@/components/services";
import ServiceLocations from "@/components/ServiceSection";
import Testimonial from "@/components/testimonial";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),

  title: "Codexa Digital | Digital Marketing Agency for Local Businesses",

  description:
    "Codexa Digital is a performance-focused digital marketing agency using data-led strategies and SEO expertise to grow your brand’s visibility and engagement. Claim your free audit today!",

  keywords: [
    "Digital Marketing Agency Australia",
    "Local Business Marketing",
    "SEO Services Australia",
    "Performance Marketing Agency",
    "Digital Marketing for Small Business",
    "Codexa Digital",
  ],

  authors: [{ name: "Codexa Digital" }],
  creator: "Codexa Digital",
  publisher: "Codexa Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.codexadigital.com.au/",
  },

  openGraph: {
    title: "Codexa Digital | Digital Marketing Agency for Local Businesses",
    description:
      "Codexa Digital helps local businesses grow with SEO, data-driven digital marketing, and performance-focused strategies.",
    url: "https://www.codexadigital.com.au/",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codexa Digital - Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codexa Digital | Digital Marketing Agency for Local Businesses",
    description:
      "Grow your local business with SEO and data-driven digital marketing strategies.",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProcessTimeline />
      <ProcessFlow />
      <Services />
      <FAQComponent />
      <Testimonial />
      <CTA />
      <ServiceLocations />
    </div>
  );
}
