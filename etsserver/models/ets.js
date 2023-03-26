import supabase from '../config/supabaseClient.js';

const dbGetCourse = async () => {
  const { error, data } = await supabase.from('course').select().order('courseid');
  if (error) return error;
  return data;
};

const dbGetQuesition = async (id) => {
  const { error, data } = await supabase
    .from('question')
    .select('*, questiontype:questiontypeid (questiontype)')
    .eq('chapterid', id)
    .order('questionid');
  if (error) return error;
  return data;
};

const dbGetAnswer = async () => {
  const { data, error } = await supabase.from('answer').select();
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
  const { data, error } = await supabase.from('tag').select('*');
  if (error) return error;
  return data;
};

const dbInsertUser = async (email, name) => {
  const { data, error } = await supabase
    .from('userinformation')
    .insert({ email: email, username: name });
  if (error) return error;
  return data;
};

const dbGetUser = async (email) => {
  const { error, data } = await supabase.from('userinformation').select().eq('email', email);
  if (error) return error;
  return data;
};

const dbGetChapterID = async (title) => {
  const { error, data } = await supabase.from('chapter').select('chapterid').eq('title', title);
  if (error) return error;
  return data;
};

const dbGetStory = async (id) => {
  const { error, data } = await supabase.from('story').select('*').eq('chapterid', id);
  if (error) return error;
  return data;
};

const dbGetLection = async (id) => {
  const { error, data } = await supabase.from('lection').select('*').eq('chapterid', id);
  if (error) return error;
  return data;
};

const dbGetUserDoneChapter = async (userid) => {
  const { data, error } = await supabase.from('userdonechapter').select('*').eq('userid', userid);
  if (error) return error;
  return data;
};

export {
  dbGetCourse,
  dbGetQuesition,
  dbGetAnswer,
  dbGetUsers,
  dbGetChapter,
  dbGetTextData,
  dbGetQuestionType,
  dbGetNews,
  dbGetTag,
  dbInsertUser,
  dbGetUser,
  dbGetStory,
  dbGetChapterID,
  dbGetLection,
  dbGetUserDoneChapter,
};
