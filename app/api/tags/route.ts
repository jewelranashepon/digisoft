import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getAuthToken, verifyToken } from '@/lib/auth';
import { createTagSchema } from '@/lib/validations';

// GET all tags
export async function GET(request: NextRequest) {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { posts: true },
        },
      },
    });

    return NextResponse.json(
      { success: true, tags },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Tags GET Error]', error);
    return NextResponse.json(
      { error: 'Failed to fetch tags' },
      { status: 500 }
    );
  }
}

// POST create tag
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    // const token = await getAuthToken();
    // if (!token || !verifyToken(token)) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    // }

    const body = await request.json();

    // Validate input
    const validatedData = createTagSchema.parse(body);

    // Check if tag already exists
    const existing = await prisma.tag.findFirst({
      where: {
        OR: [
          { name: validatedData.name },
          { slug: validatedData.slug },
        ],
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Tag already exists' },
        { status: 400 }
      );
    }

    const tag = await prisma.tag.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Tag created successfully',
        tag,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[Tags POST Error]', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create tag' },
      { status: 500 }
    );
  }
}
