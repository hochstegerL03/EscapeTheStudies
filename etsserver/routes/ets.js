import express from 'express';
import asyncHandler from 'express-async-handler';
import { getCourse, getQuestion, getAnswer } from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question', asyncHandler(getQuestion));
router.get('/answer', asyncHandler(getAnswer));

export default router;
