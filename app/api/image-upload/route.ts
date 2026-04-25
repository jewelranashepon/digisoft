/**
 * app/api/image-upload/route.ts
 *
 * Next.js App Router image-upload API.
 * Uses Supabase Storage for persistent image hosting.
 *
 * ── Setup Required ─────────────────────────────────────────────────────────
 * 1. Create a storage bucket in Supabase named "codexadigital" (make it public)
 * 2. Add environment variables:
 *    - NEXT_PUBLIC_SUPABASE_URL (your project URL)
 *    - NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (new publishable key from Supabase)
 *    - SUPABASE_SECRET_KEY (new secret key from Supabase)
 *    - NEXT_PUBLIC_SUPABASE_BUCKET=codexadigital
 * ───────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createClient } from "@supabase/supabase-js";

// ── Config ───────────────────────────────────────────────────────────────────
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
];

// Supabase configuration (new API keys)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
const supabaseBucket =
  process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "codexa";

// Initialize Supabase client
const getSupabaseClient = () => {
  // Use secret key for server-side operations
  if (supabaseSecretKey && supabaseUrl) {
    return createClient(supabaseUrl, supabaseSecretKey);
  }
  // Fall back to publishable key
  if (supabaseUrl && supabasePublishableKey) {
    return createClient(supabaseUrl, supabasePublishableKey);
  }
  return null;
};

// ── Helper: extension from MIME ─────────────────────────────────────────────
function extFromMime(mime: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
  };
  return map[mime] ?? "bin";
}

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/image-upload
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. Parse multipart form
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // 2. Validate MIME type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `File type "${file.type}" is not allowed` },
        { status: 415 },
      );
    }

    // 3. Validate file size
    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.byteLength > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "File exceeds the 5 MB size limit" },
        { status: 413 },
      );
    }

    // 4. Upload to Supabase Storage
    const url = await saveToSupabase(buffer, file.type);

    return NextResponse.json({ url }, { status: 200 });
  } catch (err) {
    console.error("[image-upload] unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Upload to Supabase Storage
// ─────────────────────────────────────────────────────────────────────────────
async function saveToSupabase(buffer: Buffer, mime: string): Promise<string> {
  const supabase = getSupabaseClient();

  // Check if Supabase is configured
  if (!supabase || !supabaseUrl) {
    console.warn("[image-upload] Supabase not configured, upload will fail");
    throw new Error(
      "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, and SUPABASE_SECRET_KEY",
    );
  }

  try {
    const filename = `${randomUUID()}.${extFromMime(mime)}`;
    const filePath = `uploads/${filename}`;

    console.log("[image-upload] Uploading to Supabase bucket:", supabaseBucket);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(supabaseBucket)
      .upload(filePath, buffer, {
        contentType: mime,
        upsert: false,
      });

    if (error) {
      console.error("[image-upload] Supabase upload error:", error);
      throw new Error(`Upload failed: ${error.message}`);
    }

    console.log("[image-upload] Upload successful:", data.path);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(supabaseBucket)
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  } catch (err) {
    console.error("[image-upload] Error:", err);
    throw err;
  }
}
