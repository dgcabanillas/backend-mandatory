import { Router } from "express";
import { createFavsSchema } from '../utils/favsSchemaValidators';
import { isAuthenticated } from '../../../shared/validators/isAuthenticated';
import { bodyRequestValidators } from "../../../shared/validators/bodyRequestValidators";
import { getAllFavsList, createFavsList, getSingleFavsList, deleteSingleFavsList } from '../controllers/index';

const router: Router = Router();

router
  .route("/api/favs")
  .get(isAuthenticated, getAllFavsList)
  .post(isAuthenticated, bodyRequestValidators(createFavsSchema), createFavsList);

router
  .route("/api/favs/:id")
  .get(isAuthenticated, getSingleFavsList)
  .delete(isAuthenticated, deleteSingleFavsList);

export default router;
