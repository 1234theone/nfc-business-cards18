// ============================================
// Your Supabase project connection
// ============================================

const SUPABASE_URL = "https://bkphaxewfxuoiqgzmvuw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Oq_M1EvPFpGqYCdv_oETiw_6RqxV22W";

// Don't touch anything below this line
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
