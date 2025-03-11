import {Router} from "express";
import ProductsController from "@/controllers/ProductsController";
import ensureAuthenticated from "@/middlewares/ensureAuthenticated";
import verifyUserAuthorization from "@/middlewares/verifyUserAuthorization";

const productsRouter = Router();
const productsController = new ProductsController();

//Middlewares em todas as rotas
//productsRouter.use(ensureAuthenticated, verifyUserAuthorization(['sale', 'admin']));

productsRouter.get("/", productsController.index);
productsRouter.post("/", ensureAuthenticated, verifyUserAuthorization(['sale', 'admin']), productsController.create);

export default productsRouter;