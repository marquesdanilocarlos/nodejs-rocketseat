import {Router} from "express";
import usersRoutes from "@/routes/users.routes";

const router = new Router();
router.use("/users", usersRoutes);

export default router;