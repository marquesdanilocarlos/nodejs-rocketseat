import {NextFunction, Request, Response} from 'express';

export function CatchError() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                await originalMethod.call(this, req, res, next);
            } catch (err) {
                next(err);
            }
        };

        return descriptor;
    };
}
