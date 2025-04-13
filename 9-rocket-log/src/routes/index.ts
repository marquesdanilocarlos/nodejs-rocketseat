import {Router} from "express";
import usersRoutes from "@/routes/users.routes";
import authRoutes from "@/routes/auth.routes";
import deliveriesRoutes from "@/routes/deliveries.routes";

const router = Router();
router.use('/users', usersRoutes);
router.use('/login', authRoutes);
router.use('/deliveries', deliveriesRoutes);

export default router;