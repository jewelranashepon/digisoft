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
  faqSection: {
    items: [
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
  },
};

export const cleaningSeoService: ServiceDetail = {
  id: "cleaning-seo",
  title: "Cleaning SEO",
  description:
    "SEO services to grow cleaning businesses with more calls and bookings.",

  heroSection: {
    badge: "🧹 Cleaning SEO Services",
    heading: "Boost Your Cleaning Business",
    subheading: "with Smart SEO",
    description:
      "Professional SEO for Cleaning Services Want more calls and booking requests for your cleaning business? Our SEO for Cleaning Services helps your website show up when people search for cleaners near them. We help cleaning companies grow online with simple, proven SEO strategies that bring real customers.We optimise your website to reach local clients actively searching for your services. Our team implements SEO for Local Cleaners, Cleaning Company and also provide AI optimisation for Cleaning Businesses to boost rankings and visibility.",

    descriptionExtra:
      "As a dedicated Cleaner SEO Agency approach, we ensure your cleaning business not only attracts more leads but also converts them into loyal, paying customers.",

    highlights: [
      "✔ Local Client Targeting",
      "✔ More Calls & Bookings",
      "✔ Long-Term SEO Growth",
    ],
    image: "/images/cleaning-seo-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to SEO Experts",
    heading: "Trusted SEO Services for",
    headingHighlight: "Cleaning Businesses",
    description: [
      "Cleaning businesses need to be easy to find online. Our SEO for cleaning companies helps your services appear on Google when people search for house cleaning, office cleaning, or local cleaners. With smart SEO and local search optimisation, we make sure nearby customers can quickly find and contact your business.",
      "As a trusted cleaning company SEO agency, we focus on long-term growth and credibility. Strong Cleaning SEO improves your website rankings, builds trust, and presents your business as professional and reliable. Every strategy is tailored to your services, service areas, and goals—whether you offer residential or commercial cleaning.",
    ],
    buttonText: "Get Help With Cleaning SEO",
    image: "/images/cleaning-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "SEO Solutions for",
    headingHighlight: "Cleaning Companies",
    description:
      "Codexa team provides top SEO for cleaning companies to increase visibility, attract local customers, and grow your business online.",
    steps: [
      {
        icon: "filesearch",
        title: "Website Health Check",
        description:
          " We review your website structure, content, speed, and technical setup. This helps us find issues that may stop your site from ranking well and create a clear Cleaning Company SEO plan. A healthy website improves user experience and boosts your chances of higher search rankings.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page SEO for Cleaners",
        description:
          " We improve page titles, headings, keywords, and service pages so search engines clearly understand your cleaning services. Optimised pages help attract the right customers and increase your visibility in local searches.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Link Building & Online Authority",
        description:
          "We build quality backlinks from trusted local and industry websites. This improves trust and boosts rankings for SEO for Cleaning Contractors. Strong backlinks signal authority to search engines and help your business stand out from competitors.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO for Cleaners & Companies",
        description:
          "Local SEO is essential for cleaning businesses. We optimise your Google Business Profile, local listings, and reviews so customers nearby can easily find you. Our Local SEO for Cleaners & Cleaning Companies helps you appear on Google Maps and local searches. Better local visibility drives more calls, bookings, and enquiries from nearby clients.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "pen-tool",
        title: "Content for Cleaning & Home Services",
        description:
          "Services We create and improve service pages, blogs, and FAQs using simple language. This supports SEO for cleaning & home services businesses and helps turn visitors into customers. High-quality content builds trust, educates clients, and encourages them to choose your services.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Tracking & SEO Reports",
        description:
          "We track traffic, rankings, and enquiries. You receive clear reports showing what’s working and how your Cleaning Company SEO Services are improving results. Regular tracking allows us to refine strategies for continued growth and higher ROI.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Simple",
    headingHighlight: "Cleaning SEO Process",
    description:
      "A clear, step-by-step SEO process focused on local visibility and bookings.",
    steps: [
      {
        icon: "target",
        title: "Keyword & Search Research",
        description:
          "We research what people search for when looking for cleaners. This helps target the right keywords for SEO for Local Cleaners. By focusing on high-intent local searches, we attract visitors who are more likely to book your services.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor Research",
        description:
          "We study other cleaning companies to find gaps and opportunities so your business can rank higher. Understanding competitor strategies allows us to create a stronger SEO plan that helps your business stand out.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "link2",
        title: "Technical SEO Improvements",
        description:
          "We improve site speed, mobile usability, security, and indexing so your website performs better on Google. Optimising technical aspects ensures a smooth user experience and higher search engine rankings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO & AEO Setup",
        description:
          "We optimise your Google Business Profile and local listings to support Local SEO & AEO for cleaning businesses, helping your services appear in voice and AI search results. This helps nearby customers easily find your business and boosts visibility in local searches.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "star",
        title: "Reviews & Online Reputation",
        description:
          "Reviews are very important for cleaning companies. We help manage and improve reviews to build trust and increase bookings. Positive reviews enhance your credibility, attract more clients, and strengthen your online presence.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Cleaning SEO Problems",
    description:
      "We fix the most common issues stopping cleaning businesses from getting leads.",
    items: [
      {
        title: "Low Local Visibility",
        description:
          "If your cleaning business doesn’t appear in local searches, nearby customers may never find you, resulting in fewer calls and missed opportunities.",
      },
      {
        title: "Wrong or Weak Keywords",
        description:
          "Using generic or weak keywords attracts the wrong audience and wastes time. Targeted, high-intent keywords help reach people actively looking for your services.",
      },
      {
        title: "Few Website Enquiries",
        description:
          "Even with visitors, unclear calls-to-action or confusing navigation can prevent potential clients from contacting you.",
      },
      {
        title: "Poor Google Maps Rankings",
        description:
          "If your business isn’t visible on Google Maps, local customers may choose competitors instead. Optimising your map presence boosts local leads.",
      },
      {
        title: "Slow or Outdated Websites",
        description:
          "Websites that load slowly or aren’t mobile-friendly frustrate visitors and reduce search rankings, impacting enquiries and conversions.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Us As Your",
    headingHighlight: "Cleaning SEO Agency",
    description:
      "We focus on simple, effective SEO strategies that generate real business growth.",
    benefits: [
      {
        title: "Cleaning-Focused Keyword Strategy",
        description:
          "We target high-intent keywords related to SEO for cleaners and cleaning services. This ensures your website attracts visitors who are actively searching for the services you offer.",
        icon: "users",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Strong Local SEO Expertise",
        description:
          "Our local SEO for cleaning services helps you rank higher in local and map searches. Being visible locally increases calls, bookings, and engagement from nearby customers.",
        icon: "map",
        color: "from-teal-500 to-teal-400",
      },
      {
        title: "Technical SEO Support",
        description:
          "We fix speed, mobile, and technical issues that affect rankings. A well-optimised website provides a smooth user experience and improves your visibility on search engines.",
        icon: "shield-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Simple & Clear Content",
        description:
          "We create content that explains your services clearly and builds customer trust. Easy-to-read content helps potential clients understand your offerings and encourages them to book your services.",
        icon: "file-text",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Ongoing SEO Growth",
        description:
          "We track performance and improve your cleaning SEO strategy regularly for long-term success. Continuous monitoring ensures your business stays competitive and maintains strong search rankings.",
        icon: "check-circle-2",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete Cleaning SEO Solutions",
    heading: "What Does Our",
    headingHighlight: "Cleaning SEO Service Include?",
    description: [
      "Our Cleaning Company SEO Services help businesses attract more local customers and increase bookings.",
      "We combine technical SEO, local optimisation, content, and tracking to deliver consistent growth.",
    ],
    services: [
      "Website SEO Audits",
      "On-Page Cleaning SEO",
      "Local SEO Optimisation",
      "Google Business Profile Setup",
      "Review Management",
      "Cleaning Content Strategy",
      "Link Building",
      "SEO Reporting & Tracking",
    ],
    quote:
      "We help cleaning companies turn online searches into real calls and bookings.",
    image: "/images/cleaning-seo-team.jpg",
    ctaHeading: "Ready to Rank Your Cleaning Company?",
    ctaDescription:
      "Get affordable, clear, and results-focused Cleaning SEO Services that grow your business.",
    ctaButton1: "REQUEST FREE SEO CONSULTATION",
    ctaButton2: "VIEW CASE STUDIES",
  },

  faqSection: {
    items: [
      {
        question:
          "What SEO services do you provide for house cleaning businesses?",
        answer:
          "We help your house cleaning business get found online through keyword optimisation, on-page SEO, local SEO, website audits, technical fixes, local content creation, backlink building, review management, and Google Business Profile optimisation. These steps attract more local customers and help grow your business.",
      },
      {
        question: "How do you choose keywords for my house cleaning business?",
        answer:
          "We research what people in your local area are searching for and select keywords that match your cleaning services and target customers who are ready to hire, bringing more qualified leads to your website.",
      },
      {
        question: "Can you help with online reputation management?",
        answer:
          "Yes. We monitor customer reviews, promote positive feedback, and professionally manage negative reviews to build trust and strengthen your online reputation.",
      },
      {
        question: "Why is local SEO important for my house cleaning business?",
        answer:
          "Most cleaning customers search for nearby services. Local SEO helps your business appear in Google Search, Google Maps, and local directories, bringing more local clients to you.",
      },
      {
        question: "How long does it take to see SEO results?",
        answer:
          "SEO takes time. Small improvements may appear within 2–3 months, while strong and consistent results usually take around 6 months.",
      },
      {
        question: "How do you measure the success of SEO campaigns?",
        answer:
          "We track website traffic, keyword rankings, and lead generation to understand performance and continuously improve your SEO strategy.",
      },
      {
        question: "Do you do competitor analysis?",
        answer:
          "Yes. We analyse your competitors to understand what works for them and apply those insights to keep your house cleaning business ahead online.",
      },
      {
        question:
          "Will my website need technical SEO, and what does it involve?",
        answer:
          "Yes. Technical SEO improves website speed, security, mobile-friendliness, and navigation, fixes broken links, and helps search engines understand your site, leading to better rankings and user experience.",
      },
    ],
  },
};

export const accountingWebDesignService: ServiceDetail = {
  id: "accounting-web-design",
  title: "Accounting Web Design",
  description:
    "Professional web design services to help accounting firms attract clients, build trust, and grow online.",

  heroSection: {
    badge: "📊 Accounting Web Design Services",
    heading: "Web Design for",
    subheading: "Accounting Firms & Accountants",
    description:
      "Looking to create a professional website that attracts clients and builds trust? Our Accounting Web Design Services help accounting firms and financial professionals present credibility, expertise, and reliability through modern, user-friendly websites. We design custom accounting websites that improve user experience, establish trust, and convert visitors into client enquiries.",

    descriptionExtra:
      "As a specialist in web design for accountants, we build fast, secure, mobile-friendly, and SEO-ready websites tailored for accounting firms. From solo accountants to multi-office firms, our focus is on clarity, usability, and long-term online growth.",

    highlights: [
      "✔ Trust-Building Professional Design",
      "✔ Mobile-Friendly & Fast Websites",
      "✔ SEO-Ready Structure for Growth",
    ],
    image: "/images/accounting-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Web Design Experts",
    heading: "Convert Website Visitors into",
    headingHighlight: "Accounting Clients",
    description: [
      "Your website is often the first impression clients have of your accounting firm. With professional accounting web design, visitors can easily understand your services, explore your expertise, and book consultations confidently.",
      "Whether you run a private accounting practice, tax consultancy, or multi-location finance firm, our accounting website design solutions ensure a smooth, secure, and trustworthy user experience across all devices.",
      "By combining clean UI/UX design, mobile responsiveness, fast loading performance, and SEO-ready structure, I build accounting websites that attract, engage, and convert visitors—supporting credibility, client trust, and long-term business growth.",
    ],
    buttonText: "Get Accounting Web Design Help",
    image: "/images/accounting-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Accounting Website",
    headingHighlight: "Design Services",
    description:
      "We provide complete accounting web design services focused on professionalism, trust, and client conversions.",
    steps: [
      {
        icon: "layout",
        title: "Custom Websites for Accounting Firms",
        description:
          "We design professional, client-focused websites for accountants, bookkeeping services, and financial advisors. Our websites help showcase expertise, build trust, and convert visitors into long-term clients.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "filesearch",
        title: "Website Review & Improvement",
        description:
          "We assess your existing website to identify design issues, usability problems, and technical gaps. This ensures your accounting website is modern, functional, and easy to navigate for potential clients.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "pen-tool",
        title: "Branding & Visual Identity",
        description:
          "We create a strong and professional brand presence using clean layouts, consistent colours, and visual elements that reflect your accounting firm’s credibility and reliability.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile & Responsive Design",
        description:
          "Our accounting websites are fully responsive, ensuring a smooth browsing experience on smartphones, tablets, and desktops. Mobile-friendly design improves engagement and enquiry rates.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "zap",
        title: "SEO-Ready & Speed Optimised",
        description:
          "We build SEO-friendly website structures with fast-loading pages. This helps accounting firms appear in local searches and attract qualified clients efficiently.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Performance Tracking & Analytics",
        description:
          "We implement analytics to track website traffic, enquiry forms, and client interactions. This data helps us continuously improve design and maximise conversions.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Structured",
    headingHighlight: "Accounting Web Design Process",
    description:
      "A step-by-step design process focused on professionalism, trust, and client enquiries.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Firm & Client Needs",
        description:
          "We take time to understand your accounting services, specialties, and target clients. This helps us design a website that reflects your expertise and encourages consultations.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Market Research & Competitor Insights",
        description:
          "We analyse competitor accounting websites to identify opportunities and create a design that positions your firm as a trusted authority.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Strategic Design & User Experience",
        description:
          "We design clean layouts with intuitive navigation, clear service pages, and strong calls-to-action that guide visitors toward contacting your firm.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Responsive, Mobile & SEO-Ready Build",
        description:
          "We build fully responsive websites with SEO-friendly structure, fast load speeds, and structured content for better visibility and usability.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Analytics, Tracking & Continuous Improvement",
        description:
          "We track enquiries, traffic, and engagement to refine design and content continuously, ensuring long-term performance and growth.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Accounting Website Challenges",
    description:
      "We solve the most common problems that stop accounting websites from converting visitors into clients by improving trust, clarity, and performance.",
    items: [
      {
        title: "Outdated Website Design",
        description:
          "An outdated website design creates a poor first impression and reduces credibility. Potential clients may question your professionalism and hesitate to contact your accounting firm.",
      },
      {
        title: "Poor Mobile Experience",
        description:
          "Websites that are not fully mobile-responsive frustrate users on smartphones and tablets, leading to higher bounce rates and fewer consultation enquiries.",
      },
      {
        title: "Unclear Service Information",
        description:
          "When service descriptions lack clarity or structure, visitors struggle to understand what you offer, who your services are for, and how to take the next step.",
      },
      {
        title: "Low Search Visibility",
        description:
          "Without an SEO-ready website structure and optimized content, your accounting website fails to appear in relevant search results, limiting organic traffic.",
      },
      {
        title: "Low Enquiry & Conversion Rates",
        description:
          "Poor user flow, weak calls-to-action, and unclear contact options reduce the number of enquiries, bookings, and form submissions.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Us As Your",
    headingHighlight: "Accounting Web Design Agency",
    description:
      "We design accounting websites that build trust, credibility, and long-term growth.",
    benefits: [
      {
        title: "Finance & Accounting Industry Understanding",
        description:
          "We design websites specifically for accounting firms, tax consultants, and financial service providers. Our approach focuses on professionalism, clarity, and trust—helping potential clients clearly understand your services and feel confident in choosing your firm.",
        icon: "briefcase",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Client-Centric Website Structure",
        description:
          "Accounting websites must be simple, informative, and easy to navigate. We create structured layouts that present services, expertise, and credentials clearly, making it easy for visitors to find information, request consultations, and take the next step.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust-Building Design & Branding",
        description:
          "We design accounting websites that reflect reliability and credibility through clean visuals, consistent branding, and well-organised content. From service pages to team profiles, every element is crafted to strengthen trust and reinforce your firm’s authority.",
        icon: "shield-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Responsive & Performance Focused",
        description:
          "Many clients search for accounting and tax services on mobile devices. We build fully responsive websites that perform smoothly across all screen sizes, ensuring fast loading times and a seamless browsing experience.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready Foundation for Online Visibility",
        description:
          "Our accounting web design includes SEO-friendly structure, clean code, and optimised page layouts. This helps your firm appear in relevant searches, attract qualified leads, and support long-term organic growth.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Tracking, Insights & Ongoing Improvement",
        description:
          "We integrate analytics to monitor website traffic, enquiry forms, and user behaviour. These insights allow continuous improvement of design and content, ensuring your website remains effective as your firm grows.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete Accounting Web Design",
    heading: "What Does Our",
    headingHighlight: "Accounting Web Design Include?",
    description: [
      "Our Accounting Web Design Services focus on trust, usability, and client conversion.",
      "We combine professional design, performance optimisation, and SEO-ready structure for long-term success.",
    ],
    services: [
      "Custom Accounting Website Design",
      "Responsive & Mobile-Friendly Layouts",
      "Branding & Visual Identity",
      "Service Pages & Team Profiles",
      "SEO-Ready Website Structure",
      "Fast Performance Optimisation",
      "Analytics & Tracking Setup",
    ],
    quote:
      "We turn accounting websites into powerful tools for attracting and converting clients.",
    image: "/images/accounting-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Accounting Web Design?",
    ctaDescription:
      "Get a professional, high-converting accounting website built for trust and long-term growth.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR PORTFOLIO",
  },

  faqSection: {
    items: [
      {
        question: "What is Accounting Web Design?",
        answer:
          "Accounting Web Design is the process of creating professional websites for accounting firms, tax consultants, and financial service providers that showcase services, expertise, and credibility while attracting new clients.",
      },
      {
        question: "Why is web design important for accounting firms?",
        answer:
          "A well-designed accounting website builds trust, improves online visibility, and encourages potential clients to contact your firm for consultations.",
      },
      {
        question: "Is mobile optimisation important for accounting websites?",
        answer:
          "Yes. Many clients search for accounting and tax services on mobile devices, making mobile-friendly websites essential.",
      },
      {
        question: "How long does it take to launch an accounting website?",
        answer:
          "Most accounting websites are completed within 4–8 weeks, depending on complexity and content requirements.",
      },
      {
        question: "What services are included in Accounting Web Design?",
        answer:
          "Services typically include responsive design, service pages, branding, team profiles, content creation, and SEO-ready website structure.",
      },
      {
        question: "Can SEO improve my accounting website performance?",
        answer:
          "Yes. SEO helps your accounting firm appear in local and service-based searches, increasing visibility to potential clients.",
      },
      {
        question:
          "Do I need a specialist web design agency for accounting firms?",
        answer:
          "Absolutely. Specialist agencies understand the finance industry and design websites that reflect professionalism and convert visitors effectively.",
      },
      {
        question:
          "How does Accounting Web Design increase client enquiries and conversions?",
        answer:
          "By providing a modern, easy-to-navigate, and mobile-friendly website with clear service descriptions and calls-to-action, more visitors are encouraged to contact your firm.",
      },
    ],
  },
};

export const tourismWebDesignService: ServiceDetail = {
  id: "tourism-web-design",
  title: "Tourism Web Design",
  description:
    "Engaging web design services to help tourism and travel businesses attract travelers and increase bookings.",

  heroSection: {
    badge: "🌍 Tourism Web Design Services",
    heading: "Engaging Web Design for",
    subheading: "Tourism & Travel Businesses",
    description:
      "Looking to create a stunning website that attracts travelers and boosts bookings? Our Tourism Web Design Services help travel agencies, tour operators, and hospitality businesses showcase their services, destinations, and experiences through modern, user-friendly websites. As a specialist in web design for tourism businesses, we design custom travel websites that improve user experience, highlight your offerings, and convert visitors into customers.",

    descriptionExtra:
      "We specialise in tourism and travel website design, creating fast, secure, and mobile-friendly websites tailored to the travel industry. From small travel agencies to large tour operators, our approach focuses on usability, accessibility, and long-term online growth.",

    highlights: [
      "✔ Visually Engaging Travel Websites",
      "✔ Mobile-Friendly & Fast Performance",
      "✔ Booking-Focused User Experience",
    ],
    image: "/images/tourism-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Web Design Experts",
    heading: "Trusted Web Design for",
    headingHighlight: "Tourism Businesses",
    description: [
      "Your website is often the first impression travelers have of your tourism business. With professional tourism web design, visitors can easily explore packages, learn about destinations, and book trips confidently.",
      "Whether you run a travel agency, guided tour service, or hospitality business, our tourism website design solutions ensure a smooth and engaging user experience across all devices.",
      "By combining modern UI/UX design, mobile responsiveness, fast loading performance, and SEO-ready structure, I build tourism websites that attract, engage, and convert visitors—supporting credibility, customer trust, and long-term business growth.",
    ],
    buttonText: "Get Tourism Web Design Help",
    image: "/images/tourism-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Tourism Website",
    headingHighlight: "Design Services",
    description:
      "We provide complete tourism web design services focused on engagement, usability, and bookings.",
    steps: [
      {
        icon: "layout",
        title: "Custom Websites for Travel & Tourism Businesses",
        description:
          "We design visually engaging, user-friendly websites specifically for travel agencies, tour operators, and tourism businesses. Our goal is to showcase your destinations and services while encouraging visitors to book trips with confidence.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "filesearch",
        title: "Website Evaluation & Improvement",
        description:
          "We analyse your existing website to identify areas for improvement in design, navigation, speed, and functionality. This ensures the new website delivers a seamless experience and meets modern web standards.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "image",
        title: "Engaging Visuals & Branding",
        description:
          "We create a unique online identity for your tourism business with compelling visuals, consistent branding, and intuitive layouts that highlight your tours, destinations, and services.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Optimised & Responsive Design",
        description:
          "Our websites are fully responsive, allowing travelers to browse, explore, and book on any device. Smooth mobile navigation ensures higher engagement and conversions.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "zap",
        title: "Search-Friendly & Performance-Optimised",
        description:
          "We build websites with SEO best practices and fast-loading performance to improve rankings and visibility, helping your tourism business reach more travelers locally and globally.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Tracking & Analytics",
        description:
          "We implement tracking systems to monitor website traffic, bookings, and user interactions. This data allows us to refine the website continuously and maximise engagement and reservations.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Tourism Web Design Process",
    description:
      "A structured process focused on traveler engagement and booking growth.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Business & Travelers",
        description:
          "We analyse your tourism business, destinations, travel packages, and target audience to create a strategy that highlights your unique value and inspires bookings.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Market Analysis",
        description:
          "We review competitor tourism websites to identify opportunities for differentiation and create a website that stands out in the travel market.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Design & User Experience Optimization",
        description:
          "We focus on engaging visuals, intuitive navigation, and interactive elements that make exploring destinations and services effortless.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimized",
        description:
          "We build fully responsive websites with SEO-friendly structure and fast-loading pages to increase visibility and attract travelers from key markets.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Tracking, Analytics & Continuous Improvement",
        description:
          "We monitor traffic, bookings, and engagement to refine design and content continuously for better conversions and ROI.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Tourism Website Challenges",
    description:
      "We solve the most common issues that limit online visibility, user engagement, and direct bookings for tourism businesses.",
    items: [
      {
        title: "Slow or Outdated Websites",
        description:
          "Slow page loading times and outdated website designs create a poor first impression, causing travellers to lose interest and abandon your site before making enquiries or bookings.",
      },
      {
        title: "Poor Mobile Usability",
        description:
          "Websites that are not optimized for mobile devices frustrate travellers browsing on smartphones, making it difficult to explore destinations, view packages, or contact your business.",
      },
      {
        title: "Confusing Itineraries & Content",
        description:
          "Unclear itineraries, poorly organized destination details, and vague package information reduce trust and make visitors hesitant to enquire or book your tourism services.",
      },
      {
        title: "Lack of Booking Functionality",
        description:
          "When enquiry forms, booking buttons, or contact options are missing or hard to find, potential customers leave the website without taking any action.",
      },
      {
        title: "Low Search Visibility",
        description:
          "Without a proper SEO-friendly structure and optimized travel content, tourism websites fail to rank in travel-related searches, resulting in missed organic traffic and bookings.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Us As Your",
    headingHighlight: "Tourism Web Design Agency",
    description:
      "We design tourism websites that inspire travellers and convert interest into bookings.",
    benefits: [
      {
        title: "Travel & Tourism Industry Experience",
        description:
          "We design websites specifically for tourism businesses, including tour operators, travel agencies, resorts, and destination services. Our approach focuses on storytelling, visuals, and clear information to inspire travellers and showcase experiences in a compelling way.",
        icon: "map",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Experience-Led Website Design",
        description:
          "Tourism websites must spark interest and emotion. We create immersive layouts that highlight destinations, itineraries, galleries, and experiences, helping visitors imagine their journey and encouraging them to explore further, enquire, or book.",
        icon: "image",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Booking-Friendly Structure",
        description:
          "We design tourism websites with intuitive navigation and clear user journeys. From tour listings to enquiry forms and booking integrations, every element is structured to reduce friction and make it easy for travellers to take action.",
        icon: "calendar-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Global Reach with Mobile Optimisation",
        description:
          "Travellers search from anywhere in the world, often on mobile devices. We build fully responsive, mobile-optimised tourism websites that perform smoothly across all devices, ensuring accessibility for international and on-the-go users.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Search Visibility & Performance Optimisation",
        description:
          "Our tourism web design includes SEO-friendly structure, fast loading pages, and clean content organisation. This helps your business appear in destination-based and experience-focused searches, increasing organic visibility and qualified traffic.",
        icon: "smartphone",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Performance Insights & Continuous Enhancement",
        description:
          "We monitor website engagement, enquiry activity, and booking interactions to understand traveller behaviour. Using these insights, we continuously refine design elements and content structure to improve engagement and conversion rates over time.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete Tourism Web Design",
    heading: "What Does Our",
    headingHighlight: "Tourism Web Design Include?",
    description: [
      "Our Tourism Web Design Services focus on engagement, storytelling, and bookings.",
      "We combine design, performance, and SEO-ready structure for long-term growth.",
    ],
    services: [
      "Custom Tourism Website Design",
      "Responsive & Mobile-Friendly Layouts",
      "Destination & Package Presentation",
      "Branding & Visual Identity",
      "Booking & Enquiry Integration",
      "SEO-Ready Website Structure",
      "Analytics & Performance Tracking",
    ],
    quote:
      "We help tourism businesses turn website visitors into travellers and bookings.",
    image: "/images/tourism-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Tourism Web Design?",
    ctaDescription:
      "Get an engaging, high-converting tourism website built for growth and bookings.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is Tourism Web Design?",
        answer:
          "Tourism Web Design is the process of creating engaging and visually appealing websites for travel agencies, tour operators, resorts, and tourism businesses to showcase destinations, packages, and experiences online.",
      },
      {
        question: "Why is web design important for tourism businesses?",
        answer:
          "A well-designed tourism website increases visibility, inspires travellers, builds trust, and encourages bookings.",
      },
      {
        question: "Is mobile optimisation important for tourism websites?",
        answer:
          "Yes. Many travellers search for tours and destinations on mobile devices, making mobile-friendly websites essential.",
      },
      {
        question: "How long does it take to launch a tourism website?",
        answer:
          "Most tourism websites are completed within 4–8 weeks, depending on complexity and features.",
      },
      {
        question: "What services are included in Tourism Web Design?",
        answer:
          "Services include responsive design, destination and package presentation, booking integration, branding, content creation, and SEO-ready structure.",
      },
      {
        question: "Can SEO improve my tourism website performance?",
        answer:
          "Yes. SEO helps tourism businesses appear in destination and experience-based searches, increasing visibility and enquiries.",
      },
      {
        question:
          "Do I need a specialist web design agency for tourism businesses?",
        answer:
          "Absolutely. Specialist agencies understand the travel industry and design websites that inspire and convert visitors.",
      },
      {
        question:
          "How does Tourism Web Design increase bookings and engagement?",
        answer:
          "By providing an attractive, easy-to-navigate, and mobile-friendly website with clear package details and booking options, more visitors are encouraged to book and enquire.",
      },
    ],
  },
};

export const dentistWebDesignService: ServiceDetail = {
  id: "dentist-web-design",
  title: "Dentist Web Design",
  description:
    "Patient-focused web design services to help dentists and dental clinics attract more patients and increase appointment bookings.",

  heroSection: {
    badge: "🦷 Dentist Web Design Services",
    heading: "Patient-Focused Web Design for",
    subheading: "Dentists & Dental Clinics",
    description:
      "Looking to build a professional website that attracts more dental patients? My Dentist Web Design Services help dentists and dental clinics create strong online impressions with clean, modern, and patient-friendly websites. As a specialist in web design for dentists, I design custom dental websites that improve user experience, build patient trust, and convert visitors into appointment bookings. Every website is carefully crafted to reflect your dental expertise while making it easy for patients to take action.",

    descriptionExtra:
      "I specialise in dentist and dental clinic website design, creating fast, secure, and mobile-friendly websites tailored specifically for dental practices. From solo dentists to multi-location dental clinics, my approach focuses on usability, accessibility, and long-term online growth.",

    highlights: [
      "✔ Patient-Friendly & Trust-Building Design",
      "✔ Mobile-Optimised & Fast Performance",
      "✔ Appointment-Focused User Experience",
    ],
    image: "/images/dentist-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Web Design Experts",
    heading: "Convert Website Visitors into",
    headingHighlight: "Dental Patients",
    description: [
      "Your website is often the first interaction patients have with your dental practice. With professional dentist web design, patients can easily explore services, understand treatment options, and book appointments with confidence.",
      "Whether you operate a private dental clinic, cosmetic dentistry practice, or multi-location dental centre, my dentist website design solutions ensure a smooth and stress-free patient journey across all devices.",
      "By combining modern UI/UX design, mobile responsiveness, fast loading performance, and SEO-ready structure, I build dental websites that attract, engage, and convert patients—supporting credibility, patient trust, and long-term practice success.",
    ],
    buttonText: "Get Dentist Web Design Help",
    image: "/images/dentist-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Dentist Website",
    headingHighlight: "Design Services",
    description:
      "We provide complete dentist web design services focused on trust, usability, and appointment bookings.",
    steps: [
      {
        icon: "layout",
        title: "Professional Online Presence for Dental Practices",
        description:
          "We create custom websites for dentists and dental clinics that highlight your expertise, services, and patient care. Our designs help attract new patients, build trust, and make scheduling appointments effortless.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "filesearch",
        title: "Personalised Website Strategy",
        description:
          "Every dental practice is unique. We analyse your current site, target audience, and competitors to craft a website strategy that reflects your strengths and meets patient expectations.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "image",
        title: "Engaging Design & Branding",
        description:
          "We focus on clean, modern layouts, professional imagery, and consistent branding that convey credibility and comfort, helping patients feel confident before their first visit.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Optimised & User-Friendly",
        description:
          "With more patients searching on phones and tablets, we build responsive websites that look great and function smoothly on any device, increasing engagement and bookings.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "zap",
        title: "SEO-Friendly Structure",
        description:
          "We build dentist websites with SEO-optimised pages, fast loading speeds, and structured content so your practice ranks higher in search results and reaches more local patients.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Analytics & Continuous Improvement",
        description:
          "We implement tracking tools to monitor website traffic, appointment requests, and user interactions, allowing continuous improvements in performance and patient engagement.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Dentist Web Design Process",
    description:
      "A structured, patient-focused process designed to increase trust and appointment bookings.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Dental Practice & Patients",
        description:
          "We learn about your clinic, treatments, and patient types to design a website that builds trust, reduces anxiety, and encourages appointment bookings.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Dental Market & Competitor Research",
        description:
          "We analyse competing dental websites to identify opportunities for differentiation through stronger branding, clearer services, and better usability.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Patient-Friendly Design & UX",
        description:
          "We create clean, welcoming layouts with clear service pages, dentist profiles, testimonials, and strong calls-to-action that guide patients naturally.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Ready Structure",
        description:
          "We design responsive websites with SEO-friendly structure and fast loading pages to improve local visibility and patient access on all devices.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Performance Tracking & Ongoing Improvements",
        description:
          "We track appointments, user behaviour, and traffic sources to refine design and content continuously for better patient engagement and conversions.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Dentist Web Design Challenges",
    description:
      "We solve the most common issues that reduce patient trust, visibility, and appointment bookings for dental clinics.",
    items: [
      {
        title: "Outdated or Slow Websites",
        description:
          "Slow-loading and outdated websites reduce trust and cause potential patients to leave before booking an appointment.",
      },
      {
        title: "Poor Mobile Experience",
        description:
          "Non-responsive websites frustrate patients searching on mobile devices, making it harder to view services or book appointments.",
      },
      {
        title: "Unclear Treatment Information",
        description:
          "Confusing or incomplete treatment details make patients hesitant and reduce enquiries.",
      },
      {
        title: "Lack of Easy Appointment Options",
        description:
          "Missing or hard-to-find booking forms and contact options lead to lost appointment opportunities.",
      },
      {
        title: "Low Local Search Visibility",
        description:
          "Without SEO-friendly structure, dental websites fail to appear in local searches and Google Maps, missing potential patients.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Us As Your",
    headingHighlight: "Dentist Web Design Agency",
    description:
      "We design dentist websites that build trust, engage patients, and increase appointment bookings.",
    benefits: [
      {
        title: "Dental Practice–Focused Design",
        description:
          "We design websites specifically for dental clinics and oral healthcare providers, focusing on cleanliness, comfort, and professionalism.",
        icon: "map",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Patient-Friendly Website Structure",
        description:
          "Clear navigation, organised treatment pages, and simple booking options make it easy for patients to take action.",
        icon: "image",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust-Building Visuals & Branding",
        description:
          "Welcoming design, dentist profiles, clinic images, and testimonials help build confidence and long-term patient relationships.",
        icon: "calendar-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Optimised & Fast Performance",
        description:
          "Fully responsive dentist websites that load quickly and perform smoothly across all devices.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready for Local Visibility",
        description:
          "SEO-friendly structure and local optimisation help your clinic appear in nearby dental searches and Google Maps.",
        icon: "smartphone",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Analytics & Continuous Improvement",
        description:
          "We track patient behaviour and appointment enquiries to continuously improve conversions and patient acquisition.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete Dentist Web Design",
    heading: "What Does Our",
    headingHighlight: "Dentist Web Design Include?",
    description: [
      "Our Dentist Web Design Services focus on trust, usability, and patient bookings.",
      "We combine design, performance, and SEO-ready structure for long-term practice growth.",
    ],
    services: [
      "Custom Dentist Website Design",
      "Responsive & Mobile-Friendly Layouts",
      "Treatment & Service Pages",
      "Dentist Profiles & Clinic Branding",
      "Appointment Booking Integration",
      "SEO-Ready Website Structure",
      "Analytics & Performance Tracking",
    ],
    quote:
      "We help dental practices turn website visitors into long-term patients.",
    image: "/images/dentist-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Dentist Web Design?",
    ctaDescription:
      "Get a professional, patient-focused dental website built for long-term success.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is Dentist Web Design?",
        answer:
          "Dentist Web Design is the process of creating professional and patient-friendly websites for dental clinics and oral healthcare providers to attract and convert patients.",
      },
      {
        question: "Why is web design important for dental clinics?",
        answer:
          "A well-designed dental website builds trust, improves visibility, and encourages appointment bookings.",
      },
      {
        question: "Is mobile optimisation important for dentist websites?",
        answer:
          "Yes. Many patients search for dental services on mobile devices, making mobile-friendly websites essential.",
      },
      {
        question: "How long does it take to launch a dental website?",
        answer:
          "Most dental websites are completed within 4–8 weeks, depending on complexity and features.",
      },
      {
        question: "What services are included in Dentist Web Design?",
        answer:
          "Services include responsive design, treatment pages, dentist profiles, branding, booking integration, and SEO-ready structure.",
      },
      {
        question: "Can SEO improve my dental website performance?",
        answer:
          "Yes. SEO helps dental clinics appear in local searches and attract patients actively looking for care.",
      },
      {
        question:
          "Do I need a specialist web design agency for dental clinics?",
        answer:
          "Yes. Specialist agencies understand the dental industry and design websites that build trust and convert patients.",
      },
      {
        question: "How does Dentist Web Design increase patient bookings?",
        answer:
          "By providing a modern, easy-to-navigate, and mobile-friendly website with clear treatment information and booking options.",
      },
    ],
  },
};

export const lawFirmWebDesignService: ServiceDetail = {
  id: "law-firm-web-design",
  title: "Law Firm Web Design",
  description:
    "Professional web design services to help law firms and legal professionals build trust, authority, and attract more qualified client enquiries.",

  heroSection: {
    badge: "⚖️ Law Firm Web Design Services",
    heading: "Professional Web Design for",
    subheading: "Law Firms & Legal Professionals",
    description:
      "Looking to create a strong online presence that builds trust and attracts more legal clients? My Law Firm Web Design Services help law firms and legal professionals present credibility, professionalism, and authority through modern, high-quality websites. As a specialist in web design for law firms, I design custom legal websites that improve user experience, establish trust, and convert visitors into qualified client enquiries. Every website is carefully structured to reflect your legal expertise while making it easy for potential clients to contact you.",

    descriptionExtra:
      "I specialise in law firm and lawyer website design, creating fast, secure, and mobile-friendly websites tailored to legal practices. From solo lawyers to multi-practice law firms, my approach focuses on clarity, usability, and long-term digital growth.",

    highlights: [
      "✔ Trust-Building & Professional Design",
      "✔ Mobile-Friendly & Fast Performance",
      "✔ Consultation-Focused User Experience",
    ],
    image: "/images/law-firm-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Web Design Experts",
    heading: "Convert Website Visitors into",
    headingHighlight: "Legal Clients",
    description: [
      "Your website is often the first impression potential clients have of your law firm. With professional law firm web design, visitors can easily understand your services, review practice areas, and request consultations with confidence.",
      "Whether you run a solo legal practice, boutique law firm, or multi-location firm, my law firm website design solutions ensure a smooth and trustworthy user experience across all devices.",
      "By combining clean UI/UX design, mobile responsiveness, fast loading speeds, and SEO-ready structure, I build legal websites that attract, engage, and convert visitors—supporting credibility, client trust, and long-term firm growth.",
    ],
    buttonText: "Get Law Firm Web Design Help",
    image: "/images/law-firm-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Law Firm Website",
    headingHighlight: "Design Services",
    description:
      "We provide complete law firm web design services focused on credibility, clarity, and client enquiries.",
    steps: [
      {
        icon: "layout",
        title: "Professional Legal Website Design",
        description:
          "We design modern, high-impact websites for law firms and legal professionals that showcase expertise, credibility, and authority while converting visitors into clients.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "filesearch",
        title: "Tailored Website Strategy",
        description:
          "Every law firm is unique. We analyse your current website, audience, and competitors to create a strategy that highlights your strengths and meets client needs.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "image",
        title: "Clear & Credible Design",
        description:
          "We focus on clean layouts, intuitive navigation, and professional branding that clearly communicates your legal expertise and builds trust from the first click.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-First & User-Friendly",
        description:
          "With more clients browsing on mobile devices, we build responsive websites that perform flawlessly across phones, tablets, and desktops.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "zap",
        title: "Optimised for Visibility",
        description:
          "We implement SEO-friendly design, fast loading pages, and structured content so your firm appears in search results when clients need legal services.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Tracking, Insights & Improvement",
        description:
          "We set up analytics and tracking tools to monitor enquiries and user behaviour, allowing continuous optimisation for higher conversions.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Law Firm Web Design Process",
    description:
      "A strategic, trust-focused process designed to attract and convert legal clients.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Practice & Client Needs",
        description:
          "We analyse your areas of law, target clients, and expectations to design a website that communicates authority, trust, and professionalism.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Market Research",
        description:
          "We review competitor law firm websites to uncover opportunities for differentiation through stronger branding, clarity, and usability.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Strategic Design & User Experience",
        description:
          "We create professional layouts with intuitive navigation and strong calls-to-action that guide visitors toward consultations.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimized",
        description:
          "We build fully responsive websites with SEO best practices to improve local and national visibility across devices.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Tracking, Analytics & Continuous Improvement",
        description:
          "We monitor enquiries, engagement, and user behaviour to refine design and content for better conversions over time.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Law Firm Website Challenges",
    description:
      "We solve the most common issues that reduce visibility, trust, and consultation enquiries for law firms.",
    items: [
      {
        title: "Slow or Outdated Websites",
        description:
          "Outdated layouts and slow loading times reduce credibility and cause potential clients to leave before contacting your firm.",
      },
      {
        title: "Poor Mobile Usability",
        description:
          "Websites not optimised for mobile devices frustrate users and limit enquiries from clients searching on phones.",
      },
      {
        title: "Unclear Practice Area Information",
        description:
          "Vague or poorly structured service pages make it difficult for clients to understand how you can help them.",
      },
      {
        title: "Complex Navigation & Weak CTAs",
        description:
          "Confusing navigation and hidden contact options reduce consultation requests and engagement.",
      },
      {
        title: "Low Search Visibility",
        description:
          "Without SEO-ready structure, law firm websites fail to appear in relevant legal searches and miss qualified leads.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Us As Your",
    headingHighlight: "Law Firm Web Design Agency",
    description:
      "We design law firm websites that communicate authority, build trust, and convert visitors into clients.",
    benefits: [
      {
        title: "Legal Industry–Focused Design",
        description:
          "We design websites specifically for law firms and legal professionals, focusing on authority, clarity, and professionalism.",
        icon: "map",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Client Journey–Driven Structure",
        description:
          "Clear navigation, structured practice area pages, and prominent contact options make it easy for clients to reach out.",
        icon: "image",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust & Professional Branding",
        description:
          "Attorney profiles, case highlights, and testimonials reinforce credibility and showcase your firm’s strengths.",
        icon: "calendar-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Responsive & Fast Performance",
        description:
          "Fully responsive law firm websites that load quickly and perform smoothly across all devices.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready Framework",
        description:
          "SEO-friendly structure and clean architecture help your firm rank in legal searches and attract qualified enquiries.",
        icon: "smartphone",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Performance Tracking & Optimisation",
        description:
          "We track engagement and enquiries to continuously refine your website for higher conversions and growth.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete Law Firm Web Design",
    heading: "What Does Our",
    headingHighlight: "Law Firm Web Design Include?",
    description: [
      "Our Law Firm Web Design Services focus on credibility, usability, and client enquiries.",
      "We combine professional design, performance, and SEO-ready structure for long-term growth.",
    ],
    services: [
      "Custom Law Firm Website Design",
      "Responsive & Mobile-Friendly Layouts",
      "Practice Area Pages",
      "Attorney Profiles & Branding",
      "Consultation & Contact Integration",
      "SEO-Ready Website Structure",
      "Analytics & Performance Tracking",
    ],
    quote:
      "We help law firms turn website visitors into qualified legal clients.",
    image: "/images/law-firm-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Law Firm Web Design?",
    ctaDescription:
      "Get a professional, trust-focused legal website built for long-term success.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is Law Firm Web Design?",
        answer:
          "Law Firm Web Design is the process of creating professional websites for law firms and legal professionals that showcase expertise and attract new clients.",
      },
      {
        question: "Why is web design important for law firms?",
        answer:
          "A well-designed website builds trust, improves visibility, and encourages potential clients to request consultations.",
      },
      {
        question: "Is mobile optimisation important for law firm websites?",
        answer:
          "Yes. Many clients search for legal services on mobile devices, making mobile-friendly websites essential.",
      },
      {
        question: "How long does it take to launch a law firm website?",
        answer:
          "Most law firm websites are completed within 4–8 weeks, depending on complexity and content requirements.",
      },
      {
        question: "What services are included in Law Firm Web Design?",
        answer:
          "Services include responsive design, practice area pages, attorney profiles, branding, contact integration, and SEO-ready structure.",
      },
      {
        question: "Can SEO improve my law firm website performance?",
        answer:
          "Yes. SEO helps law firms appear in relevant searches and attract clients actively looking for legal services.",
      },
      {
        question: "Do I need a specialist web design agency for law firms?",
        answer:
          "Yes. Specialist agencies understand the legal industry and design websites that build credibility and convert visitors.",
      },
      {
        question: "How does Law Firm Web Design increase client enquiries?",
        answer:
          "By providing a modern, easy-to-navigate, and mobile-friendly website with clear services and contact options.",
      },
    ],
  },
};

export const seoOptimisationService: ServiceDetail = {
  id: "seo-optimisation",
  title: "SEO Optimisation",
  description:
    "Result-driven SEO Optimisation services to increase visibility, attract the right audience, and grow your business online.",

  heroSection: {
    badge: "📈 SEO Optimisation Services",
    heading: "Grow Your Business Online with",
    subheading: "Powerful SEO Solutions",
    description:
      "Want more visibility, more website visitors, and real business growth? Codexa Digital is a trusted SEO Company delivering result-focused Search Engine Optimisation Services for businesses across Australia. Our goal is simple: help your website rank higher, attract the right audience, and turn visitors into customers. As a leading SEO Agency Australia, we use ethical, data-driven SEO strategies to improve rankings, build trust, and drive long-term success. Our experienced SEO Experts focus on real results, not shortcuts.",

    descriptionExtra:
      "We focus on sustainable SEO growth using proven strategies that improve visibility, authority, and conversions. Every SEO campaign is built around your business goals and long-term success.",

    highlights: [
      "✔ Ethical & Data-Driven SEO",
      "✔ Higher Rankings & Targeted Traffic",
      "✔ Long-Term Business Growth",
    ],
    image: "/images/seo-optimisation-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to SEO Experts",
    heading: "Turn Website Traffic into",
    headingHighlight: "Real Leads",
    description: [
      "Getting traffic is not enough if it does not convert. Many businesses struggle with inconsistent leads and slow growth. With Codexa Digital’s SEO Services, your website becomes easier to find when people actively search for your products or services.",
      "Our SEO Consultants help create steady online visibility so your business can grow with confidence.",
      "With clear strategies and ongoing optimisation, you get predictable traffic and better enquiries over time.",
    ],
    buttonText: "Get SEO Help",
    image: "/images/seo-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Search Engine",
    headingHighlight: "Optimisation Services",
    description:
      "Complete SEO solutions designed to improve rankings, visibility, and conversions.",
    steps: [
      {
        icon: "filesearch",
        title: "Website SEO Audit",
        description:
          "We review your website structure, content, speed, and technical setup to identify issues and create a clear SEO roadmap.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page SEO Optimisation",
        description:
          "We optimise page titles, headings, keywords, and internal links so search engines clearly understand your website.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Authority Building",
        description:
          "We build high-quality backlinks from trusted websites to improve authority, credibility, and rankings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO Optimisation",
        description:
          "We optimise Google Business Profiles, local listings, and reviews to improve local visibility and Google Maps rankings.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "edit",
        title: "SEO Content Optimisation",
        description:
          "We create and improve service pages, blogs, and FAQs using language that matches real search behaviour.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "SEO Tracking & Reporting",
        description:
          "We track rankings, traffic, and conversions with clear reports that show measurable progress and growth.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "SEO Process",
    description:
      "A proven SEO process focused on sustainable rankings and long-term growth.",
    steps: [
      {
        icon: "search",
        title: "Keyword & Search Intent Research",
        description:
          "We research what your audience searches for and focus on high-value keywords that bring real traffic.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "Competitor SEO Analysis",
        description:
          "We analyse competitors to identify gaps, strengths, and ranking opportunities.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "zap",
        title: "Technical SEO Improvements",
        description:
          "We fix site speed, mobile usability, indexing, security, and site structure for better performance.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map",
        title: "Local & Voice Search Optimisation",
        description:
          "We optimise for Google Maps, local searches, and voice queries to improve discoverability.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "Reputation & Trust Building",
        description:
          "We support review management and trust signals to improve credibility and user confidence.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common SEO Problems We Solve",
    description:
      "We fix the most common SEO issues that stop websites from growing and converting.",
    items: [
      {
        title: "Low Search Visibility",
        description:
          "Websites that do not rank for the right keywords miss valuable traffic and leads.",
      },
      {
        title: "Wrong Keyword Targeting",
        description:
          "Targeting irrelevant or low-value keywords results in traffic that does not convert.",
      },
      {
        title: "Weak or Unoptimised Content",
        description:
          "Poor content fails to match search intent and reduces rankings and engagement.",
      },
      {
        title: "Slow Website Performance",
        description:
          "Slow-loading websites hurt rankings, user experience, and conversions.",
      },
      {
        title: "Low Conversion Rates",
        description:
          "SEO traffic without optimisation often fails to generate enquiries or sales.",
      },
    ],
    selectedIndex: 0,
  },

  whyChooseUs: {
    heading: "Why Choose Codexa Digital as Your",
    headingHighlight: "SEO Agency",
    description:
      "We focus on sustainable SEO growth using proven, ethical strategies.",
    benefits: [
      {
        title: "Smart Keyword Research",
        description:
          "Keyword strategies based on real search data and user intent.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Competitor-Driven SEO Strategy",
        description:
          "We analyse competitors to uncover opportunities and outrank them.",
        icon: "target",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local & Voice Search Optimisation",
        description:
          "Optimisation for local searches and voice queries to reach nearby customers.",
        icon: "map-pin",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Technical SEO Expertise",
        description:
          "Faster, mobile-friendly websites with strong technical foundations.",
        icon: "zap",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Content Written for Users",
        description: "Clear, helpful content designed to rank and convert.",
        icon: "edit",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Continuous Monitoring & Improvement",
        description:
          "Ongoing optimisation to maintain rankings and long-term growth.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  seoServices: {
    badge: "Complete SEO Solutions",
    heading: "What Does Our",
    headingHighlight: "SEO Optimisation Include?",
    description: [
      "Our SEO services focus on visibility, authority, and conversions.",
      "We use proven methods to drive long-term, sustainable growth.",
    ],
    services: [
      "SEO Audits & Strategy",
      "On-Page SEO Optimisation",
      "Off-Page SEO & Link Building",
      "Local SEO & Google Maps Optimisation",
      "SEO Content Creation & Optimisation",
      "Technical SEO Fixes",
      "SEO Tracking & Reporting",
    ],
    quote: "We help businesses turn search visibility into real growth.",
    image: "/images/seo-team.jpg",
    ctaHeading: "Ready to Grow with a Trusted SEO Company?",
    ctaDescription:
      "Increase visibility, traffic, and enquiries with expert SEO Optimisation.",
    ctaButton1: "REQUEST FREE SEO CONSULTATION",
    ctaButton2: "VIEW OUR RESULTS",
  },

  faqSection: {
    items: [
      {
        question: "What is Search Engine Optimisation (SEO)?",
        answer:
          "SEO is the process of improving your website so it ranks higher on search engines like Google.",
      },
      {
        question: "Why is SEO important for businesses?",
        answer:
          "SEO helps customers find your business online, increases trust, and drives organic traffic.",
      },
      {
        question: "Is local SEO necessary?",
        answer:
          "Yes. Local SEO helps your business appear in location-based searches and Google Maps.",
      },
      {
        question: "How long does SEO take to work?",
        answer:
          "Most websites see results within 3–6 months, with steady growth over time.",
      },
      {
        question: "Do you provide ongoing SEO support?",
        answer:
          "Yes. Our SEO Services include continuous optimisation, tracking, and improvement.",
      },
    ],
  },
};

export const ndisWebDesignService: ServiceDetail = {
  id: "ndis-web-design",
  title: "NDIS Web Design",
  description:
    "Professional NDIS website design and development services for providers. Build trust, improve accessibility, and increase enquiries with a clear and easy-to-use website.",

  heroSection: {
    badge: "🌐 NDIS Website Design Services",
    heading: "Get the Best NDIS Website for",
    subheading: "Your Business",
    description:
      "Are you looking to grow your NDIS provider business online? Our NDIS web design services help NDIS providers create clear, professional, and easy-to-use websites that build trust and encourage enquiries. As a dedicated NDIS marketing agency, we specialise in NDIS website design tailored to provider needs.",
    descriptionExtra:
      "We design websites that are easy to navigate, mobile-friendly, and compliant with accessibility standards. Our goal is to help your website look professional, explain your services clearly, and turn visitors into enquiries. With our professional web design team, your website becomes a strong tool for growth and participant engagement.",
    highlights: [
      "✔ Accessible & Compliance-Friendly Websites",
      "✔ Mobile & Participant-Friendly Design",
      "✔ Clear Service Pages & Enquiry Pathways",
    ],
    image: "/images/ndis-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to NDIS Web Design Experts",
    heading: "Rank Your Business with",
    headingHighlight: "Our NDIS Website Design",
    description: [
      "As an NDIS provider, consistent enquiries are essential for growth. Whether you want to expand your services, support more participants, or grow your team, an unclear or outdated website can slow your progress. With our NDIS website design services, your website becomes easy to find, easy to understand, and easy to contact.",
      "A well-designed NDIS website helps participants, families, and support coordinators quickly learn about your services and reach out with confidence. This steady online presence supports long-term growth and helps you focus on delivering quality care without worrying about missed opportunities. Our web design for NDIS providers is built to support trust, clarity, and consistent enquiries.",
    ],
    buttonText: "Get NDIS Website Help",
    image: "/images/ndis-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our NDIS Website",
    headingHighlight: "Design Services",
    description:
      "Comprehensive NDIS website design solutions that improve usability, accessibility, and participant engagement.",
    steps: [
      {
        icon: "filesearch",
        title: "NDIS Website Audit",
        description:
          "We review your current website’s layout, content, design, and technical setup. This helps us find problems and create a clear plan to improve usability, accessibility, and enquiries for your NDIS website.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Custom Website Design for NDIS Providers",
        description:
          "We design custom websites for NDIS providers that match your services and values. Each website is professional, easy to use, and built for participants and their families.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "code",
        title: "NDIS Web Development Services",
        description:
          "Our NDIS website development services make sure your site is fast, secure, and mobile-friendly. A strong technical setup helps your website run smoothly and gives visitors a better experience.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "accessibility",
        title: "Accessibility-Focused Design",
        description:
          "Websites are designed to be readable, simple to navigate, and inclusive for users with different needs and abilities.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "edit",
        title: "Content Setup for NDIS Websites",
        description:
          "We organise service pages, FAQs, and contact sections clearly so visitors understand your services quickly and feel confident reaching out.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "Performance Tracking & Support",
        description:
          "We track how your website is performing and how visitors use it. This helps us improve your website over time and support long-term success.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "NDIS Web Design Process",
    description:
      "A structured process to create professional, accessible, and effective NDIS websites that convert visitors into enquiries.",
    steps: [
      {
        icon: "users",
        title: "Provider & Audience Discovery",
        description:
          "We start by learning about your NDIS services, your participants, and your goals. This helps us design an NDIS provider website that speaks clearly to your audience. The result is a website that builds trust and supports long-term growth.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Industry Review",
        description:
          "We look at other NDIS website designs in your industry. This helps us understand what works and what does not. We find ways to improve your website so it stands out while staying professional and easy to use.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Design & User Experience Planning",
        description:
          "We plan clean layouts with simple menus and clear pages. Visitors can quickly find your services and contact details. This makes browsing easy, calm, and stress-free.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "code",
        title: "NDIS Web Development & Accessibility Setup",
        description:
          "We build your website using best practices in NDIS web development. We focus on fast loading, mobile-friendly design, strong security, and accessibility. This makes your website work well for participants, carers, and families.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle",
        title: "Testing, Launch & Ongoing Support",
        description:
          "Before launch, we test your website on different devices and browsers. After launch, we provide ongoing support and updates. This keeps your NDIS website running smoothly as your business grows.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "NDIS Website Design",
    description:
      "We specialise in NDIS website design to create accessible, professional, and participant-focused websites that generate enquiries.",
    benefits: [
      {
        title: "NDIS-Focused Expertise",
        description:
          "We specialise in website design for NDIS providers. We understand NDIS rules, accessibility needs, and what participants look for online. Our team knows how NDIS services work. This helps us build websites that feel clear, caring, and trustworthy.",
        icon: "shield-check",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Custom Designs, Not Templates",
        description:
          "Every NDIS provider website is custom-made for your business. We do not use ready-made templates or copy designs. Your website is built to match your services, values, and goals. This helps your business stand out online.",
        icon: "layout",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile & Accessibility Friendly",
        description:
          "Our professional NDIS web design in Australia works well on all devices. Your website will be easy to use on mobiles, tablets, and computers. We design with participants, carers, and families in mind. This makes your site simple for everyone to access.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Clear Content & Easy Navigation",
        description:
          "We use simple layouts and clear language. Visitors can understand your services without feeling confused. Important information is easy to find in just a few clicks. This helps people feel confident and contact you faster.",
        icon: "file-text",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Ongoing Website Support",
        description:
          "We provide regular updates and ongoing support. As your NDIS services change, your website can be updated easily. This keeps your site fresh, correct, and useful. You never feel stuck with an outdated website.",
        icon: "tool",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Results-Driven Approach",
        description:
          "Our websites are built to bring real enquiries. Clear buttons and messages guide visitors to contact you. This helps build trust and turn visits into real connections. The goal is steady growth for your NDIS business.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common NDIS Website Problems We Fix",
    description:
      "We solve issues that reduce enquiries, trust, and usability for NDIS providers.",
    items: [
      {
        title: "Unclear Website Content",
        description:
          "Many NDIS websites use complex or confusing language that visitors struggle to understand.When services are not explained clearly, participants and families feel unsure. This confusion often leads to fewer enquiries and missed opportunities.",
      },
      {
        title: "Outdated Website Design",
        description:
          "Old website designs can make an NDIS provider look unprofessional or inactive. Visitors may lose trust if the site does not look modern or well maintained. A fresh, clean design helps create a positive first impression.",
      },
      {
        title: "Poor Navigation & User Experience",
        description:
          "If visitors cannot find information easily, they leave the website quickly. Poor menus and messy layouts frustrate participants and families. Simple navigation helps users move smoothly and take action.",
      },
      {
        title: "Slow or Non-Accessible Websites",
        description:
          "Slow loading pages and poor mobile support create a bad user experience. Websites that lack accessibility exclude users with different needs. Fast, accessible websites keep visitors engaged and comfortable.",
      },
      {
        title: "Weak Enquiry & Contact Pathways",
        description:
          "Some NDIS websites make it hard for users to contact the provider. Hidden contact forms or unclear buttons reduce enquiries. Clear contact options encourage visitors to reach out with confidence.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Complete NDIS Web Solutions",
    heading: "Our NDIS Web Design Services Include",
    headingHighlight: "For Providers",
    description: [
      "Professional NDIS website design and development focused on accessibility, usability, and enquiry generation.",
      "From audits and custom design to ongoing support, we deliver websites built for long-term growth.",
    ],
    services: [
      "NDIS Website Audit & Planning",
      "Custom Website Design for NDIS Providers",
      "NDIS Web Development & Security",
      "Accessibility-Focused Design",
      "Content Setup & Organisation",
      "Performance Tracking & Analytics",
      "Ongoing Website Support & Maintenance",
    ],
    quote:
      "We create NDIS websites that are clear, accessible, and effective at generating enquiries.",
    image: "/images/ndis-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Professional NDIS Website Design?",
    ctaDescription:
      "Launch or redesign your NDIS website with a clear, professional, and accessible design tailored for participants and families.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is NDIS Website Design?",
        answer:
          "NDIS Website Design focuses on creating websites for NDIS providers that are clear, accessible, and easy to use, helping participants and families understand services and contact providers.",
      },
      {
        question: "Why is professional NDIS Web Design important?",
        answer:
          "A professional website builds trust, improves user experience, ensures accessibility, and helps attract more enquiries.",
      },
      {
        question: "Do NDIS websites need to be accessible?",
        answer:
          "Yes. Accessibility ensures websites are usable for people with different abilities and meets NDIS compliance standards.",
      },
      {
        question: "Can you redesign an existing NDIS Provider Website?",
        answer:
          "Yes. We improve layout, content, usability, and performance for existing NDIS websites.",
      },
      {
        question: "Is mobile-friendly design important for NDIS websites?",
        answer:
          "Absolutely. Our NDIS website designs are fully responsive for mobiles, tablets, and desktops.",
      },
      {
        question: "How long does it take to build an NDIS website?",
        answer:
          "Most NDIS website projects take 3–6 weeks depending on size and features.",
      },
      {
        question: "Do you offer ongoing website support?",
        answer:
          "Yes. We provide updates, maintenance, and improvements to keep your website fast, secure, and functional.",
      },
      {
        question: "Can a good website increase NDIS enquiries?",
        answer:
          "Yes. Clear, professional, and accessible websites make it easier for participants and families to contact providers, increasing enquiries and trust.",
      },
      {
        question:
          "Can Codexa Digital move my website from WordPress.com to self-hosted WordPress?",
        answer:
          "Yes. We safely transfer your website from WordPress.com to self-hosted WordPress for better performance, flexibility, and SEO opportunities.",
      },
      {
        question: "What services does Codexa Digital offer for NDIS providers?",
        answer:
          "We offer NDIS Website Design, Web Development, redesigns, accessibility improvements, content structuring, SEO support, and ongoing maintenance.",
      },
      {
        question: "How can I promote my NDIS business effectively?",
        answer:
          "Through a professional website, local SEO, Google Business Profile optimisation, and helpful content, combined with digital marketing support.",
      },
      {
        question:
          "What ongoing website support do you provide for NDIS websites?",
        answer:
          "Regular updates, security checks, speed optimisation, backups, and content support to keep your website fast, secure, and up to date.",
      },
    ],
  },
};

export const cleaningWebDesignService: ServiceDetail = {
  id: "cleaning-web-design",
  title: "Cleaning Web Design",
  description:
    "Professional cleaning company website design services. Build trust, improve visibility, and convert visitors into booked clients with a user-friendly, mobile-friendly website.",

  heroSection: {
    badge: "🌟 Cleaning Website Design Services",
    heading: "We Provide World Class",
    subheading: "Website Design for You",
    description:
      "Looking to grow your cleaning business online? A professional cleaning website design can help your business stand out, attract more clients, and turn website visitors into booked services.",
    descriptionExtra:
      "At Codexa Digital, we specialise in web design for cleaning services, creating websites that are user-friendly, professional, and optimised for conversions. Our designs showcase your services clearly, improve trust, and make it easy for potential clients to contact you. With a strong online presence, your cleaning business can reach more local customers and grow steadily over time.",
    highlights: [
      "✔ User-Friendly, Professional Cleaning Websites",
      "✔ Mobile & Desktop Optimised",
      "✔ Designed to Convert Visitors into Clients",
    ],
    image: "/images/cleaning-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Cleaning Website Experts",
    heading: "Attract More Clients with",
    headingHighlight: "a Stunning Cleaning Service Website",
    description: [
      "A well-designed cleaning service website makes it easier for potential clients to find your services. Whether you offer residential, office, or maid services, a professional website improves trust, visibility, and bookings.",
      "Our websites are designed to work on phones, tablets, and desktops, so clients can reach you anytime, anywhere.",
    ],
    buttonText: "Get Your Cleaning Website",
    image: "/images/cleaning-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Cleaning Website",
    headingHighlight: "Design Services",
    description:
      "Professional cleaning web design services to grow your business online, attract more clients, and improve bookings.",
    steps: [
      {
        icon: "layout",
        title: "Custom Cleaning Website Design",
        description:
          "We create cleaning website designs tailored to your business, services, and target audience. Every page is built to highlight your services clearly and encourage visitors to book your cleaning services. This ensures your web design for cleaning business reflects professionalism and reliability.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Friendly & Fast Websites",
        description:
          "Most clients search for cleaning services on their phones. We ensure your cleaners web design is fast, responsive, and smooth on all devices. A mobile-friendly cleaning service website keeps visitors engaged and improves search engine rankings.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO & Visibility Optimisation",
        description:
          "We optimise your website design for local search so nearby clients can find your services easily. This includes Google Maps, local listings, and targeted content for your service areas. Local SEO helps turn searches into real bookings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "edit",
        title: "Engaging Content & Service Pages",
        description:
          "We write clear and simple content for your website design & development or cleaning business pages. This helps potential clients understand your services quickly, builds trust, and encourages them to get in touch.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "tool",
        title: "Ongoing Updates & Support",
        description:
          "We provide maintenance and support to keep your website up-to-date, fast, and secure. Regular updates ensure your cleaning website always performs well and keeps attracting new clients.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "Cleaning Website Design Process",
    description:
      "We follow a structured process to create professional, user-friendly cleaning websites that convert visitors into clients.",
    steps: [
      {
        icon: "users",
        title: "Discovery & Planning",
        description:
          "We learn about your cleaning services, target audience, and business goals to create a website tailored to your needs.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Market Review",
        description:
          "We analyze competitor websites and market trends to identify opportunities to make your cleaning website stand out.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Design & User Experience",
        description:
          "We create clean layouts, simple menus, and clear service pages that make it easy for clients to understand your offerings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "code",
        title: "Development & Mobile Optimization",
        description:
          "We build fast, responsive, and secure websites that work seamlessly across devices for a smooth client experience.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle",
        title: "Launch & Ongoing Support",
        description:
          "After launch, we provide updates, maintenance, and support to ensure your cleaning website performs optimally as your business grows.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Codexa Digital for",
    headingHighlight: "Cleaning Website Design",
    description:
      "We provide professional, mobile-friendly, and conversion-optimized cleaning websites that help your business attract more clients.",
    benefits: [
      {
        title: "Custom Web Design for Cleaning Services",
        description:
          " We create websites that match your brand and showcase your cleaning services professionally. Every page is designed to highlight your unique services and build trust with potential clients. Custom design ensures your cleaning website stands out from competitors and communicates your professionalism clearly.",
        icon: "layout",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Mobile-Friendly Cleaners Web Design",
        description:
          "Our websites are fast, responsive, and easy to navigate on any device. Whether clients are on phones, tablets, or desktops, your cleaners web design provides a smooth experience. A mobile-friendly website improves engagement, reduces bounce rates, and helps clients book your services quickly.",
        icon: "smartphone",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Optimised for Local Visibility",
        description:
          " Your cleaning business website will appear in local search results, helping nearby clients find your services easily. We optimise local SEO, Google Maps listings, and location-specific content. This ensures your cleaning business reaches more customers in your service area and gets more bookings.",
        icon: "map-pin",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Engaging Content for Client",
        description:
          "We create clear, simple, and persuasive content to highlight your services and drive bookings. Service pages, blogs, and FAQs are written to answer client questions and build trust. Well-crafted content also helps improve search engine rankings for your cleaning service website.",
        icon: "file-text",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "We make sure your cleaning website stays updated, secure, and performing at its best. Regular updates, backups, and performance checks keep your site fast and reliable. Ongoing support ensures your web presence continues to attract clients and grow your business over time.",
        icon: "tool",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Cleaning Website Challenges We Solve",
    description:
      "We fix issues that reduce visibility, trust, and conversions for cleaning businesses.",
    items: [
      {
        title: "Low Online Visibility",
        description:
          "Many cleaning businesses struggle to appear in local search results. Without visibility, potential clients can’t find your services. We improve your online presence with SEO and cleaning website design so your business is easy to discover.",
      },
      {
        title: "Outdated or Unprofessional Website Design",
        description:
          "Old or poorly designed websites can make your business look unreliable. Clients are more likely to choose competitors with a professional website. Our web design for cleaning services builds trust and showcases your services clearly and professionally.",
      },
      {
        title: "Poor Mobile Experience",
        description:
          "Most clients search for cleaning services on their phones. Slow or unresponsive websites frustrate visitors and reduce bookings. We create mobile-friendly web design that works seamlessly on all devices and encourages clients to book.",
      },
      {
        title: "Confusing Content That Doesn’t Clearly Explain",
        description:
          " Content that is unclear or hard to read can confuse visitors. Clients need to quickly understand what services you offer. We write clear, engaging content for your website to inform visitors and drive bookings.",
      },
      {
        title: "Lack of Local SEO for Cleaning Services",
        description:
          "Without local SEO, your cleaning business may miss nearby clients searching for services. Your website won’t show up in local searches or Google Maps. We optimise your cleaning company website design for local visibility, helping nearby clients find and contact you.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Complete Cleaning Web Solutions",
    heading: "Our Cleaning Website Design Services Include",
    headingHighlight: "for Businesses",
    description: [
      "Professional cleaning web design and development focused on usability, mobile experience, and local visibility.",
      "From custom design and development to ongoing support, we create websites built for long-term client growth.",
    ],
    services: [
      "Custom Cleaning Website Design",
      "Mobile-Friendly & Fast Websites",
      "Local SEO Optimisation",
      "Engaging Content & Service Pages",
      "Ongoing Website Support & Maintenance",
    ],
    quote:
      "We design cleaning websites that attract clients, improve trust, and generate bookings.",
    image: "/images/cleaning-web-design-team.jpg",
    ctaHeading: "Build Your Cleaning Business Website Now!",
    ctaDescription:
      "Whether a redesign or a new website, Codexa Digital provides professional, user-friendly cleaning websites that convert visitors into clients.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "Do I need a website to start a cleaning business?",
        answer:
          "While possible to start without one, a professional website makes your business easier to find, builds trust, and helps attract clients online.",
      },
      {
        question: "What should I include on my cleaning website?",
        answer:
          "Include services, pricing (optional), contact details, client testimonials, clear call-to-action buttons, and optionally an FAQ or blog to improve SEO.",
      },
      {
        question: "How do I write content for my cleaning business?",
        answer:
          "Use simple, clear language to explain services and pricing, highlight benefits, and include relevant keywords to improve search visibility.",
      },
      {
        question: "What business structure is best for a cleaning company?",
        answer:
          "Most start as a sole proprietorship or LLC. LLCs provide liability protection, while sole proprietorships are simpler for new business owners.",
      },
      {
        question: "How much does a cleaning business website cost?",
        answer:
          "Cost depends on complexity, pages, and features. Basic websites can start from a few hundred dollars; full-featured designs cost more.",
      },
      {
        question: "How long does it take to build a cleaning website?",
        answer:
          "Most websites take 2–6 weeks depending on design, content, and client feedback.",
      },
      {
        question: "Should I include a booking system on my cleaning website?",
        answer:
          "Yes. An online booking system makes it easy for clients to schedule services and improves conversions.",
      },
      {
        question: "How can I make my cleaning website mobile-friendly?",
        answer:
          "Use responsive design, fast-loading pages, clear buttons, and simple navigation. Modern designs automatically adjust for mobile devices.",
      },
      {
        question: "Do I need SEO for my cleaning website?",
        answer:
          "Yes. SEO improves search visibility and helps nearby clients find your services on Google and Google Maps.",
      },
      {
        question: "Should I use professional photos or stock images?",
        answer:
          "Professional photos of your team and completed work build trust. Stock images are okay initially, but personal images improve credibility.",
      },
      {
        question: "How often should I update my cleaning website?",
        answer:
          "Update content at least quarterly. Add new services, testimonials, blog posts, or promotions to keep the site fresh and ranking well.",
      },
    ],
  },
};


export const doctorWebDesignService: ServiceDetail = {
  id: "doctor-web-design",
  title: "Doctor Web Design",
  description:
    "Professional doctor and healthcare website design services. Build trust, improve visibility, and convert visitors into patients with a patient-friendly, mobile-responsive website.",

  heroSection: {
    badge: "🏥 Doctor Website Design Services",
    heading: "Modern & Patient-Focused Web Design",
    subheading: "for Doctors and Healthcare Practices",
    description:
      "Looking to create a professional website that builds trust and attracts more patients? My Doctor Web Design Services help healthcare professionals establish a strong online presence with clean, modern, and patient-friendly websites.",
    descriptionExtra:
      "As a specialist in web design for doctors, I create custom medical websites designed to improve user experience, increase engagement, and convert visitors into appointment bookings. Every website is built with patient trust, clarity, and performance in mind.",
    highlights: [
      "✔ Patient-Friendly, Professional Websites",
      "✔ Mobile & Desktop Optimised",
      "✔ Designed to Convert Visitors into Patients",
    ],
    image: "/images/doctor-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Doctor Website Experts",
    heading: "Convert Visitors into Patients with",
    headingHighlight: "Professional Doctor Web Design",
    description: [
      "Your website is often the first impression patients have of your practice. With professional doctor web design, patients can easily find information, understand your services, and book appointments without confusion.",
      "Whether you run a private clinic, a medical centre, or a specialised practice, my doctor website design solutions ensure a smooth patient journey across all devices.",
    ],
    buttonText: "Get Your Doctor Website",
    image: "/images/doctor-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Doctor Website",
    headingHighlight: "Design Services",
    description:
      "Professional doctor web design services to attract patients, improve credibility, and increase appointment bookings.",
    steps: [
      {
        icon: "layout",
        title: "Tailored Website Strategy",
        description:
          "We assess your current website, target audience, and competitors to create a strategy that ensures your website reflects your professional strengths and engages patients effectively.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "palette",
        title: "Modern Design & Branding",
        description:
          "Clean layouts, professional visuals, and consistent branding convey trust and expertise, giving patients confidence in your services.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & User-Friendly",
        description:
          "Fully responsive websites function flawlessly on smartphones, tablets, and desktops. Smooth navigation ensures patients can easily find services and schedule appointments.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "search",
        title: "SEO-Optimised Structure",
        description:
          "SEO-friendly architecture, fast loading speeds, and structured content improve search engine visibility, helping patients find your practice.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Analytics & Performance Monitoring",
        description:
          "Tracking tools monitor website traffic, appointment requests, and user engagement, allowing continuous improvement of performance and patient conversion.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "Doctor Web Design Process",
    description:
      "We follow a structured process to create professional, patient-focused medical websites that convert visitors into patients.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Medical Practice & Patients",
        description:
          "We learn about your services, specialties, and patient expectations. Every page is structured to help patients feel informed, comfortable, and confident.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Medical Industry Research & Digital Positioning",
        description:
          "We analyse competitor websites and digital trends to position your website effectively while maintaining professionalism and compliance.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Clear Structure & Patient-Focused User Experience",
        description:
          "Navigation is intuitive, service pages are clear, and important actions like booking appointments are easy to find.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimised Website Design",
        description:
          "Fully responsive, fast-loading, and SEO-ready websites improve patient experience and local search visibility.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Performance Monitoring & Continuous Optimisation",
        description:
          "We integrate analytics to track engagement and continuously refine content, design, and functionality for optimal patient conversions.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us as Your",
    headingHighlight: "Doctor Web Design Agency",
    description:
      "We provide healthcare-focused, patient-centered, mobile-responsive doctor websites that build credibility and increase appointments.",
    benefits: [
      {
        title: "Healthcare-Focused Website Design",
        description:
          "Websites specifically designed for doctors, clinics, and healthcare practices, focusing on trust, clarity, and professionalism.",
        icon: "layout",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Patient-Centered Website Structure",
        description:
          "Clear service pages, doctor profiles, and appointment booking options make it easy for patients to access information and take action.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust & Credibility Through Design",
        description:
          "Professional layouts, consistent branding, and clear presentation of services establish trust and encourage appointment bookings.",
        icon: "shield",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Responsive & Fast-Loading",
        description:
          "Websites perform seamlessly across all devices, providing a smooth, reliable experience for patients.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Optimised for Local and National Visibility",
        description:
          "SEO-friendly structure and local search readiness ensure your practice appears in Google searches and Maps.",
        icon: "search",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Analytics & Continuous Improvement",
        description:
          "Tracking and analytics allow ongoing refinement of content, design, and functionality for improved patient conversion.",
        icon: "bar-chart-2",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Doctor Web Design Challenges & Our Solutions",
    description:
      "We address challenges that limit online visibility, patient engagement, and appointment bookings for healthcare practices.",
    items: [
      {
        title: "Slow-Loading Websites",
        description:
          "We build fast, optimized websites to ensure patients can access information quickly and efficiently.",
      },
      {
        title: "Outdated Layouts",
        description:
          "Modern, professional designs improve trust and present your services clearly to patients.",
      },
      {
        title: "Poor Mobile Usability",
        description:
          "Fully responsive designs provide smooth navigation across devices, enhancing patient experience.",
      },
      {
        title: "Unclear Service Information",
        description:
          "Service pages are structured to provide clarity, reduce uncertainty, and help patients make informed decisions.",
      },
      {
        title: "Lack of Online Booking Features",
        description:
          "We integrate clear appointment booking options to increase patient conversions.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Complete Doctor Web Solutions",
    heading: "Our Doctor Website Design Services Include",
    headingHighlight: "for Medical Practices",
    description: [
      "Professional doctor web design and development focused on patient experience, mobile responsiveness, and SEO visibility.",
      "From custom design to continuous support, we create websites built for long-term growth and patient engagement.",
    ],
    services: [
      "Tailored Website Strategy",
      "Modern Design & Branding",
      "Mobile-Responsive & User-Friendly",
      "SEO-Optimised Structure",
      "Analytics & Performance Monitoring",
    ],
    quote:
      "We design doctor websites that attract patients, build trust, and increase appointment bookings.",
    image: "/images/doctor-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Doctor Web Design?",
    ctaDescription:
      "Whether launching a new website or upgrading an existing one, we deliver patient-focused, professional websites that convert visitors into patients.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is Doctor Web Design?",
        answer:
          "Doctor Web Design is the process of creating professional and patient-friendly websites for doctors, clinics, and healthcare practices that showcase medical services, staff expertise, and clinic information while attracting new patients.",
      },
      {
        question: "Why is web design important for doctors?",
        answer:
          "A well-designed medical website improves online visibility, builds patient trust, and encourages appointment bookings, helping your practice grow and connect with more patients.",
      },
      {
        question: "Is mobile optimisation important for doctor websites?",
        answer:
          "Yes. Many patients search for medical services on mobile devices. A mobile-friendly website ensures smooth navigation, easy access to treatment information, and convenient appointment booking.",
      },
      {
        question: "How long does it take to launch a doctor website?",
        answer:
          "Most doctor websites are completed within 4–8 weeks, depending on the number of services, content requirements, and design complexity.",
      },
      {
        question: "What services are included in Doctor Web Design?",
        answer:
          "Doctor Web Design services typically include responsive website design, service pages, doctor profiles, branding, content creation, SEO-ready structure, and integration of appointment booking systems.",
      },
      {
        question: "Can SEO improve my doctor website performance?",
        answer:
          "Yes. SEO helps your medical practice appear in local searches, increases visibility to potential patients, and drives more appointment requests from people actively looking for healthcare services.",
      },
      {
        question: "Do I need a specialist web design agency for doctors?",
        answer:
          "Absolutely. A specialist agency understands the healthcare industry and creates websites that build credibility, engage patients, and convert visitors into booked appointments effectively.",
      },
      {
        question: "How does Doctor Web Design increase patient bookings?",
        answer:
          "By providing a modern, easy-to-navigate, and mobile-friendly website with clear service information, doctor profiles, and appointment options, more visitors are encouraged to book consultations and become long-term patients.",
      },
    ],
  },
};





export const restaurantWebDesignService: ServiceDetail = {
  id: "restaurant-web-design",
  title: "Restaurant Web Design",
  description:
    "Professional web design for restaurants, cafes, bars, and food businesses. Improve visibility, engage visitors, and convert them into loyal customers with modern, mobile-friendly websites.",

  heroSection: {
    badge: "🍽️ Restaurant Website Design Services",
    heading: "Modern & Engaging Web Design",
    subheading: "for Restaurants, Cafes & Food Businesses",
    description:
      "Looking to create a website that attracts diners and boosts reservations? My Restaurant Web Design Services help restaurants, cafes, and food businesses showcase their menu, ambiance, and unique offerings through modern, user-friendly websites.",
    descriptionExtra:
      "As a specialist in web design for restaurants, I design custom restaurant websites that improve user experience, build trust, and convert visitors into loyal customers. Every website is crafted to highlight your cuisine, brand personality, and ease of ordering or booking.",
    highlights: [
      "✔ Custom Restaurant Website Design",
      "✔ Mobile & Tablet Optimised",
      "✔ Designed to Boost Reservations and Online Orders",
    ],
    image: "/images/restaurant-web-design-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to Restaurant Website Experts",
    heading: "Convert Website Visitors into",
    headingHighlight: "Loyal Customers",
    description: [
      "Your website is often the first impression diners have of your restaurant. With professional restaurant web design, visitors can easily explore your menu, understand your offerings, view photos, and make reservations confidently.",
      "Whether you operate a casual dining spot, fine dining restaurant, or multi-location chain, my restaurant website design solutions ensure a smooth and engaging user experience across all devices.",
    ],
    buttonText: "Get Your Restaurant Website",
    image: "/images/restaurant-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Restaurant Website",
    headingHighlight: "Design Services",
    description:
      "Professional restaurant web design to attract diners, build trust, and increase reservations or online orders.",
    steps: [
      {
        icon: "search",
        title: "Restaurant Website & Design Audit",
        description:
          "Complete audit of your current website identifying design, usability, and SEO gaps, providing a roadmap for a high-performing website.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page Design & User Experience",
        description:
          "Optimisation of menu pages, headings, and service sections to make the website visually appealing, easy to navigate, and engaging.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "palette",
        title: "Branding & Visual Identity",
        description:
          "Custom layouts, colours, and graphics reflect your restaurant brand, build trust, and leave a lasting impression on diners.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Friendly & Responsive Design",
        description:
          "Fully responsive design ensures diners can view menus, locations, and make bookings easily on any device.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "search",
        title: "SEO-Ready Structure",
        description:
          "SEO-friendly website structure and speed optimisation improve local search rankings and attract new customers.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Conversion Tracking & Reporting",
        description:
          "Tracking reservations, online orders, and website traffic helps refine design, layout, and functionality for continuous improvement.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "Restaurant Web Design Process",
    description:
      "We follow a structured process to create professional, engaging, and conversion-focused restaurant websites.",
    steps: [
      {
        icon: "users",
        title: "Understanding Your Restaurant & Audience",
        description:
          "Analyse your business, menu, competitors, and target audience to create a website that connects with diners and drives reservations or orders.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Market Analysis",
        description:
          "Review other restaurant websites, menus, and digital strategies to identify gaps and opportunities for positioning your brand online.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Website Design & User Experience",
        description:
          "Clean layouts, high-quality visuals, intuitive navigation, and compelling CTAs guide visitors through your site, increasing engagement and reservations.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimized",
        description:
          "Fully responsive, fast-loading, SEO-ready websites that appear in local searches and Google Maps for maximum visibility.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Tracking, Analytics & Continuous Improvement",
        description:
          "Monitor reservations, orders, and traffic to continuously refine design, layout, and functionality for better engagement and ROI.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us as Your",
    headingHighlight: "Restaurant Web Design Agency",
    description:
      "We provide restaurant-focused, conversion-driven, mobile-responsive websites that attract diners and boost reservations.",
    benefits: [
      {
        title: "Restaurant-Focused Design Expertise",
        description:
          "Specialised web design tailored for cafes, restaurants, bars, and food businesses, highlighting visual appeal, brand identity, and usability.",
        icon: "layout",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Conversion-Driven Website Strategy",
        description:
          "Layouts guide visitors toward actions like viewing menus, making reservations, and placing online orders.",
        icon: "bar-chart-2",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local Visibility & Online Presence",
        description:
          "Optimised websites ensure strong local visibility in search results and Google Maps to attract nearby diners.",
        icon: "search",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-First & Modern Design",
        description:
          "Mobile-first responsive websites perform seamlessly across all devices and provide a smooth user experience.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready & Performance Optimised",
        description:
          "Websites are SEO-ready with fast loading and clear navigation, improving search engine visibility and attracting more customers.",
        icon: "search",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Transparent Reporting & Ongoing Support",
        description:
          "Performance tracking and ongoing optimisation ensures your restaurant website continues to grow reservations and engagement.",
        icon: "bar-chart-2",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Restaurant Web Design Challenges & Our Solutions",
    description:
      "We address challenges that limit online visibility, engagement, and reservations for restaurants and food businesses.",
    items: [
      {
        title: "Slow-Loading Websites",
        description:
          "Optimised websites ensure diners access menus and bookings quickly and efficiently.",
      },
      {
        title: "Outdated or Unprofessional Design",
        description:
          "Modern, professional designs build trust and showcase your menu and brand clearly.",
      },
      {
        title: "Poor Mobile Experience",
        description:
          "Responsive websites provide smooth navigation on all devices, improving diner experience and conversions.",
      },
      {
        title: "Unclear Menu or Offerings",
        description:
          "Content is structured to clearly explain services, menus, and specials, guiding diners to take action.",
      },
      {
        title: "No Online Booking or Ordering",
        description:
          "We integrate reservation and online ordering features to increase engagement and sales.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Complete Restaurant Web Solutions",
    heading: "Our Restaurant Website Design Services Include",
    headingHighlight: "for Cafes, Restaurants & Food Businesses",
    description: [
      "Professional restaurant web design focused on engagement, conversion, and local SEO visibility.",
      "From custom design to ongoing optimisation, we create websites built for long-term growth and customer retention.",
    ],
    services: [
      "Restaurant Website & Design Audit",
      "On-Page Design & User Experience",
      "Branding & Visual Identity",
      "Mobile-Friendly & Responsive Design",
      "SEO-Ready Structure",
      "Conversion Tracking & Reporting",
    ],
    quote:
      "We design restaurant websites that attract diners, build trust, and boost reservations and online orders.",
    image: "/images/restaurant-web-design-team.jpg",
    ctaHeading: "Ready to Grow with Restaurant Web Design?",
    ctaDescription:
      "Whether launching a new website or upgrading an existing one, we deliver professional, engaging, and conversion-focused restaurant websites.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "What is Restaurant Web Design?",
        answer:
          "Restaurant Web Design is the process of creating a professional, user-friendly website for restaurants, cafés, bars, and food businesses that showcases menus, services, and brand identity while driving reservations and online orders.",
      },
      {
        question: "Why is web design important for restaurants?",
        answer:
          "A well-designed website increases online visibility, engages potential diners, builds trust, and encourages reservations or online orders, helping your restaurant grow.",
      },
      {
        question: "Is mobile optimisation important for restaurant websites?",
        answer:
          "Yes. Most diners browse restaurant websites on mobile devices. Mobile-friendly design ensures visitors can view menus, find locations, and place orders easily from any device.",
      },
      {
        question: "How long does it take to launch a restaurant website?",
        answer:
          "Most restaurant websites are completed within 4–8 weeks with proper planning, design, and content preparation.",
      },
      {
        question: "What services are included in Restaurant Web Design?",
        answer:
          "Services typically include responsive website design, menu optimisation, branding, online reservation setup, content creation, and SEO-ready structure.",
      },
      {
        question: "Can SEO improve my restaurant website performance?",
        answer:
          "Yes. SEO helps your restaurant appear in local search results, improves visibility on Google Maps, and attracts diners actively searching for food and dining options.",
      },
      {
        question: "Do I need a specialist web design agency for restaurants?",
        answer:
          "Absolutely. A specialist agency understands the food and hospitality industry, creating websites that engage diners, reflect your brand, and convert visitors into customers effectively.",
      },
      {
        question: "How does Restaurant Web Design increase reservations and sales?",
        answer:
          "By providing an attractive, easy-to-navigate, mobile-friendly website with clear menus, contact information, and online booking options, more visitors are encouraged to make reservations, place orders, and engage with your restaurant.",
      },
    ],
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
  serviceName: string,
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
  "Laravel Website",
);
const customWebsiteService = placeholderService(
  "custom-website",
  "Custom Website",
);
const smallBusinessWebsiteService = placeholderService(
  "small-business-website",
  "Small Business Website",
);
const shopifyWebsiteService = placeholderService(
  "shopify-website",
  "Shopify Website",
);
const affiliateWebsiteService = placeholderService(
  "affiliate-website",
  "Affiliate Website",
);
const ecommerceWebsiteService = placeholderService(
  "ecommerce-website",
  "eCommerce Website",
);




const localSeoSmallBusinessService = placeholderService(
  "local-seo-small-business",
  "Local SEO for Small Business",
);

const ecommerceSeoService = placeholderService(
  "ecommerce-seo",
  "eCommerce SEO",
);
const searchEngineMarketingService = placeholderService(
  "search-engine-marketing",
  "Search Engine Marketing",
);
const contentMarketingService = placeholderService(
  "content-marketing",
  "Content Marketing",
);
const socialMediaMarketingService = placeholderService(
  "social-media-marketing",
  "Social Media Marketing",
);
const emailMarketingService = placeholderService(
  "email-marketing",
  "Email Marketing",
);

const ndisSeoService = placeholderService("ndis-seo", "NDIS SEO");
const lawFirmSeoService = placeholderService("law-firm-seo", "Law Firm SEO");
const accountingSeoService = placeholderService(
  "accounting-seo",
  "Accounting SEO",
);
const dentistSeoService = placeholderService("dentist-seo", "Dentist SEO");
const tourismSeoService = placeholderService("tourism-seo", "Tourism SEO");
const restaurantSeoService = placeholderService(
  "restaurant-seo",
  "Restaurant SEO",
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
  serviceName: string,
): ServiceDetail => {
  return (
    serviceDetailsMap[serviceId] || placeholderService(serviceId, serviceName)
  );
};
