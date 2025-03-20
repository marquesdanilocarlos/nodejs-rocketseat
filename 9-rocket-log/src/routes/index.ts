import {Router} from "express";
import usersRoutes from "@/routes/users.routes";
import authRoutes from "@/routes/auth.routes";

const router = Router();
router.use('/users', usersRoutes);
router.use('/login', authRoutes);

export default router;