'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Package as PackageIcon, ShoppingCart, Star, Check, Settings2, Layers, Users, Headphones } from 'lucide-react';
import { packageTabs } from '@/data/packages';
import { PackageCard } from '@/components/PackageCard';
import { Button } from '@/components/ui/button';
import PageBanner from '@/components/common/PageBanner';

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState(packageTabs[0].id);

  const currentTab = packageTabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <PageBanner
        title="Our Service"
        highlight="Packages"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-6 shadow-xl shadow-slate-200">
            <PackageIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Packages
          </h1>
        </div>

        {/* Professional Centered Pill Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-200/50 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-inner">
            {packageTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-8 py-3 text-sm font-bold transition-all duration-300 rounded-xl whitespace-nowrap
                    ${isActive 
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-300 translate-y-[-1px]' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.name}
                    {isActive && (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content: Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {currentTab?.packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* Custom Package CTA Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-20 text-center text-white shadow-2xl border border-slate-800 relative overflow-hidden mb-20">
          {/* Subtle design element */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Need a Tailored Framework?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Our configuration engine allows you to hand-pick specific services. 
              Optimize your workflow by building a package that scales with your unique requirements.
            </p>
            <Link href="/custom-package">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 h-14 rounded-xl transition-all active:scale-95 shadow-xl shadow-blue-900/20"
              >
                Configure Custom Package
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust & Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200 py-12">
          <div className="px-10 py-6 text-center md:text-left flex flex-col items-center md:items-start transition-colors hover:bg-slate-50">
            <Layers className="h-6 w-6 text-slate-400 mb-4" />
            <div className="text-4xl font-extrabold text-slate-900 mb-1 tracking-tighter">500+</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Deployments</p>
          </div>

          <div className="px-10 py-6 text-center md:text-left flex flex-col items-center md:items-start transition-colors hover:bg-slate-50">
            <Users className="h-6 w-6 text-slate-400 mb-4" />
            <div className="text-4xl font-extrabold text-slate-900 mb-1 tracking-tighter">98.4%</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Success Rate</p>
          </div>

          <div className="px-10 py-6 text-center md:text-left flex flex-col items-center md:items-start transition-colors hover:bg-slate-50">
            <Headphones className="h-6 w-6 text-slate-400 mb-4" />
            <div className="text-4xl font-extrabold text-slate-900 mb-1 tracking-tighter">24/7</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Expert Support</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}