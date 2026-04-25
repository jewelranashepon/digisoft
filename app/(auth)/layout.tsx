// import "../globals.css"; // Ensure path is correct to your CSS

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50 w-full">
//         <div className="min-h-screen w-full flex items-center justify-center">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }

import "@/app/globals.css"; // Note the @ path to avoid relative depth issues

export const metadata = {
  title: "Admin Login | Codexa Digital",
  description: "Secure access to the blog management panel",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* No Header or Footer here - fully isolated */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
