import { Router } from 'express';
import OrdersController from "@/controllers/OrdersController";

const orderRouter: Router = Router();
const ordersController: OrdersController = new OrdersController();

orderRouter.post("/", ordersController.create);

export default orderRouter;