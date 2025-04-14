import {z} from 'zod';

export default z.object({
    userId: z.string().uuid(),
    description: z.string()
});