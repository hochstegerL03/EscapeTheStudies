import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  getCourse,
  getQuestionChapter1,
  getAnswer,
  getUser,
  getChapter,
  getTextData,
  getQuestionType,
} from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question/:id', asyncHandler(getQuestionChapter1));
router.get('/answers', asyncHandler(getAnswer));
router.get('/users', asyncHandler(getUser));
router.get('/chapter/:id', asyncHandler(getChapter));
router.get('/textdata/:id', asyncHandler(getTextData));
router.get('/questiontype', asyncHandler(getQuestionType));

export default router;
