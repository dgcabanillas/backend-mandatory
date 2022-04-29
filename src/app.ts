import express, {
  Application,
  NextFunction,
  Request,
  Response
} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';


dotenv.config();

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;