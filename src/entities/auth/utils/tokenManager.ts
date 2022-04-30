import jwt from "jsonwebtoken";

export const createAuthToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_SECRET_TOKEN}`, { expiresIn: '1h' });
};