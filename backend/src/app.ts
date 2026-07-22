import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { env } from './config/env';

export const app = express();

app.use(cors({ origin: env.frontendUrl }));
app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);
