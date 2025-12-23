"use client";

import { CheckCircle2, Users, BarChart2, FileText, PenTool, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Dedicated Digital Marketing Specialist",
    description:
      "With Tailored SEO, you have your own Adelaide SEO consultant to work with you and handle your website. This person will keep communication seamless and make sure goals are being met.",
    icon: Users,
    color: "from-pink-500 to-pink-400",
  },
  {
    title: "Conversion & Goal Tracking",
    description:
      "We track all the accounts we work on, so we'll know where the traffic and conversion come from. This way, it becomes easier to build effective strategies based on the recorded data.",
    icon: BarChart2,
    color: "from-teal-500 to-teal-400",
  },
  {
    title: "No Lock-In Contracts",
    description:
      "We don't like our clients to feel tied to terms and contracts. SEO results can take up to 6 months to show up, and we don't want our clients to feel like they don't have any other options.",
    icon: ShieldCheck,
    color: "from-purple-500 to-purple-400",
  },
  {
    title: "Monthly Reporting",
    description:
      "To understand what we're doing and how effective our strategies are, we provide detailed monthly reports. This also allows us to see what methods are doing well and not working, and we'll modify the plans accordingly.",
    icon: FileText,
    color: "from-orange-500 to-orange-400",
  },
  {
    title: "Custom Strategies For Your Business",
    description:
      "We're not called Tailored SEO for nothing. We create custom strategies that will work for your business because we believe that there's just no one-size-fits-all approach in SEO. Our methods are based on your current site standings, goals, competitors, keywords, and many other factors.",
    icon: PenTool,
    color: "from-rose-500 to-rose-400",
  },
  {
    title: "Ethical Digital Marketing Strategies",
    description:
      "We comply with Google's rules and regulations and stay away from techniques that are against Google's policies. Black hat or illegal SEO strategies may get you instant results but will harm your site in the long run. This is the reason why we follow Google standards so our clients' websites will not be penalised.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-emerald-400",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4 lg:px-8 bg-gradient-to-br from-seo-warm-bg via-white to-seo-amber-light/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-seo-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-seo-amber-light/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-seo-charcoal mb-6 text-balance leading-tight">
            Why Choose Us For Your{" "}
            <span className="text-seo-amber relative inline-block">
              Adelaide SEO
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2.5 150 2.5 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seo-amber to-seo-amber-light mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-seo-text-gray max-w-4xl mx-auto leading-relaxed text-balance">
            Tailored SEO delivers real results using only white hat strategies, fully compliant with Google regulations. Our custom strategies combined with expert research help your business grow safely and effectively.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg shadow-seo-amber/5 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-seo-amber/10 relative overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg shadow-${benefit.color.split(" ")[0]}/30 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="absolute inset-0 w-16 h-16 rounded-full bg-white/10 animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-seo-charcoal mb-4 group-hover:text-seo-amber transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-seo-text-gray leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-seo-amber-light/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
