// import validator from 'is-my-json-valid';
import {
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
} from '../models/ets.js';

const getCourse = async (req, res) => res.status(200).json(await dbGetCourse());

const getQuestion = async (req, res) => {
  const title = req.query.title;
  const chapter = await dbGetChapterID(title);
  console.log(chapter);
  res.status(200).json(await dbGetQuesition(chapter[0].chapterid));
};

const getAnswer = async (req, res) => res.status(200).json(await dbGetAnswer());

const getUser = async (req, res) => res.status(200).json(await dbGetUsers());

const getChapter = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json(await dbGetChapter(id));
};

const getTextData = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json(await dbGetTextData(id));
};

const getQuestionType = async (req, res) => res.status(200).json(await dbGetQuestionType());

const getNews = async (req, res) => res.status(200).json(await dbGetNews());

const getTag = async (req, res) => res.status(200).json(await dbGetTag());

const insertUser = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const getUser = await dbGetUser(email);
  console.log(getUser.email);
  if (email !== getUser.email) {
    return res.status(200).json(await dbInsertUser(email, username));
  }
  return res.status(200).send('User exestiert bereits');
};

const getUserInfo = async (req, res) => {
  const email = req.body.email;
  return res.status(200).json(await dbGetUser(email));
};

const getStory = async (req, res) => {
  const title = req.query.title;
  const chapter = await dbGetChapterID(title);
  console.log(chapter);
  return res.status(200).json(await dbGetStory(chapter[0].chapterid));
};

const getLection = async (req, res) => {
  const title = req.query.title;
  const chapter = await dbGetChapterID(title);
  console.log(chapter);
  return res.status(200).json(await dbGetLection(chapter[0].chapterid));
};

const getUserDoneChapter = async (req, res) => {
  const id = req.params.id;
  return res.status(200).json(await dbGetUserDoneChapter(id));
};

export {
  getCourse,
  getQuestion,
  getAnswer,
  getUser,
  getChapter,
  getTextData,
  getQuestionType,
  getNews,
  getTag,
  insertUser,
  getStory,
  getLection,
  getUserInfo,
  getUserDoneChapter,
};
