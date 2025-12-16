// import { Check, ArrowRight, Zap } from "lucide-react";

// const steps = [
//   {
//     number: "01",
//     title: "Discovery and Analysis",
//     description:
//       "We perform an analysis to discover the strength and drawbacks of our clients service.",
//   },
//   {
//     number: "02",
//     title: "Tailored Solutions",
//     description: "We deliver the best solution based on the analysis program.",
//   },
//   {
//     number: "03",
//     title: "Deployment and Support",
//     description:
//       "We keep in touch with our clients and update the issues regularly.",
//   },
// ];

// export default function ProcessTimeline() {
//   return (
//     <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//       </div>

//       <div className="container mx-auto relative">
//         <div className="mb-10 max-w-5xl">
//           <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-700/50 mb-8 backdrop-blur-sm">
//             <Zap className="w-4 h-4 text-teal-400" />
//             <span className="text-teal-300 font-medium text-sm tracking-wide">
//               Consulting Excellence
//             </span>
//           </div>

//           <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
//             Best Pathway to {" "}
//             <span className="mt-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Development
//             </span>
//           </h2>

//           <p className="text-slate-400 text-xl leading-relaxed font-light">
//             We begin our consulting service with a comprehensive analysis of
//             clients business structure, competitor and audiences.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-4 mb-20">
//           {[
//             { text: "Responsive Support", icon: Check },
//             { text: "On Time Delivery", icon: Check },
//             { text: "Easy to Approach us", icon: Check },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="group relative flex items-center gap-4 px-6 py-5 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-teal-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_32px_rgba(20,184,166,0.15)]"
//             >
//               <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center group-hover:border-teal-400/60 transition-all duration-300">
//                 <item.icon
//                   className="text-teal-400 group-hover:text-cyan-300 transition-colors duration-300"
//                   size={18}
//                   strokeWidth={2.5}
//                 />
//               </div>
//               <span className="font-semibold text-slate-200 text-[15px] group-hover:text-white transition-colors duration-300">
//                 {item.text}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="relative">
//           <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px -ml-px">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/30 to-transparent"></div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           </div>

//           <div className="space-y-24">
//             {steps.map((step, index) => (
//               <div
//                 key={step.number}
//                 className={`flex flex-col lg:flex-row gap-8 items-center ${
//                   index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//                 }`}
//               >
//                 <div
//                   className={`flex-1 w-full ${
//                     index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
//                   }`}
//                 >
//                   <div className="lg:hidden mb-8">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold text-xl shadow-lg shadow-teal-500/30">
//                       {step.number}
//                     </div>
//                   </div>

//                   <div
//                     className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl px-12 py-8 border border-slate-700/50 hover:border-teal-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_70px_rgba(20,184,166,0.2)] ${
//                       index % 2 === 0 ? "lg:text-right" : "lg:text-left"
//                     }`}
//                   >
//                     <div className="absolute -inset-px bg-gradient-to-r from-teal-600/20 via-transparent to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>

//                     <div className="flex items-start gap-4 lg:gap-0">
//                       <div className="flex-1">
//                         <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-700/50 mb-4 backdrop-blur-sm">
//                           <span className="text-xs font-bold text-teal-300 tracking-wider">
//                             STEP {step.number}
//                           </span>
//                         </div>
//                         <h3 className="font-bold text-3xl text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
//                           {step.title}
//                         </h3>

//                         <p className="text-slate-400 leading-relaxed text-lg font-light mb-6 group-hover:text-slate-300 transition-colors duration-300">
//                           {step.description}
//                         </p>

//                         <div
//                           className={`flex items-center gap-2 text-teal-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ${
//                             index % 2 === 0
//                               ? "lg:justify-end"
//                               : "lg:justify-start"
//                           }`}
//                         >
//                           <span>Learn more</span>
//                           <ArrowRight
//                             size={16}
//                             className="group-hover:translate-x-1 transition-transform duration-300"
//                             strokeWidth={2.5}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>
//                   </div>
//                 </div>

//                 <div className="hidden lg:flex flex-col items-center relative z-10">
//                   <div className="relative">
//                     <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     <div className="relative w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-lg shadow-teal-500/40 hover:scale-110 transition-transform duration-300 border border-teal-400/50">
//                       {step.number}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex-1 hidden lg:block"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-32 text-center">
//           <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-lg rounded-2xl shadow-lg shadow-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/60 transition-all duration-300 hover:scale-105 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
//             <span className="relative">Start Your Journey</span>
//             <ArrowRight
//               size={20}
//               className="relative group-hover:translate-x-1 transition-transform duration-300"
//               strokeWidth={2.5}
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

























import { ArrowRight, Zap, Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We analyze your business structure, audience, and competitors to identify strengths and growth opportunities.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description:
      "Based on insights, we design and implement customized solutions aligned with your business goals.",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "We deploy efficiently and provide continuous monitoring, updates, and long-term technical support.",
  },
];

export default function ProcessCards() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="mb-16 w-full text-center">
         
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
            Best Pathway to{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Development
            </span>
          </h2>
        </div>

        {/* THREE CARDS */}
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-10 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-teal-500/50 hover:shadow-[0_25px_80px_rgba(20,184,166,0.25)]"
            >
              {/* Glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-teal-600/20 via-transparent to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>

              {/* ICON */}
              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center">
                <step.icon className="text-teal-400" size={26} />
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:via-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {step.title}
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed font-light mb-6 group-hover:text-slate-300 transition-colors duration-300">
                {step.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-teal-400 font-medium text-sm transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </div>

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
