export default function BottlenecksSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Common Bottlenecks That Stall Rankings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hidden SEO issues that silently block growth and prevent your site
            from reaching top positions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT LIST */}
          <ul className="lg:col-span-2 space-y-4">
            {[
              "Inconsistent Content",
              "Poor Website Performance",
              "Weak Backlinks",
              "Ignoring Local SEO",
              "Weak On-Page SEO",
            ].map((item, index) => (
              <li
                key={item}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer
                ${
                  index === 0
                    ? "bg-green-50 border-green-200 text-green-700 shadow-sm"
                    : "bg-white border-gray-200 text-gray-700 hover:border-green-200 hover:bg-green-50/40"
                }`}
              >
                <span className="text-sm font-bold text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">
            <span className="inline-block mb-4 text-sm font-semibold text-green-600 bg-green-50 px-4 py-1 rounded-full">
              Primary SEO Issue
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Inconsistent Content Updates
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Websites that fail to publish fresh, SEO-optimized content lose
              authority, rankings, and traffic. Consistent, data-driven content
              keeps your brand relevant, improves keyword visibility, and
              strengthens long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold transition shadow-md">
                Get Free Proposal
              </button>

              <button className="border border-green-600 text-green-700 hover:bg-green-50 px-7 py-3 rounded-lg font-semibold transition">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
