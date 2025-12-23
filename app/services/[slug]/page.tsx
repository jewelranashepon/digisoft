// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { services } from "@/data/services";
// import { ArrowRight } from "lucide-react";

// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default async function ServiceDetailsPage({ params }: PageProps) {
//   const { slug } = await params; // ✅ REQUIRED

//   const service = services.find((s) => s.id === slug);

//   if (!service) {
//     notFound();
//   }

//   return (
//     <section className="container mx-auto px-4 py-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//         {/* IMAGE */}
//         <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
//           <Image
//             src={service.image}
//             alt={service.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* CONTENT */}
//         <div>
//           <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
//             {service.title}
//           </h1>

//           <p className="text-gray-600 text-lg mb-8">
//             {service.longDescription}
//           </p>

//           <ul className="space-y-3 mb-10">
//             {service.features.map((feature, index) => (
//               <li key={index} className="flex items-center gap-3">
//                 <ArrowRight className="w-5 h-5 text-blue-600" />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



import { notFound } from "next/navigation";
import { services } from "@/data/services";
import BottlenecksSection from "@/components/services/BottlenecksSection";
import { ServiceHeroSection } from "@/components/services/ServiceHero";
import { TalkToExperts } from "@/components/services/ExpertsSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import SEOServicesSection from "@/components/services/SEOServicesSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHeroSection />
      <TalkToExperts />
      <ServiceProcess />
      <BottlenecksSection />
      <WhyChooseUs />
      <SEOServicesSection />
    </>
  );
}
