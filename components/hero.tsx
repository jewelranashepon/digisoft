"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    image: "/images/banner-1.jpeg",
    title: "Digital Marketing Agency for",
    highlight: "Business Growth",
    description:
      "Get a free audit of your website and digital marketing performance. Discover how our results-driven strategies help you increase revenue and outperform competitors.",
  },
  {
    image: "images/banner-2.jpeg",
    title: "All-in-One Solutions to Grow Your",
    highlight: "Business Online",
    description:
      "Codexa Digital drives real traffic, generates authentic leads, and attracts loyal customers every day, helping businesses like yours grow, succeed, and stand out online.",
  },
  {
    image: "images/banner-3.jpeg",
    title: "Claim Your Free Website &",
    highlight: "Marketing Audit",
    description:
      "See exactly how your business is performing online. Our free audit reviews your website, SEO, and digital marketing efforts to uncover opportunities for growth. ",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const router = useRouter();


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[60vh] md:h-[65vh] lg:min-h-screen overflow-hidden pt-20 xl:pt-28 pb-10 px-5 sm:px-8 lg:px-10">
      {/* BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slides[index].image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/40 to-blue-900/50" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative container max-w-7xl mx-auto h-full flex items-center justify-center lg:justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="space-y-6 sm:space-y-8 max-w-4xl text-center lg:text-left w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white text-shadow-lg">
              {slides[index].title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {slides[index].highlight}
              </span>
            </h1>

            <p className="text-sm sm:text-xl lg:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-shadow-lg">
              {slides[index].description}
            </p>

            <div className="flex sm:flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={() => router.push("/about-us")}
                className="group px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-br from-blue-600 to-cyan-600 text-sm md:text-base text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-[1.05] flex items-center gap-2 justify-center cursor-pointer"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="px-4 sm:px-8 py-2 sm:py-3 bg-white backdrop-blur-md border-2 border-white/20 text-sm md:text-base text-slate-800 rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                Let’s Talk →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-blue-500 w-8"
                : "bg-white/40 hover:bg-white/70 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
