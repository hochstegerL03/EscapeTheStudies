import { query, pool } from '../db/index.js';

const dbGetCourse = async () => {
  const { rows } = await query('SELECT * FROM course');
  return rows;
};

const dbGetQuestion = async () => {
  const { rows } = await query('SELECT * FROM question');
  return rows;
};

const dbGetAnswer = async () => {
  const { rows } = await query('SELECT * FROM answer');
  return rows;
};

const dbGetGlobalInfo = async () => {
  const { rows } = await query('SELECT * FROM globalinformation');
  return rows;
};

export { dbGetCourse, dbGetQuestion, dbGetAnswer, dbGetGlobalInfo };
