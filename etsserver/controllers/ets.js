import validator from 'is-my-json-valid';
import {
  dbGetCourse,
  dbGetQuestion,
  dbGetAnswer,
  dbGetGlobalInfo,
  dbGetRoomIm,
} from '../models/ets.js';

const getCourse = async (req, res) => res.status(200).json(await dbGetCourse());

const getQuestion = async (req, res) => res.status(200).json(await dbGetQuestion());

const getAnswer = async (req, res) => res.status(200).json(await dbGetAnswer());

const getGlobalInfo = async (req, res) => res.status(200).json(await dbGetGlobalInfo());

const getRoomIm = async (req, res) => {
  const room = await dbGetRoomIm(req.query.room);
  if (room.length <= 0) return res.status(404).send('Room not found!');
  res.status(200).json(room);
};

export { getCourse, getQuestion, getAnswer, getGlobalInfo, getRoomIm };
