import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
const DATABASE_URL:string = process.env.DATABASE_URL || '';
const port = process.env.PORT || 3334

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(DATABASE_URL)

console.log(`Listen on http://localhost:` + process.env.PORT)

app.listen(port);