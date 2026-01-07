import { Check } from "lucide-react";

export default function AboutSection() {
  const topStats = [
    { value: "50k+", label: "Monthly active user" },
    { value: "15k+", label: "Project Complete" },
    { value: "10+", label: "Year Experience" },
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
              src="https://ossisto.com/wp-content/uploads/2024/09/Top-Project-Management-Companies-for-Seamless-Project-Execution.webp"
              alt="Team collaboration"
              className="w-full h-[400px] rounded-xl shadow-xl"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-3 leading-tight">
                Exclusive project management agency
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              Saasland is a exclusive project management agency. We provide
              better solutions for you. We create custom landing pages with
              Saasland and converts more visitors than any website, create
              visually appealing data visualizations and insightful dashboards
              in minutes.
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
                We work with 10+ years of experience
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
              We are working since 2010. In 10 plus years, we solve so many
              problems and we gather so much experience in this era. We work
              with love and patient.
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
              src="https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Team working"
              className="w-full h-[400px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
