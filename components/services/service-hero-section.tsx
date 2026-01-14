"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ServiceDetail } from "@/data/service-details"

interface Props {
  data: ServiceDetail["heroSection"]
}

export function ServiceHeroSection({ data }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-blue-50 px-4 pt-32 pb-20 md:px-8">
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[80vh] grid-cols-1 items-center gap-16 lg:grid-cols-5">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
              {data.badge}
            </span> */}

            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              {data.heading}{" "}
              <span className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {data.subheading}
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-900">{data.description}</p>

            {data.descriptionExtra && <p className="max-w-2xl text-slate-900">{data.descriptionExtra}</p>}

            <div className="flex flex-wrap gap-6 pt-4">
              {data.highlights.map((item) => (
                <div key={item} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-md">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl border-b-4 border-cyan-600 bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              {/* <div className="absolute inset-x-0 -top-1 h-1 rounded-t-3xl bg-gradient-to-r from-teal-500 to-blue-600" /> */}

              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Let's Talk 👋</h2>
                <p className="mt-2 text-sm text-gray-500">Get expert guidance. No spam. Ever.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
