import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ServicesTabs from "./ServicesTabs";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),
  title:
    "Codexa Digital Services | Web Design, Development & Digital Marketing Australia",
  description:
    "Discover our professional web design, web development, SEO, and digital marketing services across Australia. We help businesses grow with custom digital solutions.",
  alternates: {
    canonical: "https://www.codexadigital.com.au/services",
  },
  openGraph: {
    title:
      "Codexa Digital Services | Web Design, Development & Digital Marketing Australia",
    description:
      "Discover our professional web design, web development, SEO, and digital marketing services across Australia. We help businesses grow with custom digital solutions.",
    url: "https://www.codexadigital.com.au/services",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codexa Digital Services - Web Design & Digital Marketing Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Codexa Digital Services | Web Design, Development & Digital Marketing Australia",
    description:
      "Discover our professional web design, web development, SEO, and digital marketing services across Australia.",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <PageBanner
        title="Our"
        highlight="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <ServicesTabs />
    </div>
  );
}
