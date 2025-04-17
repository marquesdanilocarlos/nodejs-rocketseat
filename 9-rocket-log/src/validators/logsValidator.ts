import {z} from 'zod';

export default z.object({
    deliveryId: z.string().uuid(),
    description: z.string()
});