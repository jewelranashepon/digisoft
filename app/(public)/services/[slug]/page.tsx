import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServiceHeroSection } from "@/components/services/service-hero-section";
import { TalkToExpertsDynamic } from "@/components/services/talk-to-experts-dynamic";
import { ServiceProcessDynamic } from "@/components/services/service-process-dynamic";
import BottlenecksSectionDynamic from "@/components/services/bottlenecks-section-dynamic";
import { WhyChooseUsDynamic } from "@/components/services/why-choose-us-dynamic";
import { getServiceDetails } from "@/data/service-details";
import SeoServices from "@/components/services/seo-services";
import FaqSection from "@/components/services/faq-section";

/* =========================
   ✅ ENHANCED METADATA-
========================= */
export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  // First find basic service from services array
  const baseService = services.find((s) => s.id === slug);

  if (!baseService) {
    return {
      title: "All Services | Codexa Digital",
      description: "The requested service does not exist.",
    };
  }

  // Now get full details
  const serviceDetails = getServiceDetails(slug, baseService.title);

  const canonicalUrl = `https://www.codexadigital.com.au/services/${slug}`;

  const description =
    serviceDetails.meta?.description ||
    baseService.longDescription ||
    baseService.description;

  const title =
    serviceDetails.meta?.title ||
    `${baseService.title} Services in Australia | Codexa Digital`;

  const imageUrl =
    serviceDetails.heroSection?.image ||
    baseService.image ||
    "https://www.codexadigital.com.au/og-image.jpg";

  return {
    metadataBase: new URL("https://www.codexadigital.com.au"),

    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Codexa Digital",
      locale: "en_AU",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: baseService.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================
   PAGE (UNCHANGED)
========================= */

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const serviceDetails = getServiceDetails(slug, service.title);

  return (
    <>
      <ServiceHeroSection data={serviceDetails.heroSection} />
      <TalkToExpertsDynamic data={serviceDetails.talkToExperts} />
      <SeoServices data={serviceDetails.seoServicesDetails} />
      <ServiceProcessDynamic data={serviceDetails.processSection} />
      <BottlenecksSectionDynamic data={serviceDetails.bottlenecksSection} />
      <WhyChooseUsDynamic data={serviceDetails.whyChooseUs} />
      <FaqSection data={serviceDetails.faqSection?.items} />
    </>
  );
}
