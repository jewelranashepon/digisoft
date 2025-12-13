import BlogHero from "@/components/blog/BlogHero";
import { blogPosts, BlogPost } from "@/lib/blogData";
import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ---------------------------------
   Helpers
---------------------------------- */
function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) || null;
}

/* ---------------------------------
   Types
---------------------------------- */
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ---------------------------------
   Static Params
---------------------------------- */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* ---------------------------------
   Metadata
---------------------------------- */
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
    },
  };
}

/* ---------------------------------
   Page
---------------------------------- */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Example: Popular posts (excluding current)
  const popularPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <main className="min-h-screen bg-slate-50">
      <BlogHero />

      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>{formattedDate}</span>
                <span className="mx-1">•</span>
                <span>by {post.author}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                {post.title}
              </h1>

              <p className="text-xl text-slate-600">{post.excerpt}</p>
            </div>

            {/* Featured Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mt-10 prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Popular post</h2>
            {popularPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex gap-3 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={p.featured_image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col justify-between">
                  <h3 className="font-medium text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString("en-US")}</p>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {p.tags?.map((tag) => (
                      <span key={tag} className="text-xs text-blue-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </article>
    </main>
  );
}


