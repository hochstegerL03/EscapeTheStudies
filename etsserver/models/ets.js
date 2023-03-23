import supabase from '../config/supabaseClient.js';

const dbGetCourse = async () => {
  const { error, data } = await supabase.from('course').select().order('courseid');
  if (error) return error;
  return data;
};

const dbGetQuesitionChapter1 = async (chapId) => {
  const { error, data } = await supabase
    .from('question')
    .select('*, questiontype:questiontypeid (questiontype)')
    .eq('chapterid', chapId)
    .order('questionid');
  if (error) return error;
  return data;
};

const dbGetAnswer = async () => {
  // const { error, data } = await supabase.from('answers').select().order('answerid');
  // if (error) return error;
  // return data;
  const { data, error } = await supabase
    .from('answers')
    .select(
      'answerid,questionid,answeroptions,answershowed,correctanswer,question:questionid ( question )',
    );
  if (error) return error;
  return data;
};

const dbGetUsers = async () => {
  const { data, error } = await supabase.from('userinformation').select();
  if (error) return error;
  return data;
};

const dbGetChapter = async (chapId) => {
  const { data, error } = await supabase.from('chapter').select().eq('courseid', chapId);
  if (error) return error;
  return data;
};

const dbGetTextData = async (sectId) => {
  const { data, error } = await supabase
    .from('textdata')
    .select(`textid, isheader, text, section:sectionid ( section )`)
    .eq('sectionid', sectId);
  if (error) return error;
  return data;
};

const dbGetQuestionType = async () => {
  const { data, error } = await supabase.from('questiontype').select().order('questiontypeid');
  if (error) return error;
  return data;
};

const dbGetNews = async () => {
  const { data, error } = await supabase.from('news').select();
  if (error) return error;
  return data;
};

const dbGetTag = async () => {
  const { data, error } = await supabase.from('question').select();
  if (error) return error;
  return data;
};

export {
  dbGetCourse,
  dbGetQuesitionChapter1,
  dbGetAnswer,
  dbGetUsers,
  dbGetChapter,
  dbGetTextData,
  dbGetQuestionType,
  dbGetNews,
  dbGetTag,
};
