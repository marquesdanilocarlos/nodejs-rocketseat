import {Router} from "express";
import DeliveriesController from "@/controllers/DeliveriesController";
import {ensureAuthenticated, verifyUserAuthorization} from "@/middlewares/auth";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();

deliveriesRoutes.use(ensureAuthenticated);
deliveriesRoutes.use(verifyUserAuthorization(['sale']));

deliveriesRoutes.get('/', deliveriesController.index);
deliveriesRoutes.post('/', deliveriesController.create);

export default deliveriesRoutes;