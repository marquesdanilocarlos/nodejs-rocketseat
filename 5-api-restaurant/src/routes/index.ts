import { Router } from 'express';
import productsRouter from "@/routes/products.routes";
import tablesRouter from "@/routes/tables.routes";

const router = Router();

router.use('/products', productsRouter);
router.use('/tables', tablesRouter);

export default router;