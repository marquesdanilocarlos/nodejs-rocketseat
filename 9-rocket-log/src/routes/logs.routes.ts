import {Router} from "express";
import LogsController from "@/controllers/LogsController";
import {ensureAuthenticated, verifyUserAuthorization} from "@/middlewares/auth";

const logsRoutes = Router();
const logsController = new LogsController();

logsRoutes.post('/', ensureAuthenticated, verifyUserAuthorization(['sale']), logsController.create);

export default logsRoutes;
