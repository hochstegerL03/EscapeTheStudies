import validator from 'is-my-json-valid';
import { dbGetCourse, dbGetQuestion, dbGetAnswer, dbGetGlobalInfo } from '../models/ets.js';

const getCourse = async (req, res) => res.status(200).json(await dbGetCourse());

const getQuestion = async (req, res) => res.status(200).json(await dbGetQuestion());

const getAnswer = async (req, res) => res.status(200).json(await dbGetAnswer());

const getGlobalInfo = async (req, res) => res.status(200).json(await dbGetGlobalInfo());

export { getCourse, getQuestion, getAnswer, getGlobalInfo };
