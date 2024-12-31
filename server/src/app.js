import express from 'express';
import cors from 'cors';
// import { json } from 'body-parser'; // dont use
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';

const app = express();
const PORT = 5000;

require('dotenv').config();

dotenv.config();
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(json());

app.get('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on : ${PORT}`);
});
