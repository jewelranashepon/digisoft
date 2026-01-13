"use client"

import { CheckCircle2, Users, BarChart2, FileText, PenTool, ShieldCheck } from "lucide-react"
import type { ServiceDetail } from "@/data/service-details"

interface Props {
  data: ServiceDetail["whyChooseUs"]
}

const iconMap = {
  users: Users,
  "bar-chart-2": BarChart2,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "pen-tool": PenTool,
  "check-circle-2": CheckCircle2,
}

export function WhyChooseUsDynamic({ data }: Props) {
  return (
    <section className="relative py-24 px-4 lg:px-8 bg-gradient-to-br from-seo-warm-bg via-white to-seo-amber-light/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-seo-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-seo-amber-light/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-seo-charcoal mb-6 text-balance leading-tight">
            {data.heading} <span className="text-seo-amber relative inline-block">{data.headingHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seo-amber to-seo-amber-light mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-seo-text-gray max-w-4xl mx-auto leading-relaxed text-balance">
            {data.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Users
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg shadow-seo-amber/5 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-seo-amber/10 relative overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 w-16 h-16 rounded-full bg-white/10 animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-seo-charcoal mb-4 group-hover:text-seo-amber transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-seo-text-gray leading-relaxed text-sm md:text-base">{benefit.description}</p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-seo-amber-light/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
