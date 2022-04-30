import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";
import { getUserByIdService } from '../../users/services/getUserByIdService';
import { getAllFavsService } from '../services/getAllFavsService';
import { createFavsListService } from '../services/createFavsListService';
import { FavsModel } from '../entity/models/favsModel';

export const getAllFavsList = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getUserByIdService(req.id);
    if (!user) throw new ApplicationError(401, 'invalid userId');
    const favs = await getAllFavsService({ owner: user._id });
    res.status(200).json({ favs });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};

export const createFavsList = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getUserByIdService(req.id);
    if (!user) throw new ApplicationError(401, 'invalid userId');

    const { name, favs } = req.body;
    const newFavsList = await createFavsListService({ name, favs, owner: user._id })
    res.status(200).json({ favs: newFavsList });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
}

export const getSingleFavsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const favList = await getAllFavsService({ _id: id });
    res.status(200).json({ fav: favList[0] });
  } catch (error: any) {
    next(new ApplicationError(400, "error getting the fav list"));
  }
}

export const deleteSingleFavsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await FavsModel.deleteOne({ _id: id });
    res.status(200).json({ data: { message: "fav list successfully deleted" }});
  } catch (error: any) {
    next(new ApplicationError(400, "error deleting the fav list"));
  }
}