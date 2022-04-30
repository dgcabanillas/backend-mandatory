import { Model as ModelType } from "mongoose";
import { IUser } from "../../entities/users/entity/types/User";
import { IFavsList } from "../../entities/favs/entity/types/Favs";

export const createResource =
  <
    K extends 
      | ModelType<IUser>
      | ModelType<IFavsList>
  >( Model: K ) =>
  async <T>(resource: T): Promise<any> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
