import {Router} from 'express';
import TableSessionsController from "@/controllers/TableSessionsController";

const tableSessionRouter: Router = Router();
const tableSessionController: TableSessionsController = new TableSessionsController();

tableSessionRouter.post('/', tableSessionController.create);

export default tableSessionRouter;