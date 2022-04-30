import { UserModel } from "../../users/entity/models/userModel";
import { encryptPassword } from "../utils/passwordManager";
import { createResource } from "../../../shared/factory/createResource";
import { ICreateUser, IUser } from "../../users/entity/types/User";
import { ApplicationError } from '../../../shared/customErrors/AplicationErrors';

export const authCreateUserService = async (userRequest: ICreateUser): Promise<IUser> => {
  try {
    userRequest["password"] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as IUser;
  } catch (error: any) {
    throw new ApplicationError(400, `error creating user with email ${userRequest.email}`);
  }
};
