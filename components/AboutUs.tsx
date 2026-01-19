import { TrendingUp, FileText, Check } from "lucide-react";
import { MapPin, Target, Globe, Share2 } from "lucide-react";

export default function AboutUs() {
  const whatWeDoBest = [
    {
      title: "AI SEO & Generative Engine Optimisation (GEO)",
      description:
        "Advanced SEO strategies designed for AI-powered and modern search engines.",
      icon: TrendingUp,
    },
    {
      title: "Local SEO Australia",
      description:
        "Targeted local SEO strategies to help you rank and dominate your area.",
      icon: MapPin,
    },
    {
      title: "Industry-Specific SEO Services",
      description:
        "Tailored SEO solutions built specifically for your industry and market.",
      icon: Target,
    },
    {
      title: "SEO-Friendly Web Development",
      description:
        "High-performance websites engineered to support search engine optimisation.",
      icon: Globe,
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media marketing to expand brand reach and engagement.",
      icon: Share2,
    },
  ];

  return (
    <section className="h-auto bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-serif leading-tight mb-4">
            Rank and Boost Your Business with {" "}<br/>
            <span className="italic text-blue-600">Codexa Digital</span>
          </h2>

          <p className="text-black text-lg leading-relaxed">
            At Codexa Digital, we help businesses grow online using smart SEO,
            AI-driven search strategies, and strong digital foundations. Our
            focus is simple—better visibility, better traffic, and better
            results.
          </p>
        </div>
        <div className="grid lg:grid-cols-9 gap-16 items-center">
          <div className="col-span-5 space-y-8">
            <div className="space-y-6 pt-4">
              {whatWeDoBest.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-black">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-4 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/home/about-image.webp"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
