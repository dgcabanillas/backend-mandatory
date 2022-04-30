import { model } from "mongoose";
import { UserSchema } from "../schema/userSchema";
import { IUser } from "../types/User";

export const UserModel = model<IUser>("User", UserSchema);
