import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

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












const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


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

export async function submitPackageRequest(
  data: Omit<PackageRequest, 'id' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('package_requests').insert([data]);

    if (error) {
      console.error('Error submitting package request:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
