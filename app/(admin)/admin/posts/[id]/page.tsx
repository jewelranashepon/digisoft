"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  featuredImage: string;
  images: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  category: { id: string; name: string; slug: string };
  tags: { tag: { id: string; name: string; slug: string } }[];
}

export default function ViewPostPage() {
  const params = useParams();
  const { toast } = useToast();
  const postId = params.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        const data = await response.json();

        if (data.success) {
          setPost(data.post);
        } else {
          toast({
            title: "Error",
            description: "Failed to load post",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load post",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId, toast]);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Post deleted successfully",
        });
        window.location.href = "/admin/posts";
      } else {
        toast({
          title: "Error",
          description: "Failed to delete post",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-600">Post not found</p>
        <Link href="/admin/posts">
          <Button className="mt-4">Back to Posts</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/posts">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
            <p className="text-slate-600 mt-1">Post Details</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/posts/${post.id}/edit`}>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6 space-y-6">
        <div className="flex items-center gap-3">
          <span
            className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
              post.status === "published"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {post.status}
          </span>
          {post.category && (
            <span className="text-slate-600">
              Category:{" "}
              <span className="font-medium">{post.category.name}</span>
            </span>
          )}
        </div>

        {post.featuredImage && (
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {post.excerpt && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Excerpt
            </h3>
            <p className="text-slate-600">{post.excerpt}</p>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Content</h3>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t.tag.id}
                  className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                >
                  {t.tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-500">Created:</span>{" "}
            <span className="text-slate-900">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-slate-500">Updated:</span>{" "}
            <span className="text-slate-900">
              {new Date(post.updatedAt).toLocaleString()}
            </span>
          </div>
          {post.publishedAt && (
            <div>
              <span className="text-slate-500">Published:</span>{" "}
              <span className="text-slate-900">
                {new Date(post.publishedAt).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {(post.metaTitle || post.metaDescription || post.metaKeywords) && (
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">SEO</h3>
            {post.metaTitle && (
              <div className="mb-2">
                <span className="text-slate-500 text-sm">Title:</span>{" "}
                <span className="text-slate-900">{post.metaTitle}</span>
              </div>
            )}
            {post.metaDescription && (
              <div className="mb-2">
                <span className="text-slate-500 text-sm">Description:</span>{" "}
                <span className="text-slate-900">{post.metaDescription}</span>
              </div>
            )}
            {post.metaKeywords && (
              <div>
                <span className="text-slate-500 text-sm">Keywords:</span>{" "}
                <span className="text-slate-900">{post.metaKeywords}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
