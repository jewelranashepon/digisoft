"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/supabase";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-orange-500" />
          <span className="text-slate-600 font-medium">{formattedDate}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
          {post.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-cyan-400 text-cyan-500 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-all duration-300 font-medium w-fit group/btn"
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
