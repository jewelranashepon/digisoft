"use client"

import { Button } from "@/components/ui/button"
import { ServiceDetail } from "@/data/service-details"
import Image from "next/image"

interface Props {
  data: ServiceDetail["talkToExperts"]
}

export function TalkToExpertsDynamic({ data }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-blue-50/40 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-1">
          {/* LEFT CONTENT */}
          <div className="space-y-7 animate-in fade-in slide-in-from-left-8 duration-700">
            {/* <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-700">
              {data.badge}
            </span> */}

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              {data.heading}{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                {data.headingHighlight}
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-600">
              {data.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                className="h-14 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-10 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                {data.buttonText}
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE ONLY */}
          {/* <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={data.image || "/placeholder.svg"}
                alt="Professional consultation"
                width={650}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-600/10" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Background Blur Accents */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
    </section>
  )
}
