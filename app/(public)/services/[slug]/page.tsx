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
   ✅ FIXED METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }

  const canonicalUrl = `https://codexadigital.com.au/services/${service.id}`;

  return {
    title: `${service.title} | Codexa Digital`,
    description: service.longDescription || service.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${service.title} | Codexa Digital`,
      description: service.description,
      url: canonicalUrl,
      siteName: "Codexa Digital",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_AU",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Codexa Digital`,
      description: service.description,
      images: [service.image],
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
