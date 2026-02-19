import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  category: {
    name: string;
    slug: string;
  };
  createdAt: string;
  views: number;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  featuredImage,
  category,
  createdAt,
  views,
}: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border border-slate-200">
      {/* Featured Image */}
      {featuredImage && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader className="pb-3">
        <Link
          href={`/blog/${slug}`}
          className="group"
        >
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
            {category.name}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {excerpt && (
          <p className="text-slate-600 text-sm line-clamp-3">
            {excerpt}
          </p>
        )}
      </CardContent>

      <CardFooter className="text-xs text-slate-500 border-t border-slate-100 pt-3">
        <div className="flex items-center justify-between w-full">
          <span>{new Date(createdAt).toLocaleDateString()}</span>
          <span className="text-slate-400">{views} views</span>
        </div>
      </CardFooter>
    </Card>
  );
}
