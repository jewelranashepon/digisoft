"use client";

import AboutBanner from "@/components/about-us/AboutBanner";
import AboutUsShowcase from "@/components/about-us/AboutUsShowcase";
import StrategicIdentity from "@/components/about-us/StrategicIdentity";
import WhyChooseUsSection from "@/components/about-us/WhyChooseUsSection";
import CTA from "@/components/cta";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutBanner />
      <AboutUsShowcase />
      <WhyChooseUsSection />
      <StrategicIdentity />
      <CTA />
    </div>
  );
}




