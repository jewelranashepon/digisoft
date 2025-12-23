"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TalkToExperts() {
  return (
    <section className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            {/* Decorative Dots */}
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-[#FF6B2B]" />
              <div className="size-3 rounded-full bg-[#FF6B2B]" />
              <div className="size-3 rounded-full bg-[#FF6B2B]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Talk to the Experts
            </h2>

            {/* Body Content */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                If your website is buried on page 2 or 22, nobody can find you.
                Your potential customers shop elsewhere. You need to get
                noticed. You need to climb the rankings. You need to get on the
                first page of search engines.
              </p>

              <p>
                Talk to the experts.{" "}
                <span className="font-semibold text-[#FF6B2B]">
                  Rise Digital Media
                </span>{" "}
                has been helping businesses just like yours for years. We know
                how to create a web site that gets results. And if you&apos;ve
                already got a site, we know how to give it a makeover so it
                seriously gets noticed.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                size="lg"
                className="bg-[#FF6B2B] hover:bg-[#FF5515] text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                GET HELP WITH YOUR SEO
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            {/* Decorative Frame Effect */}
            <div className="relative">
              {/* Orange border frame - offset layer */}
              <div className="absolute -right-4 -bottom-4 w-full h-full border-4 border-[#FF6B2B] rounded-lg" />

              {/* Main image container */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl border-4 border-[#FF6B2B]">
                <Image
                  src="/images/image.png"
                  alt="SEO Strategy Illustration - Computer monitor with SEO elements, analytics charts, target icon, and digital marketing symbols"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements Animation */}
            <div className="absolute -top-4 -left-4 size-8 bg-[#FFD700] rounded-full animate-bounce opacity-80" />
            <div className="absolute top-1/4 -right-2 size-6 bg-[#4ECDC4] rounded-full animate-pulse opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}
