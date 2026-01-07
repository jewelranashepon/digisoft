import { TrendingUp, FileText, Check } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="h-auto bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
              Empowering You to Secure Your{" "}
              <span className="italic text-sky-500">Wealth & Legacy</span>
            </h2>

            <p className="text-black text-lg leading-relaxed">
              Founded with a vision to modernize estate planning, Wealthly
              provides cutting-edge digital tools that simplify financial
              management and inheritance planning. We bring together advanced
              technology, expert financial insights, and bank-grade security to
              ensure your assets are managed with transparency and precision.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Real-Time Wealth Visualization
                  </h3>
                  <p className="text-black">
                    Monitor net worth, asset allocation, and portfolio growth in
                    real time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Secure Digital Document Vault
                  </h3>
                  <p className="text-black">
                    Store critical documents such as wills, asset certificates,
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Professional team"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute bottom-20 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <span className="text-gray-800 font-medium">
                  Financial Management
                </span>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <span className="text-gray-800 font-medium">Secure Wealth</span>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
