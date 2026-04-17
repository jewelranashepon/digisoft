"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServiceDetail } from "@/data/service-details";
import { Loader, Send, ShieldCheck } from "lucide-react";

interface Props {
  data: ServiceDetail["heroSection"];
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ServiceHeroSection({ data }: Props) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

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

            <p className="max-w-2xl text-lg leading-relaxed text-slate-900">
              {data.description}
            </p>

            {data.descriptionExtra && (
              <p className="max-w-2xl text-slate-900">
                {data.descriptionExtra}
              </p>
            )}

            <div className="flex flex-wrap gap-6 pt-4">
              {data.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-2xl transition-all hover:border-blue-500/30">
              {/* Subtle Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800 ml-1 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-slate-100 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800 ml-1 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-slate-100 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800 ml-1 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-slate-100 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Enter your subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800 ml-1 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-100 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black rounded-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin" size={24} />
                  ) : (
                    <>
                      <span className="uppercase tracking-widest text-sm">
                        Send Secure Message
                      </span>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 text-blue-600 bg-blue-50 p-5 rounded-2xl border border-blue-200 animate-in fade-in slide-in-from-bottom-2">
                    <ShieldCheck size={24} />
                    <p className="text-sm font-bold">
                      Message sent successfully. We'll contact you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-600 bg-red-50 p-5 rounded-2xl border border-red-200">
                    ❌ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
