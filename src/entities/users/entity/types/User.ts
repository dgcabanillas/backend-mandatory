import Types from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
}

export type ICreateUser = Omit<IUser, "_id">;

export type ILoginUser = Omit<IUser, "_id">;