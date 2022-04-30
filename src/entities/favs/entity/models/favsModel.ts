import { model } from "mongoose";
import { FavsSchema } from '../schema/favsSchema';
import { IFavsList } from '../types/Favs';

export const FavsModel = model<IFavsList>("Favs", FavsSchema);
