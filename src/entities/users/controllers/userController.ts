import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";
import { getAllUsersService } from "../services/getAllUsersService";
import { getUserByIdService } from "../services/getUserByIdService";
import { UserModel } from "../../users/entity/models/userModel";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({ data: users });
  } catch (error: any) {
    next(new ApplicationError(400, "error getting the users"));
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    res.status(200).json({ data: user });
  } catch (error: any) {
    next(new ApplicationError(400, "error getting the user"));
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    await UserModel.deleteOne({ _id: userId });
    res.status(200).json({ data: { message: "user successfully deleted" }});
  } catch (error: any) {
    next(new ApplicationError(400, "error deleting the user"));
  }
};
