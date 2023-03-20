import supabase from '../config/supabaseClient.js';

const dbGetCourse = async () => {
  const { error, data } = await supabase.from('course').select();
  if (error) return error;
  return data;
};

const dbGetQuesition = async () => {
  const { error, data } = await supabase.from('question').select().order('questionid');
  if (error) return error;
  return data;
};

const dbGetAnswer = async () => {
  const { error, data } = await supabase.from('answer').select();
  if (error) return error;
  return data;
};

export { dbGetCourse, dbGetQuesition, dbGetAnswer };
