import { createAuthToken } from "../utils/tokenManager";
import Types from 'mongoose';

export const authCreateTokenService = (userId: string | Types.ObjectId): string => {
  try {
    return createAuthToken({ id: userId });
  } catch (error: any) {
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
