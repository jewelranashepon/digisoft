import type { Metadata } from "next";
import PortfolioComponent from "@/components/PortfolioComponent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),
  title: "Codexa Digital Portfolio | Expert Website Design & Digital Marketing",
  description:
    "Showcasing our portfolio and offering top-notch website design & digital marketing services for clients across Australia. See our work and contact us for your business.",
  alternates: {
    canonical: "https://www.codexadigital.com.au/portfolio",
  },
  openGraph: {
    title:
      "Codexa Digital Portfolio | Expert Website Design & Digital Marketing",
    description:
      "Showcasing our portfolio and offering top-notch website design & digital marketing services for clients across Australia. See our work and contact us for your business.",
    url: "https://www.codexadigital.com.au/portfolio",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codexa Digital Portfolio - Website Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Codexa Digital Portfolio | Expert Website Design & Digital Marketing",
    description:
      "Showcasing our portfolio and offering top-notch website design & digital marketing services for clients across Australia. See our work and contact us for your business.",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return <PortfolioComponent />;
}
