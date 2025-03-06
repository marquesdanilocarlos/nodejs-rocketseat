import {NextFunction, Request, Response} from 'express';
import {CatchError} from "@/decorators/CatchError";


export default class ProductsController {
    @CatchError()
    public async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        return res.json({message: 'Products list'});
    }
}