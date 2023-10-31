import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uovclouxbexcawmisbbe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvdmNsb3V4YmV4Y2F3bWlzYmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyODcwMzMsImV4cCI6MjAxMzg2MzAzM30.egYaBmadVXiBOaqV4pivkn-hT5cun5IPqgLckWgLP0A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})