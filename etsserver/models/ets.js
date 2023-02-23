import supabase from '../config/supabaseClient.js';

const dbGetCourse = async () => {
  const { error, data } = await supabase.from('course').select();
  if (error) return error;
  return data;
};

const dbGetQuesition = async () => {
  const { error, data } = await supabase.from('question').select();
  if (!error) return data;
  return error;
};

export { dbGetCourse, dbGetQuesition };
