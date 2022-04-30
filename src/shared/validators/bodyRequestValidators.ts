import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationErrors";
import * as yup from "yup";

export const bodyRequestValidators =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    console.log(req.body, req.params);
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error: any) {
      next(new ApplicationError(403, error.message, "validation"));
    }
  };
