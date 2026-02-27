'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogCard } from '@/components/blog/blog-card';
import {
  Search, BookOpen, Tag, TrendingUp, Eye,
  ArrowRight, ChevronLeft, ChevronRight,
  Clock, Hash, Rss, BarChart2, PenLine,
  Flame, Star, Zap, Layers, Users, Quote,
  ChevronRight as Caret, Coffee, Globe, Lightbulb
} from 'lucide-react';
import PageBanner from '@/components/common/PageBanner';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  category: { name: string; slug: string };
  createdAt: string;
  views: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

/* ── Category accent tokens (light) ── */
const CAT = [
  { chip:'bg-violet-100 text-violet-700 border-violet-200',  dot:'bg-violet-500', active:'bg-violet-600 text-white border-violet-700', hover:'hover:bg-violet-50',  icon:'text-violet-500', light:'bg-violet-50' },
  { chip:'bg-rose-100 text-rose-700 border-rose-200',        dot:'bg-rose-500',   active:'bg-rose-600 text-white border-rose-700',    hover:'hover:bg-rose-50',    icon:'text-rose-500',   light:'bg-rose-50' },
  { chip:'bg-amber-100 text-amber-700 border-amber-200',     dot:'bg-amber-500',  active:'bg-amber-500 text-white border-amber-600',  hover:'hover:bg-amber-50',   icon:'text-amber-500',  light:'bg-amber-50' },
  { chip:'bg-emerald-100 text-emerald-700 border-emerald-200',dot:'bg-emerald-500',active:'bg-emerald-600 text-white border-emerald-700',hover:'hover:bg-emerald-50',icon:'text-emerald-500',light:'bg-emerald-50' },
  { chip:'bg-sky-100 text-sky-700 border-sky-200',           dot:'bg-sky-500',    active:'bg-sky-600 text-white border-sky-700',      hover:'hover:bg-sky-50',     icon:'text-sky-500',    light:'bg-sky-50' },
  { chip:'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',dot:'bg-fuchsia-500',active:'bg-fuchsia-600 text-white border-fuchsia-700',hover:'hover:bg-fuchsia-50',icon:'text-fuchsia-500',light:'bg-fuchsia-50' },
  { chip:'bg-orange-100 text-orange-700 border-orange-200',  dot:'bg-orange-500', active:'bg-orange-500 text-white border-orange-600',hover:'hover:bg-orange-50',   icon:'text-orange-500', light:'bg-orange-50' },
  { chip:'bg-teal-100 text-teal-700 border-teal-200',        dot:'bg-teal-500',   active:'bg-teal-600 text-white border-teal-700',    hover:'hover:bg-teal-50',    icon:'text-teal-500',   light:'bg-teal-50' },
  { chip:'bg-indigo-100 text-indigo-700 border-indigo-200',  dot:'bg-indigo-500', active:'bg-indigo-600 text-white border-indigo-700',hover:'hover:bg-indigo-50',  icon:'text-indigo-500', light:'bg-indigo-50' },
  { chip:'bg-pink-100 text-pink-700 border-pink-200',        dot:'bg-pink-500',   active:'bg-pink-600 text-white border-pink-700',    hover:'hover:bg-pink-50',    icon:'text-pink-500',   light:'bg-pink-50' },
];

const TAG_STYLES = [
  'bg-violet-50 text-violet-600 border-violet-200 hover:bg-violet-100 hover:border-violet-300',
  'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 hover:border-rose-300',
  'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100 hover:border-amber-300',
  'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300',
  'bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100 hover:border-sky-300',
  'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200 hover:bg-fuchsia-100 hover:border-fuchsia-300',
  'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100 hover:border-orange-300',
  'bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100 hover:border-teal-300',
];

const POPULAR_TAGS = ['Design','Technology','Startup','Artificial Intelligence','Productivity','Career','Marketing','Web Dev','UX Research','Web3','Finance','Leadership'];

