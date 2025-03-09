import {Router} from "express";
import UsersController from "@/controllers/UsersController";

const usersRouter = Router();
const userController = new UsersController();

usersRouter.get("/", userController.index);

export default usersRouter;