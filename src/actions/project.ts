"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { ActionState } from "./global"
import { projectSchema } from "@/models/project"

export async function createProject(state: ActionState, formData: FormData): Promise<ActionState>{

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
      ok: false,
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
      ok: false,
      message: 'Server error',
      errors: null,
    }
  }

  revalidatePath('/')
  redirect('/admin/projects')

}

export async function updateProject(state: ActionState,formData: FormData): Promise<ActionState>{
  const id = formData.get('id') as string

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
      ok: false,
      message: 'validation error',
      errors: validatedData.error.flatten().fieldErrors
    }
  
  try {
    await prisma.project.update({
      where: {
        id: id,
      },
      data: {...validatedData.data}
    })
  } catch (error) {
    return {
      ok: false,
      message: 'Server error',
      errors: null
    }
  }

  revalidatePath('/')
  redirect('/admin/projects')
}
