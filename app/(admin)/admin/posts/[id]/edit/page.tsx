'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PostForm } from '@/components/admin/post-form';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function EditPostPage() {
  const params = useParams();
  const { toast } = useToast();
  const postId = params.id as string;
  const [post, setPost] = useState(null);
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
            title: 'Error',
            description: 'Failed to load post',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load post',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId, toast]);

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
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Edit Post</h1>
        <p className="text-slate-600 mt-2">Update your blog post</p>
      </div>
      <PostForm postId={postId} initialData={post} />
    </div>
  );
}
