import { Router } from 'express';
import ProductsController from "@/controllers/ProductsController";

const productsRouter: Router = Router();
const productsController: ProductsController = new ProductsController();

productsRouter.get('/', productsController.index);
productsRouter.post('/', productsController.create);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.remove);


export default productsRouter;