import { Metadata } from 'next';

export function generateBlogMetadata(post: {
  title: string;
  slug: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  featuredImage?: string;
  createdAt: string;
}): Metadata {
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || 'Read this article on our blog';
  const keywords = post.metaKeywords || 'blog, article';
  const url = `https://yourdomain.com/blog/${post.slug}`;
  const image = post.featuredImage || '/og-image.jpg';

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: post.createdAt,
      authors: ['Blog Team'],
      tags: post.metaKeywords?.split(',').map(tag => tag.trim()) || ['blog', 'article'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@yourbrand',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogCategoryMetadata(category: {
  name: string;
  slug: string;
  description?: string;
}): Metadata {
  const title = `${category.name} | Blog`;
  const description = category.description || `Read our latest articles about ${category.name}`;
  const url = `https://yourdomain.com/blog?category=${category.slug}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'Blog Platform',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateStructuredData(post: {
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  createdAt: string;
  category: { name: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.createdAt,
    author: {
      '@type': 'Organization',
      name: 'Blog Team',
    },
    articleSection: post.category.name,
  };
}
