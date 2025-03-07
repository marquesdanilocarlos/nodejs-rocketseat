import { Router } from 'express';
import OrdersController from "@/controllers/OrdersController";

const orderRouter: Router = Router();
const ordersController: OrdersController = new OrdersController();

orderRouter.post("/", ordersController.create);
orderRouter.get("/session-table/:table_session_id", ordersController.index);
orderRouter.get("/session-table/:table_session_id/total", ordersController.show);

export default orderRouter;