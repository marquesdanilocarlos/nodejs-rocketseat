import { Router } from 'express';
import ProductsController from "@/controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);
productsRouter.post('/', productsController.create);


export default productsRouter;