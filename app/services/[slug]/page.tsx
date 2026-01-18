import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceHeroSection } from "@/components/services/service-hero-section";
import { TalkToExpertsDynamic } from "@/components/services/talk-to-experts-dynamic";
import { ServiceProcessDynamic } from "@/components/services/service-process-dynamic";
import BottlenecksSectionDynamic from "@/components/services/bottlenecks-section-dynamic";
import { WhyChooseUsDynamic } from "@/components/services/why-choose-us-dynamic";
import SEOServicesSectionDynamic from "@/components/services/seo-services-section-dynamic";
import { getServiceDetails } from "@/data/service-details";
import SeoServices from "@/components/services/seo-services";
import FaqSection from "@/components/services/faq-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) notFound();

  const serviceDetails = getServiceDetails(slug, service.title);

  const hasCustomContent = [
    "doctor-seo",
    "wordpress-website",
    "web-app",
  ].includes(serviceDetails.id);

  return (
    <>
      {/* {!hasCustomContent && (
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-2 text-lg font-semibold text-amber-900">
              Content Coming Soon
            </h2>
            <p className="text-amber-800">
              Detailed information for {service.title} will be available soon.
              Please contact our team for more information about this service.
            </p>
          </div>
        </div>
      )} */}
      <ServiceHeroSection data={serviceDetails.heroSection} />
      <TalkToExpertsDynamic data={serviceDetails.talkToExperts} />
      <SeoServices data={serviceDetails.seoServicesDetails} />
      <ServiceProcessDynamic data={serviceDetails.processSection} />
      <BottlenecksSectionDynamic data={serviceDetails.bottlenecksSection} />
      <WhyChooseUsDynamic data={serviceDetails.whyChooseUs} />
      {/* <SEOServicesSectionDynamic data={serviceDetails.seoServices} /> */}
      <FaqSection data={serviceDetails.faqSection?.items} />
    </>
  );
}
