"use server"

import fs from "node:fs/promises";
import { z } from "zod"
import prisma from "./connect"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { projectSchema } from "./schema";

interface FormState {
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
    url: formData.get('url') as string,
    image: formData.get('image') as string,
    summary: formData.get('summary') as string,
    tags: (formData.get('tags') as string).split('#').map((tag: string) => tag.trim()).filter(tag => tag !== null && tag !== ''),
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
      data: {
        name: validatedData.data.name,
        image: validatedData.data.image,
        summary: validatedData.data.summary,
        url: validatedData.data.url
      }
    })

  } catch (error) {
    return {
      status: 'error',
      message: 'Server error',
      errors: null,
    }
  }

  revalidatePath('/')
  redirect('/admin/projects')

}