import { createClient } from "@supabase/supabase-js";

// Load environment variables (new API key format)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Warning if env vars are missing (helps debugging)
if (!supabaseUrl || !supabasePublishableKey) {
  console.warn(
    "⚠️ Supabase environment variables are missing. " +
      "Some features may fail at runtime. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set.",
  );
}

// Create Supabase client safely
export const supabase = createClient(
  supabaseUrl ?? "",
  supabasePublishableKey ?? "",
);

// Type for Blog posts
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  date: string;
  created_at: string;
  updated_at: string;
};

// Type for package requests
export interface PackageRequest {
  id?: string;
  business_name: string;
  email: string;
  phone?: string;
  message?: string;
  selected_services: string[];
  total_price: number;
  package_type?: string;
  created_at?: string;
  updated_at?: string;
}

// Function to submit a package request
export async function submitPackageRequest(
  data: Omit<PackageRequest, "id" | "created_at" | "updated_at">,
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      // Fail gracefully if Supabase is not configured
      return { success: false, error: "Supabase is not configured properly." };
    }

    const { error } = await supabase.from("package_requests").insert([data]);

    if (error) {
      console.error("Error submitting package request:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}
