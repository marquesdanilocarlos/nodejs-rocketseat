import { Router } from 'express';
import TablesController from "@/controllers/TablesController";

const tablesRouter = Router();
const tablesController = new TablesController();

tablesRouter.get('/', tablesController.index);
/*tablesRouter.post('/', tablesController.create);
tablesRouter.put('/:id', tablesController.update);
tablesRouter.delete('/:id', tablesController.remove);*/


export default tablesRouter;