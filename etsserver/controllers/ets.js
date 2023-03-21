// import validator from 'is-my-json-valid';
import {
  dbGetCourse,
  dbGetQuesitionChapter1,
  dbGetAnswer,
  dbGetUsers,
  dbGetChapter,
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

export { getCourse, getQuestionChapter1, getAnswer, getUser, getChapter };
