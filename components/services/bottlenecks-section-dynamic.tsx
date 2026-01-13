"use client"

import { useState } from "react"
import type { ServiceDetail } from "@/data/service-details"

interface Props {
  data: ServiceDetail["bottlenecksSection"]
}

export default function BottlenecksSectionDynamic({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(data.selectedIndex)

  const currentItem = data.items[selectedIndex]

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">{data.heading}</h2>
          <p className="mt-4 text-lg text-gray-600">{data.description}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT LIST */}
          <ul className="lg:col-span-2 space-y-4">
            {data.items.map((item, index) => (
              <li
                key={item}
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer
                ${
                  selectedIndex === index
                    ? "bg-green-50 border-green-200 text-green-700 shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:border-green-200 hover:bg-green-50/40"
                }`}
              >
                <span className="text-sm font-bold text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <span className="inline-block mb-4 text-sm font-semibold text-green-600 bg-green-50 px-4 py-1 rounded-full">
              Key Challenge
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{data.selectedTitle}</h3>

            <p className="text-gray-600 leading-relaxed max-w-2xl">{data.selectedDescription}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-md">
                Get Free Proposal
              </button>

              <button className="border border-green-600 text-green-700 hover:bg-green-50 px-7 py-3 rounded-lg font-semibold transition">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
