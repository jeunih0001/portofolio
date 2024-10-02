import { z } from "zod";

export const toolSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  icon: z.string(),
  order: z.number().optional(),
  description: z.string(),
})

