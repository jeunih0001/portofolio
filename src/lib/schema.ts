import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  description: z.string().min(5 , {message: 'minimum of 5 characters'})
})