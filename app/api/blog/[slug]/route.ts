import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await prisma.post.findFirst({
      where: {
        slug,
        status: 'published',
      },
      include: {
        category: true,
        tags: {
          include: { tag: true },
        },
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Get related posts from same category
    const relatedPosts = await prisma.post.findMany({
      where: {
        categoryId: post.categoryId,
        slug: { not: slug },
        status: 'published',
      },
      include: {
        category: true,
        tags: {
          include: { tag: true },
        },
      },
      take: 3,
      orderBy: { publishedAt: 'desc' },
    });

    // Increment views count
    await prisma.post.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json(
      {
        success: true,
        post: {
          ...post,
          tags: post.tags.map(pt => pt.tag),
          views: post.views + 1, // Include the incremented view
        },
        relatedPosts: relatedPosts.map(p => ({
          ...p,
          tags: p.tags.map(pt => pt.tag),
        })),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Blog Detail GET Error]', error);
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
