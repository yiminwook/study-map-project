import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import ErrorHandler, { HttpException } from './middlewares/errorHandler';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    message: '요청한 리소스를 찾을 수 없습니다.',
  });
});

app.use(ErrorHandler);

export default app;
