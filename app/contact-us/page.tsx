"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  Globe,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import CTA from "@/components/cta";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Get in"
        highlight="Touch"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Contact Info Bento Box */}
          <div className="lg:col-span-5 space-y-6 text-white">
            <div className="relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-800 p-8 md:p-10 h-full shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  Global Support
                </h2>
                <p className="text-white/80 mb-10 leading-relaxed">
                  Ready to accelerate your potential? Reach out to our
                  architectural team for technical inquiries or partnerships.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Phone,
                      title: "Phone Support",
                      val: "+1 (555) 123-4567",
                      color: "text-blue-400",
                    },
                    {
                      icon: Mail,
                      title: "Email Inquiry",
                      val: "contact@enterprise.com",
                      color: "text-cyan-400",
                    },
                    {
                      icon: MapPin,
                      title: "Headquarters",
                      val: "123 Business St, San Francisco",
                      color: "text-blue-400",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group">
                      <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300">
                        <item.icon size={24} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 tracking-widest mb-1">
                          {item.title}
                        </p>
                        <p className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      99.9% Uptime
                    </p>
                    <p className="text-xs text-slate-500">
                      Service Reliability
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (White Card) */}
          <div className="lg:col-span-7 h-full">
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
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
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
                    placeholder="Project Inquiry"
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
                    placeholder="Tell us about your goals..."
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
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MAP LOCATION SECTION */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-xl">
        {/* Google Map iframe */}
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=Dhaka,Bangladesh&z=13&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <CTA />
    </div>
  );
};

export default ContactUs;
