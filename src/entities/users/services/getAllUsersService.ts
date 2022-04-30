import { UserModel } from "../entity/models/userModel";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";
import { findAllResources } from "../../../shared/factory/findAllResources";
import { IUser } from "../entity/types/User";

export const getAllUsersService = async (): Promise<IUser[]> => {
  try {
    const users: IUser[] = await findAllResources(UserModel)();
    return users;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};
