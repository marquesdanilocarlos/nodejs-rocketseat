import {Router} from "express";
import usersRouter from "@/routes/users.routes";
import productsRouter from "@/routes/products.routes";
import sessionsRouter from "@/routes/sessions.routes";

const router: Router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/sessions', sessionsRouter);

export default router;