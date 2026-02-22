import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Setup Prisma with the PG Pool adapter
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // 1. Find the admin in the database
        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (!admin) {
          throw new Error("No admin found with this email");
        }

        // 2. Verify the password
        const isValid = await bcrypt.compare(
          credentials.password,
          admin.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        // 3. Return the user object (this goes to the JWT callback)
        return {
          id: admin.id.toString(),
          email: admin.email,
          name: admin.name,
        };
      },
    }),
  ],

  // CALLBACKS: This is the bridge between the Login and the Middleware
  callbacks: {
    async jwt({ token, user }) {
      // On initial login, 'user' is the object returned from authorize()
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Make the ID available in the client-side session
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },

  pages: {
    signIn: "/login",
    error: "/login", // Redirect to login on auth errors
  },

  // Secret is required for production and JWT encryption
  secret: process.env.NEXTAUTH_SECRET,

  // Fix for local development redirect loops
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },
});

export { handler as GET, handler as POST };