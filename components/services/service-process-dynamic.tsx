"use client"

import { useState } from "react"
import { Target, Search, Link2, FileSearch, PenTool, LineChart } from "lucide-react"
import type { ServiceDetail } from "@/data/service-details"

interface Props {
  data: ServiceDetail["processSection"]
}

const iconMap = {
  target: Target,
  search: Search,
  link2: Link2,
  filesearch: FileSearch,
  pentool: PenTool,
  linechart: LineChart,
}

export function ServiceProcessDynamic({ data }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
            {data.heading}{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              {data.headingHighlight}
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Target
            const isActive = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 ${
                  isActive ? "shadow-xl -translate-y-2" : "shadow-sm"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex size-14 items-center justify-center rounded-xl ${step.bg} transition-transform duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  <Icon className={`size-7 ${step.color}`} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.description}</p>

                {/* Accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full rounded-b-2xl transition-all duration-300 ${
                    isActive ? "bg-gradient-to-r from-emerald-500 to-blue-600" : "bg-transparent"
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
