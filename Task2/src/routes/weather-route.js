import express from 'express';
import { handleGetForecast } from '../controllers/weather-controller.js';

const router = express.Router();

router.get('/forecast', handleGetForecast);

export default router