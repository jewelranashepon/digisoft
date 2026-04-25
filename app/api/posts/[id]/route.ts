import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const postId = params.id;
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

    // Update post with Prisma
    const post = await prisma.post.update({
      where: { id: postId },
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
          deleteMany: {},
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
    console.error("PUT error:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const postId = params.id;

    // Delete the post (tags will be cascade deleted)
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE error:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 },
    );
  }
}
