import * as yup from "yup";

export const signupUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email("email must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "password must contain 8 characters, one uppercase, one lowercase, one number and one Special case character"
      )
      .required("Password is required")
  }),
});

export const loginUserSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email("email must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "password must be at least 10 characters")
      .required("Password is required"),
  }),
});
