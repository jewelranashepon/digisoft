import { blogPosts } from "@/lib/blogData";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import PageBanner from "@/components/common/PageBanner";

export const metadata = {
  title: "Blog - Latest Insights & Ideas",
  description:
    "Discover expert insights, industry trends, and practical guides to help you stay ahead in your business.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-white">
      {/* <BlogHero /> */}
      {/* Banner */}
      <PageBanner
        title="Our"
        highlight="Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {sortedPosts.length > 0 ? (
          <BlogGrid posts={sortedPosts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No blog posts available yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
