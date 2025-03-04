import {Router} from 'express';
import productsRouter from "./products.routes";

const router:Router = Router();

router.use("/products", productsRouter);

export default router;