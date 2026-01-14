export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  heroSection: {
    badge: string;
    heading: string;
    subheading?: string;
    description: string;
    descriptionExtra?: string;
    highlights: string[];
    image: string;
  };
  talkToExperts: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string[];
    buttonText: string;
    image: string;
  };
  seoServicesDetails: {
    heading: string;
    headingHighlight: string;
    description: string;
    steps: {
      icon: string;
      title: string;
      description: string;
      color: string;
      bg: string;
    }[];
  };

  processSection: {
    heading: string;
    headingHighlight: string;
    description: string;
    steps: {
      icon: string;
      title: string;
      description: string;
      color: string;
      bg: string;
    }[];
  };
  bottlenecksSection: {
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    selectedIndex: number;
    selectedTitle?: string;
    selectedDescription?: string;
  };
  whyChooseUs: {
    heading: string;
    headingHighlight: string;
    description: string;
    benefits: {
      title: string;
      description: string;
      icon: string;
      color: string;
    }[];
  };
  seoServices: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string[];
    services: string[];
    quote: string;
    image: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaButton1: string;
    ctaButton2: string;
  };
  faqSection?: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export const doctorSeoService: ServiceDetail = {
  id: "doctor-seo",
  title: "Doctor SEO",
  description: "Medical SEO to attract more patients.",
  heroSection: {
    badge: "🏥 Doctor SEO Services",
    heading: "Data-Driven & AI-Powered SEO Strategies for Doctors",
    subheading: "",
    description:
      "Looking to grow your medical practice online and attract more patients? Our Doctor SEO Services help healthcare professionals improve search engine rankings, increase website traffic, and convert visitors into booked appointments. As a trusted SEO agency for doctors, we provide tailored SEO services for doctors & healthcare practices, designed to build visibility, trust, and long-term patient growth.",

    descriptionExtra:
      "We specialise in Doctor Search Engine Optimisation, helping doctors, clinics, and medical experts rank higher on Google using ethical, data-driven strategies. From Local SEO for doctors to advanced AI SEO for doctors, our approach is focused on real results.",
    highlights: [
      "✔ Patient-Focused Keywords",
      "✔ Local SEO Domination",
      "✔ Compliance Ready",
    ],
    image: "/images/doctor-seo-hero.jpg",
  },
  talkToExperts: {
    badge: "Talk to Professionals",
    heading: "Attract More Patients with",
    headingHighlight: "SEO for Doctors",
    description: [
      "Today, most patients search online before choosing a doctor. With professional SEO for doctors and medical experts, your website appears when patients are actively searching for medical services. Whether you operate a private clinic, multi-location practice, or specialty service, our Doctor SEO strategies ensure consistent online visibility.",
      "By combining local SEO for doctor websites, content optimisation, and technical improvements, we help your practice attract qualified patients regularly—supporting growth, stability, and long-term success.",
    ],
    buttonText: "Get Help With Your Doctor SEO",
    image: "/images/doctor-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "SEO Services for",
    headingHighlight: "Doctors & Medical Practices",
    description:
      "Comprehensive, compliant, and performance-driven SEO services designed specifically for doctors, clinics, and medical practices.",
    steps: [
      {
        icon: "filesearch",
        title: "Medical Website & Doctor SEO Audit",
        description:
          "We conduct a complete audit of your medical website, identifying technical, content, and local SEO gaps. This forms a clear roadmap for effective medical SEO services and performance improvement.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page SEO for Doctors",
        description:
          "Our SEO for doctors & medical practices includes optimising titles, headings, service pages, medical keywords, and internal links so search engines clearly understand your services.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Medical Authority Building",
        description:
          "As experienced medical marketing specialists, we build high-quality backlinks from trusted healthcare and business websites to strengthen your authority and rankings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO for Doctors & Clinics",
        description:
          "Our local SEO for doctors ensures your practice ranks in Google Maps and local search results. We optimise Google Business Profiles, citations, and reviews to attract nearby patients—especially valuable for Doctor SEO in Australia.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "pen-tool",
        title: "Medical Content & AI SEO for Doctors",
        description:
          "We create compliant, patient-friendly content supported by AI SEO for doctors, ensuring your website aligns with modern search algorithms while maintaining medical accuracy and trust.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Conversion Tracking & Reporting",
        description:
          "We track calls, appointment requests, traffic, and keyword performance to measure the success of your Doctor SEO campaigns and continuously improve results.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Doctor SEO Process",
    description:
      "A strategic, data-driven approach that delivers measurable patient growth.",
    steps: [
      {
        icon: "target",
        title: "Patient-Focused Keyword Research",
        description:
          "We analyse how patients search for doctors, treatments, and healthcare services. We focus on high-intent keywords that show strong booking intent rather than generic traffic.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor Medical SEO Review",
        description:
          "We analyse competing doctor websites, clinics, and healthcare platforms to identify what is working and where opportunities exist to outrank competitors.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "link2",
        title: "Technical Doctor Search Engine Optimisation",
        description:
          "We optimise your website's speed, mobile responsiveness, security, site structure, and structured data to ensure search engines can easily crawl and index your pages.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "filesearch",
        title: "Local SEO & Google Business Optimisation",
        description:
          "We optimise your Google Business Profile, clinic information, map listings, and local citations to ensure patients can easily find your practice.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "pentool",
        title: "Reputation & Trust Management",
        description:
          "Online reviews strongly influence patient decisions. We help doctors build, manage, and respond to patient reviews across Google and relevant platforms.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "linechart",
        title: "Tracking & Performance Analysis",
        description:
          "We track rankings, traffic, conversions, and ROI to continuously optimise your Doctor SEO campaign and measure success.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Doctor SEO Challenges",
    description:
      "We help healthcare practices overcome SEO obstacles that limit patient growth.",
    items: [
      {
        title: "Low Local Visibility",
        description:
          "Many patients search for doctors locally before making a choice. Without strong local SEO, your practice remains invisible to nearby patients actively seeking medical services. Our local SEO strategies ensure your clinic appears prominently in Google Maps and local search results.",
      },
      {
        title: "Intense Competition",
        description:
          "The healthcare sector is highly competitive. Competing with established clinics and hospitals can be challenging. We identify opportunities for your practice to stand out online and attract more patients.",
      },
      {
        title: "Medical Content Guidelines",
        description:
          "Creating content for medical websites requires strict compliance with guidelines and accuracy. Our team ensures your content is informative, trustworthy, and aligned with Google’s standards for medical content.",
      },
      {
        title: "Poor Website Conversions",
        description:
          "A website may get traffic but still fail to convert visitors into patients. We optimize your website’s design, calls-to-action, and user experience to increase appointment bookings and inquiries.",
      },
      {
        title: "Limited Authority",
        description:
          "Medical practices need credibility to rank higher in search results. We help build online authority through backlinks, reviews, and authoritative content to enhance your reputation in the medical community.",
      },
    ],
    selectedIndex: 0, // default selected card
  },

  whyChooseUs: {
    heading: "Why Choose Us For Your",
    headingHighlight: "Doctor SEO",
    description:
      "We deliver specialised medical SEO services that help healthcare professionals attract more patients and grow their practice sustainably.",
    benefits: [
      {
        title: "Healthcare-Focused SEO Expertise",
        description:
          "We deliver specialised medical SEO services tailored specifically for doctors, clinics, and healthcare practices. Our strategies follow healthcare guidelines while improving visibility.",
        icon: "users",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Advanced Doctor SEO Strategies",
        description:
          "Our data-driven Doctor SEO strategies focus on patient search intent, competitive analysis, and performance tracking for consistent improvements.",
        icon: "bar-chart-2",
        color: "from-teal-500 to-teal-400",
      },
      {
        title: "Local & National SEO Coverage",
        description:
          "From local SEO for doctors to wider regional targeting, we optimise your online presence for both local and national reach.",
        icon: "shield-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "AI-Powered SEO for Doctors",
        description:
          "We use AI-powered SEO combined with expert optimisation to adapt quickly to algorithm updates and keep your practice competitive.",
        icon: "file-text",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Complete Digital Marketing for Doctors",
        description:
          "Beyond SEO, we support full digital marketing for doctors, including content optimisation and conversion improvement.",
        icon: "pen-tool",
        color: "from-rose-500 to-rose-400",
      },
      {
        title: "Transparent Reporting & Results",
        description:
          "With clear tracking and reporting, you always know how your Doctor SEO is performing and focus on measurable ROI.",
        icon: "check-circle-2",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },
  seoServices: {
    badge: "Comprehensive Doctor SEO Solutions",
    heading: "What Services Does Your Doctor",
    headingHighlight: "SEO Agency Provide?",
    description: [
      "As a full-service digital marketing and SEO company for healthcare professionals, we deliver a wide range of Doctor SEO services, including Local SEO for Doctors and advanced off-page optimisation.",
      "Our medical SEO services are specifically designed to help doctors, clinics, and healthcare practices attract more patients, improve rankings, and grow their practice sustainably.",
    ],
    services: [
      "Medical Website Audits",
      "On-Page Doctor SEO",
      "Local SEO Optimisation",
      "Google Business Profile Setup",
      "Patient Review Management",
      "Medical Content Strategy",
      "Reputation Management",
      "Conversion Tracking",
    ],
    quote:
      "We don't just drive rankings — we drive patient bookings and measurable growth for your medical practice.",
    image: "/images/doctor-seo-team.jpg",
    ctaHeading: "Ready to Grow Your Medical Practice with",
    ctaDescription:
      "Our team of medical SEO experts delivers smart, efficient, and results-driven strategies to grow your patient base and drive measurable practice growth.",
    ctaButton1: "GET YOUR FREE PROPOSAL",
    ctaButton2: "VIEW OUR CASE STUDIES",
  },
};

export const wordPressWebsiteService: ServiceDetail = {
  id: "wordpress-website",
  title: "WordPress Website",
  description: "Custom WordPress websites optimized for speed and security.",
  heroSection: {
    badge: "🌐 WordPress Web Development",
    heading: "Professional Custom",
    subheading: "WordPress Websites",
    description:
      "We design and develop high-performance WordPress websites that are secure, SEO-friendly, and easy to manage. Perfect for businesses that want flexibility and growth.",
    descriptionExtra:
      "From small business sites to large-scale platforms, our WordPress expertise ensures your website is optimized for performance and conversions.",
    highlights: [
      "✔ Custom WordPress Themes",
      "✔ SEO & Speed Optimization",
      "✔ Secure & Scalable",
    ],
    image: "/professional-service.jpg",
  },
  talkToExperts: {
    badge: "Talk to Professionals",
    heading: "Talk to the",
    headingHighlight: "Experts",
    description: [
      "WordPress is the most popular website platform globally, powering over 40% of websites. But not all WordPress sites are created equal.",
      "Our team builds custom WordPress websites designed for speed, security, and conversions. We ensure your site stands out from the competition.",
    ],
    buttonText: "Get Help With Your WordPress Website",
    image: "/team-consultation.jpg",
  },
  processSection: {
    heading: "Our Proven",
    headingHighlight: "WordPress Development Process",
    description:
      "A strategic, results-driven approach that delivers high-performance websites.",
    steps: [
      {
        icon: "target",
        title: "Discovery & Planning",
        description:
          "We understand your business goals, target audience, and website requirements.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "pen-tool",
        title: "Custom Theme Development",
        description:
          "We create custom WordPress themes tailored to your brand and requirements.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "plug",
        title: "Plugin Integration & Setup",
        description:
          "We integrate essential plugins for functionality, SEO, and performance.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Performance Optimization",
        description:
          "We optimize your site for speed, security, and search engines.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle-2",
        title: "Testing & Launch",
        description:
          "Comprehensive testing ensures your site is perfect before launch.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Support & Maintenance",
        description:
          "Ongoing support and maintenance keep your site running smoothly.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },
  bottlenecksSection: {
    heading: "Common WordPress Challenges",
    description:
      "We solve problems that limit your WordPress site's performance.",
    items: [
      "Slow Loading Times",
      "Security Vulnerabilities",
      "Poor SEO",
      "Limited Scalability",
      "Outdated Design",
    ],
    selectedIndex: 0,
    selectedTitle: "Slow Loading Times",
    selectedDescription:
      "A slow WordPress site frustrates visitors and hurts your rankings. We optimize every aspect of your site for lightning-fast performance.",
  },
  whyChooseUs: {
    heading: "Why Choose Us For Your",
    headingHighlight: "WordPress Website",
    description:
      "We deliver custom WordPress solutions that are fast, secure, and designed to grow your business.",
    benefits: [
      {
        title: "Expert WordPress Developers",
        description:
          "Our team brings years of WordPress development experience and expertise.",
        icon: "users",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Custom Solutions",
        description:
          "We build custom themes and functionality tailored to your specific needs.",
        icon: "pen-tool",
        color: "from-teal-500 to-teal-400",
      },
      {
        title: "Performance Focused",
        description:
          "Speed matters. We optimize for fast loading and excellent user experience.",
        icon: "zap",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "SEO Optimized",
        description:
          "Built for search engines from the ground up to improve your rankings.",
        icon: "search",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Security First",
        description:
          "Your site is protected with the latest security best practices.",
        icon: "shield-check",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Ongoing Support",
        description:
          "We provide continuous support and maintenance for your WordPress site.",
        icon: "headphones",
        color: "from-rose-500 to-rose-400",
      },
    ],
  },
  seoServices: {
    badge: "Custom WordPress Solutions",
    heading: "What Does Our WordPress",
    headingHighlight: "Development Include?",
    description: [
      "Our WordPress development service is comprehensive, covering everything from initial setup to ongoing maintenance.",
      "We deliver professionally built WordPress sites optimized for performance, SEO, and conversions.",
    ],
    services: [
      "Custom Theme Development",
      "Plugin Integration",
      "Performance Optimization",
      "Security Hardening",
      "SEO Configuration",
      "Responsive Design",
      "Maintenance & Support",
      "Training & Documentation",
    ],
    quote:
      "We build WordPress websites that look great, perform fast, and drive real results for your business.",
    image: "/business-success.jpg",
    ctaHeading: "Ready to Get Your Custom",
    ctaDescription:
      "Our WordPress experts are ready to build a website that drives growth for your business. Let's get started today.",
    ctaButton1: "GET YOUR FREE PROPOSAL",
    ctaButton2: "SCHEDULE A CONSULTATION",
  },
  faqData: [
    {
      question: "What is Doctor SEO?",
      answer:
        "Doctor SEO is the process of optimising a medical website so patients can easily find doctors, clinics, and healthcare services through Google search results.",
    },
    {
      question: "Why is SEO important for doctors?",
      answer:
        "SEO for doctors increases online visibility, builds trust, and generates consistent patient enquiries, helping your practice grow sustainably.",
    },
    {
      question: "Is local SEO important for doctors?",
      answer:
        "Yes. Local SEO for doctors ensures your clinic appears in Google Maps and “near me” searches, attracting patients in your area.",
    },
    {
      question: "How long does Doctor SEO take to work?",
      answer:
        "Most practices see measurable improvements within 3–6 months with ongoing optimisation, tracking, and adjustments.",
    },
    {
      question: "What services are included in Doctor SEO?",
      answer:
        "Medical SEO services for doctors, clinics & healthcare sites often include keyword research, on-page and off-page SEO, content optimisation, technical SEO, and local SEO strategies.",
    },
    {
      question: "Can AI SEO improve my doctor website rankings?",
      answer:
        "Yes. AI SEO for doctors leverages artificial intelligence to analyse patient search behaviour, optimise content, and improve rankings faster and more accurately.",
    },
    {
      question: "Do I need a specialist SEO agency for doctors?",
      answer:
        "Absolutely. A dedicated SEO agency for doctors understands healthcare compliance, local search trends, and patient-focused strategies that general SEO agencies might miss.",
    },
    {
      question: "How does Doctor SEO increase patient enquiries?",
      answer:
        "By using Doctor SEO strategies like targeted keywords, local optimisation, content marketing, and reputation management, more patients find your website and book appointments.",
    },
  ],
};

export const webAppService: ServiceDetail = {
  id: "web-app",
  title: "Web App Development",
  description: "Scalable web applications tailored to your business needs.",
  heroSection: {
    badge: "💻 Web App Development",
    heading: "Powerful Custom",
    subheading: "Web Applications",
    description:
      "We build modern web applications using the latest technologies to ensure performance, scalability, and long-term reliability.",
    descriptionExtra:
      "From SaaS platforms to internal tools, our web app development delivers solutions that scale with your business.",
    highlights: [
      "✔ Modern Technologies",
      "✔ Scalable Architecture",
      "✔ Cloud Ready",
    ],
    image: "/professional-service.jpg",
  },
  talkToExperts: {
    badge: "Talk to Professionals",
    heading: "Talk to the",
    headingHighlight: "Experts",
    description: [
      "Modern web applications power today's successful businesses. Whether you need a SaaS platform, dashboard, or custom tool, we build it.",
      "Our team specializes in building web apps that are fast, secure, and built to scale with your growing business.",
    ],
    buttonText: "Get Help With Your Web App",
    image: "/team-consultation.jpg",
  },
  processSection: {
    heading: "Our Proven",
    headingHighlight: "Web App Development Process",
    description:
      "From concept to launch, we deliver scalable web applications.",
    steps: [
      {
        icon: "lightbulb",
        title: "Concept & Strategy",
        description:
          "We collaborate to define your app's vision, features, and success metrics.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "pen-tool",
        title: "Design & Prototyping",
        description:
          "We create intuitive UI/UX designs and interactive prototypes.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "code",
        title: "Development",
        description:
          "We build your app using modern technologies and best practices.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Testing & Optimization",
        description:
          "Rigorous testing ensures quality, performance, and security.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "send",
        title: "Deployment & Launch",
        description: "We deploy your app and ensure a smooth launch.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Support & Growth",
        description: "Ongoing support, updates, and feature enhancements.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },
  bottlenecksSection: {
    heading: "Web App Development Challenges",
    description:
      "We overcome technical obstacles to deliver quality applications.",
    items: [
      "Performance Issues",
      "Scalability Problems",
      "Security Risks",
      "Poor UX Design",
      "Maintenance Complexity",
    ],
    selectedIndex: 0,
    selectedTitle: "Performance Issues",
    selectedDescription:
      "Slow web apps frustrate users and lose revenue. We build apps optimized for performance from day one.",
  },
  whyChooseUs: {
    heading: "Why Choose Us For Your",
    headingHighlight: "Web App",
    description:
      "We deliver scalable, modern web applications that drive business growth.",
    benefits: [
      {
        title: "Expert Development Team",
        description:
          "Our experienced developers bring expertise across all modern web technologies.",
        icon: "code",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Scalable Architecture",
        description:
          "We build apps designed to scale seamlessly as your business grows.",
        icon: "layers",
        color: "from-teal-500 to-teal-400",
      },
      {
        title: "Modern Tech Stack",
        description:
          "We use cutting-edge technologies for speed, reliability, and performance.",
        icon: "zap",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Cloud Deployment",
        description: "Your app is deployed on reliable cloud infrastructure.",
        icon: "cloud",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Security Focused",
        description:
          "We implement security best practices at every level of development.",
        icon: "shield",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "24/7 Support",
        description:
          "We provide continuous monitoring and support for your application.",
        icon: "headphones",
        color: "from-rose-500 to-rose-400",
      },
    ],
  },
  seoServices: {
    badge: "Complete Web App Solutions",
    heading: "What Does Our Web App",
    headingHighlight: "Development Include?",
    description: [
      "Our web app development is comprehensive, covering design, development, testing, and deployment.",
      "We deliver production-ready applications optimized for performance and user experience.",
    ],
    services: [
      "UI/UX Design",
      "Full Stack Development",
      "API Development",
      "Database Design",
      "Security Implementation",
      "Cloud Deployment",
      "Performance Optimization",
      "24/7 Monitoring & Support",
    ],
    quote:
      "We build web apps that solve real business problems and deliver measurable ROI.",
    image: "/business-success.jpg",
    ctaHeading: "Ready to Build Your Custom",
    ctaDescription:
      "Let's transform your idea into a powerful web application. Our team is ready to help.",
    ctaButton1: "START YOUR PROJECT",
    ctaButton2: "VIEW OUR PORTFOLIO",
  },
  seoServicesDetails: {
    heading: "",
    headingHighlight: "",
    description: "",
    steps: [],
  },
};

const placeholderService = (
  serviceId: string,
  serviceName: string
): ServiceDetail => ({
  id: serviceId,
  title: serviceName,
  description: `Learn more about ${serviceName}`,
  heroSection: {
    badge: `${serviceName} Services`,
    heading: "Premium",
    subheading: serviceName,
    description: `We provide comprehensive ${serviceName} solutions tailored to your business needs. Contact our team to learn more about how we can help you achieve your goals.`,
    highlights: ["✔ Expert Team", "✔ Proven Results", "✔ Customized Solutions"],
    image: "/professional-service.jpg",
  },
  talkToExperts: {
    badge: "Talk to Professionals",
    heading: "Talk to the",
    headingHighlight: "Experts",
    description: [
      `Our team specializes in ${serviceName} and is ready to help you succeed.`,
      "Get personalized recommendations and a tailored strategy for your specific needs.",
    ],
    buttonText: `Get Help With ${serviceName}`,
    image: "/team-consultation.jpg",
  },
  processSection: {
    heading: "Our Proven",
    headingHighlight: "Process",
    description: "A strategic approach that delivers measurable results.",
    steps: [
      {
        icon: "target",
        title: "Discovery & Analysis",
        description:
          "We understand your business, goals, and current challenges.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Strategy Development",
        description: "We create a customized strategy tailored to your needs.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "linechart",
        title: "Implementation",
        description: "We execute the strategy with precision and expertise.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "check-circle-2",
        title: "Optimization & Growth",
        description: "We continuously monitor and optimize for better results.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
    ],
  },
  bottlenecksSection: {
    heading: "Common Challenges",
    description: "We help overcome obstacles that limit your growth.",
    items: [
      "Limited Visibility",
      "Competition",
      "Resource Constraints",
      "Technical Issues",
      "Poor Performance",
    ],
    selectedIndex: 0,
    selectedTitle: "Limited Visibility",
    selectedDescription:
      "We help improve your online visibility and reach your target audience effectively.",
  },
  whyChooseUs: {
    heading: "Why Choose Us For Your",
    headingHighlight: serviceName,
    description: `We deliver specialized ${serviceName} services designed to help your business grow sustainably.`,
    benefits: [
      {
        title: "Expert Team",
        description:
          "Our experienced professionals bring expertise and innovation to every project.",
        icon: "users",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Data-Driven Strategies",
        description:
          "We use data and insights to create strategies that deliver results.",
        icon: "bar-chart-2",
        color: "from-teal-500 to-teal-400",
      },
      {
        title: "Customized Solutions",
        description:
          "Every business is unique. We tailor our solutions to your specific needs.",
        icon: "shield-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Proven Track Record",
        description:
          "We have helped numerous businesses achieve their goals successfully.",
        icon: "check-circle-2",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Continuous Optimization",
        description:
          "We constantly improve and adapt our strategies based on performance metrics.",
        icon: "refresh-cw",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Transparent Reporting",
        description:
          "You always know how your investment is performing with clear reporting.",
        icon: "file-text",
        color: "from-rose-500 to-rose-400",
      },
    ],
  },
  seoServices: {
    badge: "Comprehensive Solutions",
    heading: "What Services Do We",
    headingHighlight: "Provide?",
    description: [
      `We offer a complete range of ${serviceName} services designed to help your business succeed.`,
      "Our team is committed to delivering measurable results and sustainable growth.",
    ],
    services: [
      "Strategic Planning",
      "Implementation",
      "Optimization",
      "Monitoring & Reporting",
      "Support & Guidance",
      "Performance Tracking",
    ],
    quote: `We deliver results-driven ${serviceName} solutions tailored to your business needs.`,
    image: "/business-success.jpg",
    ctaHeading: `Ready to Grow Your Business with Our ${serviceName}?`,
    ctaDescription:
      "Our team of experts is ready to help you achieve your goals. Get in touch today for a free consultation.",
    ctaButton1: "GET YOUR FREE PROPOSAL",
    ctaButton2: "CONTACT OUR TEAM",
  },
  seoServicesDetails: {
    heading: "",
    headingHighlight: "",
    description: "",
    steps: [],
  },
});

const laravelWebsiteService = placeholderService(
  "laravel-website",
  "Laravel Website"
);
const customWebsiteService = placeholderService(
  "custom-website",
  "Custom Website"
);
const smallBusinessWebsiteService = placeholderService(
  "small-business-website",
  "Small Business Website"
);
const shopifyWebsiteService = placeholderService(
  "shopify-website",
  "Shopify Website"
);
const affiliateWebsiteService = placeholderService(
  "affiliate-website",
  "Affiliate Website"
);
const ecommerceWebsiteService = placeholderService(
  "ecommerce-website",
  "eCommerce Website"
);

const ndisWebDesignService = placeholderService(
  "ndis-web-design",
  "NDIS Web Design"
);
const cleaningWebDesignService = placeholderService(
  "cleaning-web-design",
  "Cleaning Web Design"
);
const doctorWebDesignService = placeholderService(
  "doctor-web-design",
  "Doctor Web Design"
);
const dentistWebDesignService = placeholderService(
  "dentist-web-design",
  "Dentist Web Design"
);
const lawFirmWebDesignService = placeholderService(
  "law-firm-web-design",
  "Law Firm Web Design"
);
const accountingWebDesignService = placeholderService(
  "accounting-web-design",
  "Accounting Web Design"
);
const tourismWebDesignService = placeholderService(
  "tourism-web-design",
  "Tourism Web Design"
);
const restaurantWebDesignService = placeholderService(
  "restaurant-web-design",
  "Restaurant Web Design"
);

const localSeoSmallBusinessService = placeholderService(
  "local-seo-small-business",
  "Local SEO for Small Business"
);
const seoOptimisationService = placeholderService(
  "seo-optimisation",
  "Search Engine Optimisation"
);
const ecommerceSeoService = placeholderService(
  "ecommerce-seo",
  "eCommerce SEO"
);
const searchEngineMarketingService = placeholderService(
  "search-engine-marketing",
  "Search Engine Marketing"
);
const contentMarketingService = placeholderService(
  "content-marketing",
  "Content Marketing"
);
const socialMediaMarketingService = placeholderService(
  "social-media-marketing",
  "Social Media Marketing"
);
const emailMarketingService = placeholderService(
  "email-marketing",
  "Email Marketing"
);

const ndisSeoService = placeholderService("ndis-seo", "NDIS SEO");
const lawFirmSeoService = placeholderService("law-firm-seo", "Law Firm SEO");
const accountingSeoService = placeholderService(
  "accounting-seo",
  "Accounting SEO"
);
const dentistSeoService = placeholderService("dentist-seo", "Dentist SEO");
const cleaningSeoService = placeholderService("cleaning-seo", "Cleaning SEO");
const tourismSeoService = placeholderService("tourism-seo", "Tourism SEO");
const restaurantSeoService = placeholderService(
  "restaurant-seo",
  "Restaurant SEO"
);

export const serviceDetailsMap: Record<string, ServiceDetail> = {
  "doctor-seo": doctorSeoService,
  "wordpress-website": wordPressWebsiteService,
  "web-app": webAppService,
  "laravel-website": laravelWebsiteService,
  "custom-website": customWebsiteService,
  "small-business-website": smallBusinessWebsiteService,
  "shopify-website": shopifyWebsiteService,
  "affiliate-website": affiliateWebsiteService,
  "ecommerce-website": ecommerceWebsiteService,
  "ndis-web-design": ndisWebDesignService,
  "cleaning-web-design": cleaningWebDesignService,
  "doctor-web-design": doctorWebDesignService,
  "dentist-web-design": dentistWebDesignService,
  "law-firm-web-design": lawFirmWebDesignService,
  "accounting-web-design": accountingWebDesignService,
  "tourism-web-design": tourismWebDesignService,
  "restaurant-web-design": restaurantWebDesignService,
  "local-seo-small-business": localSeoSmallBusinessService,
  "seo-optimisation": seoOptimisationService,
  "ecommerce-seo": ecommerceSeoService,
  "search-engine-marketing": searchEngineMarketingService,
  "content-marketing": contentMarketingService,
  "social-media-marketing": socialMediaMarketingService,
  "email-marketing": emailMarketingService,
  "ndis-seo": ndisSeoService,
  "law-firm-seo": lawFirmSeoService,
  "accounting-seo": accountingSeoService,
  "dentist-seo": dentistSeoService,
  "cleaning-seo": cleaningSeoService,
  "tourism-seo": tourismSeoService,
  "restaurant-seo": restaurantSeoService,
};

export const getServiceDetails = (
  serviceId: string,
  serviceName: string
): ServiceDetail => {
  return (
    serviceDetailsMap[serviceId] || placeholderService(serviceId, serviceName)
  );
};
