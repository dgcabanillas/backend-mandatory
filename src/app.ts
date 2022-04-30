import express, {
  Application,
  NextFunction,
  Request,
  Response
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from './config/swaggerConfig';

import authRouter from './entities/auth/router/authRouter';
import userRouter from './entities/users/router/userRouter';
import favsRouter from './entities/favs/router/favsRouter';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(morgan('dev'));
app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(favsRouter);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;