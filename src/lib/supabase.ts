
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ykxujzltlbynlvpernao.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlreHVqemx0bGJ5bmx2cGVybmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NDU4MzgsImV4cCI6MjAyNjQyMTgzOH0.xPFInRFUO7IRtzJTTXetJaVFrJxWZY9QB14eX_pCvCk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
