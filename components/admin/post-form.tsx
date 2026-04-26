"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TiptapEditor } from "./tiptap-editor";
import { ImageUploader } from "./image-uploader";
import { Loader2 } from "lucide-react";
import { generateSlug } from "@/lib/validations";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface UploadedFile {
  filename: string;
  path: string;
  url: string;
  size: number;
}

interface PostFormProps {
  postId?: string;
  initialData?: any;
}

export function PostForm({ postId, initialData }: PostFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>(
    Array.isArray(initialData?.images)
      ? initialData.images.map((url: string) => ({
          url,
          path: url,
          filename: "",
          size: 0,
        }))
      : [],
  );
  const [featuredImage, setFeaturedImage] = useState<UploadedFile | null>(
    initialData?.featuredImage
      ? {
          url: initialData.featuredImage,
          path: initialData.featuredImage,
          filename: "",
          size: 0,
        }
      : null,
  );

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    status: initialData?.status || "draft",
    categoryId: initialData?.categoryId || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
    selectedTags: initialData?.tags?.map((t: any) => t.tag?.id || t.id) || [],
  });

  const handleFeaturedUpload = (files: UploadedFile[]) => {
    if (!files || files.length === 0) return;
    setFeaturedImage(files[0]);
  };

  const handleGalleryUpload = (files: UploadedFile[]) => {
    if (!files || files.length === 0) return;

    const newImages = files.filter(
      (f) => !uploadedImages.some((img) => img.url === f.url),
    );

    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, tagsRes] = await Promise.all([
          fetch("/api/categories"),
          fetch("/api/tags"),
        ]);

        const categoriesData = await categoriesRes.json();
        const tagsData = await tagsRes.json();

        if (categoriesData.success) {
          setCategories(categoriesData.categories);
        }
        if (tagsData.success) {
          setTags(tagsData.tags);
        }
      } catch (error) {
        console.error("Failed to fetch categories and tags:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generate slug from title
    if (name === "title" && !initialData?.id) {
      const slug = generateSlug(value);
      setFormData((prev) => ({
        ...prev,
        slug,
      }));
    }
  };

  const handleTagToggle = (tagId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tagId)
        ? prev.selectedTags.filter((id) => id !== tagId)
        : [...prev.selectedTags, tagId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const postPayload = {
        ...formData,
        images: uploadedImages,
        featuredImage: featuredImage,
        tags: formData.selectedTags,
      };

      const url = postId ? `/api/posts/${postId}` : "/api/posts";
      const method = postId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Error",
          description: data.error || "Failed to save post",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: postId
          ? "Post updated successfully"
          : "Post created successfully",
      });

      router.push("/admin/posts");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title and Slug */}
      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
          <CardDescription>Basic information about your post</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Title *
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Slug *
            </label>
            <Input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="auto-generated-from-title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Brief description of the post"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Category */}
      <Card>
        <CardHeader>
          <CardTitle>Category</CardTitle>
        </CardHeader>
        <CardContent>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
          <CardDescription>Select tags for your post</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  formData.selectedTags.includes(tag.id)
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
                type="button"
              >
                {tag.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Image */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Image</CardTitle>
          <CardDescription>
            This image will be used as the main thumbnail
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ImageUploader
            onFilesUploaded={handleFeaturedUpload}
            multiple={false}
            label="Featured Image"
          />

          {featuredImage && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden border">
              <Image
                src={featuredImage.url}
                alt="Featured"
                fill
                className="object-cover"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent>
          <TiptapEditor
            value={formData.content}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, content: value }))
            }
          />
        </CardContent>
      </Card>

      {/* Gallery Images */}
      <Card>
        <CardHeader>
          <CardTitle>Gallery Images</CardTitle>
          <CardDescription>
            These images will appear inside the post
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ImageUploader
            onFilesUploaded={handleGalleryUpload}
            multiple={true}
            label="Gallery Images"
          />

          {uploadedImages.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Images in Gallery ({uploadedImages.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uploadedImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden border"
                  >
                    <Image
                      src={img.url}
                      alt={img.filename}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() =>
                        setUploadedImages((prev) =>
                          prev.filter((_, i) => i !== index),
                        )
                      }
                      className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      type="button"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* SEO */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
          <CardDescription>
            Optimize your post for search engines
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Meta Title
            </label>
            <Input
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              placeholder="SEO title for search results"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Meta Description
            </label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              placeholder="Description shown in search results"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Keywords
            </label>
            <Input
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              placeholder="Comma-separated keywords"
            />
          </div>
        </CardContent>
      </Card>

      {/* Status and Publish */}
      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </CardContent>
      </Card>

      {/* Submit Buttons */}
      <Card>
        <CardContent className="pt-6 flex gap-4">
          <Button onClick={() => router.back()} variant="outline" type="button">
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {postId ? "Updating..." : "Creating..."}
              </>
            ) : postId ? (
              "Update Post"
            ) : (
              "Create Post"
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
