"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { packages } from "@/data/packages";
import { ServiceSelector } from "@/components/ServiceSelector";
import { PriceSummary } from "@/components/PriceSummary";
import { CustomPackageForm } from "@/components/CustomPackageForm";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import PageBanner from "@/components/common/PageBanner";

function CustomPackageContent() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [packageType, setPackageType] = useState<string | undefined>();

  useEffect(() => {
    if (packageId) {
      const pkg = packages.find((p) => p.id === packageId);
      if (pkg) {
        setSelectedServices(pkg.serviceIds);
        setPackageType(pkg.id);
      }
    }
  }, [packageId]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices((prev) => prev.filter((id) => id !== serviceId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageBanner
        title="Create Your Custom "
        highlight="Package"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/packages">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Packages
            </Button>
          </Link>

          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg shrink-0">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Build Your Custom Package
              </h1>
              <p className="text-lg text-gray-600">
                Select the services you need and see your price update in
                real-time.
                {packageType && (
                  <span className="ml-1 text-blue-600 font-medium">
                    Starting from{" "}
                    {packages.find((p) => p.id === packageType)?.name}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ServiceSelector
              selectedServices={selectedServices}
              onServiceToggle={handleServiceToggle}
            />
          </div>

          <div className="space-y-6">
            <PriceSummary
              selectedServices={selectedServices}
              onRemoveService={handleRemoveService}
            />

            <CustomPackageForm
              selectedServices={selectedServices}
              packageType={packageType}
            />
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Need Help Choosing?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Our team is here to help you select the right services for your
            business. Contact us for a free consultation.
          </p>
          <Button variant="outline" size="sm">
            Schedule Consultation
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default function CustomPackagePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <CustomPackageContent />
    </Suspense>
  );
}
