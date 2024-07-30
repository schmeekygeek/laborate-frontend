import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_PROJECT_URL;
const ANON_KEY = import.meta.env.VITE_ANON_KEY;

export const supabase = createClient(URL, ANON_KEY);
