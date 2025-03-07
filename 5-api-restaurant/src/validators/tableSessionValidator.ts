import * as z from 'zod';
import {ZodEffects, ZodObject} from "zod";

const bodySchema: ZodObject<any> = z.object({
    table_id: z.number()
});

export const idValidator: ZodEffects<any> = z.string()
    .transform(Number)
    .refine(value => !isNaN(value), {message: 'Id deve ser um número'});

export default bodySchema;