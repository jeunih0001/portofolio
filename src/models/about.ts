import { z } from "zod";

export const aboutSchema = z.object({
  title: z.string().min(5, 'Title is required'),
  description: z.string().min(5, 'Description is required'),
})