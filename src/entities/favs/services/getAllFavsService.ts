import { ApplicationError } from '../../../shared/customErrors/AplicationErrors';
import { findAllResources } from '../../../shared/factory/findAllResources';
import { IFavsList } from '../entity/types/Favs';
import { FavsModel } from '../entity/models/favsModel';

export const getAllFavsService = async (query: any): Promise<IFavsList[]> => {
  try {
    const favs: IFavsList[] = await findAllResources(FavsModel)(query);
    return favs;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};
