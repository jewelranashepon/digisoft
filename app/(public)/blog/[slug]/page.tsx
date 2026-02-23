"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Eye,
  Twitter,
  Facebook,
  Linkedin,
  ArrowLeft,
  BookOpen,
  Hash,
  Tag,
  ChevronRight,
  Flame,
  Calendar,
  ExternalLink,
  Quote,
  Rss,
  ArrowRight,
  Star,
  Share2,
  Check,
  ChevronUp,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  images?: string[];
  category: { name: string; slug: string };
  tags: Array<{ id: string; name: string; slug: string }>;
  createdAt: string;
  publishedAt?: string;
  views: number;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  category: { name: string; slug: string };
  createdAt: string;
  views: number;
}

const TAG_PALETTE = [
  "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 hover:border-violet-300",
  "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 hover:border-rose-300",
  "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 hover:border-amber-300",
  "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
  "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
  "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-100 hover:border-fuchsia-300",
  "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
  "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300",
];

const CARD_ACCENT = [
  { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-500", badge: "bg-violet-100 text-violet-700 border-violet-200" },
  { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", dot: "bg-rose-500", badge: "bg-rose-100 text-rose-700 border-rose-200" },
  { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500", badge: "bg-amber-100 text-amber-700 border-amber-200" },
  { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", dot: "bg-sky-500", badge: "bg-sky-100 text-sky-700 border-sky-200" },
];

function timeAgo(d: string) {
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readingTime(html: string) {
  const words = html.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/blog/${slug}`);
        const data = await res.json();
        if (data.success) {
          setPost(data.post);
          setRelatedPosts(data.relatedPosts || []);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/blog/published?page=1&limit=6");
        const data = await res.json();
        if (data.success)
          setRecentPosts(data.posts.filter((p: RecentPost) => p.slug !== slug));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [slug]);

  useEffect(() => {
    const handler = () => setScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ── Loading ── */
  if (isLoading)
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center" style={{ fontFamily: "'Outfit',sans-serif" }}>
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-[3px] border-slate-100" />
            <div className="absolute inset-0 rounded-full border-[3px] border-t-indigo-500 border-r-violet-500 border-b-transparent border-l-transparent animate-spin" />
          </div>
          <div className="text-center">
            <p className="text-slate-700 text-sm font-semibold">Loading article</p>
            <p className="text-slate-400 text-xs mt-0.5">Please wait a moment…</p>
          </div>
        </div>
      </div>
    );

  /* ── Not found ── */
  if (!post)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: "'Outfit',sans-serif" }}>
        <div className="text-center max-w-sm px-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-50">
            <BookOpen size={36} className="text-indigo-400" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>
            Post Not Found
          </h1>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg,#4338ca,#7c3aed)" }}
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>
      </div>
    );

  const pubDate = post.publishedAt || post.createdAt;
  const rt = readingTime(post.content);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit','DM Sans',sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap');

        /* ─────────────────────────────────────────
           BLOG CONTENT: mirrors Tiptap editor output
        ───────────────────────────────────────── */
        .blog-content {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          line-height: 1.9;
          color: #475569;
          word-break: break-word;
        }

        /* Paragraphs */
        .blog-content p {
          margin-bottom: 1.25rem;
          color: #475569;
          font-weight: 300;
          font-size: 17px;
          line-height: 1.9;
        }

        /* Headings */
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .blog-content h1 { font-size: 2.5rem; margin: 2rem 0 1rem; }
        .blog-content h2 { font-size: 1.875rem; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e2e8f0; }
        .blog-content h3 { font-size: 1.5rem; margin: 2rem 0 0.75rem; }
        .blog-content h4 { font-size: 1.25rem; margin: 1.75rem 0 0.5rem; }
        .blog-content h5 { font-size: 1.125rem; margin: 1.5rem 0 0.5rem; }
        .blog-content h6 { font-size: 1rem; margin: 1.25rem 0 0.5rem; color: #64748b; }

        /* Bold & Italic */
        .blog-content strong, .blog-content b { font-weight: 700; color: #1e293b; }
        .blog-content em, .blog-content i { font-style: italic; color: #64748b; }
        .blog-content s, .blog-content del { text-decoration: line-through; color: #94a3b8; }
        .blog-content u { text-decoration: underline; text-underline-offset: 3px; }

        /* Highlight (Tiptap mark) */
        .blog-content mark {
          background-color: #fef08a;
          color: #713f12;
          border-radius: 3px;
          padding: 1px 4px;
        }

        /* Links */
        .blog-content a {
          color: #4f46e5;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 500;
          transition: color 0.15s;
        }
        .blog-content a:hover { color: #3730a3; }

        /* Blockquote */
        .blog-content blockquote {
          border-left: 4px solid #818cf8;
          background: linear-gradient(to right, #eef2ff, #f5f3ff);
          border-radius: 0 16px 16px 0;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 1px 12px rgba(99,102,241,0.08);
        }
        .blog-content blockquote p {
          color: #4338ca;
          font-style: normal !important;
          font-weight: 500;
          font-size: 1.05rem;
          margin: 0;
        }

        /* Inline code */
        .blog-content code:not(pre code) {
          background: #eef2ff;
          color: #be185d;
          border: 1px solid #e0e7ff;
          border-radius: 6px;
          padding: 2px 7px;
          font-size: 0.875em;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-weight: 500;
        }

        /* Code block */
        .blog-content pre {
          background: #0f172a;
          color: #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          margin: 2rem 0;
          overflow-x: auto;
          box-shadow: 0 8px 32px rgba(15,23,42,0.25);
          position: relative;
        }
        .blog-content pre code {
          background: transparent !important;
          color: inherit !important;
          border: none !important;
          padding: 0 !important;
          font-size: 0.875rem;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          line-height: 1.7;
        }

        /* Lists */
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.75rem;
          margin: 1.25rem 0;
          space-y: 0.5rem;
        }
        .blog-content ol {
          list-style-type: decimal;
          padding-left: 1.75rem;
          margin: 1.25rem 0;
        }
        .blog-content li {
          margin-bottom: 0.4rem;
          color: #475569;
          font-size: 17px;
          line-height: 1.8;
          font-weight: 300;
          padding-left: 0.25rem;
        }
        .blog-content li::marker {
          color: #6366f1;
          font-weight: 700;
        }
        .blog-content ul ul,
        .blog-content ol ol,
        .blog-content ul ol,
        .blog-content ol ul {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        /* Horizontal Rule */
        .blog-content hr {
          border: none;
          border-top: 2px solid #e2e8f0;
          margin: 2.5rem 0;
        }

        /* Images */
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          margin: 2rem auto;
          display: block;
        }

        /* Tables */
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 8px rgba(0,0,0,0.06);
          font-size: 15px;
        }
        .blog-content thead {
          background: linear-gradient(135deg, #4338ca, #7c3aed);
          color: white;
        }
        .blog-content th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .blog-content td {
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
          color: #475569;
        }
        .blog-content tr:last-child td { border-bottom: none; }
        .blog-content tr:nth-child(even) td { background: #f8fafc; }
        .blog-content tr:hover td { background: #f1f5f9; transition: background 0.15s; }

        /* Text alignment (Tiptap TextAlign extension) */
        .blog-content [style*="text-align: left"],
        .blog-content .text-left { text-align: left !important; }
        .blog-content [style*="text-align: center"],
        .blog-content .text-center { text-align: center !important; }
        .blog-content [style*="text-align: right"],
        .blog-content .text-right { text-align: right !important; }
        .blog-content [style*="text-align: justify"],
        .blog-content .text-justify { text-align: justify !important; }

        /* First paragraph lead style */
        .blog-content > p:first-of-type {
          font-size: 1.125rem;
          font-weight: 400;
          color: #334155;
          line-height: 1.85;
        }

        /* Scrollbar */
        * { scrollbar-width: thin; scrollbar-color: #e2e8f0 transparent; }
        *::-webkit-scrollbar { width: 5px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 99px; }
      `}</style>

      {/* ── Scroll to top ── */}
      {scrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-2xl text-white flex items-center justify-center shadow-xl shadow-indigo-300/60 hover:scale-110 transition-all"
          style={{ background: "linear-gradient(135deg,#4338ca,#7c3aed)" }}
        >
          <ChevronUp size={18} />
        </button>
      )}

      {/* ════════════ HERO — Featured Image ════════════ */}
      {post.featuredImage && (
        <div className="relative w-full h-[560px] pt-20 overflow-hidden">
          <Image src={post.featuredImage} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 60%)" }} />

          <div className="absolute bottom-0 inset-x-0">
            <div className="max-w-7xl mx-auto px-6 pb-12">
              <div className="flex items-center gap-2 text-white/60 text-xs font-medium mb-5">
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight size={12} />
                <Link href={`/blog?category=${post.category.slug}`} className="hover:text-white transition-colors">{post.category.name}</Link>
              </div>
              <Link href={`/blog?category=${post.category.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-white text-xs font-bold mb-5 hover:bg-white/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-white" />{post.category.name}<ChevronRight size={11} className="opacity-70" />
              </Link>
              <h1 className="text-4xl md:text-[3.25rem] font-black text-white leading-[1.1] max-w-3xl mb-6 drop-shadow-sm" style={{ fontFamily: "'Playfair Display',serif" }}>
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
                <div className="flex items-center gap-1.5 font-medium"><Calendar size={14} /><span>{formatDate(pubDate)}</span></div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-1.5 font-medium"><Eye size={14} /><span>{post.views.toLocaleString()} views</span></div>
                <div className="w-1 h-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-1.5 font-medium"><Clock size={14} /><span>{rt} min read</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════ HERO — No Image ════════════ */}
      {!post.featuredImage && (
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#e2e8f0 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-6">
              <Link href="/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <Link href={`/blog?category=${post.category.slug}`} className="hover:text-slate-600 transition-colors">{post.category.name}</Link>
            </div>
            <Link href={`/blog?category=${post.category.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-6 hover:bg-indigo-100 transition-all">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />{post.category.name}
            </Link>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] max-w-4xl mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display',serif" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-slate-500 text-sm">
              <div className="flex items-center gap-1.5 font-medium"><Calendar size={14} /><span>{formatDate(pubDate)}</span></div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5 font-medium"><Eye size={14} /><span>{post.views.toLocaleString()} views</span></div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5 font-medium"><Clock size={14} /><span>{rt} min read</span></div>
            </div>
          </div>
        </section>
      )}

      {/* ════════════ MAIN GRID ════════════ */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

          {/* ══ ARTICLE — col-span-3 ══ */}
          <article className="lg:col-span-3 min-w-0">

            {/* Excerpt / Lead */}
            {post.excerpt && (
              <div className="relative mb-12 p-8 rounded-3xl overflow-hidden border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-violet-50/50 to-purple-50/30">
                <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full" style={{ background: "linear-gradient(90deg,#4338ca,#7c3aed,#db2777)" }} />
                <div className="absolute bottom-3 right-6 opacity-[0.07]"><Quote size={80} className="text-indigo-700" /></div>
                <p className="relative text-xl text-slate-700 font-medium leading-relaxed italic tracking-wide" style={{ fontFamily: "'Playfair Display',serif" }}>
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* ════════ ARTICLE BODY ════════
                Key fix: .blog-content class + scoped CSS above
                replaces unreliable @tailwindcss/typography prose classes
            ══════════════════════════════ */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Gallery */}
            {post.images && post.images.length > 0 && (
              <div className="mt-16 mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 rounded-full" style={{ background: "linear-gradient(180deg,#4338ca,#7c3aed)" }} />
                  <h2 className="text-2xl font-black text-slate-900" style={{ fontFamily: "'Playfair Display',serif" }}>Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {post.images.map((img, i) => (
                    <div key={i} className="relative h-72 rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                      <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-14 pt-10 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-5">
                  <Hash size={15} className="text-slate-400" />
                  <span className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">Article Tags</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {post.tags.map((tag, i) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.slug}`}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-semibold border transition-all hover:scale-105 ${TAG_PALETTE[i % TAG_PALETTE.length]}`}
                    >
                      <Hash size={11} />{tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Article Footer: Category + Share */}
            <div className="mt-12 p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2.5">Filed Under</p>
                  <Link
                    href={`/blog?category=${post.category.slug}`}
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-indigo-200 text-indigo-700 text-sm font-bold shadow-sm hover:bg-indigo-50 hover:border-indigo-300 hover:scale-105 transition-all"
                  >
                    <Tag size={14} />{post.category.name}<ChevronRight size={14} />
                  </Link>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2.5">Share This Article</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-700 hover:scale-105 transition-all shadow-sm"
                    >
                      <Twitter size={13} /> Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 hover:scale-105 transition-all shadow-sm"
                    >
                      <Linkedin size={13} /> LinkedIn
                    </a>
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border shadow-sm hover:scale-105 ${copied ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                    >
                      {copied ? <Check size={13} /> : <ExternalLink size={13} />}
                      {copied ? "Copied!" : "Copy Link"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ══ SIDEBAR — col-span-1 ══ */}
          <aside className="lg:col-span-1 flex flex-col gap-5 sticky top-[80px]">

            {/* Article Stats */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#4338ca,#7c3aed,#db2777)" }} />
              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 mb-4">Article Details</p>
                <div className="space-y-3.5">
                  {[
                    { icon: Calendar, label: "Published", val: formatDate(pubDate), color: "bg-indigo-100 text-indigo-600" },
                    { icon: Clock,    label: "Read Time",   val: `${rt} min read`,   color: "bg-violet-100 text-violet-600" },
                    { icon: Eye,      label: "Total Views", val: post.views.toLocaleString(), color: "bg-rose-100 text-rose-600" },
                    { icon: Tag,      label: "Category",    val: post.category.name, color: "bg-emerald-100 text-emerald-600" },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                        <Icon size={13} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 leading-none mb-0.5">{label}</p>
                        <p className="text-sm font-bold text-slate-700 truncate leading-tight">{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2">
                    <span>Article Length</span><span>{rt} min</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${Math.min(100, rt * 8)}%`, background: "linear-gradient(90deg,#4338ca,#7c3aed)" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-rose-50 to-orange-50/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 border border-rose-200/80 flex items-center justify-center shadow-sm">
                    <Flame size={14} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-tight">Recent Posts</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 leading-none mt-0.5">Latest articles</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="divide-y divide-slate-50/80">
                {recentPosts.length === 0
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="p-4 animate-pulse">
                        <div className="w-full h-[108px] rounded-2xl bg-slate-100 mb-3" />
                        <div className="h-2 bg-slate-100 rounded w-1/4 mb-2.5" />
                        <div className="h-3 bg-slate-100 rounded w-full mb-1.5" />
                        <div className="h-3 bg-slate-100 rounded w-3/4 mb-2.5" />
                        <div className="flex justify-between">
                          <div className="h-2 bg-slate-100 rounded w-1/4" />
                          <div className="h-2 bg-slate-100 rounded w-1/4" />
                        </div>
                      </div>
                    ))
                  : recentPosts.slice(0, 5).map((rp, i) => {
                      const c = CARD_ACCENT[i % CARD_ACCENT.length];
                      return (
                        <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block p-4 hover:bg-slate-50/80 transition-all duration-200">
                          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-3 border border-slate-100 shadow-sm">
                            {rp.featuredImage ? (
                              <Image src={rp.featuredImage} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                              <div className={`absolute inset-0 ${c.bg} border ${c.border} flex items-center justify-center`}>
                                <span className="text-4xl font-black opacity-10" style={{ fontFamily: "'Playfair Display',serif" }}>{String(i + 1).padStart(2, "0")}</span>
                              </div>
                            )}
                            <div className={`absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-lg border backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider ${c.badge}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />{rp.category.name}
                            </div>
                          </div>
                          <h4 className="text-[13px] font-bold text-slate-700 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors mb-2.5">{rp.title}</h4>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                            <div className="flex items-center gap-1"><Clock size={9} /><span>{timeAgo(rp.createdAt)}</span></div>
                            <div className="flex items-center gap-1"><Eye size={9} /><span>{rp.views.toLocaleString()} views</span></div>
                          </div>
                        </Link>
                      );
                    })}
              </div>
              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/60">
                <Link href="/blog" className="flex items-center justify-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors group">
                  View All Articles<ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Share Widget */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-sky-50 to-blue-50/40 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center">
                  <Share2 size={14} className="text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-tight">Share Article</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 leading-none mt-0.5">Spread the word</p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-sm">
                  <Twitter size={14} /> Share on X / Twitter
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 hover:scale-[1.03] transition-all shadow-sm">
                    <Facebook size={13} /> Facebook
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 hover:scale-[1.03] transition-all shadow-sm">
                    <Linkedin size={13} /> LinkedIn
                  </a>
                </div>
                <button onClick={handleCopy}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold transition-all border hover:scale-[1.02] ${copied ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm shadow-emerald-100" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm"}`}>
                  {copied ? <Check size={13} /> : <ExternalLink size={13} />}
                  {copied ? "✓ Link Copied to Clipboard!" : "Copy Article Link"}
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-3xl overflow-hidden relative shadow-xl shadow-indigo-100/60">
              <div className="absolute inset-0" style={{ background: "linear-gradient(145deg,#312e81 0%,#4c1d95 35%,#6b21a8 65%,#9d174d 100%)" }} />
              <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px,transparent 1px)", backgroundSize: "13px 13px" }} />
              <div className="relative z-10 p-6">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-5 shadow-lg backdrop-blur-sm">
                  <Rss size={18} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-white mb-1.5 leading-tight" style={{ fontFamily: "'Playfair Display',serif" }}>
                  Enjoyed this story?
                </h3>
                <p className="text-white/55 text-xs mb-5 leading-relaxed">Join 52,000+ readers getting our best articles every week — free, always.</p>
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex -space-x-2.5">
                    {["bg-violet-300","bg-rose-300","bg-amber-300","bg-emerald-300","bg-sky-300"].map((bg, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full border-2 border-white/20 ${bg} flex items-center justify-center text-[10px] font-black text-white shadow-sm`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-semibold">52,000+ readers</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-amber-400 fill-amber-400" />)}
                    </div>
                  </div>
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/35 outline-none focus:border-white/50 focus:bg-white/15 mb-3 transition-all backdrop-blur-sm font-medium"
                />
                <button className="w-full py-3.5 rounded-2xl text-sm font-black text-indigo-900 bg-white hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-100 shadow-lg">
                  Subscribe for Free →
                </button>
                <div className="flex items-center justify-center gap-3 mt-3.5">
                  {["No spam","·","Cancel anytime","·","Free forever"].map((t,i) => (
                    <span key={i} className="text-white/30 text-[10px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}