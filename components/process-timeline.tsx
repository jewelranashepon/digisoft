import { Check, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery and Analysis",
    description:
      "We perform an analysis to discover the strength and drawbacks of our clients service.",
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description: "We deliver the best solution based on the analysis program.",
  },
  {
    number: "03",
    title: "Deployment and Support",
    description:
      "We keep in touch with our clients and update the issues regularly.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <p className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Consulting Excellence
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Best Pathway to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Development
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            We begin our consulting service with a comprehensive analysis of
            clients business structure, competitor and audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {[
            { text: "Responsive Support", delay: "0ms" },
            { text: "On Time Delivery", delay: "100ms" },
            { text: "Easy to Approach us", delay: "200ms" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300"
              style={{ animationDelay: item.delay }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Check
                  className="text-blue-600 group-hover:text-white transition-colors duration-300"
                  size={20}
                />
              </div>
              <span className="font-semibold text-slate-900">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 animate-pulse opacity-50"></div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="lg:hidden mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-2xl shadow-lg shadow-blue-500/30">
                      {step.number}
                    </div>
                  </div>

                  <div
                    className={`group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm">Learn more</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col items-center relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-xl border-4 border-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            <span>Start Your Journey</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
