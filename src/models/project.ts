import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  image: z.string().min(3, {message: 'Image is required'}),
  summary: z.string().min(5 , {message: 'minimum of 5 characters'}),
  tags: z.array(z.string()),
  github: z.string(),
  order: z.number(),
  live: z.string(),
})