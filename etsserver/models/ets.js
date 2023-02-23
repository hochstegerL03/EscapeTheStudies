import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qyiwkgwvtdxnsowzibpm.supabase.co/';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const dbGetCourse = async () => {
  const { error, data } = await supabase.from('countries').select();
  if (!error) return data;
  return error;
};

export { dbGetCourse };
