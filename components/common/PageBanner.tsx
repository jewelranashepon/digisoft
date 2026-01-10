"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumb = {
  label: string;
  href?: string;
};

interface PageBannerProps {
  title: string;
  highlight?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageBanner({
  title,
  highlight,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 mt-20">
        <div className="text-center">
          {/* Breadcrumbs */}
          <nav className="flex justify-center items-center text-sm text-blue-200 mb-4">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 opacity-70" />
                )}
              </div>
            ))}
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}{" "}
            {highlight && <span className="text-blue-400">{highlight}</span>}
          </h1>
        </div>
      </div>
    </section>
  );
}
