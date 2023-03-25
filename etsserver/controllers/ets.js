// import validator from 'is-my-json-valid';
import {
  dbGetCourse,
  dbGetQuesitionChapter1,
  dbGetAnswer,
  dbGetUsers,
  dbGetChapter,
  dbGetTextData,
  dbGetQuestionType,
  dbGetNews,
  dbGetTag,
  dbInsertUser,
  dbGetUser,
} from '../models/ets.js';

const getCourse = async (req, res) => res.status(200).json(await dbGetCourse());

const getQuestionChapter1 = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json(await dbGetQuesitionChapter1(id));
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
  if (email !== getUser[0].email) {
    return res.status(200).json(await dbInsertUser(email, username));
  }
  return res.status(200).send('User exestiert bereits');
};

export {
  getCourse,
  getQuestionChapter1,
  getAnswer,
  getUser,
  getChapter,
  getTextData,
  getQuestionType,
  getNews,
  getTag,
  insertUser,
};
