import { MetadataRoute } from "next";
import { services } from "@/data/services";

export const revalidate = 3600; // 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.codexadigital.com.au";

  // ==============================
  // ✅ STEP 1: FETCH BLOGS SAFELY
  // ==============================
  let blogs: any[] = [];

  try {
    const blogRes = await fetch(`${baseUrl}/api/blog/published?limit=1000`, {
      next: { revalidate: 3600 },
    });

    if (!blogRes.ok) {
      throw new Error(`Failed to fetch blogs: ${blogRes.status}`);
    }

    const blogData = await blogRes.json();
    blogs = blogData?.posts || [];
    console.log(`✅ Sitemap: Loaded ${blogs.length} blog posts`);
  } catch (error) {
    console.error("❌ Blog fetch failed:", error);
  }

  try {
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
        priority: 0.95,
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
    // 🔥 SERVICES (PRE-GENERATED PAGES)
    // ==============================
    const servicePages: MetadataRoute.Sitemap = (services || [])
      .filter((service) => service?.id)
      .map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      }));

    console.log(
      `✅ Sitemap: Generated ${servicePages.length} service detail pages`,
    );

    // ==============================
    // 🔥 BLOG PAGES (SAFE)
    // ==============================
    const blogPages: MetadataRoute.Sitemap = (blogs || [])
      .filter((post: any) => post?.slug)
      .map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: "weekly",
        priority: 0.8,
      }));

    // ==============================
    // ✅ FINAL SITEMAP
    // ==============================
    const finalSitemap = [...staticPages, ...servicePages, ...blogPages];
    console.log(
      `✅ Sitemap: Total URLs = ${finalSitemap.length} (${staticPages.length} static + ${servicePages.length} services + ${blogPages.length} blogs)`,
    );

    return finalSitemap;
  } catch (error) {
    console.error("❌ Sitemap error:", error);

    // Fallback with critical pages
    const fallbackSitemap: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.95,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];

    console.log(
      `⚠️ Sitemap: Using fallback with ${fallbackSitemap.length} URLs`,
    );
    return fallbackSitemap;
  }
}
