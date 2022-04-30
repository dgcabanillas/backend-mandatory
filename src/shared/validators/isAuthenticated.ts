import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import { ApplicationError } from '../customErrors/AplicationErrors';

export const isAuthenticated = 
  (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    const token = !!authHeader ? authHeader.replace('Bearer ', '') : ''; 
    if( !token ) next(new ApplicationError(401, 'falta token', "authorization"));

    jwt.verify(token, `${process.env.JWT_SECRET_TOKEN}`, (err: any, data: any) => {
      if(err) next(new ApplicationError(403, err.message, "authorization"));
      else {
        req.id = data.id;
        next();
      }
    })
  }
