import type { Metadata } from "next";
import BlogPageComponent from "@/components/BlogPageComponent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codexadigital.com.au"),
  title:
    "Codexa Digital Blog | Top Digital Marketing & Web Design Tips & Guide",
  description:
    "Explore expert tips on website design, SEO, digital marketing, and WordPress from our blogs to grow your business online. Learn more about what new in digital marketing!",
  alternates: {
    canonical: "https://www.codexadigital.com.au/blog",
  },
  openGraph: {
    title:
      "Codexa Digital Blog | Top Digital Marketing & Web Design Tips & Guide",
    description:
      "Explore expert tips on website design, SEO, digital marketing, and WordPress from our blogs to grow your business online. Learn more about what new in digital marketing!",
    url: "https://www.codexadigital.com.au/blog",
    siteName: "Codexa Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.codexadigital.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codexa Digital Blog - Digital Marketing & Web Design Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Codexa Digital Blog | Top Digital Marketing & Web Design Tips & Guide",
    description:
      "Explore expert tips on website design, SEO, digital marketing, and WordPress from our blogs to grow your business online. Learn more about what new in digital marketing!",
    images: ["https://www.codexadigital.com.au/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return <BlogPageComponent />;
}
