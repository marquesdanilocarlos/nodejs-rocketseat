import {Router} from "express";
import SessionsController from "@/controllers/SessionsController";

const sessionsRouter = Router();
const sessionController = new SessionsController();

sessionsRouter.get("/", sessionController.index);

export default sessionsRouter;