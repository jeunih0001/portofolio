import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  description: z.string().min(5 , {message: 'minimum of 5 characters'})
})

export const projectSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  image: z.string().min(3),
  summary: z.string().min(5 , {message: 'minimum of 5 characters'}),
  tags: z.array(z.string()),
  url: z.string().url({message: 'must be a link'}),
})