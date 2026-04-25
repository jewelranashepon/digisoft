import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get("id");
    const slug = searchParams.get("slug");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = parseInt(searchParams.get("offset") || "0");

    if (postId) {
      // Get single post by ID
      const post = await prisma.post.findUnique({
        where: { id: postId },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
          category: true,
        },
      });

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        post,
      });
    }

    if (slug) {
      // Get single post by slug
      const post = await prisma.post.findUnique({
        where: { slug },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
          category: true,
        },
      });

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        post,
      });
    }

    // Get all posts with pagination
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        skip: offset,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
          category: true,
        },
      }),
      prisma.post.count(),
    ]);

    return NextResponse.json({
      success: true,
      posts,
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
