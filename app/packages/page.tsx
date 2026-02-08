import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/common/PageBanner";

export const metadata = {
  title: "Service Packages | Digital Agency",
  description:
    "Choose from our carefully crafted service packages or build your own custom solution.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageBanner
        title="Our Service"
        highlight="Packages"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle gradient glow for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Build a bespoke package tailored to your specific requirements.
              Our flexible architecture ensures you only pay for the high-impact
              services your business needs.
            </p>
            <Link href="/custom-package">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 h-14 rounded-xl transition-all active:scale-95 shadow-lg"
              >
                Build Custom Package
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-100 py-10">
          <div className="p-8 group transition-colors hover:bg-slate-50/50">
            <div className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tighter">
              500+
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Projects Completed
            </p>
          </div>

          <div className="p-8 group transition-colors hover:bg-slate-50/50">
            <div className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tighter">
              98%
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Client Satisfaction
            </p>
          </div>

          <div className="p-8 group transition-colors hover:bg-slate-50/50">
            <div className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tighter">
              24/7
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Expert Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
