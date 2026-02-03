import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ServicesTabs from "./ServicesTabs";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our web development, web design, SEO & digital marketing services in Australia.",
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
