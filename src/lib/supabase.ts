import { createClient } from '@supabase/supabase-js'

// Replace with your own values
const supabaseUrl = 'https://affocifovpghakhqvjva.supabase.co'
const supabaseAnonKey = 'sb_publishable_hoK8_szVEH-iw3kGohEHPg_uYEPKiYq



export const supabase = createClient(supabaseUrl, supabaseAnonKey)