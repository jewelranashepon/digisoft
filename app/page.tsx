import AboutUs from "@/components/AboutUs";
import Clients from "@/components/clients";
import CTA from "@/components/cta";
import FAQComponent from "@/components/FAQComponent";
import Hero from "@/components/hero";
import ProcessFlow from "@/components/process-flow";
import ProcessTimeline from "@/components/process-timeline";
import ServiceCards from "@/components/service-cards";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProcessTimeline />
      <ProcessFlow />
      <Services />
      {/* <ServiceCards /> */}
      <FAQComponent />
      <Testimonial />
      <CTA />
      <Clients />
    </div>
  );
}
