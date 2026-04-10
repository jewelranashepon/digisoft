import { MetadataRoute } from "next";
import { services } from "@/data/services";

export const revalidate = 3600; // revalidate every 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.codexadigital.com.au";

  try {
    // ==============================
    // 🔥 FETCH ALL BLOG POSTS
    // ==============================
    // ⚠️ IMPORTANT: use high limit to get all posts
    const blogRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/published?limit=1000`,
      { next: { revalidate: 3600 } },
    );

    const blogData = await blogRes.json();
    const blogs = blogData?.posts || [];

    // ==============================
    // 🔹 STATIC PAGES
    // ==============================
    const staticPages: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/packages`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/cost-calculator`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    // ==============================
    // 🔥 DYNAMIC SERVICES (LOCAL FILE)
    // ==============================
    const servicePages: MetadataRoute.Sitemap = services
      .filter((service) => service.id)
      .map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      }));

    // ==============================
    // 🔥 DYNAMIC BLOGS
    // ==============================
    const blogPages: MetadataRoute.Sitemap = blogs
      .filter((post: any) => post.slug)
      .map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: "weekly",
        priority: 0.8,
      }));

    // ==============================
    // ✅ FINAL SITEMAP
    // ==============================
    return [...staticPages, ...servicePages, ...blogPages];
  } catch (error) {
    console.error("Sitemap error:", error);

    return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
      },
    ];
  }
}
