import Router from "express";
import { signupUserSchema, loginUserSchema } from "../utils/userSchemaValidators";
import { bodyRequestValidators } from "../../../shared/validators/bodyRequestValidators";
import { authSignup, authLogin } from "../controllers";

const router = Router();

router
  .route("/auth/local/signup")
  .post(bodyRequestValidators(signupUserSchema), authSignup);
router
  .route("/auth/local/login")
  .post(bodyRequestValidators(loginUserSchema), authLogin);

export default router;
