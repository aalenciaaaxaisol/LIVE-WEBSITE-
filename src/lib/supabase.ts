import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a mock client if environment variables are not set
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

// Mock function for when Supabase is not configured
export const mockSupabaseOperation = async (data: any) => {
  console.log('Mock Supabase operation:', data);
  return { data: null, error: null };
};