function timeAgo(dateStr: string) {
  const d = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (d === 0) return 'Today';
  if (d === 1) return 'Yesterday';
  if (d < 7) return `${d} days ago`;
  if (d < 30) return `${Math.floor(d / 7)} weeks ago`;
  return `${Math.floor(d / 30)} months ago`;
}

const NAV_LINKS = ['Articles', 'Topics', 'Authors', 'Newsletter'];

export default function BlogPageComponent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => { fetchPosts(); }, [page, selectedCategory, searchQuery]);
  useEffect(() => { fetchCategories(); fetchTrending(); }, []);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      let url = `/api/blog/published?page=${page}&limit=9`;
      if (selectedCategory) url += `&category=${selectedCategory}`;
      if (searchQuery) url += `&search=${encodeURIComponent(searchQuery)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) { setPosts(data.posts); setTotalPages(data.pagination.pages); }
    } catch (e) { console.error(e); }
    finally { setIsLoading(false); }
  };

  const fetchTrending = async () => {
    try {
      const res = await fetch('/api/blog/published?page=1&limit=5');
      const data = await res.json();
      if (data.success) setTrendingPosts(data.posts);
    } catch (e) { console.error(e); }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success) setCategories(data.categories);
    } catch (e) { console.error(e); }
  };

  const handleSearch = (e: React.FormEvent) => { e.preventDefault(); setSearchQuery(inputValue); setPage(1); };
  const handleReset = () => { setInputValue(''); setSearchQuery(''); setSelectedCategory(''); setPage(1); };
  const activeCategory = categories.find(c => c.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily:"'Outfit','DM Sans',sans-serif" }}>
       <PageBanner
              title="Our Blog"
              highlight="Insights & Stories"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&display=swap" />

      {/* ══════════════════════════════════════════
          CATEGORY FILTER BAR
      ══════════════════════════════════════════ */}
      <div className="bg-white/98 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="flex items-center gap-2.5 overflow-x-auto py-3" style={{ scrollbarWidth:'none' }}>
            <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 border-r border-slate-200 pr-3 mr-0.5">
              Filter
            </span>
            {/* All */}
            <button onClick={() => { setSelectedCategory(''); setPage(1); }}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${selectedCategory==='' ? 'text-white shadow-md shadow-indigo-200/60' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900'}`}
              style={selectedCategory==='' ? { background:'linear-gradient(135deg,#4338ca,#7c3aed)' } : {}}>
              <Layers size={12} />
              All Articles
            </button>
            {categories.map((cat, i) => {
              const c = CAT[i % CAT.length];
              const isActive = selectedCategory === cat.slug;
              return (
                <button key={cat.id} onClick={() => { setSelectedCategory(cat.slug); setPage(1); }}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${isActive ? `${c.active} shadow-sm` : `${c.chip} ${c.hover}`}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white/80' : c.dot}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — 4-col grid
      ══════════════════════════════════════════ */}
      <div className="max-w-[1380px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

          {/* ── LEFT col-span-3 ── */}
          <div className="lg:col-span-3">

            {/* Section header */}
            <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-0.5 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-600">
                    {activeCategory ? activeCategory.name : searchQuery ? 'Search Results' : 'All Articles'}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 leading-tight" style={{ fontFamily:"'Playfair Display',serif" }}>
                  {searchQuery ? <>Results for <em>"{searchQuery}"</em></> : activeCategory ? activeCategory.name : 'Latest Stories'}
                </h2>
              </div>

              <div className="flex items-center gap-2 mt-1">
                {(searchQuery || selectedCategory) && (
                  <button onClick={handleReset}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 border border-red-200 text-red-500 text-xs font-bold hover:bg-red-100 transition-all">
                    Clear ×
                  </button>
                )}
                {!isLoading && posts.length > 0 && (
                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-xs font-semibold">
                    <BookOpen size={11} />
                    {posts.length} article{posts.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
            </div>

            {/* ── Loading state ── */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-36 gap-5">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-[3px] border-slate-100" />
                  <div className="absolute inset-0 rounded-full border-[3px] border-t-indigo-500 border-r-violet-500 border-b-transparent border-l-transparent animate-spin" />
                  <div className="absolute inset-3 rounded-full border border-slate-100" />
                </div>
                <div className="text-center">
                  <p className="text-slate-700 text-sm font-semibold">Loading articles</p>
                  <p className="text-slate-400 text-xs mt-0.5">Please wait a moment…</p>
                </div>
              </div>
            )}

            {/* ── Empty state ── */}
            {!isLoading && posts.length === 0 && (
              <div className="flex flex-col items-center py-32 text-center">
                <div className="w-20 h-20 rounded-3xl bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2" style={{ fontFamily:"'Playfair Display',serif" }}>
                  No articles found
                </h3>
                <p className="text-slate-400 text-sm mb-8 max-w-sm leading-relaxed">
                  We couldn't find any articles matching your search. Try different keywords or explore all categories.
                </p>
                <button onClick={handleReset}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 transition-all"
                  style={{ background:'linear-gradient(135deg,#4338ca,#7c3aed)' }}>
                  Browse All Articles <ArrowRight size={15} />
                </button>
              </div>
            )}

            {/* ── Blog Cards Grid (3 columns inside col-span-3) ── */}
            {!isLoading && posts.length > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                  {posts.map((post, idx) => (
                    <div key={post.id}
                      style={{ animation:`fadeUp 0.5s cubic-bezier(.16,1,.3,1) ${idx * 65}ms both` }}>
                      <BlogCard {...post} />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-sm font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
                      <ChevronLeft size={15} /> Previous
                    </button>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map(p => (
                        <button key={p} onClick={() => setPage(p)}
                          className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${page===p ? 'text-white shadow-lg shadow-indigo-200 scale-110' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'}`}
                          style={page===p ? { background:'linear-gradient(135deg,#4338ca,#7c3aed)' } : {}}>
                          {p}
                        </button>
                      ))}
                      {totalPages > 7 && <span className="text-slate-400 px-1 font-bold text-lg">…</span>}
                    </div>

                    <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-sm font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
                      Next <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ═══════════════════════════════════════
              RIGHT col-span-1 SIDEBAR
              (No recent posts — only categories,
               trending, tags, newsletter, about)
          ═══════════════════════════════════════ */}
          <aside className="lg:col-span-1 flex flex-col gap-6 sticky top-[128px]">

            {/* ── TRENDING ARTICLES ── */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-rose-50 to-orange-50 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 border border-rose-200/80 flex items-center justify-center">
                    <Flame size={14} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Trending</p>
                    <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">This week</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                </div>
              </div>

              <div className="divide-y divide-slate-50/80">
                {(trendingPosts.length > 0 ? trendingPosts : Array(5).fill(null)).map((post, i) => (
                  <div key={i} className="group flex items-start gap-3.5 px-5 py-3.5 hover:bg-slate-50/70 cursor-pointer transition-all duration-200">
                    {/* Rank badge */}
                    <div className={`shrink-0 mt-0.5 w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shadow-sm ${
                      i===0 ? 'bg-amber-100 text-amber-600 border border-amber-200' :
                      i===1 ? 'bg-slate-200 text-slate-600 border border-slate-200' :
                      i===2 ? 'bg-orange-100 text-orange-600 border border-orange-200' :
                      'bg-slate-50 text-slate-400 border border-slate-200'
                    }`}>
                      {i+1}
                    </div>

                    <div className="flex-1 min-w-0">
                      {post ? (
                        <>
                          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border mb-1.5 ${CAT[i % CAT.length].chip}`}>
                            {post.category.name}
                          </div>
                          <p className="text-[12.5px] font-bold text-slate-700 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors mb-1.5">
                            {post.title}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <div className="flex items-center gap-0.5">
                              <Eye size={9} />
                              <span>{post.views.toLocaleString()}</span>
                            </div>
                            <span>·</span>
                            <div className="flex items-center gap-0.5">
                              <Clock size={9} />
                              <span>{timeAgo(post.createdAt)}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-2 animate-pulse">
                          <div className="h-2.5 bg-slate-100 rounded-full w-full" />
                          <div className="h-2.5 bg-slate-100 rounded-full w-3/4" />
                          <div className="h-2 bg-slate-100 rounded-full w-1/2 mt-1" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/50">
                <button className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  See all trending <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* ── BROWSE CATEGORIES ── */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-violet-100 border border-violet-200/80 flex items-center justify-center">
                  <Layers size={14} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Browse Topics</p>
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">{categories.length} categories</p>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-1.5">
                {categories.slice(0, 9).map((cat, i) => {
                  const c = CAT[i % CAT.length];
                  const isActive = selectedCategory === cat.slug;
                  return (
                    <button key={cat.id}
                      onClick={() => { setSelectedCategory(isActive ? '' : cat.slug); setPage(1); }}
                      className={`group w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${isActive ? `${c.active} shadow-sm` : `bg-white ${c.chip} ${c.hover} hover:border-opacity-50`}`}>
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white/80' : c.dot}`} />
                        <span className="font-bold">{cat.name}</span>
                      </div>
                      <Caret size={13} className={`transition-all group-hover:translate-x-0.5 ${isActive ? 'text-white/70' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── POPULAR TAGS ── */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-amber-50 to-yellow-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200/80 flex items-center justify-center">
                  <Hash size={14} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Popular Tags</p>
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Top searches</p>
                </div>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag, i) => (
                  <button key={tag}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold border transition-all ${TAG_STYLES[i % TAG_STYLES.length]}`}>
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* ── ABOUT THE PUBLICATION ── */}
            {/* <div className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shadow-indigo-100"
                    style={{ background:'linear-gradient(135deg,#4338ca,#7c3aed)' }}>
                    <PenLine size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm" style={{ fontFamily:"'Playfair Display',serif" }}>About Inkwell</p>
                    <p className="text-[10px] text-slate-400 font-medium">Est. 2020</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Inkwell is an independent editorial platform publishing thoughtful writing on design, technology, culture, and ideas that shape the future.
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: BookOpen, val:'240+', label:'Articles' },
                    { icon: Users,    val:'52k',  label:'Readers' },
                    { icon: Globe,    val:'48',   label:'Countries' },
                  ].map(({ icon: Icon, val, label }) => (
                    <div key={label} className="text-center py-2 px-1 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-sm font-black text-slate-800" style={{ fontFamily:"'Playfair Display',serif" }}>{val}</p>
                      <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-600 border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 py-2.5 rounded-xl transition-all">
                  Learn More <ArrowRight size={11} />
                </button>
              </div>
            </div> */}

            {/* ── NEWSLETTER ── */}
            <div className="rounded-3xl overflow-hidden relative shadow-xl shadow-indigo-100/60">
              {/* Rich gradient background */}
              <div className="absolute inset-0" style={{ background:'linear-gradient(145deg,#312e81 0%,#4c1d95 35%,#6d1d7a 65%,#9d1757 100%)' }} />
              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize:'14px 14px' }} />
              {/* Decorative orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                style={{ background:'radial-gradient(circle,#fff,transparent)' }} />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
                style={{ background:'radial-gradient(circle,#f97316,transparent)' }} />

              <div className="relative z-10 p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-5 shadow-lg">
                  <Rss size={18} className="text-white" />
                </div>

                {/* Quote mark decoration */}
                <div className="absolute top-5 right-5 opacity-10">
                  <Quote size={40} className="text-white" />
                </div>

                <h3 className="text-lg font-black text-white mb-1 leading-tight" style={{ fontFamily:"'Playfair Display',serif" }}>
                  Never miss a story
                </h3>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">
                  Join 52,000+ curious readers getting our best articles every week — free, forever.
                </p>

                {/* Social proof */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {['bg-indigo-300','bg-rose-300','bg-amber-300','bg-emerald-300'].map((bg, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border-2 border-white/30 ${bg} flex items-center justify-center text-[9px] font-bold text-white`}>
                        {String.fromCharCode(65+i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/50 text-[10px] font-medium">+52k subscribers</p>
                </div>

                <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:border-white/50 focus:bg-white/15 mb-3 transition-all backdrop-blur-sm" />

                <button
                  className="w-full py-3 rounded-2xl text-sm font-black text-indigo-900 bg-white hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-100 shadow-lg">
                  Subscribe for Free →
                </button>

                <div className="flex items-center justify-center gap-4 mt-3">
                  {['No spam','Free forever','Cancel anytime'].map(t => (
                    <span key={t} className="text-white/35 text-[10px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── FOLLOW US ── */}
            <div className="rounded-3xl border border-slate-100 bg-white shadow-sm p-5">
              <p className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Globe size={14} className="text-indigo-500" />
                Follow Our Publication
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name:'Twitter/X', color:'bg-slate-900 text-white hover:bg-slate-800', handle:'@inkwell' },
                  { name:'LinkedIn',  color:'bg-sky-600 text-white hover:bg-sky-500',     handle:'Inkwell' },
                  { name:'Medium',    color:'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200', handle:'@inkwell' },
                  { name:'Instagram', color:'bg-gradient-to-br from-purple-500 to-rose-500 text-white', handle:'@inkwell' },
                ].map(({ name, color, handle }) => (
                  <button key={name}
                    className={`flex flex-col items-start px-3 py-2.5 rounded-xl text-left transition-all ${color}`}>
                    <p className="text-[11px] font-bold leading-tight">{name}</p>
                    <p className="text-[10px] opacity-70 mt-0.5">{handle}</p>
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-slate-950 text-white">
        {/* Rainbow accent border */}
        <div className="h-[3px]" style={{ background:'linear-gradient(90deg,#4338ca,#7c3aed,#db2777,#f97316,#eab308,#22c55e,#06b6d4)' }} />

        <div className="max-w-[1380px] mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

            {/* Brand col */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background:'linear-gradient(135deg,#4338ca,#7c3aed)' }}>
                  <PenLine size={16} className="text-white" />
                </div>
                <span className="font-bold text-2xl text-white" style={{ fontFamily:"'Playfair Display',serif" }}>Inkwell</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Premium editorial publishing thoughtful writing on design, technology, and ideas that shape tomorrow.
              </p>
              <div className="flex items-center gap-2">
                {['D','T','B','L','S'].map((l, i) => (
                  <button key={i}
                    className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 text-xs font-bold hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center">
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {[
              { title:'Explore',  links:['All Articles','Categories','Authors','Trending','Newsletter'] },
              { title:'Company',  links:['About Us','Write for Us','Advertise','Press Kit','Contact'] },
              { title:'Support',  links:['Privacy Policy','Terms','Cookie Policy','Sitemap'] },
            ].map(g => (
              <div key={g.title}>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 mb-5">{g.title}</p>
                <ul className="space-y-3">
                  {g.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 font-medium">
              © {new Date().getFullYear()} Inkwell Editorial · All rights reserved
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {POPULAR_TAGS.slice(0,5).map((t, i) => (
                <span key={t} className={`text-[10px] px-2.5 py-1 rounded-lg font-semibold border ${TAG_STYLES[i % TAG_STYLES.length]}`}>{t}</span>
              ))}
            </div>
            <p className="text-xs text-slate-600 font-medium">Made with <Coffee size={10} className="inline text-amber-400" /> for curious minds</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        * { scrollbar-width:none; }
        *::-webkit-scrollbar { display:none; }
      `}</style>
    </div>
  );
}