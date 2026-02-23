// app/blog/[slug]/page.tsx (Server Component)
import BlogDetailPageClient from "@/components/blog/BlogDetailPageClient";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // ডাটাবেস থেকে সব SEO রিলেটেড ফিল্ড তুলে আনা
  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      title: true,
      metaTitle: true,
      metaDescription: true,
      metaKeywords: true,
      featuredImage: true,
      excerpt: true,
      publishedAt: true,
      createdAt: true,
      category: {
        select: { name: true }
      }
    },
  });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The article you are looking for does not exist.",
    };
  }

  const siteName = "Your Website Name"; // আপনার ওয়েবসাইটের নাম দিন
  const seoTitle = post.metaTitle || post.title;
  const seoDescription = post.metaDescription || post.excerpt || "";
  const seoImage = post.featuredImage || "/default-og-image.jpg"; // একটি ডিফল্ট ইমেজ পাথ রাখুন
  const publishDate = post.publishedAt || post.createdAt;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: post.metaKeywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    
    // Search Engine (Google)
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `/blog/${slug}`,
      siteName: siteName,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: publishDate.toISOString(),
      section: post.category.name,
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: "@yourtwitterhandle", // আপনার টুইটার হ্যান্ডেল (ঐচ্ছিক)
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  
  // নোট: এখানে BlogDetailPageClient-এ slug পাস করা হচ্ছে।
  // ক্লায়েন্ট কম্পোনেন্টটি ডাটা ফেচ করার সময় এই slug ব্যবহার করবে।
  return <BlogDetailPageClient slug={resolvedParams.slug} />;
}