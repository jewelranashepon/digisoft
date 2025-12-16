"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "Cutting-Edge Software",
    highlight: "Development Company",
    description:
      "We build scalable, secure and high-performance software solutions for modern businesses.",
  },
  {
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "Powerful Web & Mobile",
    highlight: "Digital Experiences",
    description:
      "From web platforms to mobile apps, we create products users love and trust.",
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    title: "AI, Cloud & Cyber",
    highlight: "Future-Ready Solutions",
    description:
      "We help businesses grow with AI, automation, cloud infrastructure and cyber security.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/65 to-blue-900/70" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative container max-w-7xl mx-auto min-h-[calc(100vh-7rem)] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="space-y-8 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              {slides[index].title}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {slides[index].highlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {slides[index].description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:scale-[1.05] flex items-center gap-2">
                Learn More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300">
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
