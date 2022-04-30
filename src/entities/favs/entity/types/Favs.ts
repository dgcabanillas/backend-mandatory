import Types from "mongoose";

export interface IFavItem {
  _id: Types.ObjectId;
  title: string;
  description: string;
  link: string;
}

export interface IFavsList {
  _id: Types.ObjectId;
  name: string;
  favs: IFavItem[];
  owner: Types.ObjectId;
}


export type ICreateFavs = Omit<IFavsList, "_id">;