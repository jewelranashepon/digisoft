"use client";

import AboutBanner from "@/components/about-us/AboutBanner";
import AboutUsShowcase from "@/components/about-us/AboutUsShowcase";
import StrategicIdentity from "@/components/about-us/StrategicIdentity";
import WhyChooseUsSection from "@/components/about-us/WhyChooseUsSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Zap,
  Shield,
  Lightbulb,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutBanner />
      <AboutUsShowcase />
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      <StrategicIdentity />
      {/* Professional Services Section */}
      <ProfessionalServicesSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center animate-fadeInDown">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
              Welcome to Codexa Digital
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            With 20 years of expertise, we craft exceptional digital experiences
            that drive business growth and innovation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg border border-white/30">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainAboutSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                About Our Company
              </span>
              <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
                20 Years of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mt-6" />
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              We're not just developers and designers—we're innovators and
              problem-solvers. Our mission is to empower businesses with
              cutting-edge digital solutions that drive real results and foster
              lasting partnerships.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Every project is a collaboration. We listen, strategize, and
              execute with precision, ensuring your vision becomes reality.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "24/7 Expert Support",
                "Fast Response Time",
                "Latest Technology Stack",
                "Custom Solutions",
                "Quality Assured Work",
                "Transparent Communication",
                "Proven Track Record",
                "Scalable Architecture",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${
                      index * 0.05
                    }s backwards`,
                  }}
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg mt-4 flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all">
              Discover Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Team"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Meeting"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Workspace"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Collaboration"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalServicesSection() {
  const services = [
    { name: "UI/UX Design", percentage: 95, icon: Lightbulb },
    { name: "Web Development", percentage: 92, icon: Zap },
    { name: "Mobile Apps", percentage: 88, icon: Shield },
    { name: "Cloud Solutions", percentage: 90, icon: TrendingUp },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Our Expertise
          </span>
          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              IT Services
            </span>
          </h2>
          <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
            Delivering excellence across a wide range of digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fadeInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    20
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">20+</div>
                    <div className="text-slate-600">Years in Industry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fadeInRight">
            {services.map((service, index) => (
              <ProgressBar
                key={index}
                label={service.name}
                percentage={service.percentage}
                Icon={service.icon}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({
  label,
  percentage,
  Icon,
  delay,
}: {
  label: string;
  percentage: number;
  Icon: any;
  delay: number;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div
      ref={ref}
      className="group"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay}s backwards` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-900">{label}</span>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-orange-600 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function StatisticsSection() {
  const stats = [
    { icon: Briefcase, number: 458, label: "Projects Completed" },
    { icon: Users, number: 954, label: "Happy Clients" },
    { icon: Award, number: 97, label: "Industry Awards" },
    { icon: TrendingUp, number: 100, label: "Client Retention %" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  number,
  label,
  delay,
}: {
  icon: any;
  number: number;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2500;
          const increment = number / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay}s backwards` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-2">
        {count}
        {label.includes("%") && "%"}
      </div>
      <div className="text-lg text-blue-100">{label}</div>
    </div>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Victor Williamson",
      role: "Lead Designer",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialty: "UI/UX Design",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      image:
        "https://images.pexels.com/photos/2300650/pexels-photo-2300650.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialty: "Full Stack",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialty: "Strategy",
    },
    {
      name: "Emily Davis",
      role: "Product Lead",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialty: "Innovation",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-16 animate-fadeIn">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Meet the Experts Behind Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  delay,
}: {
  member: (typeof TeamSection extends () => infer T
    ? T extends { team: (infer U)[] }
      ? U
      : never
    : never) & {
    name: string;
    role: string;
    image: string;
    specialty: string;
  };
  delay: number;
}) {
  return (
    <div
      className="group"
      style={{ animation: `fadeInUp 0.6s ease-out ${delay}s backwards` }}
    >
      <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
            {member.specialty}
          </span>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-slate-600 text-sm mt-1">{member.role}</p>
      </div>
    </div>
  );
}

// function WhyChooseUsSection() {
//   const reasons = [
//     {
//       icon: Zap,
//       title: "Lightning Fast",
//       description:
//         "Quick turnaround times without compromising on quality or attention to detail.",
//     },
//     {
//       icon: Shield,
//       title: "Secure & Reliable",
//       description:
//         "Enterprise-grade security protocols ensure your data and projects are protected.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovative Solutions",
//       description:
//         "Cutting-edge technology and creative approaches to solve complex problems.",
//     },
//     {
//       icon: Users,
//       title: "Dedicated Support",
//       description:
//         "24/7 support team ready to assist you with any questions or concerns.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Measurable Growth",
//       description:
//         "Data-driven strategies that deliver real results and sustainable growth.",
//     },
//     {
//       icon: Award,
//       title: "Award Winning",
//       description:
//         "Recognized industry leaders with a proven track record of success.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
//         <div className="text-center mb-16 animate-fadeIn">
//           <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
//             Why Choose Us
//           </span>
//           <h2 className="text-5xl font-bold text-slate-900 mt-4">
//             What Makes Us
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
//               Different
//             </span>
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reasons.map((reason, index) => (
//             <Card
//               key={index}
//               className="group p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 overflow-hidden relative"
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${index * 0.08}s backwards`,
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//               <div className="relative">
//                 <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <reason.icon className="w-7 h-7" />
//                 </div>

//                 <h3 className="text-xl font-bold text-slate-900 mb-3">
//                   {reason.title}
//                 </h3>

//                 <p className="text-slate-600 leading-relaxed">
//                   {reason.description}
//                 </p>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Digital Future?
          </span>
        </h2>

        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of successful businesses that have partnered with us to
          achieve their digital goals.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg border border-white/30 backdrop-blur-sm">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
