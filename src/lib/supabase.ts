import { createClient } from '@supabase/supabase-js'

// Replace with your own values
const supabaseUrl = 'https://affocifovpghakhqvjva.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZm9jaWZvdnBnaGFraHF2anZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTkyNDEsImV4cCI6MjA1Njk5NTI0MX0.n9YTaKNzSbPdl6Cs2fUyaRb8t5PS-Bs-9Pjuri7qJ_o'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)