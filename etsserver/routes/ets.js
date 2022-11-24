import express from 'express';
import asyncHandler from 'express-async-handler';
import { getCourse, getQuestion, getAnswer, getGlobalInfo } from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question', asyncHandler(getQuestion));
router.get('/answer', asyncHandler(getAnswer));
router.get('/global', asyncHandler(getGlobalInfo));

export default router;
