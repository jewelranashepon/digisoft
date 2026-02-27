import ContactUsComponent from "@/components/ContactUsComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),
  title: "Contact Us | Codexa Digital | Custom Digital Marketing Solution",
  description:
    "Ready to take your business to the next level? Partner with us who is a leading digital marketing agency. Book your strategic session today—call 0414082729.",
  alternates: {
    canonical: "https://www.codexadigital.com.au/contact-us",
  },
  openGraph: {
    title: "Contact Us | Codexa Digital | Custom Digital Marketing Solution",
    description:
      "Ready to take your business to the next level? Partner with Codexa Digital. Book your strategic session today—call 0414082729.",
    url: "https://www.codexadigital.com.au/contact-us",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Codexa Digital - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Codexa Digital | Custom Digital Marketing Solution",
    description:
      "Ready to take your business to the next level? Partner with Codexa Digital. Book your strategic session today—call 0414082729.",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactUsComponent />;
}
