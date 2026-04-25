"use client";

import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface UploadedFile {
  filename: string;
  path: string;
  url: string;
  size: number;
}

interface ImageUploaderProps {
  onFilesUploaded: (files: UploadedFile[]) => void;
  multiple?: boolean;
  label?: string;
}

export function ImageUploader({
  onFilesUploaded,
  multiple = true,
  label,
}: ImageUploaderProps) {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      const validFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > 5 * 1024 * 1024) {
          toast({
            title: "File Too Large",
            description: `${file.name} exceeds 5MB limit`,
            variant: "destructive",
          });
          continue;
        }
        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
          toast({
            title: "Invalid File Type",
            description: `${file.name} is not a supported image format`,
            variant: "destructive",
          });
          continue;
        }
        validFiles.push(file);
      }

      if (validFiles.length === 0) return;

      setIsUploading(true);

      try {
        const formData = new FormData();
        validFiles.forEach((file) => formData.append("files", file));

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok) {
          toast({
            title: "Upload Failed",
            description: data.error || "Failed to upload images",
            variant: "destructive",
          });
          return;
        }

        const newFiles = multiple
          ? [...uploadedFiles, ...data.files]
          : [...data.files];
        setUploadedFiles(newFiles);
        onFilesUploaded(newFiles);

        toast({
          title: "Success",
          description: `${data.files.length} image(s) uploaded successfully`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to upload images",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
      }
    },
    [onFilesUploaded, toast, uploadedFiles, multiple],
  );

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (url: string) => {
    const filtered = uploadedFiles.filter((f) => f.url !== url);
    setUploadedFiles(filtered);
    onFilesUploaded(filtered);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {label || (multiple ? "Gallery Images" : "Featured Image")}
        </CardTitle>
        <CardDescription>
          Drag and drop images or click to select. Max 5MB per image.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input
            type="file"
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            disabled={isUploading}
            className="hidden"
            accept="image/jpeg,image/png,image/webp"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm font-medium text-gray-700">
              {isUploading
                ? "Uploading..."
                : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-gray-500">PNG, JPG or WebP (max. 5MB)</p>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Uploaded Images ({uploadedFiles.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedFiles.map((file) => (
                <div
                  key={file.url}
                  className="relative group rounded-lg overflow-hidden border"
                >
                  <Image
                    src={file.url}
                    alt={file.filename}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <button
                    onClick={() => removeFile(file.url)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                  <p className="text-xs text-gray-600 p-2 bg-gray-50 truncate">
                    {file.filename}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
