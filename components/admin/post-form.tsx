'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { TiptapEditor } from './tiptap-editor';
import { ImageUploader } from './image-uploader';
import { Loader2 } from 'lucide-react';
import { generateSlug } from '@/lib/validations';

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
  const [uploadedImages, setUploadedImages] = useState<string[]>(initialData?.images || []);
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || '');

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    status: initialData?.status || 'draft',
    categoryId: initialData?.categoryId || '',
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    metaKeywords: initialData?.metaKeywords || '',
    selectedTags: initialData?.tags?.map((t: any) => t.id) || [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, tagsRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/tags'),
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
        console.error('Failed to fetch categories and tags:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generate slug from title
    if (name === 'title' && !initialData?.id) {
      const slug = generateSlug(value);
      setFormData(prev => ({
        ...prev,
        slug,
      }));
    }
  };

  const handleTagToggle = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tagId)
        ? prev.selectedTags.filter(id => id !== tagId)
        : [...prev.selectedTags, tagId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const postPayload = {
        ...formData,
        images: uploadedImages,
        featuredImage,
        tags: formData.selectedTags,
      };

      const url = postId ? `/api/posts/${postId}` : '/api/posts';
      const method = postId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: 'Error',
          description: data.error || 'Failed to save post',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Success',
        description: postId ? 'Post updated successfully' : 'Post created successfully',
      });

      router.push('/admin/posts');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save post',
        variant: 'destructive',
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
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Title *
            </label>
            <Input
              name="title"
              type="text"
              placeholder="Enter post title"
              value={formData.title}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Slug *
            </label>
            <Input
              name="slug"
              type="text"
              placeholder="post-slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              placeholder="Short excerpt of your post"
              value={formData.excerpt}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
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
            {tags.map(tag => (
              <button
                key={tag.id}
                type="button"
                onClick={() => handleTagToggle(tag.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  formData.selectedTags.includes(tag.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Image */}
      <ImageUploader
        multiple={false}
        onFilesUploaded={(files) => {
          if (files.length > 0) {
            setFeaturedImage(files[0].url);
          }
        }}
      />

      {/* Content */}
      <TiptapEditor
        value={formData.content}
        onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
      />

      {/* Gallery Images */}
      <ImageUploader
        multiple={true}
        onFilesUploaded={(files) => {
          setUploadedImages(prev => [...prev, ...files.map(f => f.url)]);
        }}
      />

      {/* SEO */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
          <CardDescription>Optimize your post for search engines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Meta Title
            </label>
            <Input
              name="metaTitle"
              type="text"
              placeholder="Max 60 characters"
              maxLength={60}
              value={formData.metaTitle}
              onChange={handleChange}
              className="bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Meta Description
            </label>
            <textarea
              name="metaDescription"
              placeholder="Max 160 characters"
              maxLength={160}
              value={formData.metaDescription}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Keywords
            </label>
            <Input
              name="metaKeywords"
              type="text"
              placeholder="Comma separated keywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              className="bg-white"
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
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </CardContent>
      </Card>

      {/* Submit Buttons */}
      <div className="flex gap-4 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {postId ? 'Updating...' : 'Creating...'}
            </>
          ) : (
            postId ? 'Update Post' : 'Create Post'
          )}
        </Button>
      </div>
    </form>
  );
}
