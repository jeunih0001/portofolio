import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  description: z.string().min(5 , {message: 'minimum of 5 characters'})
})

export const projectSchema = z.object({
  name: z.string().min(5 , {message: 'minimum of 3 characters'}).max(20, {message: 'use maximum of 20 characters'}),
  image: z.string().min(3, {message: 'Image is required'}),
  summary: z.string().min(5 , {message: 'minimum of 5 characters'}),
  tags: z.array(z.string()),
  github: z.string(),
  live: z.string(),
})

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

export const aboutSchema = z.object({
  title: z.string().min(5, 'Title is required'),
  description: z.string().min(5, 'Description is required'),
})

export const toolSchema = z.object({
  name: z.string().min(5, 'Name is required'),
  image: z.string().optional(),
})

