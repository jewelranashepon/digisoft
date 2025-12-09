"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "Softineers is the best and probably the last team I am working with. They have a great team and full expertise on website development.",
    author: "Serena Bellaci",
    role: "Business Owner",
    company: "Tech Innovations Inc",
    rating: 5,
  },
  {
    text: "Outstanding service and exceptional professionalism. They delivered exactly what we needed on time.",
    author: "John Smith",
    role: "Project Manager",
    company: "Digital Solutions Ltd",
    rating: 5,
  },
  {
    text: "Working with this team transformed our digital presence. True partners in our success.",
    author: "Emma Johnson",
    role: "CEO",
    company: "Future Tech Ventures",
    rating: 5,
  },
  {
    text: "Amazing communication and world-class development quality.",
    author: "David Wilson",
    role: "CTO",
    company: "Bright Labs",
    rating: 5,
  },
  {
    text: "Super fast delivery with premium quality. One of the best experiences ever.",
    author: "Sarah Lee",
    role: "Founder",
    company: "InnovateHub",
    rating: 5,
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const ITEMS_PER_PAGE = 3;
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const start = index * ITEMS_PER_PAGE;
  const visible = testimonials.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-slate-900">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Join hundreds of satisfied clients who have transformed their
            business with our services.
          </p>
        </div>

        
        {/* GRID: 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {visible.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl hover:border-blue-400 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    fill="#3B82F6"
                    className="text-blue-600"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-800 text-lg italic mb-6">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
                  {getInitials(item.author)}
                </div>

                <div>
                  <p className="font-bold text-slate-900">{item.author}</p>
                  <p className="text-slate-600 text-sm">{item.role}</p>
                  <p className="text-slate-500 text-xs">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                index === idx
                  ? "w-8 bg-gradient-to-r from-blue-600 to-cyan-600"
                  : "w-2.5 bg-slate-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
