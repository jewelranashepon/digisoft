"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ServiceHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen w-full bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[80vh] grid-cols-1 items-center gap-12 lg:grid-cols-5">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            <span className="inline-block rounded-full bg-teal-50 px-4 py-1 text-sm font-semibold text-teal-600">
              Vehicle Cybersecurity
            </span>

            <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
              Securing the Future of{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Connected Vehicles
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Wireless connectivity powers modern vehicles — from navigation to
              safety systems. But with connectivity comes risk. We help
              automotive innovators protect critical systems from emerging
              cybersecurity threats.
            </p>

            <p className="max-w-2xl text-gray-600">
              At <strong>Intelleora</strong>, we secure next-generation vehicle
              gateways, baseband modems, and wireless modules to ensure trust,
              safety, and reliability.
            </p>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Let’s Talk 👋
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Your information is safe with us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full bg-gradient-to-r from-teal-500 to-blue-600 text-base font-semibold text-white transition hover:opacity-90"
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
