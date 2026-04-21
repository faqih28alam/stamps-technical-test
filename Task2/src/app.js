import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import weatherRouter from './routes/weather-route.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', weatherRouter);

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`));