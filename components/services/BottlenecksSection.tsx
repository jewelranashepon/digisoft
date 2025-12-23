export default function BottlenecksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Common Bottlenecks That Stall Rankings
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <ul className="space-y-4 font-semibold">
            <li className="text-green-600">01 Inconsistent Content</li>
            <li>02 Poor Website Performance</li>
            <li>03 Weak Backlinks</li>
            <li>04 Ignoring Local SEO</li>
            <li>05 Weak On-Page SEO</li>
          </ul>

          {/* RIGHT */}
          <div className="lg:col-span-2 bg-green-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">
              Inconsistent Content Updates
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Websites that don’t update content regularly lose relevance,
              rankings, and traffic. Consistent SEO-driven content keeps your
              site competitive and visible.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded">
                Get Free Proposal
              </button>
              <button className="border border-green-500 text-green-600 px-6 py-3 rounded">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
