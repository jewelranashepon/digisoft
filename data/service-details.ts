export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  meta?: {
    title: string;
    description: string;
  };
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
  // ✅ ADD THIS
  meta: {
    title: "SEO For Doctors | Local SEO for Doctors and Medical Clinics",
    description:
      "Grow your medical practice with expert SEO for doctors. We help clinics rank locally, attract patients, and increase appointments. Get in touch with us today!",
  },
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
    image: "/images/doctor-seo-hero.jpg",
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
  meta: {
    title: "Cleaning Company SEO Agency | Local SEO for House Cleaners",
    description:
      "Grow your cleaning business with expert cleaning company SEO services. We help house cleaners rank higher in local search, attract more clients, and increase bookings fast. Contact us today!",
  },

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
    image: "/images/cleaning-seo-hero.jpg",
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
  meta: {
    title:
      "Accounting Website Design | Web Design for Accounting Firms | Codexa Digital",
    description:
      "Codexa Digital provides custom web design and development services for accounting firms. We create fast, secure, and professional accounting websites that build trust and generate enquiries. Reach out to us today!",
  },

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
  meta: {
    title: "Tourism Website Design | Travel & Tourism Websites",
    description:
      "Codexa Digital specialises in travel and tourism website design, crafting engaging and high-performing websites for tour operators, travel agencies, and hospitality businesses. Get your tourism website built today!",
  },
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
  meta: {
    title:
      "Dentist Web Design Services | Dental Website Design Company | Codexa Digital",
    description:
      "Codexa Digital provides professional dental website design services for dentists and clinics. We create modern, fast, and patient-focused websites that attract new patients and help your practice grow online. Contact us today!",
  },

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
          "A successful dental website starts with understanding your clinic and services, from general dentistry to orthodontics. We design sites that build trust, address patient concerns, and make it easy for visitors to feel confident and book an appointment.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Dental Market & Competitor Research",
        description:
          "The dental industry is highly competitive online. We analyse local dental clinic websites to find gaps in design, content, and usability, then create a modern, patient-focused website that clearly differentiates your practice and builds trust.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Patient-Friendly Design & UX",
        description:
          "Dental websites should be clean, welcoming, and easy to navigate. We design professional layouts with clear services, strong calls-to-action, and highlighted credentials and testimonials—guiding patients to book appointments with confidence.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Ready Structure",
        description:
          "Most dental patients search on mobile. We build fast, fully responsive, and SEO-friendly websites that work on any device, improve local search visibility, and help patients easily find services and book appointments.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Performance Tracking & Ongoing Improvements",
        description:
          "A dental website should evolve over time. We use analytics to track traffic, patient actions, and bookings, then refine design and content to boost engagement, conversions, and long-term clinic growth.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Dentist Web Design Challenges & Our Solutions",
    description:
      "Many dental clinics struggle with website issues that reduce online visibility, patient trust, and appointment bookings. We identify and solve these challenges with modern, patient-focused web design.",
    items: [
      {
        title: "Outdated or Slow Websites",
        description:
          "Slow-loading and outdated websites create a poor first impression and reduce patient trust. We design modern, fast-loading dental websites that look professional, load quickly, and encourage visitors to stay and explore your services.",
      },
      {
        title: "Poor Mobile Experience",
        description:
          "Most patients search for dental services on their phones. Non-responsive websites make it difficult to view treatments or contact the clinic. We create fully responsive designs that work smoothly across mobile, tablet, and desktop devices.",
      },
      {
        title: "Unclear Treatment Information",
        description:
          "When treatment details are unclear or confusing, patients hesitate to book. We structure treatment pages with clear explanations, benefits, and FAQs, helping patients understand their options and feel confident choosing your clinic.",
      },
      {
        title: "Lack of Easy Appointment Options",
        description:
          "If booking is difficult or hidden, potential patients leave. We integrate clear calls-to-action, online booking forms, click-to-call buttons, and contact options that make scheduling appointments quick and effortless.",
      },
      {
        title: "Low Local Search Visibility",
        description:
          "Without SEO-friendly structure, many dental websites fail to appear in local search results and Google Maps. We build SEO-optimised websites with clean structure, fast performance, and local optimisation to attract nearby patients actively searching for dental care.",
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
          "We design websites specifically for dental clinics and oral healthcare providers. Our approach focuses on cleanliness, comfort, and professionalism—helping patients feel relaxed while clearly presenting your dental services and expertise.",
        icon: "map",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Patient-Friendly Website Structure",
        description:
          "Dental patients want quick answers and easy booking. We design dentist websites with clear navigation, organised treatment pages, and simple appointment enquiry options, making it easy for visitors to understand services and take action.",
        icon: "image",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust-Building Visuals & Branding",
        description:
          "We create dentist websites that build confidence through welcoming design, consistent branding, and thoughtful content layout. From dentist profiles to clinic images and patient testimonials, every element supports trust and long-term patient relationships.",
        icon: "calendar-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Optimised & Fast Performance",
        description:
          "Most patients search for dental services on their phones. We build fully responsive dentist websites that load quickly and function smoothly across all devices, ensuring a seamless experience from first visit to appointment request.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready for Local Visibility",
        description:
          "Our dentist web design includes SEO-friendly structure, optimised page layouts, and local search readiness. This helps your clinic appear in nearby dental searches and Google Maps, attracting patients actively looking for care.",
        icon: "smartphone",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Analytics & Continuous Improvement",
        description:
          "We monitor website traffic, appointment enquiries, and user behaviour to understand patient engagement. Using this data, we continuously improve design and content to increase conversions and improve patient acquisition over time.",
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
  meta: {
    title: "Law Firm Web Design | Web Design for Law Firms | Codexa Digital",
    description:
      "Codexa Digital builds professional, intuitive, and secure websites for law firms. Our web design services help legal practices generate quality leads, build trust, and grow online. Contact us today to start your law firm website.",
  },

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
          "An effective law firm website starts with understanding your practice and clients. We design professional, trust-focused websites that clearly present your legal services and guide visitors to contact your firm or book consultations with confidence.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Competitor & Market Research",
        description:
          "The legal industry is highly competitive online. We analyse competitor law firm websites to identify gaps and opportunities, then design a clear, professional website that differentiates your firm and builds client trust.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Strategic Design & User Experience",
        description:
          "We design clean, professional, and client-friendly law firm websites with intuitive navigation and clear calls-to-action. By highlighting your expertise, credentials, and case results, we build trust and convert visitors into clients.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimized",
        description:
          "Most clients search for legal services on mobile. We build fast, fully responsive, and SEO-optimised websites that improve search visibility and help potential clients find and contact your law firm easily.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "Tracking, Analytics & Continuous Improvement",
        description:
          "A high-performing website needs ongoing monitoring. We use analytics to track visitor behavior and inquiries, refining design and content to boost engagement, conversions, and support your law firm’s growth.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Law Firm Website Challenges & Our Solutions",
    description:
      "Many law firms face website issues that reduce online visibility, client trust, and consultation enquiries. We address these challenges with professional, client-focused web design that builds authority and drives conversions.",
    items: [
      {
        title: "Slow or Outdated Websites",
        description:
          "Outdated designs and slow-loading pages create a poor first impression and reduce credibility. We build modern, fast, and professional websites that instill confidence, keep visitors engaged, and encourage them to reach out for consultations.",
      },
      {
        title: "Poor Mobile Usability",
        description:
          "Most clients search for legal services on mobile devices. Websites that aren’t mobile-friendly frustrate users and limit inquiries. We design fully responsive sites that perform seamlessly on smartphones, tablets, and desktops, ensuring a smooth experience for every visitor.",
      },
      {
        title: "Unclear Practice Area Information",
        description:
          "When practice areas are vague or poorly organized, potential clients struggle to understand your expertise. We create structured, clear, and detailed service pages that communicate your legal capabilities and help clients feel confident in contacting your firm.",
      },
      {
        title: "Complex Navigation & Weak CTAs",
        description:
          "Confusing menus, hidden contact forms, and unclear calls-to-action reduce engagement and consultation requests. We simplify navigation, prominently display key actions, and guide visitors naturally toward booking a consultation or submitting an inquiry.",
      },
      {
        title: "Low Search Visibility",
        description:
          "Without SEO-ready structure, law firm websites fail to appear in relevant searches, losing potential clients. We implement SEO best practices, optimized content, and local search strategies to improve visibility, attract qualified leads, and grow your client base.",
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
          "We design websites specifically for law firms and legal professionals. Our approach focuses on authority, clarity, and professionalism—helping your firm present its expertise clearly while building confidence with potential clients from the first visit.",
        icon: "map",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Client Journey–Driven Structure",
        description:
          "Legal clients often visit a website during stressful situations. We design law firm websites with clear navigation, well-structured practice area pages, and prominent contact options, making it easy for visitors to find information and reach out for legal support.",
        icon: "image",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust, Credibility & Professional Branding",
        description:
          "We create law firm websites that communicate reliability through clean design, consistent branding, and strong content presentation. Attorney profiles, case highlights, and testimonials are positioned to reinforce credibility and showcase your firm’s strengths.",
        icon: "calendar-check",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Responsive & Fast Performance",
        description:
          "Many clients search for legal services on mobile devices. We build fully responsive law firm websites that load quickly and perform smoothly across all devices, ensuring accessibility and a positive user experience.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Ready Framework for Legal Visibility",
        description:
          "Our law firm web design includes SEO-friendly structure, optimised page layouts, and clean site architecture. This helps your firm appear in relevant legal searches, attract qualified enquiries, and improve online visibility.",
        icon: "smartphone",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Performance Tracking & Optimisation",
        description:
          "We track website engagement, enquiry submissions, and user behaviour to understand how visitors interact with your site. Using these insights, we continuously refine design and structure to improve conversions and long-term performance.",
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
      "Want more visibility, more website visitors, and real business growth? Codexa Digital is a trusted SEO company delivering result-focused search engine optimisation for businesses across Australia. Our goal is simple: help your website rank higher, attract the right audience, and turn visitors into customers.",
    descriptionExtra:
      "As a leading SEO agency in Australia, we use ethical, data-driven SEO strategies to improve rankings, build trust, and drive long-term success. Our experienced SEO experts focus on real results, not shortcuts. We focus on sustainable SEO growth using proven strategies that improve visibility, authority, and conversions. Every SEO campaign is built around your business goals and long-term success.",
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
      "Getting traffic is not enough if it does not convert. Many businesses struggle with inconsistent leads and slow growth. With Codexa Digital’s SEO services, your website becomes easier to find when people actively search for your products or services.",
      "Our SEO consultants help create steady online visibility so your business can grow with confidence. With clear strategies and ongoing optimisation, you get predictable traffic and better enquiries over time.",
    ],
    buttonText: "Get Your Free SEO Consultation Today!",
    image: "/images/seo-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Search Engine",
    headingHighlight: "Optimisation Services",
    description:
      "Our complete SEO services are designed to improve your website’s visibility, attract the right audience, and deliver steady, long-term growth online.",
    steps: [
      {
        icon: "filesearch",
        title: "Website SEO Audit",
        description:
          "We check your website’s structure, content, speed, and technical setup. This helps us find problems that stop your site from ranking well. We then create a clear SEO plan to improve performance.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page SEO Optimisation",
        description:
          "Our SEO specialists improve page titles, headings, keywords, and links. This helps search engines understand what your website is about. Better on-page SEO helps your pages rank higher.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Authority Building",
        description:
          "We build quality backlinks from trusted and relevant websites. This increases your website’s trust and authority online. Stronger authority helps improve search rankings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO Optimisation",
        description:
          "We optimise your Google Business Profile and local listings. This helps your business show up in local searches and Google Maps. Local SEO makes it easier for nearby customers to find you.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "edit",
        title: "SEO Content Optimisation",
        description:
          "We create and improve service pages, blogs, and FAQs. All content is written in simple, clear language. This helps attract users who are searching for your services.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "line-chart",
        title: "SEO Tracking & Reporting",
        description:
          "We track keyword rankings, website traffic, and conversions. You receive easy-to-read reports showing real progress. This helps measure growth and plan next steps.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "SEO Process",
    description:
      "We follow a simple, proven SEO process to help your website rank higher, attract the right visitors, and grow your business online.",
    steps: [
      {
        icon: "search",
        title: "Step 1: Keyword & Search Intent Research",
        description:
          "We research what your ideal customers are searching for on Google. This helps us choose high-value keywords that match real search intent, bringing visitors who are more likely to enquire or buy.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "Step 2: Competitor SEO Analysis",
        description:
          "We study your competitors’ websites, content, and rankings to find gaps and opportunities they are missing. We then build a smarter SEO plan to help you rank above them.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "zap",
        title: "Step 3: Technical SEO Improvements",
        description:
          "We fix website speed, mobile issues, indexing, and security problems. A strong technical setup improves user experience and keeps visitors on your website longer.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map",
        title: "Step 4: Local & Voice Search Optimisation",
        description:
          "We optimise your website for local searches, Google Maps, and voice queries like 'near me' to help people find your business easily when searching nearby.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "Step 5: Reputation & Trust Building",
        description:
          "We support review management and online trust signals. Positive reviews and clear information build customer confidence, improving credibility and conversion rates.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Codexa Digital as Your",
    headingHighlight: "SEO Agency?",
    description:
      "As one of the best SEO agencies in Australia, we focus on sustainable growth using proven, ethical SEO methods.",
    benefits: [
      {
        title: "Smart Keyword Research",
        description:
          "We research what real people search for before making any plan, ensuring your website attracts visitors ready to take action.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Competitor-Driven SEO Strategy",
        description:
          "We study your top competitors to uncover gaps and build a stronger strategy so your business can rank higher.",
        icon: "target",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local & Voice Search Optimisation",
        description:
          "Optimisation for Google Maps and voice queries to reach nearby customers on smart devices.",
        icon: "map-pin",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Technical SEO for Faster Websites",
        description:
          "We fix speed and mobile errors to keep visitors happy and improve search engine performance.",
        icon: "zap",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear Content Written for Users",
        description:
          "Simple and helpful content that builds trust, answers questions, and encourages enquiries.",
        icon: "edit",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Continuous Monitoring & Improvement",
        description:
          "We track results every month and refine our strategy to deliver steady growth over time.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common SEO Problems We Solve",
    description:
      "Many businesses face challenges that stop growth and reduce online trust. Our SEO experts solve these common issues effectively.",
    items: [
      {
        title: "1. Low Online Visibility",
        description:
          "Many businesses struggle to appear on Google. Without proper optimisation, your website stays hidden. A trusted SEO agency helps improve visibility and reach.",
      },
      {
        title: "2. Wrong Keyword Targeting",
        description:
          "Using broad keywords attracts the wrong audience. We focus on high-intent keywords that match what real customers search for, driving relevant traffic.",
      },
      {
        title: "3. Weak or Unclear Content",
        description:
          "Poor content fails to explain your services. We improve website content so search engines and users clearly understand your business, increasing engagement.",
      },
      {
        title: "4. Low Conversions & Enquiries",
        description:
          "Even with traffic, many websites fail to turn visitors into leads. We improve page structure and calls-to-action to turn visits into forms and sales.",
      },
      {
        title: "5. Slow or Technically Weak Websites",
        description:
          "Slow speed and mobile issues hurt rankings. We fix technical SEO problems to improve performance, user experience, and long-term growth.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Complete SEO Solutions",
    heading: "Rank Business with Us as A",
    headingHighlight: "Trusted SEO Company!",
    description: [
      "Codexa Digital is here to help your business turn search visibility into real growth.",
      "Our SEO experts deliver reliable search engine optimisation services designed to increase visibility, traffic, and business growth.",
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
        question: "Do you provide ongoing SEO support?",
        answer:
          "Yes. Our SEO services include continuous optimisation, tracking, and improvement.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO does not give instant results. Most websites start seeing improvements in traffic and rankings within 3 to 6 months. Strong and lasting results grow over time as your website gains trust and authority.",
      },
      {
        question:
          "How can I check if SEO is working for my business or product?",
        answer:
          "You can track SEO success by checking website traffic, keyword rankings, enquiries, calls, and form submissions. If more people are finding your site and taking action, your SEO is working.",
      },
      {
        question: "How do I know if my website needs SEO?",
        answer:
          "If your website gets low traffic, does not rank on Google, or brings very few enquiries, it likely needs SEO. Slow loading speed, poor mobile design, and outdated content are also signs SEO is needed.",
      },
      {
        question: "How do search engines work?",
        answer:
          "Search engines scan websites, understand the content, and store information in a database. When someone searches, the engine shows the most helpful and relevant pages based on quality, keywords, and user experience.",
      },
      {
        question: "Is SEO better than paid advertising?",
        answer:
          "SEO brings long-term traffic without paying for every click. While ads stop when the budget ends, SEO continues to deliver results over time and builds lasting trust.",
      },
      {
        question: "Does SEO work on mobile devices?",
        answer:
          "Yes. Mobile-friendly websites rank better and give users a smoother experience. Google prefers websites that work well on phones and tablets.",
      },
      {
        question: "How often should SEO be updated?",
        answer:
          "SEO should be reviewed regularly. Search engines change rules, and competitors improve their sites, so ongoing updates help maintain and grow rankings.",
      },
    ],
  },
};

export const ndisWebDesignService: ServiceDetail = {
  id: "ndis-web-design",
  title: "NDIS Web Design",
  description:
    "Professional NDIS website design and development services for providers. Build trust, improve accessibility, and increase enquiries with a clear and easy-to-use website.",
  meta: {
    title:
      "Best NDIS Website Design | Affordable NDIS Web Design | Codexa Digital",
    description:
      "Custom NDIS website design and development focused on accessibility, clear messaging, and real results for NDIS providers across Australia. Get your own professional NDIS website today!",
  },

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

  meta: {
    title: "Cleaning Company Website Design | Professional Cleaning Websites",
    description:
      "Looking for a high-converting cleaning company website? We design professional, mobile-friendly, and SEO-optimised websites that help cleaning businesses generate leads and grow faster. Get started today!",
  },
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

  meta: {
    title: "Medical & Doctor Web Design | Healthcare Website Design Experts",
    description:
      "Looking for a professional medical website? We design secure, modern, and SEO-optimised websites for doctors and healthcare practices to attract more patients and grow online. Contact us today!",
  },
  heroSection: {
    badge: "🏥 Doctor Website Design Services",
    heading: "Modern & Patient-Focused Web Design",
    subheading: "for Doctors",
    description:
      "Looking to create a professional website that builds trust and attracts more patients? My Doctor Web Design Services help healthcare professionals establish a strong online presence with clean, modern, and patient-friendly websites. As a specialist in web design for doctors, I create custom medical websites designed to improve user experience, increase engagement, and convert visitors into appointment bookings. Every website is built with patient trust, clarity, and performance in mind.",
    descriptionExtra:
      "I specialise in doctor and healthcare website design, creating fast, secure, and mobile-friendly websites that reflect your medical expertise. From solo practitioners to multi-location clinics, my approach focuses on usability, accessibility, and long-term digital growth.",
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
      "By combining modern UI/UX design, mobile responsiveness, fast loading speeds, and SEO-ready structure, I build medical websites that attract, engage, and convert patients—supporting credibility, patient trust, and long-term success.",
    ],
    buttonText: "Get Your Doctor Website",
    image: "/images/doctor-web-design-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Doctor Website",
    headingHighlight: "Design Services",
    description:
      "Build a Professional Online Presence for Your Medical Practice. We design custom websites for doctors and healthcare practices that highlight your expertise, services, and patient care. Our websites help attract new patients, build trust, and make it easy for visitors to book appointments.",
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
          "We focus on clean layouts, professional visuals, and consistent branding that convey trust and expertise. Your website will give patients confidence in your services before they even visit your clinic.",
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
          "We develop websites with SEO-friendly architecture, fast loading speeds, and structured content to improve visibility in search engines, helping patients find your practice when they need it most.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Analytics & Performance Monitoring",
        description:
          "We implement tracking and analytics tools to monitor website traffic, appointment requests, and user engagement. This allows us to continually improve the website’s performance and patient conversion rates.",
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
          "A great doctor website begins with understanding your services, specialties, and patient needs. We study your practice and patient behavior to design a site that builds trust, communicates expertise, and helps patients feel confident in choosing your care.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Medical Industry Research & Digital Positioning",
        description:
          "The healthcare field is competitive and trust-driven. We study local doctor and clinic websites to spot gaps and opportunities. Using professional design and clear messaging, we create a compliant website that stands out and builds patient trust.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Clear Structure & Patient-Focused User Experience",
        description:
          "We create doctor websites focused on clarity and simplicity. Intuitive navigation, clear service pages, and easy-to-find actions help patients access credentials, expertise, and clinic info—boosting engagement and appointment requests.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "smartphone",
        title: "Mobile-Responsive & SEO-Optimised Website Design",
        description:
          "Most patients search for doctors on mobile. We build fully responsive, fast, and SEO-friendly websites that work on any device, boost local visibility, and attract patients actively seeking care.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Performance Monitoring & Continuous Optimisation",
        description:
          "A successful medical website needs ongoing improvement. We use analytics to track traffic, appointments, and user behavior, refining design and content to boost engagement, conversions, and long-term practice growth.",
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
          "We create websites specifically for doctors, clinics, and healthcare practices. Our designs focus on professionalism, trust, and clarity—helping patients understand your services, specialties, and expertise at a glance.",
        icon: "layout",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Patient-Centered Website Structure",
        description:
          "Medical patients often seek information quickly and want reassurance. We design doctor websites with clear service pages, easy-to-find doctor profiles, and simple appointment booking options, ensuring visitors can access information and take action without confusion.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Trust & Credibility Through Design",
        description:
          "We build doctor websites that establish credibility with professional layouts, consistent branding, and clear presentation of services. Elements like doctor credentials, patient testimonials, and clinic information strengthen trust and encourage patients to book appointments.",
        icon: "shield",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Mobile-Responsive & Fast-Loading",
        description:
          "Most patients browse healthcare websites on mobile devices. We develop fully responsive doctor websites that perform seamlessly on smartphones, tablets, and desktops, providing a smooth, reliable experience for all visitors.",
        icon: "smartphone",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "SEO-Optimised for Local and National Visibility",
        description:
          "Our doctor web design includes SEO-friendly structure, optimised page layouts, and local search readiness. This ensures your practice appears in Google searches and Maps, attracting patients actively looking for healthcare services in your area.",
        icon: "search",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Analytics & Continuous Improvement",
        description:
          "We implement tracking tools to monitor website traffic, appointment requests, and user engagement. These insights allow us to continuously refine content, design, and functionality, ensuring your website consistently converts visitors into patients and grows your practice.",
        icon: "bar-chart-2",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Doctor Web Design Challenges & Our Solutions",
    description:
      "We tackle the key issues that often limit a healthcare practice’s online presence, patient engagement, and appointment bookings. Our solutions ensure your website is fast, professional, and patient-friendly.",
    items: [
      {
        title: "Slow-Loading Websites",
        description:
          "Patients expect instant access to information. Slow-loading sites frustrate visitors and reduce conversions. We optimize images, code, and server performance to create websites that load quickly and provide a seamless browsing experience.",
      },
      {
        title: "Outdated Layouts",
        description:
          "Old-fashioned or cluttered designs can make your practice appear unprofessional and hard to navigate. We create modern, clean, and visually appealing layouts that highlight your services, specialties, and credentials, building trust and credibility.",
      },
      {
        title: "Poor Mobile Usability",
        description:
          "Most patients search for doctors on mobile devices. Non-responsive websites frustrate users and increase bounce rates. Our fully responsive designs adapt perfectly to smartphones, tablets, and desktops, ensuring smooth navigation and a consistent experience on every device.",
      },
      {
        title: "Unclear Service Information",
        description:
          "If patients can’t quickly understand your services, they may look elsewhere. We structure service pages with clear headings, concise descriptions, and easy-to-read content, helping visitors make informed decisions and increasing the likelihood of appointment bookings.",
      },
      {
        title: "Lack of Online Booking Features",
        description:
          "Many medical websites fail to make booking easy, leading to lost opportunities. We integrate intuitive online booking systems, contact forms, and call-to-action buttons, simplifying the appointment process and increasing patient conversions.",
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

  meta: {
    title: "Restaurant Web Design Services | Restaurant & Cafe Website Experts",
    description:
      "Looking for a high-converting restaurant website? We design modern, fast, and mobile-friendly websites for restaurants and cafes to increase bookings and grow your brand. Start your project today!",
  },
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
        question:
          "How does Restaurant Web Design increase reservations and sales?",
        answer:
          "By providing an attractive, easy-to-navigate, mobile-friendly website with clear menus, contact information, and online booking options, more visitors are encouraged to make reservations, place orders, and engage with your restaurant.",
      },
    ],
  },
};

// Seo Service Section Data Start Here:
export const ndisSeoService: ServiceDetail = {
  id: "ndis-seo",
  title: "NDIS SEO Services",
  description:
    "Result-focused SEO services for NDIS providers to increase visibility, attract participant enquiries, and achieve long-term growth through local and strategic SEO.",

  meta: {
    title: "NDIS SEO Services | SEO for NDIS Providers in Australia",
    description:
      "Looking to attract more NDIS participants? Our specialised NDIS SEO services help providers rank higher in Google, increase enquiries, and grow sustainably. Book your free strategy call today!",
  },
  heroSection: {
    badge: "🌱 Grow Your NDIS Business with Digital Marketing",
    heading: "NDIS SEO Services",
    subheading: "Result-Focused SEO for NDIS Providers",
    description:
      "Looking to get more participant enquiries? Our NDIS SEO services help your business appear on Google when people search for support in your area, making it easier for participants and families to find you.",
    descriptionExtra:
      "As a trusted SEO agency, we provide affordable NDIS SEO and a proven strategy tailored to your specific needs. From local SEO to complete SEO marketing campaigns, our expert team improves your website visibility, drives more enquiries, and ensures steady long-term growth. With a clear, results-driven approach, we make sure your NDIS services reach the people who need them most, giving your practice a stronger online presence and sustainable success.",
    highlights: [
      "✔ Affordable NDIS SEO Services",
      "✔ Local SEO for NDIS Providers",
      "✔ Long-Term, Sustainable Growth Strategy",
    ],
    image: "/images/ndis-seo-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to NDIS SEO Experts",
    heading: "Result-Focused SEO Agency",
    headingHighlight: "for NDIS Providers",
    description: [
      "NDIS providers need to be easy to find online, and our SEO services help your business appear when participants and families search for support. As a trusted NDIS SEO marketing agency, we use a clear strategy and a strong local SEO approach to help you stand out on Google and AI search platforms.",
      "Our services ensure that the right people can find and contact your business, building trust even before the first call. Every provider is different, which is why our SEO for NDIS providers is tailored to your goals, services, and location, with affordable options to suit your needs. As an experienced SEO agency for NDIS providers, we focus on long-term growth using proven strategies that keep your business visible and help you achieve sustainable success.",
    ],
    buttonText: "Request Free NDIS SEO Consultation",
    image: "/images/ndis-seo-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our SEO Services",
    headingHighlight: "for NDIS Providers",
    description:
      "Boost your online visibility and attract more participants with our expert NDIS SEO services designed for trust, authority, and local reach.",
    steps: [
      {
        icon: "layout",
        title: "On-Page SEO for NDIS Providers",
        description:
          "We optimise your website pages, headings, keywords, internal links, and service descriptions. This ensures search engines clearly understand your NDIS services and show your site to people actively searching for support. We also improve page layouts, meta descriptions, and headings to make your website more appealing to visitors and boost engagement.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Authority Building",
        description:
          "We build strong backlinks from trusted healthcare, disability, and business websites. This improves your website’s authority and trust, helping your NDIS services rank higher and reach more participants. We also monitor backlink quality and competitor strategies to ensure your website maintains a strong online reputation.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO for NDIS Providers",
        description:
          "Local SEO is essential for NDIS businesses. We optimise your Google Business Profile, local listings, and reviews so nearby participants and carers can easily find your services. Our local SEO strategy helps you appear on Google Maps and local searches, driving more local traffic and calls to your business. We also focus on location-based keywords to attract participants in your service areas.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "file-text",
        title: "Content Optimisation for NDIS Services",
        description:
          "We create and improve service pages, blogs, and FAQs that explain your NDIS supports in clear, simple language. This builds trust, answers common questions, and helps convert visitors into enquiries. Additionally, we update content regularly to keep it relevant, accurate, and aligned with search engine trends.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Conversion Tracking & SEO Reporting",
        description:
          "We track website traffic, keyword rankings, and enquiries to monitor performance. You receive easy-to-understand reports showing what’s working and where improvements are needed. This ensures continuous growth for your NDIS business. We also provide insights on user behaviour and engagement to guide future marketing strategies.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "NDIS SEO Strategy",
    description:
      "A proven SEO process designed to attract the right participants and grow your NDIS business sustainably.",
    steps: [
      {
        icon: "search",
        title: "01. NDIS Keyword & Client Research",
        description:
          "We research what participants, carers, and families are searching for online. By targeting the right NDIS SEO keywords, we attract visitors who are more likely to contact your business. This ensures your content reaches the right audience and drives meaningful enquiries.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "02. Competitor Review for NDIS SEO",
        description:
          "We study other NDIS providers’ websites, content, and backlinks. This helps us find gaps and opportunities so your business can stand out and rank above competitors. It also helps us identify strategies that are working in your niche so we can outperform them.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "settings",
        title: "03. Technical SEO Setup",
        description:
          "We improve website speed, mobile performance, security, site structure, and indexing. Strong technical SEO helps search engines crawl your site easily and gives visitors a smooth experience. This creates a faster, safer, and more user-friendly website that keeps participants engaged.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map",
        title: "04. Local SEO & Google Business Profile Optimisation",
        description:
          "We fully optimise your Google Business Profile, manage local citations, and improve map visibility. This helps your NDIS services show up when people search nearby. Optimising for local searches ensures more calls, visits, and enquiries from participants in your area.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "star",
        title: "05. Reviews & Online Reputation Management",
        description:
          "Reviews are very important for NDIS providers. We help manage reviews and encourage positive feedback to build trust, improve rankings, and increase enquiries. A strong online reputation also enhances credibility and encourages more families to choose your services.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Codexa Digital for",
    headingHighlight: "NDIS SEO?",
    description:
      "Trusted, affordable, and results-driven SEO services designed specifically for NDIS providers.",
    benefits: [
      {
        title: "Smart NDIS Keyword Research",
        description:
          "We focus on high-intent keywords related to SEO for NDIS service providers, helping you attract the right audience. This ensures your website reaches people who are most likely to become participants or clients.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Competitor & Market Insights",
        description:
          "We analyse competitors to find ranking opportunities and create a stronger SEO plan for your NDIS business. By understanding the market, we can develop strategies that outperform competitors and capture more leads.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local & Voice Search Optimisation",
        description:
          "Our local SEO for NDIS providers ensures your services appear in Google Maps and voice searches. This makes it easier for participants and families nearby to find and contact your business quickly.",
        icon: "map-pin",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Technical SEO Excellence",
        description:
          "We fix speed, mobile, and technical issues so your website performs better on Google. A technically strong website improves user experience, boosts rankings, and keeps visitors engaged longer.",
        icon: "settings",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear, Helpful NDIS Content",
        description:
          "We write content that explains your services simply, builds trust, and encourages enquiries. Well-crafted content also answers common questions, helping families feel confident choosing your services.",
        icon: "file-text",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Tracking & Improvement",
        description:
          "We monitor results and refine your NDIS SEO marketing strategy to deliver long-term growth. Continuous improvement ensures your business stays ahead in search rankings and consistently attracts new participants.",
        icon: "bar-chart-2",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common NDIS SEO Problems & How We Fix Them",
    description:
      "Many NDIS providers face challenges when trying to grow their online presence and attract participants. As a trusted SEO agency for NDIS providers, we solve these issues using targeted keywords, strong local SEO, quality backlinks, better content, and technical improvements.",
    items: [
      {
        title: "Low Local Visibility",
        description:
          "If your business doesn’t appear in local searches, nearby participants and families may never find you, leading to fewer enquiries and missed opportunities. Improving local visibility ensures more people in your area can discover and choose your services.",
      },
      {
        title: "Wrong or Broad Keywords",
        description:
          "Generic keywords attract the wrong audience and waste time and resources. Targeted NDIS keywords help reach people actively looking for your services. Using the right keywords increases relevant traffic and improves the chances of real enquiries.",
      },
      {
        title: "Weak Online Trust",
        description:
          "Families need confidence in your services. Few reviews, inconsistent information, or unclear content can make potential participants hesitant to contact you. Building credibility online encourages more participants to engage with your services.",
      },
      {
        title: "Outdated or Unclear Content",
        description:
          "Old or confusing content fails to engage visitors. Clear, updated service pages and FAQs answer questions and encourage enquiries. Fresh and well-structured content keeps visitors informed and boosts your search rankings.",
      },
      {
        title: "Low Enquiry Rates",
        description:
          "Even with traffic, weak CTAs or confusing navigation can prevent visitors from contacting you. Optimising calls-to-action and website flow increases conversions and leads.",
      },
      {
        title: "Slow or Mobile-Unfriendly Websites",
        description:
          "Websites that load slowly or don’t work well on mobile frustrate visitors and reduce search rankings. A fast, mobile-friendly website improves user experience and encourages more enquiries.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Affordable NDIS SEO Solutions",
    heading: "Ready to Grow with",
    headingHighlight: "Affordable NDIS SEO?",
    description: [
      "Whether you are starting a new NDIS website or want to improve your current one, our team is here to help.",
      "As an affordable NDIS SEO marketing agency, we deliver clear strategies that bring real results and increased participant enquiries.",
    ],
    services: [
      "NDIS Keyword Research",
      "On-Page & Technical SEO",
      "Local SEO & Google Maps Optimisation",
      "Content Optimisation",
      "Authority Building & Backlinks",
      "SEO Reporting & Tracking",
    ],
    quote:
      "We help NDIS providers grow online visibility, trust, and enquiries with proven SEO strategies.",
    image: "/images/ndis-seo-team.jpg",
    ctaHeading: "Request a Free NDIS SEO Consultation Today",
    ctaDescription:
      "Whether starting fresh or improving an existing website, our team delivers affordable, results-driven NDIS SEO.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "1. What is NDIS SEO?",
        answer:
          "NDIS SEO is the process of optimising your website so it ranks higher for NDIS-related searches. This helps participants and carers find your services online.",
      },
      {
        question: "2. Why is SEO important for NDIS providers?",
        answer:
          "Most people search online for NDIS services. Good SEO increases visibility, trust, and enquiries.",
      },
      {
        question:
          "3. What marketing methods work best for NDIS service providers?",
        answer:
          "The best marketing methods for NDIS providers include NDIS SEO, local SEO, a clear website, and good online reviews. These help people find your services easily when they search online.",
      },
      {
        question: "4. How does SEO help NDIS providers grow online?",
        answer:
          "SEO helps your website appear higher on Google. With a good NDIS SEO strategy, more people can find your services, visit your website, and contact you.",
      },
      {
        question:
          "5. What digital marketing tips should NDIS providers follow?",
        answer:
          "NDIS providers should: Use simple language on their website, focus on local SEO for NDIS providers, keep their Google Business Profile updated, and ask happy clients for reviews. These steps help build trust and attract enquiries.",
      },
      {
        question: "6. Is local SEO important for NDIS businesses?",
        answer:
          "Yes. Local SEO for NDIS providers helps you appear in nearby searches and Google Maps.",
      },
      {
        question: "7. Do NDIS websites need to be mobile-friendly?",
        answer:
          "Yes. Mobile-friendly sites rank better and keep visitors engaged.",
      },
      {
        question: "8. How long does NDIS SEO take to work?",
        answer:
          "Most improvements appear within 3–6 months. SEO works best as a long-term strategy.",
      },
      {
        question: "9. Should NDIS providers hire a digital marketing agency?",
        answer:
          "Yes. An SEO agency for NDIS providers can manage SEO, save time, and help your business grow faster with the right strategy.",
      },
    ],
  },
};

// Digital Marketing Data Start Here
export const localSeoSmallBusinessService: ServiceDetail = {
  id: "local-seo-small-business",
  title: "Local SEO Services for Small Business",
  description:
    "Affordable and proven Local SEO services to help small businesses in Australia appear on Google, attract nearby customers, and grow steadily.",

  meta: {
    title: "Local SEO Services for Small Businesses | Codexa Digital",
    description:
      "Want more local customers? Our local SEO services help small businesses rank higher in Google Maps and local search results. Get discovered by people near you and grow faster. Start today!",
  },
  heroSection: {
    badge: "🚀 Boost Your Small Business with Local SEO",
    heading: "Local SEO Services",
    subheading: "For Small Businesses",
    description:
      "Want more local customers? Our Local SEO services help your small business appear on Google when people search for products or services nearby.",
    descriptionExtra:
      "Codexa Digital is a trusted Local SEO agency offering affordable and proven SEO for small businesses in Australia. We focus on simple and effective Local SEO strategies, including on-page optimisation, keyword targeting, and Google Business Profile setup. Our SEO services are designed to help local businesses attract nearby customers, increase website traffic, and grow steadily. With the right Local SEO for small business, you can improve visibility, build trust, and stand out in your local area.",
    highlights: [
      "✔ Affordable Small Business SEO",
      "✔ Google Business Profile Optimisation",
      "✔ Strategic Local Keyword Targeting",
    ],
    image: "/images/local-seo-hero.jpg",
  },

  talkToExperts: {
    badge: "Get 10X Traffic with Codexa Digital",
    heading: "Stand Out in Your Local Area",
    headingHighlight: "for Small Businesses",
    description: [
      "Small businesses need to be easy to find online, and our small business SEO services help you appear when customers search for local services. Using proven local SEO strategies, we help your business stand out on Google Search, Maps, and AI-powered search tools.",
      "Local SEO for small business makes it easier for nearby customers to find and contact you, bringing visitors who are more likely to enquire. Smart SEO turns searches into real phone calls, messages, and enquiries, while our long-term approach keeps your business visible and growing over time.",
    ],
    buttonText: "Book a Free Local SEO Consultation Today!",
    image: "/images/small-business-seo-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Local SEO Services",
    headingHighlight: "for Small Business",
    description:
      "Our Local SEO services help small businesses get found online by nearby customers and turn local searches into real enquiries.",
    steps: [
      {
        icon: "search",
        title: "Website & Local SEO Audit",
        description:
          "We review your website’s structure, speed, content, and technical setup in detail. This helps us find issues that affect rankings and user experience, ensuring your site is ready to compete in local search.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "Local On-Page Optimisation",
        description:
          "We improve page titles, headings, keywords, internal links, and service pages. This helps search engines understand your services and location, making your site more relevant for local searches.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Trust Building",
        description:
          "We build quality backlinks from trusted local and business websites. Off-page SEO helps your site rank higher and gain trust, increasing confidence for both search engines and customers.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Google Business Profile Optimisation",
        description:
          "We optimise your profile with accurate business details to improve visibility on Google Maps and 'near me' searches, driving more calls and visits to your physical or service location.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "file-text",
        title: "Local Content Optimisation",
        description:
          "We create service pages, blogs, and FAQs using simple language to answer customer questions. Good content builds trust and supports higher rankings in local search results.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Tracking & SEO Reports",
        description:
          "We track traffic, keyword rankings, and enquiries. You receive clear reports showing performance and insights that guide ongoing improvements for steady growth.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Guide for",
    headingHighlight: "Local SEO Strategy",
    description:
      "Helping small businesses improve local visibility and attract nearby customers with clear, easy steps.",
    steps: [
      {
        icon: "key",
        title: "01. Local Keyword Research",
        description:
          "We find the exact words people use when searching for local services online, helping you reach customers ready to contact you and ranking you for high-intent keywords.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "02. Competitor Research",
        description:
          "We analyse other local businesses to find gaps and missed opportunities in their strategy, positioning your business to rank higher and capture their market share.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "settings",
        title: "03. Technical SEO Setup",
        description:
          "We improve website speed, mobile usability, and security. This helps search engines crawl your site easily while improving user experience and customer engagement.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map",
        title: "04. Local Listings & Map Visibility",
        description:
          "We update and optimise your business listings across key platforms to ensure you appear on Google Maps and local search results when customers search nearby.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "star",
        title: "05. Reviews & Online Trust Building",
        description:
          "We help you collect and manage customer reviews. Positive reviews improve trust, local rankings, and click-through rates, making customers feel confident choosing you.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "What Makes Codexa Digital",
    headingHighlight: "Local SEO Different?",
    description:
      "A focus on attracting nearby customers who are ready to engage through proven strategies and clear reporting.",
    benefits: [
      {
        title: "Smart Local Keyword Targeting",
        description:
          "We choose keywords that real local customers use, improving your local SEO results and attracting people ready to buy or enquire.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Competitor & Market Research",
        description:
          "Studying your local area helps us build stronger strategies that outperform your competition and give you a better chance to rank higher.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local & Voice Search Optimisation",
        description:
          "Optimised for 'near me' and voice searches, capturing new local traffic from phones and smart devices that competitors often miss.",
        icon: "mic",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Technical SEO Support",
        description:
          "We fix speed and mobile issues so your site performs better on Google and provides visitors with a smooth, professional experience.",
        icon: "settings",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear and Simple Content",
        description:
          "Easy-to-read content that builds trust and encourages visitors to contact your business, specifically written for the Australian market.",
        icon: "file-text",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Improvements",
        description:
          "We track performance and make regular updates, ensuring your SEO delivers steady, long-term growth and stays competitive.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Local SEO Problems We Fix",
    description:
      "At Codexa Digital, we identify and fix the challenges that stop small businesses from ranking locally.",
    items: [
      {
        title: "Low Local Visibility",
        description:
          "Many small businesses struggle to appear in local searches. We improve your visibility so nearby customers can find you when it matters most.",
      },
      {
        title: "Wrong Keywords",
        description:
          "Using generic terms misses customers ready to buy. We target the right local search terms that your customers actually use.",
      },
      {
        title: "Poor Online Trust",
        description:
          "Low trust drives people to competitors. We build credibility with quality backlinks, review management, and engaging content.",
      },
      {
        title: "Outdated Website Content",
        description:
          "Old content confuses visitors. We update pages to accurately reflect your services, helping you rank higher and stay relevant.",
      },
      {
        title: "Few Enquiries",
        description:
          "We use targeted SEO strategies to attract the right visitors, turning local searches into calls, messages, and form submissions.",
      },
      {
        title: "Slow or Mobile-Unfriendly Sites",
        description:
          "We optimise speed and mobile layout to keep visitors happy. A fast, mobile-friendly site is essential for local rankings.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Affordable Local SEO Solutions",
    heading: "Ready to Grow with",
    headingHighlight: "Affordable Local SEO?",
    description: [
      "Whether you are starting a new website or improving an old one, Codexa Digital is here to help.",
      "Our local SEO services are affordable, clear, and built for real results for small businesses in Australia.",
    ],
    services: [
      "Local Keyword Targeting",
      "Google Business Profile Setup",
      "Local Citation Building",
      "Voice Search Optimisation",
      "Review Management Strategy",
      "Monthly SEO Performance Reports",
    ],
    quote:
      "We turn local searches into real phone calls and enquiries for small businesses.",
    image: "/images/small-business-team.jpg",
    ctaHeading: "Book a Free Local SEO Consultation Today!",
    ctaDescription:
      "Stop losing customers to your local competitors. Let us help you dominate your local search area.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "Which local SEO methods work best for small businesses?",
        answer:
          "The best local SEO methods include using local keywords, setting up Google Business Profile, getting customer reviews, and having a mobile-friendly website.",
      },
      {
        question: "How much money should a small business spend on local SEO?",
        answer:
          "Most small businesses spend a small monthly amount. The cost depends on your goals, location, and competition, but local SEO is usually affordable.",
      },
      {
        question:
          "What is the 80/20 rule in SEO, and how can small businesses use it?",
        answer:
          "The 80/20 rule means that a few SEO actions bring most results. Small businesses should focus on the most important keywords, pages, and local searches.",
      },
      {
        question: "Is local SEO worth the effort for small businesses?",
        answer:
          "Yes. Local SEO helps small businesses get more local customers, calls, and enquiries without paying for ads all the time.",
      },
      {
        question: "How does Google help tradies grow their business?",
        answer:
          "Google helps tradies by showing their business on Google Search and Maps. Tools like Google Business Profile and reviews help customers find and trust them.",
      },
      {
        question: "What steps can tradies take to improve local SEO?",
        answer:
          "Tradies can improve local SEO by updating Google Business Profile, adding service areas to their website, getting reviews, and using local keywords.",
      },
      {
        question: "What is local SEO, and why is it important for tradies?",
        answer:
          "Local SEO helps tradies appear when people search for services nearby. It brings more local customers and increases trust.",
      },
      {
        question: "How can tradies optimise their website for local SEO?",
        answer:
          "Tradies should add their location to website pages, list services clearly, show contact details, and make sure the site works well on mobile.",
      },
    ],
  },
};

export const ecommerceSeoService: ServiceDetail = {
  id: "ecommerce-seo",
  title: "eCommerce SEO Services",
  description:
    "Result-driven eCommerce SEO services to help online stores grow traffic, increase sales, and build long-term brand visibility on Google.",

  meta: {
    title: "eCommerce SEO Services | Online Store SEO Experts",
    description:
      "Struggling to grow your online store? Our data-driven eCommerce SEO services help increase traffic, improve product rankings, and drive more sales. Get your free strategy session today!",
  },
  heroSection: {
    badge: "🛒 eCommerce SEO Marketing",
    heading: "Get Your Online Store",
    subheading: "Found and Sell More",
    description:
      "Selling online is not easy when your store does not appear on Google. If shoppers cannot see your products, they will buy from competitors instead. Codexa Digital is a trusted eCommerce SEO agency in Australia helping online stores grow traffic, sales, and brand visibility.",
    descriptionExtra:
      "As a professional eCommerce SEO company, we focus on helping online businesses rank better, reach real buyers, and increase revenue. Our experienced SEO experts use safe and proven methods that support long-term growth, not quick tricks. We bring ready-to-buy customers to your store by focusing on high-intent search terms.",
    highlights: [
      "✔ High-Intent Keyword Targeting",
      "✔ Mobile-First Store Optimisation",
      "✔ Long-Term Revenue Growth",
    ],
    image: "/images/ecommerce-seo-hero.jpg",
  },

  talkToExperts: {
    badge: "Talk to eCommerce SEO Experts",
    heading: "Bring Ready-to-Buy Customers",
    headingHighlight: "to Your Store",
    description: [
      "Traffic alone does not grow an online store. Many businesses get visitors who leave without buying. Our eCommerce SEO services focus on attracting people who are already searching for products like yours.",
      "With help from a skilled eCommerce SEO consultant, your store becomes easier to find, easier to use, and easier to trust. This leads to more product views, more checkouts, and better sales over time.",
    ],
    buttonText: "Book Your Free eCommerce SEO Consultation Today!",
    image: "/images/ecommerce-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "What Our eCommerce",
    headingHighlight: "SEO Services Include",
    description:
      "Our eCommerce SEO marketing services are built to support online stores at every stage of growth.",
    steps: [
      {
        icon: "layout",
        title: "Store Performance Review",
        description:
          "We examine your store layout, product pages, loading speed, mobile experience, and technical setup to find hidden problems that block rankings and sales.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "package",
        title: "Product & Collection SEO",
        description:
          "Our eCommerce SEO specialists improve product titles, descriptions, URLs, images, and internal links so Google can rank them for the right searches.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Link & Brand Authority Building",
        description:
          "We earn links from trusted and relevant websites, increasing your store’s authority and improving rankings across product and category pages.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Location-Based eCommerce SEO",
        description:
          "Whether you sell across Australia or target specific regions, we help your store appear in the right local and national searches.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "edit",
        title: "Content That Helps Buyers Decide",
        description:
          "We optimise product guides, blogs, and FAQs with clear, simple language to help customers feel confident buying from you.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Tracking, Sales & SEO Reports",
        description:
          "We monitor keyword rankings, traffic, product clicks, and conversions, providing clear updates on your store's improvement.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "How We Improve",
    headingHighlight: "eCommerce Rankings Step by Step",
    description:
      "Our eCommerce SEO marketing process follows clear steps to deliver steady results.",
    steps: [
      {
        icon: "search",
        title: "Step 1: Buyer-Focused Keyword Research",
        description:
          "We research search terms shoppers use when they are ready to buy, focusing on high-intent keywords to bring visitors who are more likely to place orders.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "Step 2: Competitor Store Research",
        description:
          "We study top-ranking online stores in your niche to find gaps and missed opportunities, building a smarter SEO plan for your store.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "zap",
        title: "Step 3: Technical Improvements",
        description:
          "We fix slow loading pages, mobile problems, and crawl errors while improving site security and structure for a better checkout experience.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "shopping-bag",
        title: "Step 4: Optimising for Search, Shopping & Voice",
        description:
          "We optimise for Google Shopping results and voice searches like 'best product near me' to help more shoppers find you easily.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "Step 5: Building Trust Signals",
        description:
          "We support reviews, brand signals, and clear business information to improve credibility, rankings, and customer confidence.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Online Stores",
    headingHighlight: "Choose Codexa Digital",
    description:
      "We are known as the best eCommerce SEO company because we focus on real growth for online businesses.",
    benefits: [
      {
        title: "Smart Product Keyword Targeting",
        description:
          "We focus on high-intent searches that lead to sales, attracting customers who are ready to purchase products online.",
        icon: "target",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Strategy Based on Competitor Data",
        description:
          "We use data from top competitors to build stronger SEO plans that help your store rank higher in your specific industry.",
        icon: "bar-chart",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile-First Store Optimisation",
        description:
          "We optimise for mobile devices and fast loading to create a smooth shopping experience for the majority of phone-based shoppers.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Clean Technical SEO",
        description:
          "Our team fixes errors affecting speed, indexing, and usability, ensuring search engines can rank your store without technical hurdles.",
        icon: "settings",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear and Helpful Content",
        description:
          "We create simple content that explains products and benefits clearly, building trust and increasing your conversion rates.",
        icon: "file-text",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing SEO Growth",
        description:
          "SEO is not a one-time task; we track results monthly and improve strategies to ensure your store grows steadily over time.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "eCommerce SEO Challenges We Solve",
    description:
      "Many online stores struggle with the same problems. Our eCommerce SEO agency identifies and fixes them for good.",
    items: [
      {
        title: "1. Products Not Showing on Google",
        description:
          "Many stores stay hidden in search results. We improve product visibility so your store appears when customers search for products online.",
      },
      {
        title: "2. Traffic That Does Not Convert",
        description:
          "Targeting the wrong audience leads to high bounce rates. We target buyer-focused keywords and improve user experience to bring traffic that buys.",
      },
      {
        title: "3. Confusing Product Pages",
        description:
          "Unclear content drives shoppers away. We rewrite product descriptions to clearly explain features and benefits, building trust and sales.",
      },
      {
        title: "4. Low Sales Despite Visitors",
        description:
          "We improve store layout, calls-to-action, and the checkout flow to turn existing visitors into paying customers.",
      },
      {
        title: "5. Slow or Broken Store Performance",
        description:
          "Slow stores lose rankings and customers. We fix speed, mobile issues, and technical errors to ensure your store sells more.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Scale Your Online Store",
    heading: "Grow Your Store with a",
    headingHighlight: "Trusted eCommerce SEO Agency",
    description: [
      "Codexa Digital is a reliable eCommerce SEO agency helping Australian online stores grow sales and visibility.",
      "Our eCommerce SEO services are built to support long-term success and scalable revenue.",
    ],
    services: [
      "Buyer-Intent Keyword Research",
      "Product & Category Page Optimisation",
      "Google Shopping & Product Search SEO",
      "Mobile-First Technical SEO",
      "Authority Building & Backlinks",
      "Sales & Conversion Tracking",
    ],
    quote:
      "We help online businesses turn search visibility into actual sales and checkouts.",
    image: "/images/ecommerce-team.jpg",
    ctaHeading: "Book Your Free eCommerce SEO Consultation Today!",
    ctaDescription:
      "Ready to scale your online sales? Let our experts build a data-driven SEO strategy for your store.",
    ctaButton1: "GET FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What does eCommerce SEO do?",
        answer:
          "It improves product and category rankings on Google to increase sales and visibility for your online store.",
      },
      {
        question: "Is SEO important for online stores?",
        answer:
          "Yes. SEO helps customers find your products without you having to pay for every single click through advertising.",
      },
      {
        question: "How long before results appear?",
        answer:
          "Most stores see progress in 3–6 months, with stronger and more sustainable results growing over time.",
      },
      {
        question: "How can I track SEO success?",
        answer:
          "You can track success through keyword rankings, organic traffic, product clicks, and actual sales/enquiries.",
      },
      {
        question: "Does eCommerce SEO work on mobile?",
        answer:
          "Yes. In fact, it is essential. Mobile-friendly stores rank significantly better and convert more customers.",
      },
      {
        question: "Should SEO be updated regularly?",
        answer:
          "Yes. Ongoing updates are required to keep your store competitive, visible, and aligned with search engine changes.",
      },
    ],
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

export const searchEngineMarketingService: ServiceDetail = {
  id: "search-engine-marketing",
  title: "Search Engine Marketing (SEM) Services",
  description:
    "Increase visibility, traffic, and sales through smart paid and organic search strategies designed for fast and measurable results.",

  meta: {
    title:
      "Trusted Search Engine Marketing Agency | SEM Experts | Codexa Digital",
    description:
      "Drive more leads and clicks with our expert search engine marketing services. We create high-performing SEM campaigns that help your business reach the right customers fast. Contact Codexa Digital today!",
  },
  heroSection: {
    badge: "🚀 SEM & Paid Search Experts",
    heading: "Grow Faster Online with Powerful",
    subheading: "Search Engine Marketing",
    description:
      "Getting customers online is harder than ever. If your business does not appear on Google at the right time, customers choose competitors instead. Codexa Digital is a reliable search engine marketing agency in Australia helping businesses increase visibility, traffic, and sales through smart paid and organic strategies.",
    descriptionExtra:
      "As a professional search engine marketing company, we focus on bringing fast and measurable results. Our experienced SEM experts use proven, ethical methods to help businesses reach the right audience and grow steadily, not just temporarily. We combine strategic ad placements with data-driven insights to ensure your budget delivers the highest possible return.",
    highlights: [
      "✔ Fast & Measurable Results",
      "✔ High-Intent Audience Targeting",
      "✔ Scalable Paid Search Strategies",
    ],
    image: "/images/sem-marketing-hero.jpg",
  },

  talkToExperts: {
    badge: "Reach Ready-to-Buy Customers",
    heading: "Reach Customers Who Want",
    headingHighlight: "Your Service",
    description: [
      "Online success is not about traffic alone. Many businesses get clicks but no enquiries or sales. Our search engine marketing services focus on reaching users who are actively searching for your products or services right now.",
      "With support from a skilled search engine marketing consultant, your ads and search presence become more targeted, more visible, and more effective. This leads to better clicks, stronger leads, and a higher return on investment for your marketing spend.",
    ],
    buttonText: "Book Your Free SEM Consultation Today!",
    image: "/images/sem-consultant-expert.jpg",
  },

  seoServicesDetails: {
    heading: "What Our Search Engine",
    headingHighlight: "Marketing Services Cover",
    description:
      "Our SEO and SEM services are designed to support businesses at every stage of growth, from local startups to national brands.",
    steps: [
      {
        icon: "monitor",
        title: "Account & Website Review",
        description:
          "We review your website, ad accounts, landing pages, and tracking setup to find issues that reduce performance and increase ad costs.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "key",
        title: "Keyword & Campaign Setup",
        description:
          "Our SEM consultants select high-intent keywords and build structured campaigns to ensure your ads appear for searches that bring real business value.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "edit-3",
        title: "Ad Copy & Quality Score Improvement",
        description:
          "We create clear, simple ad messages that attract clicks. Better ads improve quality scores, reduce costs, and increase conversion rates.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "globe",
        title: "Local & National SEM Targeting",
        description:
          "Whether you target one city or all of Australia, our SEM firm helps your business show up in the right locations to improve lead quality.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "layout",
        title: "Landing Page Optimisation",
        description:
          "We improve landing page content so visitors understand your offer quickly, turning more clicks into calls, forms, and sales.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "pie-chart",
        title: "Tracking, Reports & Optimisation",
        description:
          "We track costs and performance, providing easy-to-read reports that show exactly what is working and where to improve.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "SEM Process",
    description:
      "Our search engine marketing approach follows clear steps to deliver steady and scalable results for your business.",
    steps: [
      {
        icon: "target",
        title: "Step 1: Intent-Based Keyword Research",
        description:
          "We research search terms people use when they are ready to take action, focusing on keywords that bring enquiries rather than just traffic.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "search",
        title: "Step 2: Competitor Advertising Research",
        description:
          "We analyse competitor ads and landing pages to find gaps they miss, allowing us to build a smarter plan to outperform them.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "settings",
        title: "Step 3: Technical & Tracking Setup",
        description:
          "We fix tracking issues and conversion errors to ensure every click is measured correctly, allowing for better data-driven decisions.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Step 4: Search, Display & Smart Campaign Optimisation",
        description:
          "We optimise search ads, remarketing, and smart campaigns while supporting voice and mobile search behaviour for maximum reach.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "Step 5: Trust, Relevance & Conversion Signals",
        description:
          "We improve ad relevance and trust signals to increase customer confidence, click-through rates, and overall conversions.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Businesses Choose",
    headingHighlight: "Codexa Digital for SEM",
    description:
      "We are recognised as a trusted SEM company because we focus on real business results and measurable ROI.",
    benefits: [
      {
        title: "High-Intent Keyword Targeting",
        description:
          "We target keywords that show strong buying intent, bringing the right audience directly to your sales funnel.",
        icon: "mouse-pointer",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Data-Driven Campaign Strategy",
        description:
          "We use competitor insights and performance data to improve results while actively reducing wasted budget.",
        icon: "database",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile-First SEM Campaigns",
        description:
          "Our campaigns are fully optimised for phones and tablets, ensuring a smooth experience for mobile searchers.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Clean Campaign Structure",
        description:
          "We organise ad groups and bids carefully to save money and boost performance through better account management.",
        icon: "layers",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear & Simple Ad Messaging",
        description:
          "We craft easy-to-understand messages that encourage users to take action and improve click-through rates.",
        icon: "message-square",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Continuous SEM Improvement",
        description:
          "We monitor, test, and refine your campaigns regularly to ensure they perform better over time as data accumulates.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common SEM Problems We Fix",
    description:
      "Many businesses face the same challenges with paid search. Our SEM agency identifies and solves them efficiently.",
    items: [
      {
        title: "1. Ads Not Appearing on Google",
        description:
          "Poor setup or low quality scores can hide your ads. We improve visibility and placement to ensure you reach the right audience.",
      },
      {
        title: "2. Clicks Without Results",
        description:
          "Getting clicks without leads wastes your budget. We focus on high-intent targeting to bring visitors who actually want to buy.",
      },
      {
        title: "3. Confusing Ads or Landing Pages",
        description:
          "Unclear messaging makes people leave. We improve copy and page clarity to boost engagement and total conversions.",
      },
      {
        title: "4. High Ad Costs, Low Returns",
        description:
          "Poorly structured campaigns increase costs. We optimise bids and keywords to reduce waste and improve your ROI.",
      },
      {
        title: "5. Poor Tracking & Reporting",
        description:
          "Without proper tracking, it's impossible to see what works. We fix analytics so you can make informed growth decisions.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Scale with Paid Search",
    heading: "Partner with Us as Your",
    headingHighlight: "Search Engine Marketing Agency",
    description: [
      "Codexa Digital is a results-focused search engine marketing agency in Australia helping businesses grow through paid search.",
      "Our SEM services approach is built for long-term success and immediate impact on your bottom line.",
    ],
    services: [
      "Google Ads (Search & Display)",
      "Remarketing & Retargeting",
      "Keyword Intent Research",
      "Landing Page Optimisation",
      "Conversion Tracking Setup",
      "Competitor Ad Analysis",
    ],
    quote:
      "We turn your marketing budget into a powerful tool for customer acquisition and growth.",
    image: "/images/sem-team-collaboration.jpg",
    ctaHeading: "Book Your Free SEM Consultation Today!",
    ctaDescription:
      "Stop wasting ad spend. Let our SEM experts build a campaign that actually delivers leads and sales.",
    ctaButton1: "GET FREE SEM AUDIT",
    ctaButton2: "TALK TO AN EXPERT",
  },

  faqSection: {
    items: [
      {
        question: "What is Search Engine Marketing (SEM)?",
        answer:
          "SEM uses paid ads to help your business appear on Google search results quickly, targeting specific keywords and audiences.",
      },
      {
        question: "Is SEM better than SEO?",
        answer:
          "SEM delivers faster results, while SEO builds long-term organic growth. Using both together usually provides the best overall visibility.",
      },
      {
        question: "How soon can SEM show results?",
        answer:
          "Most campaigns show results within days once the ads go live and are approved by the search platform.",
      },
      {
        question: "How do I track SEM success?",
        answer:
          "You can track success through clicks, cost-per-lead, total sales, and your return on ad spend (ROAS).",
      },
      {
        question: "Does SEM work on mobile devices?",
        answer:
          "Yes. In fact, the majority of SEM traffic today comes from mobile users, so we optimise all campaigns for phones.",
      },
      {
        question: "Should SEM campaigns be updated regularly?",
        answer:
          "Yes. Regular updates, bid adjustments, and ad testing help improve performance and reduce your overall costs.",
      },
      {
        question: "Is Search Engine Marketing the Same as SEO or Paid Search?",
        answer:
          "SEM mainly focuses on paid search ads (PPC). SEO is different because it improves organic rankings without paying for clicks. A complete strategy uses both.",
      },
      {
        question: "Is Google Ads Part of Search Engine Marketing?",
        answer:
          "Yes. Google Ads is the most popular tool for SEM, allowing businesses to show ads at the top of search results and on partner websites.",
      },
      {
        question: "How Do I Choose a Search Engine Marketing Agency?",
        answer:
          "Look for a trusted agency with proven results. Ensure they offer keyword research, transparent tracking, and ongoing optimisation by experienced consultants.",
      },
    ],
  },
};

export const contentMarketingService: ServiceDetail = {
  id: "content-marketing",
  title: "Content Marketing Services",
  description:
    "Grow your brand and build trust with expert content marketing strategies designed to improve visibility, engagement, and conversions.",

  meta: {
    title: "Content Marketing Agency | Content Strategy & SEO Experts",
    description:
      "Looking to grow through content? We create SEO-focused blogs, website copy, and strategic content marketing campaigns that attract traffic, build authority, and convert customers. Get started today!",
  },
  heroSection: {
    badge: "✍️ Expert Content Marketing",
    heading: "Grow Your Brand with",
    subheading: "Expert Content Marketing",
    description:
      "Getting your message seen online is harder than ever. If your content doesn’t reach the right audience, customers choose competitors instead. Codexa Digital is a trusted content marketing agency in Australia, helping businesses improve visibility, engagement, and conversions through smart content strategies.",
    descriptionExtra:
      "As a professional marketing company, we focus on creating valuable and measurable results. Our experienced content marketing experts use proven methods to build trust, attract the right audience, and support long-term growth. We don't just write words; we craft stories that resonate with your customers and drive action.",
    highlights: [
      "✔ Strategic SEO-Optimised Content",
      "✔ Increased Brand Authority",
      "✔ Conversion-Driven Messaging",
    ],
    image: "/images/content-marketing-hero.jpg",
  },

  talkToExperts: {
    badge: "Reach Your Audience",
    heading: "Reach the Audience with",
    headingHighlight: "Content About Your Brand",
    description: [
      "Traffic alone does not create growth. Many businesses attract visitors who leave without taking action. Our content marketing services focus on reaching users who are genuinely interested in your products or services.",
      "With help from a skilled content marketing consultant, your website, blogs, social posts, and guides become more engaging, visible, and effective. This leads to more clicks, stronger leads, and a higher return on investment.",
    ],
    buttonText: "Book Your Free Content Marketing Consultation Today!",
    image: "/images/content-strategy-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "What Our Content",
    headingHighlight: "Marketing Services Include",
    description:
      "Our digital content marketing strategy covers all aspects of growth, ensuring your brand stays relevant and authoritative.",
    steps: [
      {
        icon: "search",
        title: "Content Audit & Strategy Review",
        description:
          "We check your website, blog, and social media to find what is working. A clear review helps us fix gaps and increase engagement and results.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "edit-3",
        title: "Content Creation & SEO Optimisation",
        description:
          "Our experts create blogs, guides, and service pages using targeted keywords. This helps your content rank higher on Google and attracts the right people.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "award",
        title: "Brand Authority & Link Building",
        description:
          "We create helpful content that other trusted websites want to link to. This improves your brand’s trust and boosts your search rankings.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "share-2",
        title: "Social & Digital Promotion",
        description:
          "Our team shares your content on social media and email to expand your reach. More reach means more website visitors and brand awareness.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "mouse-pointer",
        title: "Conversion-Focused Landing Pages",
        description:
          "We improve landing pages with clear messages and simple buttons, helping turn casual readers into qualified leads and customers.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart",
        title: "Tracking, Reporting & Optimisation",
        description:
          "We track interactions and engagement. Our consultants review results and make improvements to ensure your content performs better over time.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "Content Marketing Process",
    description:
      "Our process helps turn ideas into content that people read, trust, and act on.",
    steps: [
      {
        icon: "users",
        title: "Step 1: Audience & Keyword Research",
        description:
          "We find out what your customers search for online, focusing on topics and keywords they care about to bring visitors who are ready to take action.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "trending-up",
        title: "Step 2: Competitor Content Analysis",
        description:
          "We study competitor content to find missed opportunities. This analysis helps your content stand out and perform better in your industry.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "file-text",
        title: "Step 3: Content Planning & Creation",
        description:
          "Our team creates blogs, guides, and visuals in simple language. We educate readers and guide them toward taking the next step with your brand.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "globe",
        title: "Step 4: SEO & Distribution Optimisation",
        description:
          "We optimise content for SEO rankings and share it across social and email channels, ensuring it reaches the widest possible audience.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle",
        title: "Step 5: Engagement & Authority Building",
        description:
          "We build trust through brand mentions and backlinks, making your business look reliable and professional to both users and search engines.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Businesses Choose",
    headingHighlight: "Codexa Digital",
    description:
      "We are recognised as content marketing experts because we focus on real results and sustainable growth for online businesses.",
    benefits: [
      {
        title: "High-Value Keyword & Topic Targeting",
        description:
          "We focus on topics your audience is already searching for, reaching readers exactly when they want to learn or buy.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Data-Driven Content Strategy",
        description:
          "As a trusted Australian agency, we use data and competitor analysis to see what works best before we start writing.",
        icon: "database",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile & Digital Optimisation",
        description:
          "We ensure your content loads fast and looks perfect on mobile phones, keeping visitors happy and improving search rankings.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Structured & Consistent Content",
        description:
          "We keep your blogs and pages organised and easy to follow, making your business information simple to find and digest.",
        icon: "layers",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clear & Engaging Messaging",
        description:
          "Our experts write in clear language that explains your benefits without confusing jargon, building immediate trust with readers.",
        icon: "message-circle",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Optimisation",
        description:
          "We regularly update old content and improve underperforming pages to ensure your business grows steadily over time.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Content Marketing Challenges We Solve",
    description:
      "We fix the problems that prevent content from bringing in results for your business.",
    items: [
      {
        title: "1. Content That Doesn’t Rank",
        description:
          "Poorly optimised blogs stay hidden. Our SEO strategies improve visibility so your audience can find your helpful guides easily.",
      },
      {
        title: "2. Traffic That Doesn’t Convert",
        description:
          "Visitors often leave without acting. We create conversion-driven content that guides visitors to sign up or buy.",
      },
      {
        title: "3. Weak or Confusing Messaging",
        description:
          "Complicated content drives people away. We craft simple, persuasive messaging that helps anyone understand your services.",
      },
      {
        title: "4. Low Brand Authority",
        description:
          "It's hard to trust a business without quality content. We produce high-value pieces that position your brand as a leading industry expert.",
      },
      {
        title: "5. Poor Tracking & Results",
        description:
          "Without measurement, you're guessing. We track engagement and ROI to show what works and continuously improve your campaigns.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Scale with Expert Content",
    heading: "Partner with a",
    headingHighlight: "Trusted Content Marketing Agency",
    description: [
      "Codexa Digital is a results-focused content marketing agency in Australia helping businesses grow through clear, engaging, and optimised content.",
      "Our content strategies are built to support long-term brand authority and sustainable organic growth.",
    ],
    services: [
      "Blog Writing & Management",
      "SEO Content Strategy",
      "Whitepapers & E-books",
      "Landing Page Copywriting",
      "Social Media Content",
      "Email Marketing Content",
    ],
    quote:
      "Helpful content is the bridge that turns a stranger into a loyal customer.",
    image: "/images/content-team-working.jpg",
    ctaHeading: "Book Your Free Content Marketing Consultation Today!",
    ctaDescription:
      "Ready to build your brand authority? Let our experts craft a content strategy that works for you.",
    ctaButton1: "REQUEST FREE AUDIT",
    ctaButton2: "VIEW OUR PACKAGES",
  },

  faqSection: {
    items: [
      {
        question: "What is content marketing?",
        answer:
          "Content marketing involves creating and sharing valuable blogs, guides, and posts to attract, educate, and convert your target audience.",
      },
      {
        question: "Is content marketing better than SEO?",
        answer:
          "SEO helps you rank in search results, while content marketing engages and converts those visitors. Together, they are the key to long-term growth.",
      },
      {
        question: "How soon can I see results?",
        answer:
          "Content marketing usually shows measurable results in 3–6 months, as search engines index your content and your brand authority grows.",
      },
      {
        question: "How do I measure success?",
        answer:
          "We track metrics like organic traffic, social shares, time-on-page, leads generated, and total conversions.",
      },
      {
        question: "Does content marketing work on mobile devices?",
        answer:
          "Yes. Mobile-friendly content is essential for reaching readers where they are and is a major ranking factor for Google.",
      },
      {
        question: "Should content marketing strategies be updated regularly?",
        answer:
          "Yes. Updating older content keeps it relevant for users and helps maintain high search rankings as information changes.",
      },
      {
        question: "How do I choose a content marketing agency?",
        answer:
          "Look for an agency with proven results, a clear data-driven strategy, strong SEO skills, and a commitment to ongoing optimisation.",
      },
    ],
  },
};

export const socialMediaMarketingService: ServiceDetail = {
  id: "social-media-marketing",
  title: "Social Media Marketing Services",
  description:
    "Grow your brand awareness, engagement, and sales across major platforms with data-driven social media marketing and professional management.",

  meta: {
    title: "Social Media Marketing Agency Australia | SMM Experts",
    description:
      "Looking to grow your brand on social media? Our Australia-based SMM experts create high-converting ad campaigns, engaging content, and data-driven strategies that deliver real business results. Get started today!",
  },
  heroSection: {
    badge: "📱 Social Media Marketing That Helps Your Business Grow",
    heading: "Social Media Marketing",
    subheading: "Agency in Australia",
    description:
      "Getting noticed online is not easy anymore. If your business is not active and visible on social media, customers will choose other brands. Codexa Digital is a trusted Social Media Marketing Agency in Australia helping businesses grow awareness, engagement, and sales across major platforms.",
    descriptionExtra:
      "As an experienced advertising digital marketing agency, we focus on real and measurable results. Our skilled marketing consultants use proven strategies to help brands connect with the right audience and grow steadily through social media. Likes and followers alone do not grow a business; we focus on meaningful impact.",
    highlights: [
      "✔ Strategic Social Media Management",
      "✔ High-ROI Paid Advertising",
      "✔ Engagement & Brand Growth",
    ],
    image: "/images/social-media-marketing-hero.jpg",
  },

  talkToExperts: {
    badge: "Connect with Your Audience",
    heading: "Connect with the Right",
    headingHighlight: "Audience on Social Media",
    description: [
      "Many brands post often but see no real results. Our social media marketing services focus on reaching people who are genuinely interested in your business and ready to engage.",
      "With help from a professional social media marketing consultant, your social pages become more active, more trusted, and more effective. This leads to better engagement, more enquiries, and higher returns from your marketing efforts.",
    ],
    buttonText: "Book Your Free Social Media Consultation Today!",
    image: "/images/social-media-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "What Our Social Media",
    headingHighlight: "Marketing Services Include",
    description:
      "Our SMM services are designed to support businesses of all sizes, including targeted social media marketing for small business.",
    steps: [
      {
        icon: "search",
        title: "Audit & Strategy Planning",
        description:
          "We review your social pages, content, and ads to see what is working. A clear social media marketing strategy helps guide better results and growth.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "edit-3",
        title: "Content Creation & Management",
        description:
          "Our team plans and creates posts, reels, and stories. With professional social media management, your brand stays active and consistent across all platforms.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "megaphone",
        title: "Social Media Advertising",
        description:
          "We manage paid campaigns on Facebook and Instagram. Our social media advertising focuses on reaching the right audience and increasing leads and sales.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "user-plus",
        title: "Brand Growth & Engagement",
        description:
          "We help grow your followers the right way, focusing on real engagement, comments, and shares rather than fake numbers.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "target",
        title: "Lead & Conversion Focus",
        description:
          "We optimise content and ads to encourage action. Clear messages and strong calls-to-action help turn casual viewers into loyal customers.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Tracking, Reporting & Improvement",
        description:
          "We track reach, clicks, and sales. Our marketing consultants review results and improve campaigns regularly for better performance.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Simple",
    headingHighlight: "Social Media Marketing Process",
    description:
      "We follow a clear and easy process to help brands grow on social media step by step.",
    steps: [
      {
        icon: "users",
        title: "Step 1: Find Your Audience & Platforms",
        description:
          "We look at where your customers spend time online and choose the platforms that match your business, ensuring your posts show up where your audience is active.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "trending-up",
        title: "Step 2: Check Competitors & the Market",
        description:
          "We study what your competitors are doing to find opportunities they miss. Knowing the market makes your strategy stronger and smarter.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "calendar",
        title: "Step 3: Plan Content & Post Regularly",
        description:
          "We create easy-to-follow content calendars with posts that teach, entertain, and show your brand clearly. Good planning keeps people coming back.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Step 4: Run Ads & Promote Smartly",
        description:
          "We create ads targeting users most likely to respond. We monitor and adjust these ads to save money and get more clicks, leads, and sales.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "message-circle",
        title: "Step 5: Engage & Build Trust",
        description:
          "We reply to comments and messages quickly. This makes your business look active and reliable, turning followers into paying customers.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Businesses Choose",
    headingHighlight: "Codexa Digital",
    description:
      "We are known as one of the best social media marketing agencies because we focus on real growth, not guesswork.",
    benefits: [
      {
        title: "Smart Audience Targeting",
        description:
          "We focus on people most likely to buy, aiming for quality engagement that leads to more sales, not just high numbers.",
        icon: "target",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Data-Based Strategy",
        description:
          "As a professional advertising digital marketing agency, we make decisions using real data to avoid wasted spend.",
        icon: "database",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile-First Social Media Campaigns",
        description:
          "Our content is designed for mobile users so posts look perfect and get more clicks on phones and tablets.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Clear & Consistent Branding",
        description:
          "We use the same style, colors, and tone on all posts so people recognise and trust your business across all platforms.",
        icon: "brush",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Simple & Engaging Content",
        description:
          "We avoid confusing jargon. Our posts are easy to read and fun, encouraging people to take immediate action.",
        icon: "smile",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Growth & Optimisation",
        description:
          "We check results every month and adjust ads and targeting to ensure your business grows steadily over time.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Social Media Marketing Problems We Fix",
    description:
      "Many businesses struggle with social media. Our social media marketing agency helps solve these common issues.",
    items: [
      {
        title: "1. Low Reach and Visibility",
        description:
          "If posts aren't seen, they bring no value. Our management improves reach using proven methods so more people share your content.",
      },
      {
        title: "2. Followers but No Sales",
        description:
          "Followers don't always equal growth. We focus on real actions that turn followers into enquiries and customers.",
      },
      {
        title: "3. Unclear or Confusing Content",
        description:
          "Confusing posts drive users away. We create simple, clear content so users understand your message in seconds.",
      },
      {
        title: "4. High Ad Spend, Low Results",
        description:
          "Poor targeting wastes your budget. Our well-planned advertising campaigns improve ROI and lower wasted spend.",
      },
      {
        title: "5. No Tracking or Insights",
        description:
          "Without tracking, you can't see what works. We provide clear reports so you can make informed business decisions.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Scale Your Social Presence",
    heading: "Work with a Trusted",
    headingHighlight: "Social Media Marketing Agency",
    description: [
      "Codexa Digital is a results-driven Social Media Marketing Agency in Australia helping businesses grow through smart content, ads, and engagement.",
      "Our SMM services approach is built for long-term success and consistent brand growth.",
    ],
    services: [
      "Full Social Media Management",
      "Paid Social Media Advertising",
      "Content Strategy & Planning",
      "Monthly Performance Reporting",
      "Brand Growth & Engagement",
      "Competitor Social Analysis",
    ],
    quote:
      "Social media is about building a community around your brand, not just broadcasting ads.",
    image: "/images/social-media-team.jpg",
    ctaHeading: "Book Your Free Social Media Marketing Consultation Today!",
    ctaDescription:
      "Ready to turn your social media into a growth engine? Let our experts build the right plan for your brand.",
    ctaButton1: "REQUEST FREE AUDIT",
    ctaButton2: "TALK TO AN EXPERT",
  },

  faqSection: {
    items: [
      {
        question: "What is social media marketing?",
        answer:
          "It uses social platforms like Facebook and Instagram to promote your brand, connect with customers, and grow sales.",
      },
      {
        question: "Is social media marketing good for small businesses?",
        answer:
          "Yes. Social media marketing for small business helps reach highly targeted customers with much lower budgets than traditional ads.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most businesses see a boost in engagement within weeks and stronger results in leads and sales within 2–3 months.",
      },
      {
        question: "Do you manage ads and content?",
        answer:
          "Yes. Our full social media management includes professional content creation, regular posting, and paid ad management.",
      },
      {
        question: "Does social media marketing work on mobile?",
        answer:
          "Absolutely. Most users browse social media on mobile, so all our campaigns are designed to be mobile-friendly.",
      },
      {
        question: "Do I need a social media marketing consultant?",
        answer:
          "A consultant helps create the right plan, target the right audience, and improve results, saving you time and money.",
      },
      {
        question:
          "What is the difference between social media management and advertising?",
        answer:
          "Management is about organic posting and engaging with followers. Advertising uses paid budgets to reach new people faster. Both work together for growth.",
      },
    ],
  },
};

export const emailMarketingService: ServiceDetail = {
  id: "email-marketing",
  title: "Email Marketing Services",
  description:
    "Nurture leads, retain customers, and drive consistent sales with data-driven and AI-powered email marketing strategies.",

  meta: {
    title:
      "Email Marketing Services | Professional Email Marketing & Newsletters",
    description:
      "Boost engagement and conversions with our professional email marketing services. From strategy and content creation to automation and newsletters, we help turn subscribers into loyal customers.",
  },
  heroSection: {
    badge: "📧 AI-Powered Email Marketing",
    heading: "Data-Driven & AI-Powered",
    subheading: "Email Marketing Strategies",
    description:
      "Looking to nurture leads, retain customers, and drive consistent sales through email? Our Email Marketing Services help businesses build strong customer relationships, increase engagement, and convert subscribers into loyal clients.",
    descriptionExtra:
      "As a results-focused digital marketing agency, we deliver tailored email marketing solutions designed to boost open rates, clicks, and long-term revenue growth. We specialise in strategic email marketing, helping brands communicate effectively with their audience using personalised, data-driven campaigns. From automated sequences to AI-powered segmentation, our approach focuses on measurable performance and real business impact.",
    highlights: [
      "✔ AI-Powered Content Optimisation",
      "✔ Automated Sales Funnels",
      "✔ Advanced Audience Segmentation",
    ],
    image: "/images/email-marketing-hero.jpg",
  },

  talkToExperts: {
    badge: "Grow with Professional Email",
    heading: "Nurture Prospects and",
    headingHighlight: "Retain Customers",
    description: [
      "Email remains one of the most powerful digital marketing channels. With professional email marketing strategies, your message reaches the right audience at the right time—driving engagement, trust, and conversions.",
      "Whether you run an eCommerce store, service-based business, or multi-location brand, our email marketing strategies ensure consistent communication and brand visibility. We help your business turn email subscribers into active customers—supporting growth, stability, and long-term success.",
    ],
    buttonText: "Request a Free Email Marketing Consultation Today",
    image: "/images/email-strategy-experts.jpg",
  },

  seoServicesDetails: {
    heading: "Email Marketing Services",
    headingHighlight: "for Business Growth",
    description:
      "Complete email solutions designed to improve deliverability, engagement, and long-term revenue.",
    steps: [
      {
        icon: "search",
        title: "Audit & Strategy Planning",
        description:
          "We conduct a complete audit of campaigns, lists, and flows to identify engagement gaps and deliverability issues, forming a clear roadmap for growth.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "mail",
        title: "Campaign Creation & Optimisation",
        description:
          "We create and optimise newsletters and promotional emails, focusing on subject lines and CTAs to ensure higher open and click-through rates.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "Audience Segmentation",
        description:
          "We segment your list based on user behaviour and buying journeys. Personalised messaging ensures relevance, trust, and higher conversion rates.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "refresh-cw",
        title: "Automation & Email Funnels",
        description:
          "We build automated sequences like welcome emails, abandoned cart reminders, and lead nurturing funnels to convert subscribers consistently.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "cpu",
        title: "AI-Powered Optimisation",
        description:
          "Using AI tools, we analyse performance to optimise send times and content relevance, ensuring your campaigns align with modern user trends.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart",
        title: "Performance Tracking",
        description:
          "We track revenue impact, conversions, and open rates. Detailed reporting allows for continuous optimisation and measurable business results.",
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  },

  processSection: {
    heading: "Our Strategic",
    headingHighlight: "Email Marketing Process",
    description:
      "A five-step approach to turning email subscribers into loyal brand advocates.",
    steps: [
      {
        icon: "file-search",
        title: "01 Audience Research & List Analysis",
        description:
          "We analyse subscriber lists, customer behaviour, and buying intent to ensure we target the people most likely to engage and convert.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "layout",
        title: "02 Campaign Planning & Content Strategy",
        description:
          "We design a clear strategy for newsletters, announcements, and retention campaigns that feel relevant to the customer rather than just promotional.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "smartphone",
        title: "03 Email Design & Technical Optimisation",
        description:
          "We optimise layouts for mobile responsiveness and inbox compatibility to avoid spam filters and provide a smooth reading experience.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "04 Automation & Personalised Funnels",
        description:
          "We build automated welcome and post-purchase follow-ups that nurture relationships and build trust without manual effort.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "line-chart",
        title: "05 Tracking & Continuous Optimisation",
        description:
          "Using data-driven insights, we refine subject lines and timing to ensure ongoing improvement in sustainable growth and ROI.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us as Your",
    headingHighlight: "Email Marketing Agency?",
    description:
      "We combine ethical communication with advanced AI technology to deliver measurable results.",
    benefits: [
      {
        title: "Strategy-Driven Expertise",
        description:
          "Tailored email services focused on building long-term customer relationships and brand trust.",
        icon: "award",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Advanced Data Strategies",
        description:
          "Campaigns built around audience behaviour and conversion tracking for consistent improvements.",
        icon: "database",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Targeted & Scalable Coverage",
        description:
          "Optimised for both small local lists and large-scale global outreach with high deliverability.",
        icon: "trending-up",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "AI-Powered Optimisation",
        description:
          "We use AI to perfect subject lines and send times, keeping you ahead of email platform algorithms.",
        icon: "zap",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Full Lifecycle Marketing",
        description:
          "Support for lead nurturing, retention, and re-engagement flows to ensure sustainable growth.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
      {
        title: "Transparent Reporting",
        description:
          "Detailed reports focusing on measurable ROI, engagement metrics, and actual revenue generated.",
        icon: "pie-chart",
        color: "from-emerald-500 to-emerald-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Email Marketing Challenges & Our Solutions",
    description:
      "We address common email marketing bottlenecks to restore engagement and drive sales.",
    items: [
      {
        title: "Low Open Rates",
        description:
          "We solve this using AI-optimised subject lines and improved sender reputation to ensure your emails actually get seen.",
      },
      {
        title: "Poor Segmentation",
        description:
          "We fix irrelevant messaging by categorising your audience based on behaviour, interests, and their specific buyer journey.",
      },
      {
        title: "Deliverability Issues",
        description:
          "We clean your lists and fix technical authentication settings to ensure your emails land in the inbox, not the spam folder.",
      },
      {
        title: "Lack of Automation",
        description:
          "We replace manual effort with automated workflows that nurture leads 24/7, improving consistency and customer trust.",
      },
      {
        title: "High Unsubscribe Rates",
        description:
          "We improve content value and relevance, ensuring that subscribers stay engaged with your brand over the long term.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Consistent Sales via Email",
    heading: "Ready to Grow with",
    headingHighlight: "Strategic Email Marketing?",
    description: [
      "Whether launching your first campaign or improving existing efforts, our services are designed for long-term results.",
      "Work with experienced specialists who understand how to engage audiences through strategic and ethical email communication.",
    ],
    services: [
      "Email List Management & Cleaning",
      "Automated Drip Campaigns",
      "AI-Powered Content Optimisation",
      "Lead Nurturing & Sales Funnels",
      "Newsletter Design & Management",
      "E-commerce Retention Flows",
    ],
    quote:
      "Email is the only channel where you truly own the connection with your audience.",
    image: "/images/email-campaign-team.jpg",
    ctaHeading: "Ready to Boost Your Email ROI?",
    ctaDescription:
      "Start building stronger relationships with your customers today through data-driven campaigns.",
    ctaButton1: "REQUEST FREE EMAIL AUDIT",
    ctaButton2: "VIEW CASE STUDIES",
  },

  faqSection: {
    items: [
      {
        question: "What is Email Marketing?",
        answer:
          "Email marketing is the process of sending targeted messages to subscribers to build relationships, promote products or services, and encourage customer engagement and conversions.",
      },
      {
        question: "Why is email marketing important for businesses?",
        answer:
          "Email marketing helps businesses stay connected with their audience, build trust, and generate consistent leads and sales with a high return on investment.",
      },
      {
        question: "Does email marketing still work today?",
        answer:
          "Yes. Email marketing remains one of the most effective digital marketing channels when combined with personalisation, automation, and data-driven strategies.",
      },
      {
        question: "How long does email marketing take to show results?",
        answer:
          "Many businesses see engagement and conversion improvements within the first few weeks, with stronger results developing over time through continuous optimisation.",
      },
      {
        question: "Can AI improve email marketing performance?",
        answer:
          "Yes. AI-powered tools analyse subscriber behaviour, optimise subject lines and send times, and improve content relevance for better engagement and conversions.",
      },
      {
        question: "Do I need a professional email marketing agency?",
        answer:
          "Working with an agency ensures strategic planning, better deliverability, compliance, and higher-performing campaigns compared to unmanaged manual efforts.",
      },
      {
        question: "How does email marketing increase sales and enquiries?",
        answer:
          "By sending relevant, timely, and personalised messages, email marketing nurtures leads, re-engages previous customers, and encourages direct actions such as purchases or bookings.",
      },
    ],
  },
};

export const accountingSeoService: ServiceDetail = {
  id: "accounting-seo",
  title: "Accounting SEO Services",
  description:
    "Comprehensive, results-driven SEO services for accounting firms designed to improve search engine visibility, attract qualified clients, and generate consistent, long-term growth through strategic and industry-focused optimisation.",

  heroSection: {
    badge: "📊 Real Results from Accounting SEO Services",
    heading: "Real Results from Accounting",
    subheading: "SEO Services",
    description:
      "Looking to grow your accounting firm online and attract more qualified clients? Codexa Digital’s Accounting SEO services help accountants increase search engine rankings, drive targeted website traffic, and convert visitors into paying clients.",
    descriptionExtra:
      "At Codexa Digital, we specialise in SEO for accounting and financial service firms. Our proven, industry-specific SEO strategies focus on ranking your website higher on Google, strengthening online credibility, and delivering a steady flow of qualified enquiries. Every optimisation decision is guided by data, client intent, and long-term business growth goals.",
    highlights: [
      "✔ Industry-Specific Accounting SEO Strategies",
      "✔ Qualified Lead Generation for Accounting Firms",
      "✔ Sustainable, Long-Term Organic Growth",
    ],
    image: "/images/accounting-seo-hero.jpg",
  },

  talkToExperts: {
    badge: "Secure a Steady Stream of Accounting Clients",
    heading: "Predictable Client Growth",
    headingHighlight: "for Accounting Firms",
    description: [
      "As an accounting firm owner, consistent client enquiries are essential for hiring staff, expanding services, and planning long-term growth. Relying on referrals alone can lead to unpredictable results and stalled progress.",
      "With Codexa Digital’s Accounting SEO services, your website becomes a reliable client acquisition channel. By improving visibility in Google search results, your firm is discovered regularly by businesses and individuals actively searching for accounting services, creating stable and predictable growth.",
    ],
    buttonText: "Request Free Accounting SEO Consultation",
    image: "/images/accounting-seo-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Accounting SEO Services",
    headingHighlight: "for Sustainable Firm Growth",
    description:
      "End-to-end Accounting SEO services designed to strengthen visibility, authority, and lead generation for accounting firms of all sizes.",
    steps: [
      {
        icon: "search",
        title: "Accounting Website Audit",
        description:
          "We conduct a detailed audit of your accounting website, reviewing structure, content quality, technical performance, and SEO foundations. This audit identifies gaps, weaknesses, and missed opportunities, forming a clear roadmap to improve rankings, usability, and lead generation.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "On-Page SEO for Accountants",
        description:
          "We optimise page titles, meta descriptions, headings, service pages, keywords, and internal links. This ensures search engines clearly understand your accounting services and match your website with users actively searching for accountants.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "Off-Page SEO & Authority Building",
        description:
          "We build high-quality backlinks from trusted finance, accounting, and business websites. This increases your firm’s authority, strengthens trust signals, and improves rankings in competitive accounting search results.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map-pin",
        title: "Local SEO for Accounting Firms",
        description:
          "Local SEO optimisation includes Google Business Profile setup, citation management, review optimisation, and local keyword targeting to help nearby clients find your firm quickly and confidently.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "file-text",
        title: "Content Optimisation for Accounting Services",
        description:
          "We create and refine service pages, blogs, and FAQs using clear, professional language. Content is aligned with real client searches to attract leads, answer questions, and establish trust in your expertise.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Conversion Tracking & Performance Reporting",
        description:
          "We track website traffic, rankings, enquiries, and user behaviour. Clear, easy-to-understand reports show progress, identify opportunities, and guide ongoing SEO improvements.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "Accounting SEO Process",
    description:
      "A structured, proven SEO process designed to increase online visibility, attract qualified accounting clients, and support long-term firm growth.",
    steps: [
      {
        icon: "search",
        title: "Client & Keyword Analysis",
        description:
          "We research high-intent accounting keywords based on client needs, location, and search intent. This ensures your SEO strategy targets searches most likely to generate qualified enquiries and strong ROI.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "users",
        title: "Competitor Accounting SEO Review",
        description:
          "We analyse competitor websites, backlink profiles, content strategies, and rankings. This reveals gaps, opportunities, and winning tactics to help your firm outperform competitors.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "settings",
        title: "Technical SEO Optimisation",
        description:
          "We optimise site speed, mobile responsiveness, security, site architecture, structured data, and indexing. Strong technical SEO improves rankings and creates a better experience for visitors.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "map",
        title: "Local SEO & Google Business Optimisation",
        description:
          "We optimise your Google Business Profile, manage citations, enhance map visibility, and encourage reviews so your firm dominates local accounting searches.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "star",
        title: "Reputation & Review Management",
        description:
          "We help manage online reviews, respond professionally, and encourage positive feedback. A strong reputation builds trust, improves rankings, and increases enquiries.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Codexa Digital Is the Best Choice for",
    headingHighlight: "Accounting SEO",
    description:
      "Specialist SEO expertise built specifically for accounting firms that want measurable growth and long-term success.",
    benefits: [
      {
        title: "Advanced Keyword Research & Strategy",
        description:
          "We target high-value accounting keywords aligned with real client intent to attract qualified leads, not just traffic.",
        icon: "search",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Competitor Analysis & Opportunity Identification",
        description:
          "In-depth competitor research uncovers ranking opportunities and helps your firm stay ahead in competitive markets.",
        icon: "users",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Local & Voice Search Optimisation",
        description:
          "Optimised for local searches and voice queries so your firm appears in Google Maps, local results, and smart devices.",
        icon: "map-pin",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Technical SEO & Website Performance",
        description:
          "We ensure fast loading, mobile-friendly, secure websites that search engines and users both prefer.",
        icon: "settings",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Content Optimisation & Client Engagement",
        description:
          "Professional accounting content educates clients, answers questions, and builds confidence in your services.",
        icon: "file-text",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Performance Tracking & Continuous Improvement",
        description:
          "Ongoing monitoring, reporting, and optimisation ensure sustained growth and measurable SEO success.",
        icon: "bar-chart-2",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Accounting SEO Challenges & How We Solve Them",
    description:
      "Accounting firms often face challenges that limit online visibility, engagement, and client growth. We identify and fix these issues with targeted SEO solutions.",
    items: [
      {
        title: "Low Local Visibility",
        description:
          "Optimising local listings and Google Maps ensures nearby clients can easily find your firm.",
      },
      {
        title: "Targeting the Wrong Keywords",
        description:
          "Focused keyword research attracts users actively searching for accounting services, not irrelevant traffic.",
      },
      {
        title: "Weak Online Authority",
        description:
          "High-quality backlinks and reputation signals strengthen credibility and improve rankings.",
      },
      {
        title: "Outdated or Unclear Content",
        description:
          "Clear, updated content improves engagement, trust, and search engine performance.",
      },
      {
        title: "Low Conversion Rates",
        description:
          "Optimised CTAs, structure, and user journeys turn visitors into enquiries.",
      },
      {
        title: "Technical SEO Issues",
        description:
          "Fixing speed, mobile, and technical problems improves usability and ranking potential.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Accounting SEO Solutions",
    heading: "Ready to Grow Your Accounting Firm with",
    headingHighlight: "Accounting SEO?",
    description: [
      "Targeted, efficient, and data-driven SEO strategies built specifically for accounting firms.",
      "Focused on increasing visibility, attracting qualified clients, and delivering measurable business growth.",
    ],
    services: [
      "Accounting Website Audit",
      "On-Page & Technical SEO",
      "Local SEO & Google Maps Optimisation",
      "Accounting Content Creation & Optimisation",
      "Authority Building & Link Acquisition",
      "SEO Reporting & Performance Tracking",
    ],
    quote:
      "We help accounting firms build predictable growth with proven, industry-focused SEO strategies.",
    image: "/images/accounting-seo-team.jpg",
    ctaHeading: "Request a Free Accounting SEO Consultation Today",
    ctaDescription:
      "Whether launching a new website or scaling an established firm, our Accounting SEO experts are ready to help you grow.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What is SEO for accountants?",
        answer:
          "SEO for accountants is the process of optimising an accounting firm’s website to rank higher in search results, attract targeted traffic, and generate qualified client enquiries.",
      },
      {
        question: "Why is SEO important for accounting firms?",
        answer:
          "Most clients search online for accounting services. SEO improves visibility, builds trust, and helps your firm consistently attract new clients.",
      },
      {
        question: "How can SEO benefit accountants in their marketing efforts?",
        answer:
          "SEO increases organic traffic, supports brand credibility, and generates qualified leads that complement other marketing channels.",
      },
      {
        question:
          "What is digital marketing, and why is it important for accountants?",
        answer:
          "Digital marketing includes SEO, PPC, content marketing, email campaigns, and social media. It helps accounting firms grow online visibility and attract clients efficiently.",
      },
      {
        question: "Can Codexa Digital handle social media for accountants?",
        answer:
          "Yes. We manage platforms like LinkedIn, Facebook, and Instagram to support brand visibility and complement SEO strategies.",
      },
      {
        question: "Is local SEO important for accounting firms?",
        answer:
          "Absolutely. Local SEO ensures your firm appears in Google Maps and nearby searches, attracting clients in your service area.",
      },
      {
        question: "Do accounting websites need to be mobile-friendly for SEO?",
        answer:
          "Yes. Mobile-friendly websites provide better user experience and rank higher in Google search results.",
      },
      {
        question: "How long does it take to see results from Accounting SEO?",
        answer:
          "Most firms see noticeable improvements within 3–6 months, with continued growth through ongoing optimisation.",
      },
    ],
  },
};

// Website Development Services
export const laravelWebsiteService: ServiceDetail = {
  id: "laravel-website",
  title: "Laravel Website Development Services",
  description:
    "Professional Laravel Website Development Services focused on building secure, scalable, and high-performance web applications that support long-term business growth and stability.",

  heroSection: {
    badge: "🚀 Laravel Website Development Services",
    heading: "Custom Laravel",
    subheading: "Web Applications for Growth",
    description:
      "Looking for professional Laravel Website Development Services to build a secure, scalable, and high-performance web application? We help startups, businesses, and enterprises create custom Laravel solutions designed for reliability, performance, and long-term success.",
    descriptionExtra:
      "As a specialised Laravel development company, we build custom Laravel web applications with clean code, strong security, and scalable architecture. Every project is carefully planned to ensure maintainability, performance optimisation, and future-ready system design.",
    highlights: [
      "✔ Custom Laravel Web Application Development",
      "✔ Secure, Scalable & High-Performance Architecture",
      "✔ Clean Code & Long-Term Maintainability",
    ],
    image: "/images/laravel-website-hero.jpg",
  },

  talkToExperts: {
    badge: "Build Scalable Laravel Applications",
    heading: "Future-Ready Laravel Solutions",
    headingHighlight: "for Growing Businesses",
    description: [
      "Businesses often struggle with slow, insecure, or poorly structured web applications that limit growth and increase maintenance costs. Choosing the right framework and development approach is critical for long-term success.",
      "With our Laravel Website Development Services, your application is built to scale from day one. We focus on performance, security, and flexibility so your Laravel application supports growth instead of holding it back.",
    ],
    buttonText: "Request Free Laravel Consultation",
    image: "/images/laravel-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Laravel Website Development",
    headingHighlight: "Services",
    description:
      "End-to-end Laravel development services designed to deliver secure, scalable, and maintainable web applications for modern businesses.",
    steps: [
      {
        icon: "layout",
        title: "Custom Laravel Web Application Development",
        description:
          "We build fully custom Laravel web applications tailored to your business requirements. Each solution is designed with scalability, performance, and clean architecture in mind.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "database",
        title: "Backend Architecture & Database Optimisation",
        description:
          "We design robust backend systems, optimise databases, and ensure efficient data handling for high performance and reliability.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "link",
        title: "API Development & Third-Party Integrations",
        description:
          "Secure APIs and seamless third-party integrations connect your Laravel application with external services, tools, and platforms.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "shield",
        title: "Application Security & Best Practices",
        description:
          "We implement Laravel security best practices including authentication, authorization, and data protection to reduce risks.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "bar-chart-2",
        title: "Performance Optimisation & Scalability",
        description:
          "We optimise speed, caching, and server performance to ensure your Laravel application can handle growth and high traffic.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "settings",
        title: "Maintenance & Ongoing Support",
        description:
          "Post-launch support includes updates, optimisation, and scaling assistance to keep your Laravel application running smoothly.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Laravel Development Process",
    description:
      "A structured Laravel development process focused on business goals, performance, and long-term scalability.",
    steps: [
      {
        icon: "search",
        title: "Requirement Analysis & Planning",
        description:
          "We analyse your business goals, target users, and technical requirements to design the right Laravel architecture from the start.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "code",
        title: "Clean & Secure Development",
        description:
          "Our Laravel developers build the application using clean code standards, secure practices, and scalable system design.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "activity",
        title: "Testing & Quality Assurance",
        description:
          "We thoroughly test performance, security, and functionality to ensure a reliable and stable Laravel application.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "rocket",
        title: "Deployment & Optimisation",
        description:
          "After launch, we monitor performance, optimise speed, and support ongoing improvements as your business grows.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "Laravel Website Development",
    description:
      "Specialist Laravel expertise focused on performance, scalability, and long-term business value.",
    benefits: [
      {
        title: "Laravel-Focused Development Expertise",
        description:
          "We specialise exclusively in Laravel development, ensuring deep framework knowledge and best practices.",
        icon: "code",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Business-Driven Solutions",
        description:
          "Every Laravel application is built around real business goals, not just technical features.",
        icon: "briefcase",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Scalable & Secure Architecture",
        description:
          "We design systems that grow with your business while maintaining strong security standards.",
        icon: "shield",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Clean Code & Maintainability",
        description:
          "Well-structured code makes future updates easier, faster, and more cost-effective.",
        icon: "settings",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Performance-Optimised Applications",
        description:
          "Fast-loading, optimised Laravel applications improve user experience and system reliability.",
        icon: "bar-chart-2",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Support & Optimisation",
        description:
          "We support your Laravel application after launch with updates, scaling, and performance improvements.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Laravel Development Challenges We Solve",
    description:
      "Many businesses face technical and performance issues with Laravel applications. We fix these problems with clean architecture and best practices.",
    items: [
      {
        title: "Slow Application Performance",
        description:
          "Performance optimisation and efficient architecture improve speed and responsiveness.",
      },
      {
        title: "Security Vulnerabilities",
        description:
          "Secure coding practices and Laravel security features reduce risks and threats.",
      },
      {
        title: "Poor Code Structure",
        description:
          "Clean, modular code improves maintainability and reduces long-term costs.",
      },
      {
        title: "Limited Scalability",
        description:
          "Scalable system design ensures your application grows with user demand.",
      },
      {
        title: "High Maintenance Costs",
        description:
          "Well-planned development reduces bugs and simplifies future updates.",
      },
      {
        title: "Outdated Laravel Systems",
        description:
          "We refactor or rebuild existing Laravel applications for better performance and stability.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Laravel Development Solutions",
    heading: "Ready to Build Your",
    headingHighlight: "Laravel Website?",
    description: [
      "Custom Laravel Website Development Services designed for performance, security, and scalability.",
      "Ideal for startups, growing businesses, and enterprise-level applications.",
    ],
    services: [
      "Custom Laravel Web Application Development",
      "Backend Architecture & Database Optimisation",
      "API Development & Integrations",
      "Laravel Security & Performance Optimisation",
      "Application Refactoring & Rebuilds",
      "Ongoing Maintenance & Support",
    ],
    quote:
      "We build Laravel web applications that support long-term business growth, not short-term fixes.",
    image: "/images/laravel-team.jpg",
    ctaHeading: "Request a Free Laravel Development Consultation",
    ctaDescription:
      "Whether you need a new Laravel website or a complex web application, our experts are ready to help.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What is Laravel website development?",
        answer:
          "Laravel website development is the process of building secure and scalable web applications using the Laravel PHP framework.",
      },
      {
        question:
          "Why should I choose Laravel for web application development?",
        answer:
          "Laravel offers strong security, clean architecture, scalability, and excellent performance, making it ideal for modern web applications.",
      },
      {
        question: "Do you offer custom Laravel development?",
        answer:
          "Yes. We provide fully custom Laravel development based on your business requirements.",
      },
      {
        question: "Can you improve or rebuild an existing Laravel website?",
        answer:
          "Yes. We can optimise, refactor, or rebuild existing Laravel applications to improve performance and scalability.",
      },
      {
        question: "How long does a Laravel web development project take?",
        answer:
          "Most Laravel projects take four to twelve weeks depending on features, complexity, and integrations.",
      },
      {
        question: "Do you provide ongoing Laravel support and maintenance?",
        answer:
          "Yes. We offer maintenance, performance optimisation, and scaling support after launch.",
      },
      {
        question: "Is Laravel suitable for high traffic websites?",
        answer:
          "Yes. With proper optimisation and architecture, Laravel can handle high traffic and large user bases.",
      },
    ],
  },
};

export const customWebsiteService: ServiceDetail = {
  id: "custom-website",
  title: "Custom Website Development Services",
  description:
    "Professional Custom Website Development Services designed to help businesses stand out online, improve credibility, and drive conversions through high-quality, scalable, and SEO-friendly websites.",

  meta: {
    title: "Custom Website Development Company | Bespoke Web Solutions",
    description:
      "We build bespoke, high-performance custom websites designed for scalability, SEO, and conversions. Partner with Codexa Digital for a powerful online presence tailored to your business.",
  },
  heroSection: {
    badge: "💻 Custom Website Development Services",
    heading: "Custom Website",
    subheading: "Design & Development for Growth",
    description:
      "Looking for professional Custom Website Development Services that help your business stand out online? We build high-quality custom websites designed to improve visibility, credibility, and conversions.",
    descriptionExtra:
      "As a custom website development company, we create websites tailored to your business goals, users, and industry. Every website is built from scratch to ensure performance, security, scalability, and strong search engine visibility that supports long-term growth.",
    highlights: [
      "✔ Fully Custom Website Design & Development",
      "✔ SEO-Friendly, Fast & Secure Websites",
      "✔ Scalable Solutions Built for Business Growth",
    ],
    image: "/images/custom-website-hero.jpg",
  },

  talkToExperts: {
    badge: "Build a Website That Converts",
    heading: "Custom Websites Built",
    headingHighlight: "for Real Business Results",
    description: [
      "Template-based websites often limit flexibility, performance, and search visibility. Many businesses struggle with slow load times, outdated designs, and low conversions because their websites are not built around real user needs.",
      "Our Custom Website Development Services focus on usability, speed, mobile optimisation, and SEO-friendly structure. The result is a website that reflects your brand, engages users, and supports consistent business growth.",
    ],
    buttonText: "Request Free Custom Website Consultation",
    image: "/images/custom-website-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Custom Website",
    headingHighlight: "Development Services",
    description:
      "End-to-end custom website design and development services tailored to modern businesses and growing brands.",
    steps: [
      {
        icon: "layout",
        title: "Custom Website Design",
        description:
          "We design unique, brand-focused website layouts that align with your business goals and provide an engaging user experience.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "code",
        title: "Responsive Website Development",
        description:
          "Fully responsive development ensures your website works seamlessly across mobile, tablet, and desktop devices.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "database",
        title: "Backend Functionality & CMS",
        description:
          "We build clean backend systems and content structures that make your website easy to manage, update, and scale.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Performance Optimisation",
        description:
          "Speed optimisation, clean code, and modern standards ensure fast-loading pages and smooth performance.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "search",
        title: "SEO-Friendly Website Structure",
        description:
          "We implement SEO-friendly URLs, clean structure, and optimised content layouts to support higher search rankings.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "shield",
        title: "Website Security & Maintenance",
        description:
          "Security best practices protect your website, while ongoing support ensures long-term stability and growth.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "Custom Website Process",
    description:
      "A structured website development process designed to support usability, performance, and long-term success.",
    steps: [
      {
        icon: "search",
        title: "Discovery & Strategy",
        description:
          "We understand your business goals, target audience, and competitors to design a website that supports users and search engines.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "pen-tool",
        title: "Design & Development",
        description:
          "Using modern technologies and best practices, we design and build your custom website with speed, security, and SEO in mind.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "check-circle",
        title: "Testing & Quality Assurance",
        description:
          "We test across devices and browsers to ensure performance, usability, and stability before launch.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "rocket",
        title: "Launch & Ongoing Optimisation",
        description:
          "After launch, we provide support, updates, and optimisation to keep your website performing at its best.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "Custom Website Development",
    description:
      "A results-focused approach to custom website design and development built around your business goals.",
    benefits: [
      {
        title: "100% Custom Website Solutions",
        description:
          "We design and develop websites from scratch, not templates, ensuring full flexibility and control.",
        icon: "layout",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Business-Driven Design",
        description:
          "Every design decision supports branding, user experience, and conversions.",
        icon: "briefcase",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Fast, Secure & Scalable Websites",
        description:
          "Our websites are built for performance, security, and future growth.",
        icon: "shield",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "SEO-Friendly Structure",
        description:
          "Clean structure and optimisation help improve search rankings and organic visibility.",
        icon: "search",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Mobile-First Development",
        description:
          "Responsive design ensures smooth experiences across all devices.",
        icon: "smartphone",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "We support your website after launch with updates and optimisation.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Custom Website Challenges We Solve",
    description:
      "Many businesses face issues caused by template-based or outdated websites. Our custom solutions fix these problems.",
    items: [
      {
        title: "Slow Website Speed",
        description:
          "Optimised code and performance tuning improve load times and user experience.",
      },
      {
        title: "Poor Search Rankings",
        description:
          "SEO-friendly structure helps improve visibility in search engines.",
      },
      {
        title: "Outdated Design",
        description:
          "Modern, custom design strengthens brand credibility and trust.",
      },
      {
        title: "Low Conversions",
        description:
          "Clear structure and CTAs guide visitors toward enquiries and actions.",
      },
      {
        title: "Limited Scalability",
        description:
          "Custom architecture allows your website to grow with your business.",
      },
      {
        title: "Difficult Website Management",
        description:
          "Clean backend systems make updates and content management easy.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Custom Website Solutions",
    heading: "Ready to Build Your",
    headingHighlight: "Custom Website?",
    description: [
      "Custom Website Development Services designed to deliver measurable business results.",
      "Ideal for business websites, service companies, portfolios, and growing brands.",
    ],
    services: [
      "Custom Website Design & Development",
      "Responsive & Mobile-Friendly Development",
      "SEO-Friendly Website Structure",
      "Performance & Speed Optimisation",
      "Website Redesign Services",
      "Ongoing Maintenance & Support",
    ],
    quote:
      "We build custom websites that improve visibility, engagement, and conversions.",
    image: "/images/custom-website-team.jpg",
    ctaHeading: "Request a Free Custom Website Consultation",
    ctaDescription:
      "Whether you need a new website or a complete redesign, our experts are ready to help.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What is custom website development?",
        answer:
          "Custom website development is the process of designing and building a website specifically for your business goals, users, and requirements without using pre-built templates.",
      },
      {
        question:
          "Why should I choose custom website design instead of a template?",
        answer:
          "Custom websites offer better performance, flexibility, branding control, SEO, and scalability compared to template-based websites.",
      },
      {
        question: "Are custom websites SEO friendly?",
        answer:
          "Yes. Custom websites allow full control over structure, speed, content, and technical SEO, helping improve search engine rankings.",
      },
      {
        question: "Are custom websites mobile friendly?",
        answer:
          "Yes. All our custom websites are fully responsive and work smoothly across mobile, tablet, and desktop devices.",
      },
      {
        question: "How long does custom website development take?",
        answer:
          "Most custom website projects are completed within four to eight weeks depending on features and complexity.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We provide custom website redesign services to improve performance, design, and search visibility.",
      },
      {
        question: "Do you provide support after website launch?",
        answer:
          "Yes. We offer ongoing maintenance, updates, and performance optimisation after launch.",
      },
      {
        question: "Is custom website development good for business growth?",
        answer:
          "Yes. A well-built custom website improves credibility, visibility, user experience, and conversions, supporting long-term business growth.",
      },
    ],
  },
};

export const wordPressWebsiteService: ServiceDetail = {
  id: "wordpress-website",
  title: "WordPress Website Development Services",
  description:
    "Professional WordPress Website Development Services designed to build fast, secure, and scalable websites that help businesses grow online, improve visibility, and convert visitors into customers.",

  meta: {
    title: "WordPress Website Development Company | WP Experts",
    description:
      "Looking for a powerful WordPress website? Our WordPress experts design responsive, high-performing, and scalable websites that attract customers and boost conversions. Start your project today!",
  },
  heroSection: {
    badge: "🧩 WordPress Website Development Services",
    heading: "Professional WordPress",
    subheading: "Websites for Business Growth",
    description:
      "Looking for reliable WordPress Website Development Services to build a professional, easy-to-manage, and high-performing website? We design and develop custom WordPress websites tailored to your business goals, users, and industry.",
    descriptionExtra:
      "As an experienced WordPress development company, we build websites that combine strong design, clean code, and SEO-friendly structure. Every WordPress website is optimised for speed, security, scalability, and long-term success—giving you full control over content and growth.",
    highlights: [
      "✔ Custom WordPress Design & Development",
      "✔ Fast, Secure & SEO-Friendly Websites",
      "✔ Easy Content Management & Scalability",
    ],
    image: "/images/wordpress-website-hero.jpg",
  },

  talkToExperts: {
    badge: "Grow with WordPress",
    heading: "Flexible WordPress Websites",
    headingHighlight: "Built to Scale",
    description: [
      "Many businesses choose WordPress for its flexibility, but poorly built themes and plugins often lead to slow speed, security risks, and limited growth. A professionally developed WordPress website solves these problems.",
      "Our WordPress Website Development Services focus on performance, usability, and SEO. We build websites that are easy to manage, load fast, rank well in search engines, and support your business as it grows.",
    ],
    buttonText: "Request Free WordPress Consultation",
    image: "/images/wordpress-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our WordPress Website",
    headingHighlight: "Development Services",
    description:
      "End-to-end WordPress development services designed to deliver performance, flexibility, and long-term value.",
    steps: [
      {
        icon: "layout",
        title: "Custom WordPress Website Design",
        description:
          "We design unique WordPress layouts that reflect your brand, engage users, and support conversions—without relying on bloated templates.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "code",
        title: "Theme & Plugin Development",
        description:
          "Custom themes and plugins ensure clean code, better performance, and features tailored to your business needs.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "smartphone",
        title: "Responsive & Mobile-Friendly Design",
        description:
          "Every WordPress website is fully responsive, providing smooth performance across mobile, tablet, and desktop devices.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "search",
        title: "SEO-Friendly WordPress Structure",
        description:
          "We build WordPress websites with clean URLs, fast loading pages, and optimised content structure to support higher rankings.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield",
        title: "WordPress Security & Performance",
        description:
          "Security hardening, updates, and performance optimisation protect your site and ensure reliable speed.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "settings",
        title: "Maintenance & Ongoing Support",
        description:
          "We provide updates, backups, performance tuning, and technical support after launch.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Step-by-Step",
    headingHighlight: "WordPress Development Process",
    description:
      "A clear and structured WordPress development process designed to deliver performance, usability, security, and long-term business growth.",
    steps: [
      {
        icon: "search",
        title: "Discovery & Requirements Analysis",
        description:
          "We start by understanding your business goals, target audience, content needs, and competitors to define the right WordPress strategy.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "layout",
        title: "Website Structure & Planning",
        description:
          "We plan the site structure, page hierarchy, and content flow to ensure a strong user experience and SEO-friendly foundation.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "pen-tool",
        title: "Custom Design & UI Development",
        description:
          "Custom WordPress designs are created to match your brand identity, improve engagement, and support conversions.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "code",
        title: "WordPress Development & Integration",
        description:
          "We develop the website using clean code, custom themes or plugins, and integrate required features and functionality.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle",
        title: "Testing & Quality Assurance",
        description:
          "Thorough testing across browsers and devices ensures speed, security, responsiveness, and stable performance before launch.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "Launch & Ongoing Optimisation",
        description:
          "After launch, we monitor performance, apply optimisations, and provide support to keep your WordPress site growing.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "WordPress Website Development",
    description:
      "Business-focused WordPress development built for performance, flexibility, and long-term success.",
    benefits: [
      {
        title: "WordPress Expertise",
        description:
          "We specialise in professional WordPress development, not generic theme setups.",
        icon: "code",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Custom, Not Bloated Themes",
        description:
          "Clean, lightweight WordPress builds improve speed and reliability.",
        icon: "layout",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "SEO & Performance Focus",
        description:
          "SEO-friendly structure and fast load times help improve rankings and user experience.",
        icon: "search",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Secure & Scalable Websites",
        description:
          "We build WordPress websites that grow with your business while staying secure.",
        icon: "shield",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Easy Content Management",
        description:
          "WordPress allows you to manage and update content without technical skills.",
        icon: "edit",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "We support your WordPress website after launch with updates and optimisation.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common WordPress Website Problems We Solve",
    description:
      "Many WordPress websites suffer from poor performance and security due to improper development. We fix these issues.",
    items: [
      {
        title: "Slow Website Speed",
        description:
          "Performance optimisation improves load times and user experience.",
      },
      {
        title: "Security Vulnerabilities",
        description:
          "WordPress hardening and best practices reduce risks and threats.",
      },
      {
        title: "Overloaded Themes & Plugins",
        description:
          "Clean builds remove unnecessary plugins and improve stability.",
      },
      {
        title: "Poor SEO Structure",
        description:
          "SEO-friendly structure helps improve search engine rankings.",
      },
      {
        title: "Outdated Design",
        description:
          "Modern WordPress design improves credibility and engagement.",
      },
      {
        title: "Difficult Content Management",
        description:
          "Custom dashboards and training make WordPress easy to use.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "WordPress Website Solutions",
    heading: "Ready to Build Your",
    headingHighlight: "WordPress Website?",
    description: [
      "Professional WordPress Website Development Services built for performance and growth.",
      "Ideal for business websites, blogs, service companies, and content-driven brands.",
    ],
    services: [
      "Custom WordPress Website Design",
      "Theme & Plugin Development",
      "Responsive & Mobile-Friendly Design",
      "SEO-Friendly WordPress Setup",
      "WordPress Redesign & Optimisation",
      "Ongoing Maintenance & Support",
    ],
    quote:
      "We build WordPress websites that are fast, secure, and easy to manage.",
    image: "/images/wordpress-team.jpg",
    ctaHeading: "Request a Free WordPress Website Consultation",
    ctaDescription:
      "Whether you need a new WordPress website or want to improve an existing one, our experts are ready to help.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What is WordPress website development?",
        answer:
          "WordPress website development is the process of designing and building websites using the WordPress content management system.",
      },
      {
        question: "Is WordPress good for business websites?",
        answer:
          "Yes. WordPress is flexible, scalable, SEO-friendly, and ideal for most business websites.",
      },
      {
        question: "Do you build custom WordPress websites?",
        answer:
          "Yes. We build fully custom WordPress websites tailored to your business needs.",
      },
      {
        question: "Are WordPress websites SEO friendly?",
        answer:
          "Yes. With proper structure and optimisation, WordPress websites can rank very well in search engines.",
      },
      {
        question: "Are WordPress websites mobile friendly?",
        answer:
          "Yes. All our WordPress websites are fully responsive across devices.",
      },
      {
        question: "How long does a WordPress website take to build?",
        answer:
          "Most WordPress websites are completed within three to six weeks depending on features and complexity.",
      },
      {
        question: "Do you provide WordPress maintenance?",
        answer:
          "Yes. We offer ongoing WordPress updates, security, and performance optimisation.",
      },
      {
        question: "Can you redesign an existing WordPress website?",
        answer:
          "Yes. We redesign and optimise existing WordPress websites for better performance and results.",
      },
    ],
  },
};

export const webAppService: ServiceDetail = {
  id: "web-app",
  title: "Web Application Development Services",
  description:
    "Advanced Web Application Development Services designed to build secure, scalable, and high-performance web applications that support complex business operations, user engagement, and long-term digital growth.",

  meta: {
    title: "Custom Web Application Development Company | Web App Experts",
    description:
      "Looking to develop a high-performance web application? Our expert team builds secure, scalable, and user-focused web apps that streamline operations and drive business growth. Start your project today!",
  },
  heroSection: {
    badge: "⚙️ Web Application Development Services",
    heading: "Custom Web",
    subheading: "Applications Built for Scale",
    description:
      "Looking for professional Web Application Development Services to build a powerful, secure, and scalable digital product? We design and develop custom web applications that help businesses streamline operations, improve user experience, and support long-term growth.",
    descriptionExtra:
      "As a full-service web application development company, we build custom web apps tailored to your business logic, workflows, and users. Every application is engineered with clean architecture, strong security, high performance, and scalability in mind—ensuring your web app grows with your business, not against it.",
    highlights: [
      "✔ Custom Web Applications Built from Scratch",
      "✔ Secure, Scalable & High-Performance Architecture",
      "✔ Business-Focused UX, Logic & System Design",
    ],
    image: "/images/web-app-hero.jpg",
  },

  talkToExperts: {
    badge: "Build Powerful Web Applications",
    heading: "Turn Complex Ideas",
    headingHighlight: "into Scalable Web Apps",
    description: [
      "Many businesses struggle with rigid software, disconnected systems, and tools that cannot scale with growth. Off-the-shelf solutions often fail to match real workflows or support future expansion.",
      "Our Web Application Development Services focus on building custom solutions that automate processes, manage data efficiently, and deliver seamless user experiences. We design web apps that solve real business problems and support long-term operational and digital growth.",
    ],
    buttonText: "Request Free Web App Consultation",
    image: "/images/web-app-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Web Application",
    headingHighlight: "Development Services",
    description:
      "End-to-end web application development services covering strategy, architecture, development, integration, and long-term optimisation.",
    steps: [
      {
        icon: "layers",
        title: "Custom Web Application Development",
        description:
          "We build fully custom web applications based on your business logic, workflows, and functional requirements. Each application is designed for performance, flexibility, and scalability.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "UI/UX Design for Web Apps",
        description:
          "User-focused interface and experience design ensures intuitive navigation, clarity, and high engagement across complex application workflows.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "database",
        title: "Backend Architecture & Database Design",
        description:
          "We design robust backend systems, APIs, and databases that handle large data volumes, complex logic, and high user activity efficiently.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "link",
        title: "API Development & System Integrations",
        description:
          "Secure APIs and integrations connect your web app with third-party services, internal systems, and external platforms.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield",
        title: "Security, Authentication & Access Control",
        description:
          "We implement strong security measures including authentication, role-based access, data protection, and compliance best practices.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Performance Optimisation & Scalability",
        description:
          "Caching, load optimisation, and scalable architecture ensure your web application performs reliably under growth and high traffic.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Structured",
    headingHighlight: "Web Application Development Process",
    description:
      "A proven, step-by-step development process designed to deliver stable, scalable, and future-ready web applications.",
    steps: [
      {
        icon: "search",
        title: "Discovery & Business Analysis",
        description:
          "We deeply analyse your business goals, workflows, users, and technical needs to define clear requirements and success metrics.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "map",
        title: "System Architecture & Planning",
        description:
          "We design application architecture, data models, and system flows that support performance, scalability, and maintainability.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "pen-tool",
        title: "UI/UX Design & Prototyping",
        description:
          "Interactive wireframes and designs are created to validate user flows and usability before development begins.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "code",
        title: "Agile Web App Development",
        description:
          "Our developers build the application using clean code, modular structure, and agile delivery for flexibility and speed.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-circle",
        title: "Testing, QA & Security Review",
        description:
          "Comprehensive testing ensures functionality, performance, security, and reliability across devices and environments.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "Deployment, Monitoring & Scaling",
        description:
          "We deploy the web application, monitor performance, and continuously optimise as usage and business needs grow.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "Web Application Development",
    description:
      "A business-driven approach to building web applications that are reliable, scalable, and designed for long-term success.",
    benefits: [
      {
        title: "Custom-Built Web Applications",
        description:
          "Every web app is built specifically for your business logic—never generic or one-size-fits-all.",
        icon: "layers",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Scalable & Future-Ready Architecture",
        description:
          "We design systems that scale smoothly as users, data, and features grow.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Security-First Development",
        description:
          "Strong authentication, access control, and secure coding practices protect your data and users.",
        icon: "shield",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Performance-Optimised Systems",
        description:
          "Fast load times, efficient queries, and optimised workflows ensure smooth performance.",
        icon: "zap",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Clean Code & Maintainability",
        description:
          "Well-structured codebases reduce bugs and make future updates easier and cost-effective.",
        icon: "code",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Support & Optimisation",
        description:
          "We support your web application after launch with enhancements, monitoring, and scaling.",
        icon: "refresh-cw",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Web Application Challenges We Solve",
    description:
      "Many businesses struggle with unreliable, slow, or unscalable web applications. Our custom development approach solves these issues.",
    items: [
      {
        title: "Unscalable Systems",
        description:
          "We design architectures that handle growth without performance degradation.",
      },
      {
        title: "Slow Performance",
        description:
          "Optimised backend logic and caching improve speed and responsiveness.",
      },
      {
        title: "Security Risks",
        description:
          "Secure authentication and data protection reduce vulnerabilities.",
      },
      {
        title: "Poor User Experience",
        description:
          "UX-driven design improves usability across complex workflows.",
      },
      {
        title: "Disconnected Tools & Systems",
        description: "APIs and integrations unify data and workflows.",
      },
      {
        title: "High Maintenance Costs",
        description:
          "Clean architecture reduces long-term development and maintenance costs.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Web Application Solutions",
    heading: "Ready to Build Your",
    headingHighlight: "Web Application?",
    description: [
      "Custom Web Application Development Services built for performance, security, and scale.",
      "Ideal for SaaS platforms, dashboards, internal systems, and customer-facing applications.",
    ],
    services: [
      "Custom Web Application Development",
      "UI/UX Design & Prototyping",
      "Backend Architecture & API Development",
      "System Integrations & Automation",
      "Security & Performance Optimisation",
      "Ongoing Support & Scaling",
    ],
    quote:
      "We build web applications that solve complex problems and support long-term business growth.",
    image: "/images/web-app-team.jpg",
    ctaHeading: "Request a Free Web Application Consultation",
    ctaDescription:
      "Whether you're building a new web app or scaling an existing platform, our experts are ready to help.",
    ctaButton1: "REQUEST FREE CONSULTATION",
    ctaButton2: "CONTACT OUR TEAM",
  },

  faqSection: {
    items: [
      {
        question: "What is web application development?",
        answer:
          "Web application development is the process of building interactive, dynamic software applications that run in a web browser and support complex business logic.",
      },
      {
        question: "How is a web app different from a website?",
        answer:
          "Web apps are interactive and data-driven, while websites are primarily informational.",
      },
      {
        question: "Do you build custom web applications?",
        answer:
          "Yes. All our web applications are fully custom-built based on your business requirements.",
      },
      {
        question: "Are web applications scalable?",
        answer:
          "Yes. With proper architecture and optimisation, web applications can scale to handle large user bases and data volumes.",
      },
      {
        question: "How long does a web app project take?",
        answer:
          "Most web application projects take eight to sixteen weeks depending on complexity and features.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We offer ongoing maintenance, optimisation, and scaling support.",
      },
      {
        question: "Are web applications secure?",
        answer:
          "Yes. We follow secure development practices to protect data, users, and systems.",
      },
    ],
  },
};

export const smallBusinessWebsiteService: ServiceDetail = {
  id: "small-business-website",
  title: "Small Business Website Development Services",
  description:
    "Professional Small Business Website Development Services designed to establish a strong online presence, generate leads, and provide a professional digital storefront for local businesses and startups.",

  meta: {
    title: "Small Business Website Development | Affordable Web Design",
    description:
      "Need a website for your small business? We create affordable, high-converting, and mobile-friendly websites designed to increase visibility and bring in more customers. Get started today!",
  },
  heroSection: {
    badge: "⚡ Affordable & Professional Websites",
    heading: "Small Business",
    subheading: "Websites That Drive Results",
    description:
      "Looking for professional Small Business Website Development Services to help your brand stand out? We create fast, mobile-responsive, and SEO-friendly websites that turn visitors into customers, allowing you to compete effectively in the digital marketplace.",
    descriptionExtra:
      "We specialise in helping local businesses, service providers, and startups launch high-quality websites without the enterprise price tag. Every site is built with a focus on user experience, lead generation, and ease of management, ensuring your business has a reliable foundation for growth.",
    highlights: [
      "✔ High-Converting Lead Generation Designs",
      "✔ Fully Mobile-Responsive & Fast Loading",
      "✔ Easy-to-Manage Content Management Systems",
    ],
    image: "/images/small-business-hero.jpg",
  },

  talkToExperts: {
    badge: "Get Your Business Online",
    heading: "Professional Web Presence",
    headingHighlight: "Without the Complexity",
    description: [
      "Many small businesses suffer from outdated websites that don't work on mobile or fail to rank on Google. This leads to lost opportunities and a poor brand image that drives potential customers to competitors.",
      "With our Small Business Website Development Services, we simplify the process. We handle the technical heavy lifting—from hosting and security to SEO and design—so you can focus on running your business while your website works for you 24/7.",
    ],
    buttonText: "Get Your Free Website Quote",
    image: "/images/small-business-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Small Business Web",
    headingHighlight: "Solutions",
    description:
      "Tailored web development services focused on visibility, usability, and growth for local and growing businesses.",
    steps: [
      {
        icon: "layout",
        title: "Responsive Web Design",
        description:
          "We create beautiful, modern designs that look perfect on smartphones, tablets, and desktops, ensuring a seamless experience for every visitor.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "search",
        title: "Local SEO Optimisation",
        description:
          "We build your site with local SEO best practices to help your business appear in search results when local customers are looking for your services.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "edit-3",
        title: "Content Management (CMS)",
        description:
          "Get full control over your content. We use user-friendly platforms like WordPress or Webflow, making it easy for you to update text and images anytime.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "zap",
        title: "Speed & Performance",
        description:
          "Slow websites lose customers. We optimise every image and line of code to ensure your site loads lightning-fast on all connections.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "mail",
        title: "Lead Capture & Contact Forms",
        description:
          "We integrate strategic call-to-actions and secure contact forms to ensure it's as easy as possible for customers to reach out to you.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "lock",
        title: "Security & SSL Setup",
        description:
          "Every website includes SSL certification and security hardening to protect your business and your customers' data from online threats.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Proven",
    headingHighlight: "6-Step Launch Framework",
    description:
      "A streamlined, transparent process designed to get your small business online quickly without sacrificing quality or performance.",
    steps: [
      {
        icon: "search",
        title: "1. Discovery & Strategy",
        description:
          "We start by understanding your business goals, target audience, and competitors. This allows us to create a strategic roadmap tailored to your specific market.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "2. Wireframing & Design",
        description:
          "We design a visual mockup of your site, focusing on user experience (UX) and conversion paths to ensure visitors know exactly how to contact you.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "code",
        title: "3. Professional Development",
        description:
          "Our developers bring the design to life using clean, fast-loading code. We ensure the site is fully responsive and looks great on every device.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "file-text",
        title: "4. Content & SEO Integration",
        description:
          "We integrate your text and images while optimizing every page for search engines (SEO) to help local customers find you on Google.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "check-square",
        title: "5. Testing & Quality Assurance",
        description:
          "Before going live, we perform rigorous speed tests, link checks, and cross-browser audits to ensure a flawless launch.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "6. Launch & Growth Support",
        description:
          "After launch, we provide CMS training and 30 days of technical support to ensure your new website starts driving results immediately.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for Your",
    headingHighlight: "Business Website",
    description:
      "Personalised service and professional results tailored specifically for the needs of small businesses.",
    benefits: [
      {
        title: "Affordable, Transparent Pricing",
        description:
          "High-quality web design shouldn't break the bank. We offer clear pricing with no hidden monthly fees.",
        icon: "dollar-sign",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Focus on Lead Generation",
        description:
          "We don't just build pretty sites; we build marketing tools designed to grow your customer base.",
        icon: "trending-up",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Mobile-First Approach",
        description:
          "Since most local searches happen on phones, we ensure your mobile experience is second to none.",
        icon: "smartphone",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Fast Turnaround Times",
        description:
          "We value your time. Our streamlined process gets your business online in weeks, not months.",
        icon: "clock",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Ongoing Local Support",
        description:
          "We're your partners for the long haul, offering maintenance and help whenever you need updates.",
        icon: "heart",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "SEO-Ready From Day 1",
        description:
          "Your site is built with the technical foundations Google loves, giving you a head start in rankings.",
        icon: "search",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common Small Business Challenges We Solve",
    description:
      "We eliminate the technical hurdles that prevent small businesses from succeeding online.",
    items: [
      {
        title: "High Agency Costs",
        description:
          "We provide enterprise-level quality at a price point that makes sense for smaller budgets.",
      },
      {
        title: "Difficult to Update",
        description:
          "No more waiting for developers to change a phone number. Our CMS solutions are simple to use.",
      },
      {
        title: "Poor Google Rankings",
        description:
          "We fix the technical SEO issues that keep your business hidden from local customers.",
      },
      {
        title: "Slow Loading Times",
        description:
          "We optimise your site's performance to prevent frustrated users from leaving.",
      },
      {
        title: "Non-Mobile Friendly",
        description:
          "We ensure your site works perfectly on all devices, capturing every potential lead.",
      },
      {
        title: "Unprofessional Look",
        description:
          "We replace generic templates with professional designs that build trust with your audience.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Small Business Growth",
    heading: "Ready to Launch Your",
    headingHighlight: "Business Website?",
    description: [
      "Affordable Small Business Website Development Services designed to increase your visibility and sales.",
      "Perfect for local service providers, retail shops, and professional consultants.",
    ],
    services: [
      "Custom Business Website Design",
      "One-Page Landing Pages",
      "Local SEO Setup & Optimisation",
      "WordPress & CMS Integration",
      "E-commerce for Small Shops",
      "Website Maintenance & Hosting",
    ],
    quote:
      "Your website is your most important employee—it should work hard to bring you business every single day.",
    image: "/images/small-business-team.jpg",
    ctaHeading: "Claim Your Free Small Business Website Audit",
    ctaDescription:
      "Whether you need a brand new site or a refresh of your current one, our team is here to help you grow.",
    ctaButton1: "GET A FREE QUOTE",
    ctaButton2: "VIEW OUR WORK",
  },

  faqSection: {
    items: [
      {
        question: "How much does a small business website cost?",
        answer:
          "Cost varies based on the number of pages and features, but we offer packages specifically designed to be affordable for small business budgets.",
      },
      {
        question: "How long does it take to get my website live?",
        answer:
          "A typical small business website takes between 2 to 4 weeks from the initial kickoff to launch.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Absolutely. we build on user-friendly platforms and provide training so you can manage your own content easily.",
      },
      {
        question: "Do you provide website hosting?",
        answer:
          "Yes, we offer reliable and secure hosting packages so you don't have to worry about the technical setup.",
      },
      {
        question: "Will my website work on mobile phones?",
        answer:
          "Yes. Every website we build is 'responsive,' meaning it automatically adjusts to look great on any screen size.",
      },
      {
        question: "Can you help me rank on Google?",
        answer:
          "Yes. We include foundational SEO in every build and offer ongoing SEO services to help you climb the search results.",
      },
      {
        question: "Do I own the website once it's finished?",
        answer:
          "Yes, you have 100% ownership of your website, its files, and its domain once the project is completed.",
      },
    ],
  },
};

export const shopifyWebsiteService: ServiceDetail = {
  id: "shopify-website",
  title: "Shopify E-commerce Development Services",
  description:
    "Professional Shopify Website Development Services designed to build high-converting, scalable, and secure online stores that drive sales and simplify business management.",

  meta: {
    title: "Shopify Development Company | Custom Shopify Store Experts",
    description:
      "Looking to build a high-converting Shopify store? Our Shopify experts design SEO-friendly, mobile-optimised, and scalable eCommerce websites that drive traffic and boost sales. Start your project today!",
  },
  heroSection: {
    badge: "🛍️ Expert Shopify Solutions",
    heading: "Custom Shopify",
    subheading: "Stores That Sell",
    description:
      "Ready to launch or scale your online store? Our Shopify Website Development Services provide everything you need to create a powerful e-commerce presence, from custom theme design to seamless app integrations and performance optimization.",
    descriptionExtra:
      "As specialized Shopify developers, we focus on building stores that don't just look great but are engineered for conversions. We handle the technical complexities of liquid coding, checkout optimization, and mobile commerce so you can focus on scaling your brand.",
    highlights: [
      "✔ Custom Shopify Theme Development & Setup",
      "✔ High-Conversion UX/UI Design",
      "✔ Seamless App & Payment Gateway Integration",
    ],
    image: "/images/shopify-hero.jpg",
  },

  talkToExperts: {
    badge: "Scale Your E-commerce Brand",
    heading: "Future-Proof Your Store",
    headingHighlight: "on Shopify",
    description: [
      "Running an online store with slow load times, poor mobile navigation, or a clunky checkout process leads to abandoned carts and lost revenue. In the competitive world of e-commerce, your store needs to be flawless.",
      "Our Shopify Development Services solve these bottlenecks. We build optimized, secure, and easy-to-manage stores that provide a world-class shopping experience for your customers while giving you the tools to manage inventory and orders effortlessly.",
    ],
    buttonText: "Request Free Shopify Consultation",
    image: "/images/shopify-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Shopify Development",
    headingHighlight: "Capabilities",
    description:
      "End-to-end e-commerce solutions built on the world's most reliable platform, tailored to your unique brand identity.",
    steps: [
      {
        icon: "shopping-bag",
        title: "Custom Shopify Store Setup",
        description:
          "Full store configuration including domain setup, shipping rules, tax settings, and payment provider integration.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "palette",
        title: "Bespoke Theme Development",
        description:
          "Unique, brand-specific Shopify themes built from scratch or customized to provide a premium look and feel.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "layers",
        title: "App Integration & Customization",
        description:
          "Enhancing store functionality with essential apps for reviews, loyalty programs, subscriptions, and marketing automation.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "refresh-cw",
        title: "Store Migration to Shopify",
        description:
          "Safe and secure migration of products, customers, and order history from platforms like WooCommerce, Magento, or Wix.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "zap",
        title: "Performance & Speed Optimization",
        description:
          "Optimizing Liquid code, images, and scripts to ensure your store passes Core Web Vitals and keeps customers engaged.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart",
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Strategic layout changes and checkout improvements designed specifically to turn more visitors into paying customers.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Strategic",
    headingHighlight: "Shopify Build Process",
    description:
      "A systematic 6-step approach to launching a successful Shopify store that is optimized for both users and search engines.",
    steps: [
      {
        icon: "clipboard-list",
        title: "1. Audit & Strategy",
        description:
          "We analyze your product catalog, target audience, and sales goals to determine the best Shopify plan and store architecture.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "layout",
        title: "2. UI/UX Store Design",
        description:
          "Our designers create a mobile-first visual identity that highlights your products and makes the purchasing journey intuitive.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "code",
        title: "3. Development & Liquid Coding",
        description:
          "We develop your store using Shopify’s Liquid engine, ensuring clean code, fast loading, and easy backend management.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "package",
        title: "4. Product & Data Setup",
        description:
          "We handle bulk product uploads, collections, tags, and inventory settings, ensuring your catalog is organized and searchable.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "5. QA & Payment Testing",
        description:
          "We run end-to-end transaction tests to ensure payments, discounts, and notifications work perfectly across all devices.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "6. Launch & Training",
        description:
          "After the store goes live, we provide a hands-on training session so you can manage orders, products, and reports with ease.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "The Advantage of Our",
    headingHighlight: "Shopify Expertise",
    description:
      "We combine technical Shopify knowledge with e-commerce marketing strategy to build stores that actually grow.",
    benefits: [
      {
        title: "Certified Shopify Knowledge",
        description:
          "Deep expertise in Shopify’s ecosystem, Liquid templating, and the latest Online Store 2.0 features.",
        icon: "award",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Mobile-Commerce Specialists",
        description:
          "Since 70%+ of shoppers use mobile, we prioritize the mobile experience above all else.",
        icon: "smartphone",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Conversion-Focused Design",
        description:
          "Every element is placed strategically to reduce friction and increase your average order value (AOV).",
        icon: "target",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "SEO-Optimized Architecture",
        description:
          "We structure your collections and products to ensure maximum visibility in Google Shopping and Search.",
        icon: "search",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "We build stores that can handle everything from your first sale to massive Black Friday traffic spikes.",
        icon: "trending-up",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Ongoing Partner Support",
        description:
          "We don't just launch and leave. We provide ongoing support to help you add features as you grow.",
        icon: "users",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Overcoming Shopify Challenges",
    description:
      "Avoid the common pitfalls that prevent Shopify stores from reaching their full potential.",
    items: [
      {
        title: "Slow Theme Performance",
        description:
          "Heavy themes kill conversions. We optimize Liquid and scripts for lightning-fast loading.",
      },
      {
        title: "App Bloat & High Costs",
        description:
          "Too many apps slow down sites. We use custom code to replace unnecessary apps and save you money.",
      },
      {
        title: "Poor Mobile UX",
        description:
          "We fix navigation and checkout issues that cause mobile shoppers to drop off.",
      },
      {
        title: "Checkout Abandonment",
        description:
          "We optimize the trust signals and flow of your store to maximize successful completions.",
      },
      {
        title: "Inventory Sync Issues",
        description:
          "We ensure your stock levels are accurately synced across all sales channels and marketplaces.",
      },
      {
        title: "Weak SEO Structure",
        description:
          "We fix Shopify's native SEO limitations to ensure your products rank higher than competitors.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "E-commerce Growth",
    heading: "Ready to Start Selling",
    headingHighlight: "on Shopify?",
    description: [
      "Custom Shopify Website Development Services designed to build, launch, and scale your online brand.",
      "Proven strategies to increase traffic, conversions, and customer loyalty.",
    ],
    services: [
      "Custom Shopify Theme Development",
      "Store Migration & Replatforming",
      "Shopify App Development & Setup",
      "E-commerce SEO & Marketing",
      "B2B & Shopify Plus Solutions",
      "Ongoing Maintenance & Support",
    ],
    quote:
      "Your Shopify store is more than a website—it is the engine of your retail business. We make sure it runs perfectly.",
    image: "/images/shopify-team.jpg",
    ctaHeading: "Get Your Free Shopify Store Strategy Session",
    ctaDescription:
      "Whether you're launching a new brand or upgrading an existing store, our Shopify experts are ready to help.",
    ctaButton1: "START YOUR PROJECT",
    ctaButton2: "VIEW CASE STUDIES",
  },

  faqSection: {
    items: [
      {
        question: "Why should I use Shopify instead of other platforms?",
        answer:
          "Shopify is built specifically for commerce. It offers unmatched security, hosting, and a vast ecosystem of apps that make scaling a retail business easier than any other platform.",
      },
      {
        question: "Can you migrate my products from WooCommerce or Magento?",
        answer:
          "Yes, we specialize in secure migrations. We move your products, customer data, and order history while ensuring your SEO rankings are protected.",
      },
      {
        question: "Will I be able to manage orders and inventory myself?",
        answer:
          "Absolutely. Shopify’s dashboard is very user-friendly, and we provide a full training session to ensure you're comfortable managing your store.",
      },
      {
        question: "Does Shopify include hosting and SSL?",
        answer:
          "Yes, Shopify is a hosted platform. Your monthly Shopify subscription includes secure hosting, an SSL certificate, and unlimited bandwidth.",
      },
      {
        question: "How long does it take to build a custom Shopify store?",
        answer:
          "A standard custom store build typically takes between 4 to 8 weeks, depending on the complexity of the design and the number of products.",
      },
      {
        question: "Can Shopify handle high traffic and large volumes of sales?",
        answer:
          "Yes, Shopify is designed for scale. From small startups to global brands on Shopify Plus, the platform can handle thousands of transactions per minute.",
      },
      {
        question: "Do you offer custom app development for Shopify?",
        answer:
          "Yes, if an off-the-shelf app doesn't meet your needs, we can build custom Shopify apps or private integrations for your store.",
      },
    ],
  },
};

export const affiliateWebsiteService: ServiceDetail = {
  id: "affiliate-website",
  title: "Affiliate Website Development Services",
  description:
    "Professional Affiliate Website Development Services focused on building high-traffic, high-conversion niche sites that maximize passive income through strategic design and SEO.",

  meta: {
    title:
      "Affiliate Website Development Services | Affiliate Marketing Websites | Codexa Digital",
    description:
      "Build a high-performing affiliate marketing website designed for SEO, traffic growth, and passive income. Codexa Digital creates fast, scalable, and conversion-focused affiliate websites that maximise commissions.",
  },
  heroSection: {
    badge: "💰 Build Your Passive Income Asset",
    heading: "High-Converting",
    subheading: "Affiliate Marketing Websites",
    description:
      "Looking to build a profitable affiliate empire? Our Affiliate Website Development Services help you launch niche-specific platforms optimized for Amazon Associates, specialized networks, and lead generation, turning traffic into consistent revenue.",
    descriptionExtra:
      "We build more than just blogs; we build conversion engines. From automated product comparison tables to speed-optimized review templates, every element is engineered to encourage clicks and satisfy search engine algorithms for long-term rankings.",
    highlights: [
      "✔ Automated Product Comparison & Pricing Tables",
      "✔ Advanced SEO Framework for Niche Rankings",
      "✔ High-CTR Layouts & Call-to-Action Placements",
    ],
    image: "/images/affiliate-website-hero.jpg",
  },

  talkToExperts: {
    badge: "Scale Your Affiliate Revenue",
    heading: "Turn Clicks into Commission",
    headingHighlight: "with Expert Architecture",
    description: [
      "The affiliate landscape is highly competitive. Standard templates often fail because they lack the technical SEO and conversion-focused layouts required to rank and convert in 2024 and beyond.",
      "Our specialized Affiliate Development Services focus on the 'Core Web Vitals' and user intent. We build sites that load instantly, provide genuine value to users, and make it incredibly easy for them to click your affiliate links.",
    ],
    buttonText: "Request Affiliate Site Strategy",
    image: "/images/affiliate-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our Affiliate Website",
    headingHighlight: "Features",
    description:
      "Custom-built tools and features designed to give your affiliate business a competitive edge and higher earnings per click (EPC).",
    steps: [
      {
        icon: "layout",
        title: "Dynamic Comparison Tables",
        description:
          "Mobile-friendly tables that allow users to compare product features and prices side-by-side, significantly increasing CTR.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "search",
        title: "Siloed SEO Architecture",
        description:
          "Strategic internal linking and category structuring (Siloing) to build topical authority and dominate niche search results.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "zap",
        title: "Auto-Updating Affiliate Links",
        description:
          "Integration with APIs (like Amazon PA-API) to ensure prices and stock levels are always accurate without manual updates.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "star",
        title: "Custom Review Systems",
        description:
          "Structured data (Schema Markup) for star ratings and 'Pros/Cons' boxes to ensure your reviews stand out in Google Search results.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield",
        title: "Affiliate Disclosure Management",
        description:
          "Seamless and compliant disclosure placements to satisfy legal requirements while maintaining a professional look.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart-2",
        title: "Heatmap & Click Tracking",
        description:
          "Integration with tracking tools to monitor which buttons and links are performing best, allowing for data-driven optimizations.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Strategic",
    headingHighlight: "Affiliate Build Process",
    description:
      "A data-driven 6-step workflow designed to take your niche idea from concept to a revenue-generating digital asset.",
    steps: [
      {
        icon: "target",
        title: "1. Niche & Keyword Analysis",
        description:
          "We analyze search volume and keyword difficulty to ensure your site is built on a foundation of profitable, rankable topics.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "map",
        title: "2. Content Strategy & Siloing",
        description:
          "We plan the site structure to ensure maximum link equity distribution, making it easier for new content to rank quickly.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "framer",
        title: "3. Conversion-First UI Design",
        description:
          "We create custom layouts for 'Best X for Y' and 'Product Review' pages that are proven to convert cold traffic into clicks.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "code",
        title: "4. Development & Performance",
        description:
          "We build a lightweight, ultra-fast site using clean code to ensure your affiliate site passes all Google Core Web Vitals.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "database",
        title: "5. API & Network Integration",
        description:
          "We connect your site to affiliate networks and set up automated tracking and product data fetching where possible.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "6. SEO Launch & Indexing",
        description:
          "After launch, we handle technical indexing and provide a roadmap for content publishing to build early momentum.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for",
    headingHighlight: "Affiliate Development",
    description:
      "We don't just build sites; we build high-yielding digital real estate for professional affiliate marketers.",
    benefits: [
      {
        title: "Deep Affiliate Expertise",
        description:
          "We understand the nuances of CTR, EPC, and niche authority that generic web agencies often overlook.",
        icon: "briefcase",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Performance First Coding",
        description:
          "Speed is a ranking factor. Our sites are built to be lightning-fast to reduce bounce rates and improve SEO.",
        icon: "zap",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Advanced Schema Integration",
        description:
          "We use JSON-LD structured data so your product ratings and prices appear directly in search results.",
        icon: "code",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Custom Data Management",
        description:
          "From custom post types for 'Pros & Cons' to automatic price fetching, we build custom solutions for your niche.",
        icon: "database",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Mobile-Responsive Reviews",
        description:
          "Over 60% of affiliate clicks come from mobile. We ensure your comparison tables work perfectly on small screens.",
        icon: "smartphone",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our sites are built to scale from 10 pages to 10,000 pages without losing performance or organization.",
        icon: "trending-up",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Affiliate Challenges We Solve",
    description:
      "Technical hurdles can kill an affiliate site before it even gains traction. We eliminate these roadblocks.",
    items: [
      {
        title: "Poor Click-Through Rates",
        description:
          "We replace boring layouts with high-visibility buttons and tables that encourage user interaction.",
      },
      {
        title: "Slow Site Speed",
        description:
          "Heavy affiliate sites lose rankings. We optimize images and code for a near-instant user experience.",
      },
      {
        title: "Google Ranking Drops",
        description:
          "We build 'Helpful Content' ready structures that protect you from algorithmic updates.",
      },
      {
        title: "Broken Affiliate Links",
        description:
          "We implement link management systems to monitor and redirect broken or expired affiliate offers.",
      },
      {
        title: "Mobile UX Issues",
        description:
          "We design tables and reviews that remain fully functional and readable on mobile devices.",
      },
      {
        title: "Lack of Trust/Authority",
        description:
          "We implement professional 'Author Boxes' and expertise signals to satisfy Google's E-E-A-T requirements.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Passive Income Growth",
    heading: "Ready to Build Your",
    headingHighlight: "Affiliate Empire?",
    description: [
      "Custom Affiliate Website Development Services focused on high-traffic niches and high-conversion layouts.",
      "Ideal for Amazon Associates, SaaS affiliates, and lead generation experts.",
    ],
    services: [
      "Niche Site Strategy & Architecture",
      "Amazon Associates API Integration",
      "Price Comparison & Table Design",
      "Advanced SEO & Schema Implementation",
      "Page Speed & Performance Optimization",
      "Link Management & Tracking Setup",
    ],
    quote:
      "In affiliate marketing, the best content only wins if the platform is built for conversion and speed.",
    image: "/images/affiliate-team.jpg",
    ctaHeading: "Get a Free Affiliate Site Audit & Strategy",
    ctaDescription:
      "Whether you're starting your first niche site or scaling a portfolio, we have the technical expertise to help you succeed.",
    ctaButton1: "START YOUR PROJECT",
    ctaButton2: "VIEW OUR PORTFOLIO",
  },

  faqSection: {
    items: [
      {
        question: "What is an affiliate website?",
        answer:
          "An affiliate website is a platform that reviews or recommends products/services. When a user clicks your link and makes a purchase, you earn a commission.",
      },
      {
        question: "Can you build sites for Amazon Associates?",
        answer:
          "Yes, we specialize in Amazon niche sites, including PA-API integration for real-time pricing and stock updates.",
      },
      {
        question: "Do you provide the content for the website?",
        answer:
          "While our primary focus is development and strategy, we can help you create content templates and provide guidelines for SEO-optimized affiliate writing.",
      },
      {
        question: "Is the site mobile-friendly?",
        answer:
          "Absolutely. Every affiliate site we build is mobile-first, ensuring that comparison tables and review boxes look great on all devices.",
      },
      {
        question: "How do you handle SEO?",
        answer:
          "We build the site with a siloed architecture, integrate JSON-LD Schema for rich snippets, and optimize for Core Web Vitals from day one.",
      },
      {
        question: "What platform do you use?",
        answer:
          "We typically use WordPress for affiliate sites because of its powerful SEO capabilities and flexible plugins, but we can also build custom solutions if needed.",
      },
      {
        question: "Can you help me choose a niche?",
        answer:
          "During our strategy phase, we can provide data on keyword competition and search volume to help you validate your chosen niche.",
      },
    ],
  },
};

export const ecommerceWebsiteService: ServiceDetail = {
  id: "ecommerce-website",
  title: "E-commerce Website Development Services",
  description:
    "Professional E-commerce Website Development Services focused on creating secure, high-conversion online stores that streamline shopping experiences and maximize digital revenue.",

  meta: {
    title: "eCommerce Website Development Company | Online Store Experts",
    description:
      "Looking to build a high-converting online store? Our eCommerce experts design scalable, mobile-optimised, and SEO-ready websites that drive traffic and maximise sales. Start your project today!",
  },
  heroSection: {
    badge: "🛒 Scalable E-commerce Solutions",
    heading: "Custom E-commerce",
    subheading: "Platforms Built for Sales",
    description:
      "Looking for professional E-commerce Website Development Services to take your retail business online? We build robust, feature-rich online stores that combine stunning design with high-performance functionality to drive customer loyalty and growth.",
    descriptionExtra:
      "From small boutiques to large-scale marketplaces, we develop e-commerce solutions that simplify inventory management, secure payments, and shipping logistics. Our focus is on creating a frictionless path to purchase that increases your average order value and repeat customer rate.",
    highlights: [
      "✔ High-Performance Online Store Development",
      "✔ Secure Payment Gateway & Logic Integration",
      "✔ Advanced Inventory & Order Management",
    ],
    image: "/images/ecommerce-hero.jpg",
  },

  talkToExperts: {
    badge: "Boost Your Online Sales",
    heading: "Empower Your Brand",
    headingHighlight: "with Modern Commerce",
    description: [
      "Running an online store on a slow, outdated, or difficult-to-navigate platform leads to high bounce rates and abandoned carts. Modern shoppers expect instant load times and a secure, one-click checkout experience.",
      "With our E-commerce Website Development Services, we eliminate technical friction. We build scalable stores that handle high traffic, protect sensitive customer data, and provide the marketing tools you need to stay competitive in the digital age.",
    ],
    buttonText: "Request E-commerce Strategy",
    image: "/images/ecommerce-consultation.jpg",
  },

  seoServicesDetails: {
    heading: "Our E-commerce",
    headingHighlight: "Development Stack",
    description:
      "Comprehensive features designed to provide a world-class shopping experience while giving you total control over your business operations.",
    steps: [
      {
        icon: "credit-card",
        title: "Secure Payment Integration",
        description:
          "Integration with global payment processors like Stripe, PayPal, and local gateways, ensuring PCI-compliant and secure transactions.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "package",
        title: "Inventory & Catalog Management",
        description:
          "Advanced systems to manage thousands of SKUs, real-time stock updates, product variations, and complex categorization.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "truck",
        title: "Shipping & Logistics Automation",
        description:
          "Automated shipping rate calculations, label generation, and real-time order tracking integrations with major carriers.",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "users",
        title: "Customer Account Systems",
        description:
          "Seamless user registration, order history, wishlists, and personalized recommendations to increase customer lifetime value.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "search",
        title: "Advanced Product Filtering",
        description:
          "Fast, faceted search and filtering systems that allow customers to find exactly what they are looking for in seconds.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "bar-chart",
        title: "Sales Analytics & Reporting",
        description:
          "Deep integration with analytics tools to track sales performance, customer behavior, and conversion funnels.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  processSection: {
    heading: "Our Comprehensive",
    headingHighlight: "E-commerce Build Process",
    description:
      "A rigorous 6-step framework to ensure your online store is secure, fast, and ready to process orders from day one.",
    steps: [
      {
        icon: "users",
        title: "1. Requirements & User Flow",
        description:
          "We map out the customer journey, from the first click to the final 'Thank You' page, ensuring every step is optimized.",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        icon: "file-code",
        title: "2. Architecture & Data Schema",
        description:
          "We design the database structure to handle complex product attributes, variants, and customer data securely.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
      },
      {
        icon: "monitor",
        title: "3. UI/UX Prototype Design",
        description:
          "We create high-fidelity designs focused on mobile responsiveness and trust-building elements (reviews, trust badges).",
        color: "text-purple-600",
        bg: "bg-purple-50",
      },
      {
        icon: "shopping-cart",
        title: "4. Development & Integrations",
        description:
          "Our developers build the core functionality, integrating your ERP, CRM, and payment systems for a unified experience.",
        color: "text-orange-600",
        bg: "bg-orange-50",
      },
      {
        icon: "shield-check",
        title: "5. Security & Stress Testing",
        description:
          "We perform penetration testing and load testing to ensure your store stays online during sales spikes and protects user data.",
        color: "text-pink-600",
        bg: "bg-pink-50",
      },
      {
        icon: "rocket",
        title: "6. Launch & Optimization",
        description:
          "After launching, we monitor conversion rates and site performance, making iterative improvements to maximize ROI.",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Us for Your",
    headingHighlight: "E-commerce Project",
    description:
      "Specialist expertise in building high-performance digital stores that convert visitors into loyal customers.",
    benefits: [
      {
        title: "Conversion-Centric Approach",
        description:
          "We don't just build websites; we build sales tools optimized for the highest possible conversion rate.",
        icon: "trending-up",
        color: "from-blue-500 to-blue-400",
      },
      {
        title: "Mobile-First Commerce",
        description:
          "Since most shopping happens on mobile, we prioritize a 'thumb-friendly' and fast mobile shopping experience.",
        icon: "smartphone",
        color: "from-emerald-500 to-emerald-400",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "We implement SSL, two-factor authentication, and secure coding practices to protect your business and customers.",
        icon: "lock",
        color: "from-purple-500 to-purple-400",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Our solutions grow with you, from 10 orders a day to 10,000, without crashing or slowing down.",
        icon: "database",
        color: "from-orange-500 to-orange-400",
      },
      {
        title: "Seamless Third-Party Sync",
        description:
          "We connect your store with your existing accounting, inventory, and marketing software automatically.",
        icon: "refresh-cw",
        color: "from-pink-500 to-pink-400",
      },
      {
        title: "SEO-Ready Product Pages",
        description:
          "We ensure your products are easily discoverable on Google with optimized metadata and schema markup.",
        icon: "search",
        color: "from-cyan-500 to-teal-400",
      },
    ],
  },

  bottlenecksSection: {
    heading: "Common E-commerce Roadblocks We Eliminate",
    description:
      "We solve the technical and strategic issues that cause online stores to lose customers and revenue.",
    items: [
      {
        title: "High Cart Abandonment",
        description:
          "We optimize the checkout flow and reduce friction points to ensure more customers finish their purchase.",
      },
      {
        title: "Slow Page Load Times",
        description:
          "Large product catalogs can be slow; we use advanced caching and image optimization for instant loading.",
      },
      {
        title: "Mobile Checkout Issues",
        description:
          "We fix clunky forms and layout issues that make it difficult for mobile users to pay.",
      },
      {
        title: "Poor Search Results",
        description:
          "We implement intelligent search that understands typos and synonyms to help users find products faster.",
      },
      {
        title: "Security & Fraud Risks",
        description:
          "We implement robust fraud detection and secure payment handling to minimize chargebacks and risks.",
      },
      {
        title: "Complex Catalog Management",
        description:
          "We build intuitive backends that make updating prices, stock, and descriptions simple for your team.",
      },
    ],
    selectedIndex: 0,
  },

  seoServices: {
    badge: "Scale Your Sales",
    heading: "Ready to Build a High",
    headingHighlight: "Performance Store?",
    description: [
      "Custom E-commerce Website Development Services designed for security, scalability, and sales growth.",
      "Ideal for established retailers, manufacturers, and growing D2C brands.",
    ],
    services: [
      "Custom E-commerce Platform Development",
      "Headless Commerce & PWA Solutions",
      "Marketplace & Multi-Vendor Systems",
      "B2B E-commerce & Wholesale Portals",
      "Payment & ERP Systems Integration",
      "Post-Launch Support & Optimization",
    ],
    quote:
      "E-commerce isn't about having a website; it's about building a digital experience that customers trust and return to.",
    image: "/images/ecommerce-team.jpg",
    ctaHeading: "Request a Free E-commerce Consultation",
    ctaDescription:
      "Whether you're migrating platforms or starting a new venture, our experts are ready to build your roadmap to success.",
    ctaButton1: "START YOUR PROJECT",
    ctaButton2: "TALK TO AN EXPERT",
  },

  faqSection: {
    items: [
      {
        question: "Which e-commerce platform should I choose?",
        answer:
          "This depends on your size and needs. We work with Shopify, WooCommerce, and custom frameworks (like Laravel) to provide the best fit for your specific business goals.",
      },
      {
        question: "Can you help me migrate from my current platform?",
        answer:
          "Yes, we specialize in secure migrations, ensuring your product data, customer accounts, and SEO rankings are preserved during the move.",
      },
      {
        question: "Is my store going to be mobile-friendly?",
        answer:
          "Absolutely. We use a mobile-first design approach to ensure your store provides an excellent shopping experience on smartphones and tablets.",
      },
      {
        question: "How do you handle website security?",
        answer:
          "We implement SSL, follow PCI compliance standards, use secure payment gateways, and perform regular security audits to protect your store.",
      },
      {
        question: "How long does it take to build a full e-commerce site?",
        answer:
          "A standard e-commerce build typically takes 8 to 16 weeks, depending on the number of products, integrations, and custom features required.",
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes, we offer monthly maintenance packages that include security updates, performance monitoring, and new feature development.",
      },
      {
        question: "Can you integrate my store with my accounting software?",
        answer:
          "Yes, we can sync your store with tools like QuickBooks, Xero, or custom ERP systems to automate your financial reporting.",
      },
    ],
  },
};

const lawFirmSeoService = placeholderService("law-firm-seo", "Law Firm SEO");

const dentistSeoService = placeholderService("dentist-seo", "Dentist SEO");
const tourismSeoService = placeholderService("tourism-seo", "Tourism SEO");
const restaurantSeoService = placeholderService(
  "restaurant-seo",
  "Restaurant SEO",
);

export const serviceDetailsMap: Record<string, ServiceDetail> = {
  "web-app": webAppService,
  "doctor-seo": doctorSeoService,
  "wordpress-website": wordPressWebsiteService,
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
