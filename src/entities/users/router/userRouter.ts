import { Router } from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
} from "../controllers";

const router: Router = Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.delete("/api/users/:id", deleteUser);

export default router;
