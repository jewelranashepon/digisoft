// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Image from "@tiptap/extension-image";
// import Link from "@tiptap/extension-link";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Highlight from "@tiptap/extension-highlight";
// import Placeholder from "@tiptap/extension-placeholder";
// import HorizontalRule from "@tiptap/extension-horizontal-rule";
// import Dropcursor from "@tiptap/extension-dropcursor";

// import { useRef, useCallback } from "react";

// interface Props {
//   value: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
// }

// // Toolbar button component
// function ToolbarButton({
//   onClick,
//   isActive = false,
//   title,
//   children,
//   className = "",
// }: {
//   onClick: () => void;
//   isActive?: boolean;
//   title: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       title={title}
//       className={`
//         inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-medium
//         transition-all duration-150 select-none
//         ${isActive
//           ? "bg-indigo-600 text-white shadow-inner"
//           : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
//         }
//         ${className}
//       `}
//     >
//       {children}
//     </button>
//   );
// }

// function Divider() {
//   return <div className="w-px h-6 bg-slate-200 mx-1 self-center" />;
// }

// export function TiptapEditor({
//   value,
//   onChange,
//   placeholder = "Write your blog content here...",
// }: Props) {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         horizontalRule: false,
//       }),
//       Image.configure({
//         HTMLAttributes: {
//           class: "max-w-full rounded-lg my-4",
//         },
//       }),
//       Link.configure({
//         openOnClick: false,
//         HTMLAttributes: {
//           class: "text-indigo-600 underline underline-offset-2 cursor-pointer hover:text-indigo-800",
//         },
//       }),
//       Underline,
//       Highlight.configure({
//         HTMLAttributes: {
//           class: "bg-yellow-200 text-yellow-900 rounded px-0.5",
//         },
//       }),
//       HorizontalRule,
//       Dropcursor,
//       TextAlign.configure({
//         types: ["heading", "paragraph"],
//       }),
//       Placeholder.configure({
//         placeholder,
//       }),
//     ],
//     content: value,
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         class: `
//           prose prose-slate max-w-none w-full min-h-[400px] focus:outline-none px-1
//           prose-headings:font-bold prose-headings:text-slate-900
//           prose-h1:text-3xl prose-h2:text-2xl
//           prose-p:text-slate-700 prose-p:leading-relaxed
//           prose-strong:text-slate-900 prose-strong:font-semibold
//           prose-em:text-slate-700
//           prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
//           prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4
//           prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:text-slate-600
//           prose-ul:list-disc prose-ul:pl-6
//           prose-ol:list-decimal prose-ol:pl-6
//           prose-li:text-slate-700
//           prose-hr:border-slate-200
//           prose-img:rounded-lg prose-img:shadow-md
//           prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
//         `.replace(/\s+/g, " ").trim(),
//       },
//     },
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   const uploadImage = useCallback(
//     async (file: File) => {
//       if (!editor) return;
//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const res = await fetch("/api/upload", {
//           method: "POST",
//           body: formData,
//         });
//         const data = await res.json();
//         editor.chain().focus().setImage({ src: data.url }).run();
//       } catch (err) {
//         console.error("Image upload failed:", err);
//       }
//     },
//     [editor]
//   );

//   const setLink = useCallback(() => {
//     if (!editor) return;
//     const previousUrl = editor.getAttributes("link").href;
//     const url = window.prompt("Enter URL", previousUrl);
//     if (url === null) return;
//     if (url === "") {
//       editor.chain().focus().extendMarkRange("link").unsetLink().run();
//       return;
//     }
//     editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
//   }, [editor]);

//   if (!editor) return null;

//   return (
//     <div className="w-full rounded-xl border border-slate-200 shadow-sm bg-white overflow-hidden">
//       {/* Toolbar */}
//       <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-slate-200 bg-slate-50">

//         {/* History */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().undo().run()}
//           title="Undo (Ctrl+Z)"
//           isActive={false}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M3 7v6h6" /><path d="M3 13A9 9 0 1 0 5.18 6.18" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().redo().run()}
//           title="Redo (Ctrl+Y)"
//           isActive={false}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M21 7v6h-6" /><path d="M21 13A9 9 0 1 1 18.82 6.18" />
//           </svg>
//         </ToolbarButton>

//         <Divider />

//         {/* Headings */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//           isActive={editor.isActive("heading", { level: 1 })}
//           title="Heading 1"
//         >
//           <span className="font-bold text-xs leading-none">H1</span>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//           isActive={editor.isActive("heading", { level: 2 })}
//           title="Heading 2"
//         >
//           <span className="font-bold text-xs leading-none">H2</span>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//           isActive={editor.isActive("heading", { level: 3 })}
//           title="Heading 3"
//         >
//           <span className="font-bold text-xs leading-none">H3</span>
//         </ToolbarButton>

//         <Divider />

//         {/* Text Formatting */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleBold().run()}
//           isActive={editor.isActive("bold")}
//           title="Bold (Ctrl+B)"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//             <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//           isActive={editor.isActive("italic")}
//           title="Italic (Ctrl+I)"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleUnderline().run()}
//           isActive={editor.isActive("underline")}
//           title="Underline (Ctrl+U)"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><line x1="4" y1="21" x2="20" y2="21" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleStrike().run()}
//           isActive={editor.isActive("strike")}
//           title="Strikethrough"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M16 4H9a3 3 0 0 0-2.83 4" /><path d="M14 12a4 4 0 0 1 0 8H6" /><line x1="4" y1="12" x2="20" y2="12" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleHighlight().run()}
//           isActive={editor.isActive("highlight")}
//           title="Highlight"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="m9 11-6 6v3h9l3-3" /><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
//           </svg>
//         </ToolbarButton>

//         <Divider />

//         {/* Alignment */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().setTextAlign("left").run()}
//           isActive={editor.isActive({ textAlign: "left" })}
//           title="Align Left"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="21" y1="6" x2="3" y2="6" /><line x1="15" y1="12" x2="3" y2="12" /><line x1="17" y1="18" x2="3" y2="18" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().setTextAlign("center").run()}
//           isActive={editor.isActive({ textAlign: "center" })}
//           title="Align Center"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="21" y1="6" x2="3" y2="6" /><line x1="18" y1="12" x2="6" y2="12" /><line x1="21" y1="18" x2="3" y2="18" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().setTextAlign("right").run()}
//           isActive={editor.isActive({ textAlign: "right" })}
//           title="Align Right"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="12" x2="9" y2="12" /><line x1="21" y1="18" x2="7" y2="18" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().setTextAlign("justify").run()}
//           isActive={editor.isActive({ textAlign: "justify" })}
//           title="Justify"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="12" x2="3" y2="12" /><line x1="21" y1="18" x2="3" y2="18" />
//           </svg>
//         </ToolbarButton>

//         <Divider />

//         {/* Lists */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//           isActive={editor.isActive("bulletList")}
//           title="Bullet List"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
//             <circle cx="4" cy="6" r="1" fill="currentColor" /><circle cx="4" cy="12" r="1" fill="currentColor" /><circle cx="4" cy="18" r="1" fill="currentColor" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//           isActive={editor.isActive("orderedList")}
//           title="Numbered List"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
//             <path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
//           </svg>
//         </ToolbarButton>

//         <Divider />

//         {/* Code & Blockquote */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleCode().run()}
//           isActive={editor.isActive("code")}
//           title="Inline Code"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           isActive={editor.isActive("codeBlock")}
//           title="Code Block"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <rect x="2" y="3" width="20" height="18" rx="2" /><path d="m8 10-2 2 2 2" /><path d="m16 10 2 2-2 2" /><path d="m12 7-2 9" />
//           </svg>
//         </ToolbarButton>
//         <ToolbarButton
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//           isActive={editor.isActive("blockquote")}
//           title="Blockquote"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
//             <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
//           </svg>
//         </ToolbarButton>

//         <Divider />

//         {/* HR & Link & Image */}
//         <ToolbarButton
//           onClick={() => editor.chain().focus().setHorizontalRule().run()}
//           isActive={false}
//           title="Horizontal Rule"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//         </ToolbarButton>

//         <ToolbarButton
//           onClick={setLink}
//           isActive={editor.isActive("link")}
//           title="Add Link"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
//             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
//           </svg>
//         </ToolbarButton>

//         {editor.isActive("link") && (
//           <ToolbarButton
//             onClick={() => editor.chain().focus().unsetLink().run()}
//             isActive={false}
//             title="Remove Link"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//               <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
//               <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
//               <line x1="8" y1="2" x2="8" y2="5" /><line x1="2" y1="8" x2="5" y2="8" />
//               <line x1="16" y1="19" x2="16" y2="22" /><line x1="19" y1="16" x2="22" y2="16" />
//             </svg>
//           </ToolbarButton>
//         )}

//         <ToolbarButton
//           onClick={() => fileInputRef.current?.click()}
//           isActive={false}
//           title="Upload Image"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//             <circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
//           </svg>
//         </ToolbarButton>

//         <ToolbarButton
//           onClick={() => {
//             const url = window.prompt("Enter image URL");
//             if (url) editor.chain().focus().setImage({ src: url }).run();
//           }}
//           isActive={false}
//           title="Insert Image URL"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//             <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
//             <line x1="16" y1="5" x2="22" y2="5" /><line x1="19" y1="2" x2="19" y2="8" />
//             <circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//           </svg>
//         </ToolbarButton>

//         <input
//           type="file"
//           hidden
//           ref={fileInputRef}
//           accept="image/*"
//           onChange={(e) => {
//             if (e.target.files?.[0]) {
//               uploadImage(e.target.files[0]);
//               // reset so the same file can be selected again
//               e.target.value = "";
//             }
//           }}
//         />
//       </div>

//       {/* Character count bar */}
//       <div className="px-4 py-1.5 bg-slate-50 border-b border-slate-100 flex items-center gap-4 text-xs text-slate-400">
//         <span>{editor.storage.characterCount?.characters?.() ?? editor.getText().length} characters</span>
//         <span>{editor.storage.characterCount?.words?.() ?? editor.getText().split(/\s+/).filter(Boolean).length} words</span>
//       </div>

//       {/* Editor area */}
//       <div className="p-6 min-h-[420px] bg-white">
//         <EditorContent editor={editor} />
//       </div>

//       {/* Footer hint */}
//       <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-400">
//         <span>Tip: Select text to format · Drag &amp; drop images · Use Ctrl+Z to undo</span>
//         <span className="flex items-center gap-1">
//           <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
//           Auto-saving
//         </span>
//       </div>

//       {/* Tiptap prose styles — injected globally once */}
//       <style>{`
//         .tiptap p.is-editor-empty:first-child::before {
//           color: #94a3b8;
//           content: attr(data-placeholder);
//           float: left;
//           height: 0;
//           pointer-events: none;
//         }
//         .tiptap:focus {
//           outline: none;
//         }
//         .tiptap img.ProseMirror-selectednode {
//           outline: 3px solid #6366f1;
//           outline-offset: 2px;
//           border-radius: 8px;
//         }
//         .tiptap .ProseMirror-gapcursor {
//           display: none;
//         }
//         .tiptap p { margin-bottom: 0.75rem; }
//         .tiptap h1 { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; margin-top: 1.5rem; color: #0f172a; line-height: 1.2; }
//         .tiptap h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; margin-top: 1.25rem; color: #1e293b; line-height: 1.3; }
//         .tiptap h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1rem; color: #1e293b; }
//         .tiptap ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 0.75rem; }
//         .tiptap ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 0.75rem; }
//         .tiptap li { margin-bottom: 0.25rem; color: #475569; }
//         .tiptap blockquote { border-left: 4px solid #818cf8; background: #eef2ff; border-radius: 0 8px 8px 0; padding: 0.75rem 1rem; margin: 1rem 0; color: #4338ca; font-style: normal; }
//         .tiptap pre { background: #0f172a; color: #e2e8f0; padding: 1rem; border-radius: 12px; margin: 1rem 0; overflow-x: auto; font-size: 0.875rem; font-family: monospace; }
//         .tiptap code:not(pre code) { background: #f1f5f9; color: #be185d; border-radius: 4px; padding: 2px 6px; font-size: 0.875em; font-family: monospace; }
//         .tiptap hr { border: none; border-top: 2px solid #e2e8f0; margin: 1.5rem 0; }
//         .tiptap a { color: #4f46e5; text-decoration: underline; text-underline-offset: 2px; }
//         .tiptap a:hover { color: #3730a3; }
//         .tiptap mark { background: #fef08a; color: #713f12; border-radius: 2px; padding: 0 2px; }
//         .tiptap img { max-width: 100%; border-radius: 8px; margin: 1rem 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
//       `}</style>
//     </div>
//   );
// }






"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Dropcursor from "@tiptap/extension-dropcursor";

import { useRef, useCallback, useState, useEffect } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Toolbar button component
function ToolbarButton({
  onClick,
  isActive = false,
  title,
  children,
  className = "",
}: {
  onClick: () => void;
  isActive?: boolean;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`
        inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-medium
        transition-all duration-150 select-none
        ${isActive
          ? "bg-indigo-600 text-white shadow-inner"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-6 bg-slate-200 mx-1 self-center" />;
}

export function TiptapEditor({
  value,
  onChange,
  placeholder = "Write your blog content here...",
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // ─── Core upload function ───────────────────────────────────────────────────
  const uploadImageFile = useCallback(
    async (file: File): Promise<string | null> => {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setUploadError("Only image files are allowed.");
        return null;
      }
      // Validate file size (max 5 MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("Image must be smaller than 5 MB.");
        return null;
      }

      const formData = new FormData();
      formData.append("file", file);

      setIsUploading(true);
      setUploadError(null);

      try {
        const res = await fetch("/api/image-upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error ?? `Upload failed (${res.status})`);
        }

        const data = await res.json();
        return data.url as string;
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Upload failed";
        setUploadError(message);
        return null;
      } finally {
        setIsUploading(false);
      }
    },
    []
  );

  // Insert image URL into editor
  const insertImage = useCallback(
    (editor: ReturnType<typeof useEditor>, src: string) => {
      if (!editor) return;
      editor.chain().focus().setImage({ src }).run();
    },
    []
  );

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ horizontalRule: false }),
      Image.configure({
        HTMLAttributes: { class: "max-w-full rounded-lg my-4" },
        // Allow inline images
        inline: false,
        allowBase64: true, // allow base64 preview while uploading
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            "text-indigo-600 underline underline-offset-2 cursor-pointer hover:text-indigo-800",
        },
      }),
      Underline,
      Highlight.configure({
        HTMLAttributes: { class: "bg-yellow-200 text-yellow-900 rounded px-0.5" },
      }),
      HorizontalRule,
      Dropcursor,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `
          prose prose-slate max-w-none w-full min-h-[400px] focus:outline-none px-1
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h1:text-3xl prose-h2:text-2xl
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-em:text-slate-700
          prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4
          prose-blockquote:border-l-4 prose-blockquote:border-indigo-400 prose-blockquote:bg-indigo-50 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:text-slate-600
          prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-slate-700 prose-hr:border-slate-200
          prose-img:rounded-lg prose-img:shadow-md
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
        `
          .replace(/\s+/g, " ")
          .trim(),
      },
      // ── Handle paste events (images pasted from clipboard) ─────────────────
      handlePaste(view, event) {
        const items = Array.from(event.clipboardData?.items ?? []);
        const imageItem = items.find((i) => i.type.startsWith("image/"));
        if (!imageItem) return false; // let Tiptap handle non-image pastes

        event.preventDefault();
        const file = imageItem.getAsFile();
        if (!file) return true;

        // Show base64 preview instantly, then swap with uploaded URL
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = e.target?.result as string;
          // Insert preview
          view.dispatch(
            view.state.tr.replaceSelectionWith(
              view.state.schema.nodes.image.create({ src: base64 })
            )
          );

          // Upload and replace base64 with real URL
          const url = await uploadImageFile(file);
          if (url) {
            // Find the base64 node and replace its src
            const { state } = view;
            state.doc.descendants((node, pos) => {
              if (
                node.type.name === "image" &&
                node.attrs.src === base64
              ) {
                view.dispatch(
                  state.tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    src: url,
                  })
                );
                return false;
              }
            });
          }
        };
        reader.readAsDataURL(file);
        return true;
      },

      // ── Handle native browser drop into the ProseMirror area ───────────────
      handleDrop(view, event, _slice, moved) {
        if (moved) return false; // let Tiptap handle moving existing content
        const files = Array.from(event.dataTransfer?.files ?? []).filter((f) =>
          f.type.startsWith("image/")
        );
        if (!files.length) return false;

        event.preventDefault();

        // Get drop position
        const coordinates = view.posAtCoords({
          left: event.clientX,
          top: event.clientY,
        });

        files.forEach(async (file) => {
          const url = await uploadImageFile(file);
          if (!url) return;
          const { schema } = view.state;
          const node = schema.nodes.image.create({ src: url });
          const transaction = view.state.tr.insert(
            coordinates?.pos ?? view.state.doc.content.size,
            node
          );
          view.dispatch(transaction);
        });

        return true;
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // ─── Drag-and-drop on the outer wrapper (for the toolbar / empty area) ──────
  useEffect(() => {
    const wrapper = editorWrapperRef.current;
    if (!wrapper || !editor) return;

    const onDragOver = (e: DragEvent) => {
      const hasFiles = Array.from(e.dataTransfer?.items ?? []).some((i) =>
        i.type.startsWith("image/")
      );
      if (!hasFiles) return;
      e.preventDefault();
      e.dataTransfer!.dropEffect = "copy";
      setIsDraggingOver(true);
    };

    const onDragLeave = (e: DragEvent) => {
      // Only clear when leaving the wrapper entirely
      if (!wrapper.contains(e.relatedTarget as Node)) {
        setIsDraggingOver(false);
      }
    };

    const onDrop = async (e: DragEvent) => {
      setIsDraggingOver(false);
      const files = Array.from(e.dataTransfer?.files ?? []).filter((f) =>
        f.type.startsWith("image/")
      );
      if (!files.length) return;
      e.preventDefault();

      for (const file of files) {
        const url = await uploadImageFile(file);
        if (url) insertImage(editor, url);
      }
    };

    wrapper.addEventListener("dragover", onDragOver);
    wrapper.addEventListener("dragleave", onDragLeave);
    wrapper.addEventListener("drop", onDrop);

    return () => {
      wrapper.removeEventListener("dragover", onDragOver);
      wrapper.removeEventListener("dragleave", onDragLeave);
      wrapper.removeEventListener("drop", onDrop);
    };
  }, [editor, uploadImageFile, insertImage]);

  // ─── Toolbar helpers ─────────────────────────────────────────────────────────
  const handleFileInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      e.target.value = ""; // reset so same file can be re-selected
      for (const file of files) {
        const url = await uploadImageFile(file);
        if (url && editor) insertImage(editor, url);
      }
    },
    [editor, uploadImageFile, insertImage]
  );

  const handleImageUrlInsert = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter image URL");
    if (url?.trim()) insertImage(editor, url.trim());
  }, [editor, insertImage]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const charCount = editor.getText().length;
  const wordCount = editor.getText().split(/\s+/).filter(Boolean).length;

  return (
    <div
      ref={editorWrapperRef}
      className={`
        w-full rounded-xl border shadow-sm bg-white overflow-hidden relative
        transition-colors duration-150
        ${isDraggingOver ? "border-indigo-400 ring-2 ring-indigo-200" : "border-slate-200"}
      `}
    >
      {/* Drag overlay */}
      {isDraggingOver && (
        <div className="absolute inset-0 z-50 bg-indigo-50/80 flex flex-col items-center justify-center pointer-events-none rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-indigo-400 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-indigo-600 font-medium text-sm">
            Drop image to upload
          </span>
        </div>
      )}

      {/* Upload progress overlay */}
      {isUploading && (
        <div className="absolute top-0 left-0 right-0 z-40">
          <div className="h-1 bg-indigo-100">
            <div className="h-1 bg-indigo-500 animate-pulse w-full" />
          </div>
          <div className="flex items-center gap-2 px-4 py-1 bg-indigo-50 text-xs text-indigo-600">
            <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Uploading image…
          </div>
        </div>
      )}

      {/* Upload error */}
      {uploadError && (
        <div className="flex items-center gap-2 px-4 py-1.5 bg-red-50 border-b border-red-100 text-xs text-red-600">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {uploadError}
          <button
            type="button"
            className="ml-auto text-red-400 hover:text-red-600"
            onClick={() => setUploadError(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Toolbar ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-slate-200 bg-slate-50">
        {/* History */}
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo (Ctrl+Z)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 7v6h6" /><path d="M3 13A9 9 0 1 0 5.18 6.18" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo (Ctrl+Y)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M21 7v6h-6" /><path d="M21 13A9 9 0 1 1 18.82 6.18" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* Headings */}
        {[1, 2, 3].map((level) => (
          <ToolbarButton
            key={level}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: level as 1 | 2 | 3 })
                .run()
            }
            isActive={editor.isActive("heading", { level })}
            title={`Heading ${level}`}
          >
            <span className="font-bold text-xs leading-none">H{level}</span>
          </ToolbarButton>
        ))}

        <Divider />

        {/* Text Formatting */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold (Ctrl+B)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic (Ctrl+I)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline (Ctrl+U)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><line x1="4" y1="21" x2="20" y2="21" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive("strike")} title="Strikethrough">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M16 4H9a3 3 0 0 0-2.83 4" /><path d="M14 12a4 4 0 0 1 0 8H6" /><line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive("highlight")} title="Highlight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="m9 11-6 6v3h9l3-3" /><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* Alignment */}
        {(["left", "center", "right", "justify"] as const).map((align) => (
          <ToolbarButton
            key={align}
            onClick={() => editor.chain().focus().setTextAlign(align).run()}
            isActive={editor.isActive({ textAlign: align })}
            title={`Align ${align}`}
          >
            {align === "left" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="21" y1="6" x2="3" y2="6" /><line x1="15" y1="12" x2="3" y2="12" /><line x1="17" y1="18" x2="3" y2="18" />
              </svg>
            )}
            {align === "center" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="21" y1="6" x2="3" y2="6" /><line x1="18" y1="12" x2="6" y2="12" /><line x1="21" y1="18" x2="3" y2="18" />
              </svg>
            )}
            {align === "right" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="12" x2="9" y2="12" /><line x1="21" y1="18" x2="7" y2="18" />
              </svg>
            )}
            {align === "justify" && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="12" x2="3" y2="12" /><line x1="21" y1="18" x2="3" y2="18" />
              </svg>
            )}
          </ToolbarButton>
        ))}

        <Divider />

        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")} title="Bullet List">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
            <circle cx="4" cy="6" r="1" fill="currentColor" /><circle cx="4" cy="12" r="1" fill="currentColor" /><circle cx="4" cy="18" r="1" fill="currentColor" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")} title="Numbered List">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
            <path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* Code & Blockquote */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive("code")} title="Inline Code">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} isActive={editor.isActive("codeBlock")} title="Code Block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="2" y="3" width="20" height="18" rx="2" /><path d="m8 10-2 2 2 2" /><path d="m16 10 2 2-2 2" /><path d="m12 7-2 9" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive("blockquote")} title="Blockquote">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </ToolbarButton>

        <Divider />

        {/* HR, Link, Image */}
        <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </ToolbarButton>

        <ToolbarButton onClick={setLink} isActive={editor.isActive("link")} title="Add Link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </ToolbarButton>

        {editor.isActive("link") && (
          <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} title="Remove Link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
              <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
              <line x1="8" y1="2" x2="8" y2="5" /><line x1="2" y1="8" x2="5" y2="8" />
              <line x1="16" y1="19" x2="16" y2="22" /><line x1="19" y1="16" x2="22" y2="16" />
            </svg>
          </ToolbarButton>
        )}

        {/* Upload from disk */}
        <ToolbarButton
          onClick={() => fileInputRef.current?.click()}
          isActive={false}
          title="Upload Image from Disk"
          className={isUploading ? "opacity-50 cursor-not-allowed" : ""}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
          </svg>
        </ToolbarButton>

        {/* Insert by URL */}
        <ToolbarButton onClick={handleImageUrlInsert} isActive={false} title="Insert Image by URL">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
            <line x1="16" y1="5" x2="22" y2="5" /><line x1="19" y1="2" x2="19" y2="8" />
            <circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </ToolbarButton>

        <input
          type="file"
          hidden
          ref={fileInputRef}
          accept="image/*"
          multiple
          onChange={handleFileInputChange}
        />
      </div>

      {/* Character / word count bar */}
      <div className="px-4 py-1.5 bg-slate-50 border-b border-slate-100 flex items-center gap-4 text-xs text-slate-400">
        <span>{charCount} characters</span>
        <span>{wordCount} words</span>
      </div>

      {/* Editor area */}
      <div className="p-6 min-h-[420px] bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-400">
        <span>
          Tip: Drag &amp; drop images anywhere · Paste images from clipboard · Select text to format
        </span>
        <span className="flex items-center gap-1">
          <span
            className={`w-2 h-2 rounded-full inline-block ${
              isUploading ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
            }`}
          />
          {isUploading ? "Uploading…" : "Auto-saving"}
        </span>
      </div>

      <style>{`
        .tiptap p.is-editor-empty:first-child::before {
          color: #94a3b8;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .tiptap:focus { outline: none; }
        .tiptap img.ProseMirror-selectednode {
          outline: 3px solid #6366f1;
          outline-offset: 2px;
          border-radius: 8px;
        }
        .tiptap p { margin-bottom: 0.75rem; }
        .tiptap h1 { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; margin-top: 1.5rem; color: #0f172a; line-height: 1.2; }
        .tiptap h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; margin-top: 1.25rem; color: #1e293b; line-height: 1.3; }
        .tiptap h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1rem; color: #1e293b; }
        .tiptap ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .tiptap ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .tiptap li { margin-bottom: 0.25rem; color: #475569; }
        .tiptap blockquote { border-left: 4px solid #818cf8; background: #eef2ff; border-radius: 0 8px 8px 0; padding: 0.75rem 1rem; margin: 1rem 0; color: #4338ca; font-style: normal; }
        .tiptap pre { background: #0f172a; color: #e2e8f0; padding: 1rem; border-radius: 12px; margin: 1rem 0; overflow-x: auto; font-size: 0.875rem; font-family: monospace; }
        .tiptap code:not(pre code) { background: #f1f5f9; color: #be185d; border-radius: 4px; padding: 2px 6px; font-size: 0.875em; font-family: monospace; }
        .tiptap hr { border: none; border-top: 2px solid #e2e8f0; margin: 1.5rem 0; }
        .tiptap a { color: #4f46e5; text-decoration: underline; text-underline-offset: 2px; }
        .tiptap a:hover { color: #3730a3; }
        .tiptap mark { background: #fef08a; color: #713f12; border-radius: 2px; padding: 0 2px; }
        .tiptap img { max-width: 100%; border-radius: 8px; margin: 1rem 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
}