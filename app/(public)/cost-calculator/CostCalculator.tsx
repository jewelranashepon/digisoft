"use client";
import { useState } from "react";
import { Globe, Palette, Mail, Calculator } from "lucide-react";
import { CalculatorState, initialState } from "@/lib/calculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebsiteSection } from "@/components/cost-calculator/website-section";
import { GraphicsSection } from "@/components/cost-calculator/graphics-section";
import { ContactSection } from "@/components/cost-calculator/contact-section";
import { PricingDisplay } from "@/components/cost-calculator/pricing-display";
import PageBanner from "@/components/common/PageBanner";

export default function CostCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleStateChange = (updates: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div>
        <PageBanner
          title="Cost Calculator"
          highlight=""
          breadcrumbs={[
            { label: "Home", href: "/cost-calculator" },
            { label: "Cost Calculator" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="website" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="website">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </TabsTrigger>
                <TabsTrigger value="graphics">
                  <Palette className="w-4 h-4 mr-2" />
                  Graphics
                </TabsTrigger>
                <TabsTrigger value="contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="website"
                className="space-y-6 animate-fade-in"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Website Services
                    </h2>
                  </div>
                  <WebsiteSection state={state} onChange={handleStateChange} />
                </div>
              </TabsContent>

              <TabsContent
                value="graphics"
                className="space-y-6 animate-fade-in"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Graphic Design Services
                    </h2>
                  </div>
                  <GraphicsSection state={state} onChange={handleStateChange} />
                </div>
              </TabsContent>

              <TabsContent
                value="contact"
                className="space-y-6 animate-fade-in"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Your Information
                    </h2>
                  </div>
                  <ContactSection state={state} onChange={handleStateChange} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <PricingDisplay state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
