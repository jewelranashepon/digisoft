"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TalkToExperts() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-blue-50/40 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="space-y-7 animate-in fade-in slide-in-from-left-8 duration-700">
            {/* Badge */}
            <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-700">
              Talk to Professionals
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Talk to the{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              <p>
                If your website is hidden beyond page one, your customers won’t
                find you. Visibility matters. Rankings matter. Being discovered
                matters.
              </p>

              <p>
                At{" "}
                <span className="font-semibold text-teal-600">
                  Rise Digital Media
                </span>
                , we help brands dominate search results, attract qualified
                traffic, and convert visitors into customers — consistently.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button
                size="lg"
                className="h-14 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-10 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                Get Help With Your SEO
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/image.png"
                alt="SEO strategy illustration showing analytics, growth charts, and digital marketing concepts"
                width={650}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-600/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Accents */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
    </section>
  );
}
