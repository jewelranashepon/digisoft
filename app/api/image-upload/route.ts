/**
 * app/api/upload/route.ts
 *
 * Next.js App Router image-upload API.
 *
 * ── Storage options ──────────────────────────────────────────────────────────
 *  A) LOCAL DISK (default, zero config, dev-friendly)
 *     Saves to  public/uploads/<uuid>.<ext>
 *     Served at /uploads/<uuid>.<ext>
 *
 *  B) AWS S3 / Cloudflare R2
 *     Install:   npm i @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
 *     Uncomment the S3 block below and set env vars.
 *
 *  C) Cloudinary
 *     Install:   npm i cloudinary
 *     Uncomment the Cloudinary block below and set env vars.
 * ────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// ── Config ────────────────────────────────────────────────────────────────────
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];

// ── Helper: extension from MIME ───────────────────────────────────────────────
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
// POST /api/upload
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
        { status: 415 }
      );
    }

    // 3. Validate file size
    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.byteLength > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "File exceeds the 5 MB size limit" },
        { status: 413 }
      );
    }

    // ── OPTION A: Local disk ─────────────────────────────────────────────────
    const url = await saveLocally(buffer, file.type);

    // ── OPTION B: AWS S3 / Cloudflare R2 ────────────────────────────────────
    // const url = await saveToS3(buffer, file.type);

    // ── OPTION C: Cloudinary ─────────────────────────────────────────────────
    // const url = await saveToCloudinary(buffer, file.type);

    return NextResponse.json({ url }, { status: 200 });
  } catch (err) {
    console.error("[upload] unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// OPTION A — Local disk
// ─────────────────────────────────────────────────────────────────────────────
async function saveLocally(buffer: Buffer, mime: string): Promise<string> {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const filename = `${randomUUID()}.${extFromMime(mime)}`;
  await writeFile(path.join(uploadDir, filename), buffer);

  // Return a public URL — Next.js serves /public as root
  return `/uploads/${filename}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// OPTION B — AWS S3 / Cloudflare R2
// Requires: npm i @aws-sdk/client-s3
// Env vars:  AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
//            S3_BUCKET_NAME, S3_PUBLIC_BASE_URL (e.g. https://cdn.example.com)
// ─────────────────────────────────────────────────────────────────────────────
/*
import {
  S3Client,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: process.env.AWS_REGION! });

async function saveToS3(buffer: Buffer, mime: string): Promise<string> {
  const key = `uploads/${randomUUID()}.${extFromMime(mime)}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: mime,
      ACL: "public-read",
    })
  );
  const base = process.env.S3_PUBLIC_BASE_URL!.replace(/\/$/, "");
  return `${base}/${key}`;
}
*/

// ─────────────────────────────────────────────────────────────────────────────
// OPTION C — Cloudinary
// Requires: npm i cloudinary
// Env vars:  CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
// ─────────────────────────────────────────────────────────────────────────────
/*
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function saveToCloudinary(buffer: Buffer, _mime: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog-uploads", resource_type: "image" },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error("Cloudinary upload failed"));
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}
*/