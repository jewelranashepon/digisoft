import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
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
        title="Service"
        highlight="Packages"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages" }]}
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

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Need Something Different?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Build your own custom package by selecting exactly the services you
            need. Our flexible pricing lets you create the perfect solution for
            your business.
          </p>
          <Link href="/custom-package">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Build Custom Package
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
