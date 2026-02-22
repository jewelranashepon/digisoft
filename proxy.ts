import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // This function only runs if 'authorized' returns true
    console.log("User authorized, accessing path:", req.nextUrl.pathname);
    // 👇 এখানে add করো
    console.log("Headers:", req.headers.get("cookie"));

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Log the token to your terminal to verify it's not null
        console.log("Proxy Check - Token:", token ? "Found" : "Missing");

        // If the token exists, the user is authenticated and can proceed
        return !!token;
      },
    },
    pages: {
      // If unauthorized, redirect to this custom login page
      signIn: "/login",
    },
  },
);

// This ensures the proxy only protects your admin dashboard
export const config = {
  matcher: ["/admin/:path*"],
};
