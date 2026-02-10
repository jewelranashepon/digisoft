import { Check } from "lucide-react";

export default function AboutSection() {
  const topStats = [
    { value: "1k+", label: "Project Complete" },
    { value: "5+", label: "Year Experience" },
  ];

  const advantages = [
    "Quick access",
    "Pixel perfect",
    "Creativity & clarity",
    "Online Support",
    "Best leadership idea",
    "Expert team",
    "Dedicated worker",
    "Affordable Price",
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-10 lg:py-14">
          <div className="flex justify-center">
            <img
              src="/images/about-us/about-1.webp"
              alt="Team collaboration"
              className="w-full h-[400px] rounded-xl shadow-xl"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-3 leading-tight">
                Who We Are
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              Codexa Digital is a modern digital marketing agency that helps
              businesses grow online across Australia. We work with startups and
              small to medium businesses to build a strong online presence and
              reach the right customers. Our goal is to use clear and smart
              strategies that bring real, long-term results.
            </p>

            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              Know about us how we provide complete digital marketing services
              such as SEO, website design, social media marketing, and online
              advertising. Every business is different, so we create custom
              plans based on your goals, industry, and budget. We believe simple
              ideas work best when they are done the right way.
            </p>

            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              At Codexa Digital, we value honesty, quality work, and steady
              growth. We keep communication clear and explain things in easy
              language. Our team follows the latest market trends and customer
              behaviour to help your brand stay visible, relevant, and
              competitive.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {topStats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-10 lg:py-14">
          <div className="space-y-4 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-3 leading-tight">
                How We Help Your Business Grow?{" "}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
              Our team of experienced digital experts can manage all your online
              marketing needs. We focus on simple and practical strategies that
              help your business grow and deliver clear, measurable results.
            </p>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
              We specialise in Digital Marketing, SEO, Social Media Marketing,
              and Web Development. This means you get complete digital solutions
              in one place. We closely monitor every campaign and make regular
              improvements to increase performance and returns.
            </p>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
              We don’t just run campaigns we guide you at every step. We study
              your business goals, industry, and target audience to find the
              best digital marketing strategies and improve them over time for
              steady growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 gap-y-5">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-800 font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl opacity-0 pointer-events-none"></div>
            <img
              src="/images/about-us/about-2.webp"
              alt="Team working"
              className="w-full h-[400px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
