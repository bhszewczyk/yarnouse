import { z } from 'zod';

export const createHookMaterialSchema = z.object({
  name: z.string().trim().min(3).max(45),
});

export type CreateHookMaterialDto = z.infer<typeof createHookMaterialSchema>;
