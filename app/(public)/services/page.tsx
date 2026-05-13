import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import ServicesTabs from "./ServicesTabs";
import { services } from "@/data/services";

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

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore every service page
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            All service pages are listed here so search engines and visitors can
            discover the right service page directly.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {service.category.replace("-", " ")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
