import Clients from "@/components/clients";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
      <Header />
      <Hero />
      <ProcessTimeline />
      <ProcessFlow />
      <Services />
      {/* <ServiceCards /> */}
      <Testimonial />
      <CTA />
      <Clients />
      <Footer />
    </div>
  );
}
