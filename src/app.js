import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { PORT } from './config.js';
import tasksRoutes from './routes/tasks.js';

const app = express();

app.set('port', PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/task', tasksRoutes);

export default app;
