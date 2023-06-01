import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://owszritxdwewqqziyhix.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93c3pyaXR4ZHdld3Fxeml5aGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzOTE5MDgsImV4cCI6MjAwMDk2NzkwOH0.WVGtFGJAcFfRY91BqtlKlmbsC3-nA3a0KE8Kb9i16pM", {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
