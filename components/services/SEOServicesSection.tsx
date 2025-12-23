export default function SEOServicesSection() {
  return (
    <div className="w-full bg-gradient-to-b from-background to-slate-50 dark:from-slate-950 dark:to-background">
      {/* Services Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 to-teal-300 dark:from-cyan-900 dark:to-teal-800">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
                What Services Does Your Adelaide
                <span className="block text-teal-700 dark:text-teal-200">SEO Agency Provide?</span>
              </h2>

              <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                As a full-service digital marketing and SEO company serving Adelaide, Supple provides a vast range of{" "}
                <span className="font-semibold">SEO services</span> and{" "}
                <span className="font-semibold">off-page SEO</span>, as well as{" "}
                <span className="font-semibold">Local SEO</span> for businesses that offer location-dependent
                products/services. Whether you need assistance with{" "}
                <span className="font-semibold">online reputation management</span>,{" "}
                <span className="font-semibold">Google penalty recovery</span>,{" "}
                <span className="font-semibold">mobile indexing</span>,{" "}
                <span className="font-semibold">featured snippets</span>, Google Search Console, Bing Webmaster Tools,
                eCommerce SEO or franchise SEO, we have you covered.
              </p>

              <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                Beyond SEO, we also offer a full suite of digital marketing solutions, including{" "}
                <span className="font-semibold">social media marketing services</span>,{" "}
                <span className="font-semibold">web development</span>,{" "}
                <span className="font-semibold">web design</span>, PPC, and content writing/content marketing.
              </p>

              <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                If you would like to learn more, you can get started with a free proposal from Supple, where we will
                discuss how our SEO agency can assist you, including tailored strategies for your business and pricing
                information.
              </p>
            </div>

            {/* Right Images Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/professional-team-working-on-seo.jpg"
                  alt="Professional team collaborating on SEO strategy"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/digital-marketing-expert-analyzing-data.jpg"
                  alt="Digital marketing expert analyzing performance data"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/business-team-meeting.png"
                  alt="Business team meeting in modern office space"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Ready to Boost Your Business with AI SEO?
              </h2>

              <p className="text-lg text-blue-100 leading-relaxed">
                Whether you're launching a new website, enhancing an existing one, or kickstarting a marketing campaign,
                our team of AI SEO experts is here to help. We deliver smart, efficient, and results-driven AI SEO
                strategies and digital marketing solutions to grow your online presence and drive measurable business
                growth.
              </p>

              <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95">
                REQUEST A FREE SEO CONSULTATION NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/business-professionals-team-collaboration-meeting.jpg"
                alt="Business professionals collaborating on AI SEO strategies"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
