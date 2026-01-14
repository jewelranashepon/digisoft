"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  data?: FaqItem[]; // optional
}

export default function FaqSection({ data = [] }: Props) {
  // default to []
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get answers to the most common questions about Doctor SEO and how it
            can help your medical practice.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {data.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`border rounded-2xl bg-white shadow-md overflow-hidden transition-all duration-300 ${
                  isActive ? "shadow-lg" : "hover:shadow-md"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 pb-5 text-gray-700 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
