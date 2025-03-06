import {NextFunction, Request, Response} from 'express';
import {CatchError} from "@/decorators/CatchError";
import bodySchema from "@/validators/productValidator";


export default class ProductsController {
    @CatchError()
    public async index(req: Request, res: Response, next: NextFunction): Promise<any> {
        return res.json({message: 'Products list'});
    }

    @CatchError()
    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        const {name, price} = bodySchema.parse(req.body);
        console.log(name, price);
        return res.status(201).json({name, price});
    }
}