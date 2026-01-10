"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogHero from "@/components/blog/BlogHero";
import { services, Category } from "@/data/services";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageBanner from "@/components/common/PageBanner";

const tabsData = [
  { id: "web-dev", label: "Web Development" },
  { id: "web-design", label: "Web Design" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "seo", label: "Local SEO" },
] as const;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>("web-dev");

  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Update indicator whenever active tab changes
  useEffect(() => {
    const activeIndex = tabsData.findIndex((t) => t.id === activeTab);
    const tabEl = tabRefs.current[activeIndex];
    if (tabEl) {
      setIndicatorStyle({
        left: tabEl.offsetLeft,
        width: tabEl.offsetWidth,
      });
    }
  }, [activeTab]);

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <PageBanner
        title="Our"
        highlight="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container mx-auto px-4 py-20">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as Category)}
          className="relative w-full"
        >
          <TabsList className="relative flex w-fit mx-auto bg-white backdrop-blur-lg border border-white/10 rounded-full shadow-lg px-4 py-2 gap-2">
            {/* Active indicator */}
            <div
              className="absolute top-1 bottom-1 bg-gradient-to-br from-blue-500/80 to-cyan-400/80 rounded-full shadow-md transition-all duration-300"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />

            {/* Tab triggers */}
            {tabsData.map((tab, index) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current[index] = el;
                }}
                className={cn(
                  "relative z-10 px-6 py-3 font-semibold rounded-full transition-colors whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-xl 
                 bg-slate-800 border border-slate-200/20
                 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]
                 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Image */}
              <div className="relative h-56 z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
