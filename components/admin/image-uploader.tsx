// 'use client';

// import { useState, useCallback } from 'react';
// import { useToast } from '@/hooks/use-toast';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Upload, X, Loader2 } from 'lucide-react';
// import Image from 'next/image';

// interface UploadedFile {
//   filename: string;
//   path: string;
//   url: string;
//   size: number;
// }

// interface ImageUploaderProps {
//   onFilesUploaded: (files: UploadedFile[]) => void;
//   multiple?: boolean;
// }

// export function ImageUploader({ onFilesUploaded, multiple = true }: ImageUploaderProps) {
//   const { toast } = useToast();
//   const [isDragging, setIsDragging] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

//   const handleFiles = useCallback(
//     async (files: FileList | null) => {
//       if (!files || files.length === 0) return;

//       // Validate files
//       const validFiles: File[] = [];
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         if (file.size > 5 * 1024 * 1024) {
//           toast({
//             title: 'File Too Large',
//             description: `${file.name} exceeds 5MB limit`,
//             variant: 'destructive',
//           });
//           continue;
//         }

//         if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
//           toast({
//             title: 'Invalid File Type',
//             description: `${file.name} is not a supported image format`,
//             variant: 'destructive',
//           });
//           continue;
//         }

//         validFiles.push(file);
//       }

//       if (validFiles.length === 0) return;

//       setIsUploading(true);

//       try {
//         const formData = new FormData();
//         validFiles.forEach(file => {
//           formData.append('files', file);
//         });

//         const response = await fetch('/api/upload', {
//           method: 'POST',
//           body: formData,
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           toast({
//             title: 'Upload Failed',
//             description: data.error || 'Failed to upload images',
//             variant: 'destructive',
//           });
//           return;
//         }

//         setUploadedFiles(prev => [...prev, ...data.files]);
//         onFilesUploaded(data.files);

//         toast({
//           title: 'Success',
//           description: `${data.files.length} image(s) uploaded successfully`,
//         });
//       } catch (error) {
//         toast({
//           title: 'Error',
//           description: 'Failed to upload images',
//           variant: 'destructive',
//         });
//       } finally {
//         setIsUploading(false);
//       }
//     },
//     [onFilesUploaded, toast]
//   );

//   const handleDragEnter = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);
//     handleFiles(e.dataTransfer.files);
//   };

//   const removeFile = (url: string) => {
//     setUploadedFiles(prev => prev.filter(f => f.url !== url));
//   };

//   return (
//     <Card className="w-full border-slate-200">
//       <CardHeader>
//         <CardTitle>Upload Images</CardTitle>
//         <CardDescription>
//           Drag and drop images or click to select. Max 5MB per image.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div
//           onDragEnter={handleDragEnter}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//           className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
//             isDragging
//               ? 'border-blue-500 bg-blue-50'
//               : 'border-slate-300 bg-slate-50 hover:border-slate-400'
//           }`}
//         >
//           <input
//             type="file"
//             id="file-input"
//             multiple={multiple}
//             accept="image/jpeg,image/png,image/webp"
//             onChange={(e) => handleFiles(e.target.files)}
//             disabled={isUploading}
//             className="hidden"
//           />
//           <label
//             htmlFor="file-input"
//             className="flex flex-col items-center justify-center cursor-pointer"
//           >
//             <Upload className="h-8 w-8 text-slate-400 mb-2" />
//             <p className="text-sm font-medium text-slate-700">
//               {isUploading ? 'Uploading...' : 'Click to upload or drag and drop'}
//             </p>
//             <p className="text-xs text-slate-500 mt-1">
//               PNG, JPG or WebP (max. 5MB)
//             </p>
//           </label>
//         </div>

//         {uploadedFiles.length > 0 && (
//           <div className="space-y-2">
//             <h3 className="text-sm font-medium text-slate-700">
//               Uploaded Images ({uploadedFiles.length})
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {uploadedFiles.map((file) => (
//                 <div
//                   key={file.url}
//                   className="relative group border border-slate-200 rounded-lg overflow-hidden bg-slate-50"
//                 >
//                   <Image
//                     src={file.url}
//                     alt={file.filename}
//                     width={200}
//                     height={200}
//                     className="w-full h-32 object-cover"
//                   />
//                   <button
//                     onClick={() => removeFile(file.url)}
//                     className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                   <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
//                     {file.filename}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

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
    <Card className="w-full border-slate-200">
      <CardHeader>
        <CardTitle>
          {label || (multiple ? "Gallery Images" : "Featured Image")}
        </CardTitle>
        <CardDescription>
          Drag and drop images or click to select. Max 5MB per image.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-50 hover:border-slate-400"}`}
        >
          <input
            type="file"
            id={`file-input-${multiple ? "gallery" : "featured"}`}
            multiple={multiple}
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => handleFiles(e.target.files)}
            disabled={isUploading}
            className="hidden"
          />
          <label
            htmlFor={`file-input-${multiple ? "gallery" : "featured"}`}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Upload className="h-8 w-8 text-slate-400 mb-2" />
            <p className="text-sm font-medium text-slate-700">
              {isUploading
                ? "Uploading..."
                : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              PNG, JPG or WebP (max. 5MB)
            </p>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-slate-700">
              Uploaded Images ({uploadedFiles.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {uploadedFiles.map((file) => (
                <div
                  key={file.url}
                  className="relative group border border-slate-200 rounded-lg overflow-hidden bg-slate-50"
                >
                  <Image
                    src={file.url}
                    alt={file.filename}
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => removeFile(file.url)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                    {file.filename}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
