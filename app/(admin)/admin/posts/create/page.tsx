import { PostForm } from '@/components/admin/post-form';

export const metadata = {
  title: 'Create Post - Blog Admin',
  description: 'Create a new blog post',
};

export default function CreatePostPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Create New Post</h1>
        <p className="text-slate-600 mt-2">Write and publish a new blog post</p>
      </div>
      <PostForm />
    </div>
  );
}
