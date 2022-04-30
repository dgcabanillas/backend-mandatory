import { Schema } from "mongoose";
import { IUser } from "../types/User";

export const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 10,
  }
});

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });
