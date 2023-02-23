// import validator from 'is-my-json-valid';
import { dbGetCourse, dbGetQuesition } from '../models/ets.js';

const getCourse = async (req, res) => res.status(200).json(await dbGetCourse());

const getQuestion = async (req, res) => res.status(200).json(await dbGetQuesition());

export { getCourse, getQuestion };
