'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide comprehensive solutions including web development, mobile applications, cloud services, and custom software development tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and scope. A basic website typically takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Pricing depends on project scope, technology stack, and timeline requirements.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer comprehensive maintenance packages including bug fixes, updates, security patches, and feature enhancements. Support plans are customizable based on your needs.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We specialize in modern technologies including React, Next.js, Node.js, TypeScript, Python, and cloud platforms like AWS and Azure. We stay current with industry best practices.',
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 
         [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]
         -z-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%27%23cbd5e1%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />

      {/* Blob Elements (Tailwind Animations) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite]" />

      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_2s]" />

      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_4s]" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Frequently Asked {" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ & Image */}
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 
                shadow-lg shadow-slate-200/50 overflow-hidden transition-all duration-300 
                hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-300/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`mt-1 p-2 rounded-lg transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-300/50'
                          : 'bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-blue-400 group-hover:to-cyan-400'
                      }`}
                    >
                      <HelpCircle
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index
                            ? 'text-white'
                            : 'text-slate-600 group-hover:text-white'
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-lg font-semibold transition-colors duration-200 ${
                        openIndex === index
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
                          : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 mt-1 p-1.5 rounded-lg transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-blue-100 to-cyan-100 rotate-180'
                        : 'bg-slate-100 group-hover:bg-blue-100'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-all duration-300 ${
                        openIndex === index
                          ? 'text-blue-600'
                          : 'text-slate-600 group-hover:text-blue-600'
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 rounded-full" />
                      <p className="text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 h-full">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Customer support"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-rose-500 text-white px-8 py-4 rounded-2xl shadow-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
