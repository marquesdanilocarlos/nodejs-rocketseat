import {Router} from 'express';
import productsRouter from "@/routes/products.routes";
import tablesRouter from "@/routes/tables.routes";
import tableSessionRouter from "@/routes/table-sessions.routes";
import orderRouter from "@/routes/order.routes";

const router = Router();

router.use('/products', productsRouter);
router.use('/tables', tablesRouter);
router.use('/table-sessions', tableSessionRouter);
router.use('/orders', orderRouter);

export default router;