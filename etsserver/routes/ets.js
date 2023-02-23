import express from 'express';
import asyncHandler from 'express-async-handler';
import { getCourse, getQuestion } from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question', asyncHandler(getQuestion));

export default router;
