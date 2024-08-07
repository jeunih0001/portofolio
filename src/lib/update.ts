"use server"

import { redirect } from "next/navigation"
import prisma from "./connect"
import { projectSchema } from "./schema"
import { revalidatePath } from "next/cache"

interface FormState {
  status?: 'error' | 'success',
  message?: string,
  errors?: any
}

export async function updateProject(formState: FormState,formData: FormData): Promise<FormState>{
  const id = formData.get('id') as string

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
      status: 'error',
      message: 'Server error',
      errors: null
    }
  }

  revalidatePath('/')
  redirect('/admin/projects')
}