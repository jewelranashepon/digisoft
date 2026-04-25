import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const admin = searchParams.get("admin");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

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

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      posts,
      total,
      pagination: {
        page,
        limit,
        pages: totalPages,
        total,
      },
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      status,
      categoryId,
      metaTitle,
      metaDescription,
      metaKeywords,
      images,
      featuredImage,
      tags,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, content" },
        { status: 400 },
      );
    }

    // Create post with Prisma
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        status,
        featuredImage: featuredImage?.url || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        metaKeywords: metaKeywords || null,
        images: images?.map((img: any) => img.url) || [],
        publishedAt: status === "published" ? new Date() : null,
        categoryId: categoryId || null,
        tags: {
          create: tags
            ? tags.map((tagId: string) => ({
                tagId,
              }))
            : [],
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
        category: true,
      },
    });

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error: any) {
    console.error("POST error:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
