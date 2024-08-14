"use server"

import fs from "node:fs/promises";
import { z } from "zod"
import prisma from "./connect"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { projectSchema, toolSchema } from "./schema";

export interface FormState {
  status?: 'error' | 'success',
  message?: string,
  errors?: any
}

export async function uploadImage(formData: FormData): Promise<string>{
  const file = formData.get('file') as File
  const arrayBuffer = await file.arrayBuffer()
  const buffer  = new Uint8Array(arrayBuffer)
  const image = `./public/${file.name}`
  await fs.writeFile(image,buffer)
  return image.replace('./public','')
}

export async function createProject(prevState: FormState, formData: FormData): Promise<FormState>{

  const rawFormData = {
    name: formData.get('name') as string,
    github: formData.get('github') as string,
    live: formData.get('live') as string,
    image: formData.get('image') as string,
    summary: formData.get('summary') as string,
    tags: (formData.get('tags') as string).split(',').map((tag: string) => tag.trim()).filter(tag => tag !== null && tag !== ''),
  }

  const validatedData = projectSchema.safeParse(rawFormData)

  if (validatedData.error)
    return {
      status: 'error',
      message: 'Validation error',
      errors: validatedData.error.flatten().fieldErrors
    }
  
    
  try {
    await prisma.project.create({
      data: validatedData.data
    })

  } catch (error) {
    console.error(error)
    return {
      status: 'error',
      message: 'Server error',
      errors: null,
    }
  }

  revalidatePath('/')
  redirect('/admin/projects')

}

export async function createTool(prevState: FormState, formData: FormData): Promise<FormState>{
  const rawFormData: Record<string,any> = {
    name: formData.get('name') as string,
  }
  
  const validation = toolSchema.safeParse(rawFormData)

  if (validation.error) return {
    status: 'error',
    message: 'Validation error',
    errors: validation.error.flatten().fieldErrors
  }

  try {
    await prisma.tool.create({
      data: validation.data
    })
  } catch (error) {
    return {
      status: 'error',
      message: 'Server error',
      errors: null
    }
  }

  revalidatePath('/')
  redirect('/admin/tools')
}