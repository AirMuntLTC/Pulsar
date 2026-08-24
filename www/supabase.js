// Import Supabase from CDN for browser ES modules
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://djlnlxksldkwoanpxslz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_E4eCkNX9giaYBJEObwICbQ_U1IQeFEa'; // Put your actual key here

// Initialize and export the supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
