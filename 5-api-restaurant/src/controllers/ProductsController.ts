import {NextFunction, Request, Response} from 'express';

export default class ProductsController {
    public async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            return res.json({message: 'Products list'});
        } catch (error) {
            next(error);
        }
    }
}