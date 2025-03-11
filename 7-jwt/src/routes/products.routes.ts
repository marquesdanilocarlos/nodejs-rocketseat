import {Router} from "express";
import ProductsController from "@/controllers/ProductsController";
import ensureAuthenticated from "@/middlewares/ensureAuthenticated";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", productsController.index);
productsRouter.post("/", ensureAuthenticated, productsController.create);

export default productsRouter;