import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

console.log(`Listen on http://localhost:` + process.env.port)

app.listen(process.env.port);