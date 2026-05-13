"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, Category } from "@/data/services";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  { id: "web-dev", label: "Web Development" },
  { id: "web-design", label: "Web Design" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "seo", label: "Local SEO" },
] as const;

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<Category>("web-dev");

  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const index = tabsData.findIndex((t) => t.id === activeTab);
    const el = tabRefs.current[index];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  const filteredServices = services.filter(
    (service) => service.category === activeTab,
  );

  return (
    <section className="container mx-auto px-4 py-20">

      {/* ================= TABS (UNCHANGED) ================= */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as Category)}
      >
        <TabsList className="relative flex w-fit mx-auto bg-white rounded-full shadow-lg px-4 py-2 gap-2">
          <div
            className="absolute top-1 bottom-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full transition-all duration-300"
            style={indicatorStyle}
          />

          {tabsData.map((tab, i) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              ref={(el) => {
                if (el) tabRefs.current[i] = el;
              }}
              className={cn(
                "relative z-10 px-6 py-3 font-semibold rounded-full",
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white",
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* ================= SEO FIX (NO DESIGN CHANGE) ================= */}
      {/* Hidden full link list for Google crawler */}
      <div className="hidden">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`}>
            {service.title}
          </Link>
        ))}
      </div>

      {/* ================= SERVICE CARDS (UNCHANGED DESIGN) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            className="group rounded-xl overflow-hidden bg-slate-800 border border-slate-200/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-56">
              <Image
                src={service.image}
                alt={`${service.title} service`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>

              <p className="text-sm text-white/80 mt-2">
                {service.description}
              </p>

              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 mt-4 text-white font-semibold"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}