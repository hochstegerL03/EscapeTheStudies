import express from 'express';
import asyncHandler from 'express-async-handler';
import { getCourse, getQuestion, getAnswer, getGlobalInfo, getRoomIm } from '../controllers/ets.js';

const router = express.Router();

router.get('/courses', asyncHandler(getCourse));
router.get('/question', asyncHandler(getQuestion));
router.get('/answer', asyncHandler(getAnswer));
router.get('/global', asyncHandler(getGlobalInfo));
router.get('/room', asyncHandler(getRoomIm));

export default router;
