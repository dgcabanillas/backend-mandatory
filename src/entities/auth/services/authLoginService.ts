import { getUserByEmailService } from "../../users/services/getUserByEmailService";
import { ILoginUser } from "../../users/entity/types/User";
import { validatePassword } from "../utils/passwordManager";
import { createAuthToken } from "../utils/tokenManager";

export const authLoginService = async (userRequest: ILoginUser): Promise<string> => {
  try {
    const user = await getUserByEmailService(userRequest.email);
    if (!user) throw new Error("user email or password is incorrect");

    const auth = await validatePassword(userRequest.password, user.password);
    if (!auth) throw new Error("user email or password is incorrect");

    return createAuthToken({ id: user._id });
  } catch (error: any) {
    throw new Error(error);
  }
};
