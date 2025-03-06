import * as z from 'zod';
 const bodySchema = z.object({
    name: z.string().trim().min(6),
    price: z.number().gt(0)
});

export default bodySchema;