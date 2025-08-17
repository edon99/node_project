import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import path from "path";
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

export default app;
