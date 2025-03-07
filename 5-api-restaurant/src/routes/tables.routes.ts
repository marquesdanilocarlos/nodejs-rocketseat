import {Router} from 'express';
import TablesController from "@/controllers/TablesController";

const tablesRouter: Router = Router();
const tablesController: TablesController = new TablesController();

tablesRouter.get('/', tablesController.index);
/*tablesRouter.post('/', tablesController.create);
tablesRouter.put('/:id', tablesController.update);
tablesRouter.delete('/:id', tablesController.remove);*/


export default tablesRouter;