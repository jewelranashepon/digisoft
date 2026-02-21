'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, FolderOpen, Tag } from 'lucide-react';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [postsRes, categoriesRes, tagsRes] = await Promise.all([
          fetch('/api/posts?admin=true'),
          fetch('/api/categories'),
          fetch('/api/tags'),
        ]);

        const postsData = await postsRes.json();
        const categoriesData = await categoriesRes.json();
        const tagsData = await tagsRes.json();

        if (postsData.success && categoriesData.success && tagsData.success) {
          const posts = postsData.posts || [];
          const published = posts.filter((p: any) => p.status === 'published').length;
          const draft = posts.filter((p: any) => p.status === 'draft').length;

          setStats({
            totalPosts: posts.length,
            publishedPosts: published,
            draftPosts: draft,
            totalCategories: categoriesData.categories?.length || 0,
            totalTags: tagsData.tags?.length || 0,
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-slate-600 mt-1">Welcome to your blog admin panel</p>
        </div>
        <Link href="/admin/posts/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Create New Post
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{stats?.totalPosts || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">
              Published
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{stats?.publishedPosts || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">
              Drafts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-600">{stats?.draftPosts || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{stats?.totalCategories || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">
              Tags
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-purple-600">{stats?.totalTags || 0}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you can perform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/admin/posts/create">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-5 w-5 mr-2" />
                Create New Post
              </Button>
            </Link>

            <Link href="/admin/posts">
              <Button variant="outline" className="w-full justify-start">
                <FolderOpen className="h-5 w-5 mr-2" />
                View All Posts
              </Button>
            </Link>

            <Link href="/admin/categories">
              <Button variant="outline" className="w-full justify-start">
                <FolderOpen className="h-5 w-5 mr-2" />
                Manage Categories
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
