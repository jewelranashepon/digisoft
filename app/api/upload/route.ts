import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import { getAuthToken, verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files');

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    const uploadedFiles = [];

    for (const file of files) {
      if (!(file instanceof File)) continue;

      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size exceeds 5MB limit' },
          { status: 400 }
        );
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { error: 'Only JPEG, PNG, and WebP images are allowed' },
          { status: 400 }
        );
      }

      // Create date-based directory structure
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const uploadDir = join(
        process.cwd(),
        'public/uploads',
        String(year),
        month,
        day
      );

      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (e) {
        console.error('Error creating directory:', e);
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 8);
      const originalName = file.name.replace(/\.[^/.]+$/, '');
      const fileName = `${originalName}-${timestamp}-${randomString}.webp`;
      const filePath = join(uploadDir, fileName);
      const publicPath = `/uploads/${year}/${month}/${day}/${fileName}`;

      // Read file buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Optimize image with sharp
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(filePath);

      uploadedFiles.push({
        filename: fileName,
        path: publicPath,
        url: publicPath,
        size: file.size,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: `Successfully uploaded ${uploadedFiles.length} file(s)`,
        files: uploadedFiles,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Upload Error]', error);
    return NextResponse.json(
      { error: 'Failed to upload files' },
      { status: 500 }
    );
  }
}
