import { Router } from 'express';
import productsRouter from "@/routes/products.routes";

const router = Router();

router.use('/products', productsRouter);

export default router;