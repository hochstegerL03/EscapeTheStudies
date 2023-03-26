import express from 'express';
import asyncHandler from 'express-async-handler';
import {
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
} from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question', asyncHandler(getQuestion));
router.get('/answers', asyncHandler(getAnswer));
router.get('/users', asyncHandler(getUser));
router.get('/chapter/:id', asyncHandler(getChapter));
router.get('/textdata/:id', asyncHandler(getTextData));
router.get('/questiontype', asyncHandler(getQuestionType));
router.get('/news', asyncHandler(getNews));
router.get('/tag', asyncHandler(getTag));
router.post('/user', asyncHandler(insertUser));
router.get('/story', asyncHandler(getStory));
router.get('/lection', asyncHandler(getLection));
router.get('/user', asyncHandler(getUserInfo));

export default router;
