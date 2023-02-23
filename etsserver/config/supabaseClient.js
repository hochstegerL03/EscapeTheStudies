import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
console.log(supabaseUrl);
const supabaseKey = process.env.REACT_APP_ANON_KEY;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
