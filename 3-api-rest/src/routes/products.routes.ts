import {Request, Response, Router} from 'express';
const productsRouter = Router();

productsRouter.get("/:id", (request: Request, response: Response) => {
    const {page, limit} = request.query;
    const {id} = request.params;
    response.send(`Página ${page} com limit ${limit} - ID: ${id}`);

});

productsRouter.post("/" ,(request: Request, response: Response) => {
    const {name, price} = request.body;
    const requestId = request.user_id;
    //response.send(`Produto ${name} custa ${price}`);
    response.status(201).json({name, price, requestId});
})

export default productsRouter;