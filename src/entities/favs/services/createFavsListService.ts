import { createResource } from "../../../shared/factory/createResource";
import { ApplicationError } from '../../../shared/customErrors/AplicationErrors';
import { ICreateFavs, IFavsList } from "../entity/types/Favs";
import { FavsModel } from '../entity/models/favsModel';

export const createFavsListService = async (favsRequest: ICreateFavs): Promise<IFavsList> => {
  try {
    const favs = await createResource(FavsModel)(favsRequest);
    return favs as IFavsList;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};
