import { z } from "zod";

export const seoSchema = z.object({
  title: z.string().min(5, 'Title is required'),
  description: z.string().min(5, 'Description is required'),
  linkedin: z.string().url().min(5, 'Linkedin link is required'),
  github: z.string().url().min(5, 'Github link is required'),
  twitter: z.string(),
  image: z.string(),
  favicon: z.string(),
  tags: z.array(z.string()),
})