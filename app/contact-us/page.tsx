"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";
import BlogHero from "@/components/blog/BlogHero";

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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9am to 6pm EST",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@example.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Business Street",
      description: "San Francisco, CA 94105, USA",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up animation-delay-100">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                  Contact Information
                </h2>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-blue-50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-md">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.label}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {info.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="animate-slide-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-75 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm animate-fade-in">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm animate-fade-in">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 animate-scale-in animation-delay-300">
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0189047230186!2d-122.41941552346814!3d37.77492957121194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4d5d5d5d%3A0x1234567890abcdef!2s123%20Business%20Street%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1234567890"
            ></iframe>
          </div>
        </div>

       

        <div className="py-16 lg:py-24 border-t border-gray-200">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4 animate-slide-up">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            We're committed to providing exceptional service and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animation-delay-200">
            {[
              {
                number: "24/7",
                title: "Always Available",
                description:
                  "Our support team is ready to help you around the clock with any questions.",
              },
              {
                number: "100%",
                title: "Client Satisfaction",
                description:
                  "We pride ourselves on delivering results that exceed expectations.",
              },
              {
                number: "500+",
                title: "Happy Customers",
                description:
                  "Join hundreds of satisfied clients who trust us with their needs.",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-blue-100 hover:border-blue-300"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.title}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
