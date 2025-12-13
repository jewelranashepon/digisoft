import { BlogPost } from "@/lib/supabase";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
