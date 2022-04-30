import { UserModel } from "../entity/models/userModel";
import { ApplicationError } from "../../../shared/customErrors/AplicationErrors";
import { findOneResourceByField } from "../../../shared/factory/findOneResourceByField";
import { IUser } from "../entity/types/User";

export const getUserByEmailService = async (
  email: string
): Promise<IUser | null> => {
  try {
    const user: IUser | null = await findOneResourceByField(UserModel)({ email });
    return user;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};
