import { z } from 'zod';

export const createHookSizeSchema = z.object({
  size: z.number(),
});

export type CreateHookSizeDto = z.infer<typeof createHookSizeSchema>;
