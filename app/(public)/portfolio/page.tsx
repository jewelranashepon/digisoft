"use client";
import React, { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Plus, Github, ExternalLink } from "lucide-react";

/* ─── FONTS + GLOBAL CSS ─── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; }
    .font-display  { font-family: 'Cormorant Garamond', Georgia, serif; }
    .font-ui       { font-family: 'Syne', sans-serif; }
    .font-mono-alt { font-family: 'JetBrains Mono', monospace; }

    body::after {
      content: '';
      position: fixed; inset: 0; z-index: 9998; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.03;
      animation: grain 6s steps(8) infinite;
    }
    @keyframes grain {
      0%,100%{transform:translate(0,0)}
      12%{transform:translate(-4%,-8%)}
      25%{transform:translate(-12%,4%)}
      37%{transform:translate(6%,-20%)}
      50%{transform:translate(-4%,20%)}
      62%{transform:translate(-12%,8%)}
      75%{transform:translate(12%,0%)}
      87%{transform:translate(0%,12%)}
    }

    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .marquee-inner { animation: marquee 32s linear infinite; display:flex; width:max-content; }

    .proj-img {
      transition: transform 1.3s cubic-bezier(.16,1,.3,1), filter 0.8s ease;
      filter: grayscale(60%) brightness(0.28);
    }
    .proj-card:hover .proj-img {
      transform: scale(1.07);
      filter: grayscale(10%) brightness(0.5);
    }

    .btn-line {
      width: 28px;
      transition: width 0.55s cubic-bezier(.16,1,.3,1);
    }
    .case-btn:hover .btn-line { width: 54px; }

    .gh-btn:hover {
      border-color: rgba(201,169,110,.75) !important;
      color: #C9A96E !important;
    }

    /* Number hover lift */
    .stat-item { transition: transform 0.4s cubic-bezier(.16,1,.3,1); }
    .stat-item:hover { transform: translateY(-4px); }
  `}</style>
);

/* ─── COLOR TOKENS ─── */
// Base palette — rich dark navy replacing all blacks
const C = {
  // Page backgrounds
  bg: "#07101f", // deepest navy (was #0a0a0e)
  bgCard: "#0c1828", // card navy (was #0d0d11)
  bgDark: "#091220", // slightly deeper (was #0c0c10)
  bgStrip: "#0a1525", // marquee strip (was #0c0c10)

  // Borders (gold-tinted)
  border: "rgba(201,169,110,.13)",
  borderMd: "rgba(201,169,110,.09)",
  borderSm: "rgba(201,169,110,.07)",

  // Text — much lighter / clearer
  textPrimary: "#eef3fc", // crisp near-white with blue tint (was #f0e8db)
  textSecondary: "#8fa8c8", // readable blue-grey (was #5e5666 — too dark)
  textMuted: "#4a6180", // muted blue (was #3e3846)

  // Accent
  gold: "#C9A96E",
  goldFaint: "rgba(201,169,110,.06)",
  goldGlow: "rgba(201,169,110,.07)",

  // Ambient glow colors — navy-infused
  glow1: "rgba(30,90,200,.09)",
  glow2: "rgba(201,169,110,.04)",
};

/* ─── PROJECTS ─── */
const TABS = [
  "All",
  "Real Estate",
  "Interior",
  "Weather & Tools",
  "E-Commerce",
  "Moving & Relocation",
];

const PROJECTS = [
  {
    id: "interior-studio-ace",
    title: "Interior Studio Ace",
    sub: "Interior Design Platform",
    cat: "Interior",
    year: "2025",
    desc: "A sleek, modern interior design studio website — showcasing curated spaces, project portfolios, and design services with an elegant, conversion-focused layout.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1400",
    large: true,
    tags: ["React", "JavaScript", "UI/UX"],
  },
  {
    id: "real-estate-arabia",
    title: "Real Estate Arabia",
    sub: "Property Marketplace",
    cat: "Real Estate",
    year: "2025",
    desc: "A full-featured real estate listing platform for the Arabian market — property search, filtering, detailed listings, and responsive design built for high-end clients.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400",
    large: false,
    tags: ["React", "JavaScript", "Real Estate"],
  },
  {
    id: "vision-2030",
    title: "Vision 2030",
    sub: "Saudi Arabia Initiative",
    cat: "Real Estate",
    year: "2025",
    desc: "A dynamic web platform showcasing Saudi Arabia's Vision 2030 — highlighting mega-projects, economic goals, and the Kingdom's transformation roadmap.",
    img: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=1400",
    large: false,
    tags: ["React", "Next.js", "Data Viz"],
  },
  {
    id: "bd-weather",
    title: "BD Weather Forecast",
    sub: "Live Weather App",
    cat: "Weather & Tools",
    year: "2024",
    desc: "A real-time weather forecast application for Bangladesh — displaying live conditions, multi-day forecasts, and location-based data with a clean dashboard UI.",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1400",
    large: true,
    tags: ["React", "Weather API", "Dashboard"],
  },
  {
    id: "moving-texas",
    title: "Moving Texas",
    sub: "Relocation Services",
    cat: "Moving & Relocation",
    year: "2024",
    desc: "A professional relocation services website for Texas — with service listings, pricing, quote forms, and a seamless user journey built for conversions.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400",
    large: false,
    tags: ["React", "JavaScript", "Services"],
  },
  {
    id: "food-saver",
    title: "Food Saver",
    sub: "Food Waste Reduction",
    cat: "Weather & Tools",
    year: "2024",
    desc: "A community-driven food saving platform — connecting surplus food with those in need, featuring listings, geolocation, and a mission-first design philosophy.",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1400",
    large: false,
    tags: ["React", "JavaScript", "Community"],
  },
  {
    id: "ecommerc",
    title: "Ecommerc",
    sub: "React Storefront",
    cat: "E-Commerce",
    year: "2024",
    desc: "A modern, conversion-optimised e-commerce storefront — product browsing, cart management, and responsive UI engineered for a seamless shopping experience.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1400",
    large: true,
    tags: ["React", "JavaScript", "E-Commerce"],
  },
];

const MARQUEE_ITEMS = [
  "React",
  "Interior Design",
  "Real Estate",
  "Weather API",
  "E-Commerce",
  "JavaScript",
  "Vision 2030",
  "Relocation",
  "Food Tech",
  "Next.js",
  "Dashboard",
  "Community",
];

/* ─── ATOMS ─── */
const Label = ({ children }) => (
  <span
    className="font-mono-alt text-[9px] tracking-[0.38em] uppercase"
    style={{ color: C.gold }}
  >
    {children}
  </span>
);
const GoldBar = () => (
  <div className="h-px w-8 shrink-0" style={{ background: C.gold }} />
);
const PillTag = ({ children }) => (
  <span
    className="font-mono-alt text-[8px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-sm border"
    style={{
      background: "rgba(7,16,31,.8)",
      backdropFilter: "blur(16px)",
      borderColor: "rgba(201,169,110,.22)",
      color: "#b8cce0", // clear light blue-grey
    }}
  >
    {children}
  </span>
);

/* ─── PROJECT CARD ─── */
const ProjectCard = ({ p, i }) => (
  <motion.article
    layout
    key={p.id}
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
    className={[
      "proj-card relative overflow-hidden cursor-pointer group rounded-sm border",
      p.large
        ? "col-span-12 lg:col-span-8 min-h-[600px]"
        : "col-span-12 md:col-span-6 lg:col-span-4 min-h-[500px]",
    ].join(" ")}
    style={{ borderColor: C.border, background: C.bgCard }}
  >
    {/* Image */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={p.img}
        alt={p.title}
        className="proj-img w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(7,16,31,0.6) 0%, rgba(7,16,31,0.3) 50%, rgba(7,16,31,0.05) 100%)",
        }}
      />
    </div>

    {/* Top */}
    <div className="absolute top-0 left-0 right-0 p-7 flex justify-between items-start">
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <PillTag key={t}>{t}</PillTag>
        ))}
      </div>
      <a
        href={p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="gh-btn w-9 h-9 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shrink-0"
        style={{
          borderColor: "rgba(201,169,110,.28)",
          background: "rgba(7,16,31,.7)",
          backdropFilter: "blur(14px)",
          color: "#8fa8c8",
        }}
      >
        <Github size={13} />
      </a>
    </div>

    {/* Bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-7 space-y-3">
      <div className="flex items-center gap-3">
        <div
          className="w-[5px] h-[5px] rounded-full shrink-0"
          style={{ background: C.gold }}
        />
        <Label>{p.sub}</Label>
        <div
          className="flex-1 h-px"
          style={{ background: "rgba(201,169,110,.12)" }}
        />
        <Label>{p.year}</Label>
      </div>

      <h3
        className="font-display font-bold leading-[0.87] tracking-tight"
        style={{
          fontSize: p.large
            ? "clamp(2.6rem,4.2vw,4.5rem)"
            : "clamp(2rem,2.8vw,3rem)",
          color: C.textPrimary,
        }}
      >
        {p.title}
      </h3>

      <p
        className="font-ui font-light text-sm leading-relaxed max-w-[360px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        style={{ color: "#9ab8d4" }} /* clear readable blue on hover */
      >
        {p.desc}
      </p>

      <div className="pt-2">
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="case-btn flex items-center gap-3 bg-transparent border-none cursor-pointer p-0 font-mono-alt text-[9px] tracking-[0.28em] uppercase no-underline"
          style={{ color: C.gold }}
        >
          View on GitHub
          <div className="btn-line h-px" style={{ background: C.gold }} />
        </a>
      </div>
    </div>
  </motion.article>
);

/* ─── MAIN ─── */
export default function PortfolioPage() {
  const [tab, setTab] = useState("All");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const heroOp = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const projects = useMemo(
    () => (tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === tab)),
    [tab],
  );

  return (
    <div
      className="font-ui min-h-screen overflow-x-hidden pt-20"
      style={{ background: C.bg, color: C.textPrimary }}
    >
      <Fonts />

      {/* ══════════ HERO ══════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 overflow-hidden"
      >
        {/* Ambient glows — navy-blue tinted */}
        <div
          className="absolute top-[-8%] right-[-4%] w-[70vw] h-[70vw] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(30,90,200,.09) 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-[-8%] left-[-4%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,.05) 0%, transparent 68%)",
          }}
        />
        {/* Additional navy glow center */}
        <div
          className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(20,60,160,.06) 0%, transparent 65%)",
          }}
        />

        {/* Left vertical rule */}
        <div
          className="absolute left-8 md:left-16 top-0 bottom-0 w-px pointer-events-none"
          style={{ background: "rgba(201,169,110,.07)" }}
        />
        {/* Top horizontal rule */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "rgba(201,169,110,.06)" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOp }}
          className="relative z-10 max-w-[1400px] mx-auto w-full"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-14"
          >
            <GoldBar />
            <Label>Codexa Digital</Label>
          </motion.div>

          {/* Headline */}
          {[
            { text: "Crafting digital", italic: false, delay: 0.06 },
            { text: "experiences.", italic: true, delay: 0.14 },
          ].map(({ text, italic, delay }) => (
            <div className="overflow-hidden" key={text}>
              <motion.h1
                initial={{ y: "108%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay }}
                className={`font-display leading-[0.83] tracking-tight ${italic ? "italic font-light" : "font-bold"}`}
                style={{
                  fontSize: "clamp(3.8rem, 9.5vw, 10rem)",
                  color: italic ? C.gold : C.textPrimary,
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}

          {/* Sub-row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.95 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-16"
          >
            <p
              className="font-ui font-light text-base md:text-lg leading-relaxed max-w-[440px]"
              style={{ color: C.textSecondary }}
            >
              React & JavaScript developer building real-world platforms — from
              Saudi real estate marketplaces to interior studios, weather tools,
              and beyond.
            </p>
            <div className="flex items-center gap-10 shrink-0">
              {[
                { v: "7", l: "Featured Projects" },
                { v: "41", l: "Repositories" },
              ].map(({ v, l }, i) => (
                <React.Fragment key={l}>
                  {i > 0 && (
                    <div
                      className="h-14 w-px"
                      style={{ background: "rgba(201,169,110,.2)" }}
                    />
                  )}
                  <div className="text-right">
                    <div
                      className="font-display font-bold leading-none"
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                        color: C.textPrimary,
                      }}
                    >
                      {v}
                    </div>
                    <div className="mt-2">
                      <Label>{l}</Label>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* GitHub pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="/services"
              rel="noopener noreferrer"
              className="gh-btn inline-flex items-center gap-3 font-mono-alt text-[9px] tracking-[0.28em] uppercase px-6 py-3 rounded-sm border no-underline transition-all duration-300"
              style={{
                color: C.textSecondary,
                borderColor: "rgba(201,169,110,.18)",
                background: "rgba(201,169,110,.04)",
              }}
            >
              <Github size={12} />
              View All Services
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 right-10 flex flex-col items-center gap-3"
        >
          <div
            className="w-px h-14"
            style={{
              background: "linear-gradient(to bottom, #C9A96E, transparent)",
            }}
          />
          <Label>Scroll</Label>
        </motion.div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div
        className="overflow-hidden border-y"
        style={{
          borderColor: "rgba(201,169,110,.08)",
          background: C.bgStrip,
          padding: "18px 0",
        }}
      >
        <div className="marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display italic whitespace-nowrap inline-flex items-center gap-8 px-8"
              style={{
                fontSize: "19px",
                color: i % 3 === 1 ? C.gold : "#2a3f5c", // navy-blue muted text
              }}
            >
              {item}
              <span style={{ color: "rgba(201,169,110,.18)", fontSize: "8px" }}>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════ FILTER + GRID ══════════ */}
      <section className="px-8 md:px-16 pt-14 pb-28 max-w-[1600px] mx-auto">
        {/* Sticky filter */}
        <div
          className="sticky top-0 z-50"
          style={{
            background: "rgba(7,16,31,.93)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="flex items-center justify-between pt-5 overflow-x-auto no-scrollbar">
            <div className="flex shrink-0">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="relative font-mono-alt text-[8.5px] tracking-[0.3em] uppercase px-4 py-3 bg-transparent border-none cursor-pointer transition-colors duration-300 whitespace-nowrap"
                  style={{ color: tab === t ? C.textPrimary : C.textMuted }}
                >
                  {t}
                  {tab === t && (
                    <motion.div
                      layoutId="tl"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: C.gold }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <Label className="pl-4 shrink-0">
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </Label>
          </div>
          <div
            className="h-px"
            style={{ background: "rgba(201,169,110,.07)" }}
          />
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-12 gap-5 mt-10">
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </AnimatePresence>

          {/* ── CONTACT / CTA ── */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-12 mt-2 grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden border"
            style={{ borderColor: C.border }}
          >
            {/* Left */}
            <div
              className="p-14 md:p-16 flex flex-col justify-between border-r"
              style={{
                background: C.bgCard,
                borderColor: "rgba(201,169,110,.09)",
              }}
            >
              <div>
                <Label>Open to Work</Label>
                <h3
                  className="font-display font-light italic leading-[0.88] tracking-tight mt-6 mb-6"
                  style={{
                    fontSize: "clamp(2.6rem,3.8vw,4.2rem)",
                    color: C.textPrimary,
                  }}
                >
                  Let's build
                  <br />
                  <span style={{ color: C.gold }}>something together.</span>
                </h3>
                <p
                  className="font-ui font-light text-sm leading-relaxed max-w-sm"
                  style={{ color: C.textSecondary }}
                >
                  React & JavaScript developer based in Dhaka — available for
                  freelance projects, full-time roles, and open-source
                  collaboration.
                </p>
              </div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="gh-btn mt-12 self-start inline-flex items-center gap-4 font-mono-alt text-[9px] tracking-[0.3em] uppercase px-8 py-4 rounded-sm border cursor-pointer no-underline transition-all duration-300"
                style={{
                  color: C.textSecondary,
                  borderColor: "rgba(201,169,110,.2)",
                  background: "transparent",
                }}
              >
                <Github size={12} />
                View All Repos
              </a>
            </div>

            {/* Right — gold */}
            <div
              className="p-14 md:p-16 flex flex-col justify-between"
              style={{ background: C.gold }}
            >
              <div>
                {[
                  {
                    label: "Interior & Design Platforms",
                    detail: "React · UI/UX",
                  },
                  {
                    label: "Real Estate Marketplaces",
                    detail: "JavaScript · API",
                  },
                  {
                    label: "Weather & Utility Tools",
                    detail: "React · REST API",
                  },
                  {
                    label: "E-Commerce Storefronts",
                    detail: "React · Cart Logic",
                  },
                  {
                    label: "Relocation & Service Sites",
                    detail: "React · Conversion",
                  },
                ].map(({ label, detail }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 border-b last:border-b-0"
                    style={{ borderColor: "rgba(7,16,31,.13)" }}
                  >
                    <div>
                      <span
                        className="font-ui text-sm font-semibold block"
                        style={{ color: "#07101f" }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-mono-alt text-[8px] tracking-widest"
                        style={{ color: "rgba(7,16,31,.45)" }}
                      >
                        {detail}
                      </span>
                    </div>
                    <Plus size={12} color="rgba(7,16,31,.3)" />
                  </div>
                ))}
              </div>
              <p
                className="font-display italic mt-8 leading-snug"
                style={{
                  fontSize: "clamp(1.2rem,2vw,1.6rem)",
                  color: "rgba(7,16,31,.38)",
                }}
              >
                "Build it real. Ship it clean. Make it count."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section
        className="px-8 md:px-16 py-24 border-t max-w-[1600px] mx-auto"
        style={{ borderColor: C.borderSm }}
      >
        <div className="flex items-center gap-4 mb-16">
          <GoldBar />
          <Label>By the Numbers</Label>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 border-l"
          style={{ borderColor: "rgba(201,169,110,.11)" }}
        >
          {[
            { v: "7", l: "Featured Projects" },
            { v: "41", l: "Public Repos" },
            { v: "5+", l: "Industry Domains" },
            { v: "2025", l: "Active & Building" },
          ].map(({ v, l }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="stat-item px-8 md:px-10 py-12 border-r border-b md:border-b-0"
              style={{ borderColor: "rgba(201,169,110,.09)" }}
            >
              <div
                className="font-display font-bold leading-none tracking-tight mb-4"
                style={{
                  fontSize: "clamp(2.8rem,4.2vw,4.8rem)",
                  color: C.textPrimary,
                }}
              >
                {v}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-[5px] h-[5px] rounded-full shrink-0"
                  style={{ background: C.gold }}
                />
                <Label>{l}</Label>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════ TECH STACK ══════════ */}
      <section
        className="px-8 md:px-16 py-24 border-t max-w-[1600px] mx-auto"
        style={{ borderColor: C.borderSm }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — sticky */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-4 mb-10">
              <GoldBar />
              <Label>Tech Stack</Label>
            </div>
            <h2
              className="font-display font-light leading-[0.87] tracking-tight mb-10"
              style={{
                fontSize: "clamp(2.8rem,4.8vw,5.2rem)",
                color: C.textPrimary,
              }}
            >
              Tools of
              <br />
              <em style={{ color: C.gold }}>the craft.</em>
            </h2>
            <p
              className="font-ui font-light text-sm md:text-base leading-relaxed max-w-sm"
              style={{ color: C.textSecondary }}
            >
              Rooted in the JavaScript ecosystem — from pixel-perfect React UIs
              to API-connected full-stack applications across diverse real-world
              domains.
            </p>
          </div>

          {/* Right — steps */}
          <div>
            {[
              {
                n: "01",
                t: "React & JavaScript",
                d: "Core stack across all 7 featured projects — SPAs, dynamic state, component-driven architecture.",
              },
              {
                n: "02",
                t: "HTML & CSS",
                d: "Semantic, responsive, mobile-first markup and styling — precision in every layout.",
              },
              {
                n: "03",
                t: "REST APIs & Data",
                d: "Weather APIs, property data feeds, and external integrations powering real-time applications.",
              },
              {
                n: "04",
                t: "UI/UX & Conversion",
                d: "User-first design thinking — clean flows, intuitive navigation, and conversion-optimised layouts.",
              },
              {
                n: "05",
                t: "Git & Version Control",
                d: "Disciplined branching strategies, collaborative workflows, and open-source best practices.",
              },
            ].map(({ n, t, d }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.7 }}
                className="flex gap-8 py-8 border-b group cursor-default"
                style={{ borderColor: "rgba(201,169,110,.08)" }}
              >
                <Label>{n}</Label>
                <div>
                  <p
                    className="font-ui text-sm font-semibold mb-2 transition-colors duration-300 group-hover:text-[#C9A96E]"
                    style={{ color: C.textPrimary, fontWeight: 600 }}
                  >
                    {t}
                  </p>
                  <p
                    className="font-ui font-light text-sm leading-relaxed"
                    style={{ color: C.textSecondary }}
                  >
                    {d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
