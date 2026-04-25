import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getExtensionFromMime } from "@/lib/ext-from-mime";

// Use service role key for server-side operations (bypasses RLS)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

// Service role client for admin operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const uploadedFiles = [];
    const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET;

    if (!bucketName) {
      return NextResponse.json(
        { error: "Bucket name not configured" },
        { status: 500 },
      );
    }

    for (const file of files) {
      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: `File ${file.name} exceeds 5MB limit` },
          { status: 400 },
        );
      }

      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        return NextResponse.json(
          { error: `File ${file.name} has unsupported format` },
          { status: 400 },
        );
      }

      // Create unique filename
      const ext = getExtensionFromMime(file.type);
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(7);
      const filename = `${timestamp}-${random}.${ext}`;
      const path = `posts/${filename}`;

      // Convert file to buffer
      const buffer = await file.arrayBuffer();

      // Upload to Supabase using admin client (bypasses RLS)
      const { data, error } = await supabaseAdmin.storage
        .from(bucketName)
        .upload(path, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        console.error("Supabase upload error:", error);
        return NextResponse.json(
          { error: `Failed to upload ${file.name}: ${error.message}` },
          { status: 500 },
        );
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabaseAdmin.storage.from(bucketName).getPublicUrl(path);

      uploadedFiles.push({
        filename: file.name,
        path: data.path,
        url: publicUrl,
        size: file.size,
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
