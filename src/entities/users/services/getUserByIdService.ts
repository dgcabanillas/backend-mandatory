import { UserModel } from "../entity/models/userModel";
import { IUser } from "../entity/types/User";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";
import { findOneResourceById } from "../../../shared/factory/findOneResourceById";

export const getUserByIdService = async ( id: string ): Promise<IUser | null> => {
  try {
    const user: IUser[] = await findOneResourceById(UserModel)(id);
    return user[0];
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};
