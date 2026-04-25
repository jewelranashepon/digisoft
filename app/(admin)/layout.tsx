// import { redirect } from "next/navigation";
// import { getAuthToken, verifyToken } from "@/lib/auth";
// import AdminSidebar from "@/components/admin/sidebar";
// import AdminHeader from "@/components/admin/header";
// import "../globals.css"; // Import CSS here so admin has styling

// export const metadata = {
//   title: "Blog Admin",
//   description: "Manage your blog posts and content",
// };

// export default async function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Auth Check: If no token or invalid, redirect to login
//   const token = await getAuthToken();
//   const isValid = token ? await verifyToken(token) : false;

//   if (!isValid) {
//     redirect("/login");
//   }

//   return (
//     <html lang="en">
//       <body className="bg-slate-100">
//         <div className="flex h-screen">
//           {/* Sidebar */}
//           <AdminSidebar />

//           {/* Main Content Area */}
//           <div className="flex-1 flex flex-col overflow-hidden">
//             <AdminHeader />
//             <main className="flex-1 overflow-auto p-6">{children}</main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/sidebar";
import AdminHeader from "@/components/admin/header";
import "@/app/globals.css";
import AuthProvider from "@/components/providers/SessionProvider";

export const metadata = {
  title: "Blog Admin",
  description: "Manage your blog posts and content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-slate-100">
        <AuthProvider>
          {" "}
          {/* Wraps the admin section in the NextAuth context */}
          <div className="flex h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <AdminHeader />
              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
