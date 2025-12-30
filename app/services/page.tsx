"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogHero from "@/components/blog/BlogHero";
import { services, Category } from "@/data/services";

const tabs = [
  { id: "web-dev", label: "Web Development" },
  { id: "web-design", label: "Web Design" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "seo", label: "Local SEO" },
] as const;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Category>("web-dev");

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <BlogHero />

      <section className="container mx-auto px-4 py-20">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-500">
            Everything you need to grow your business online.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="relative flex bg-white p-1 rounded-full shadow-md">
            <div
              className="absolute top-1 bottom-1 bg-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${
                  tabs.findIndex((t) => t.id === activeTab) *
                  (100 / tabs.length)
                }%`,
              }}
            />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 px-8 py-3 font-semibold rounded-full ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium"
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
