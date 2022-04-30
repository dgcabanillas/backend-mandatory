import { NextFunction, Request, Response } from "express";
import { authLoginService } from "../services/authLoginService";
import { authCreateUserService } from "../services/authCreateUserService";
import { authCreateTokenService } from "../services/authCreateTokenService";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";

export const authLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export const authSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await authCreateUserService(req.body);
    const token = authCreateTokenService(newUser._id);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
