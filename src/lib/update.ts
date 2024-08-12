"use server"

import { redirect } from "next/navigation"
import prisma from "./connect"
import { aboutSchema, projectSchema, seoSchema, toolSchema } from "./schema"
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
    github: formData.get('github') as string,
    live: formData.get('live') as string,
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

  revalidatePath('/','page')
  redirect('/admin/projects')
}

export async function updateSeo(formState: FormState,formData: FormData): Promise<FormState>{

  const id = formData.get('id') as string

  const title = formData.get('title') as string
  const description = formData.get('title') as string
  const image = formData.get('image') as string
  
  const tags = (formData.get('tags') as string).trim().split(',')
  const favicon = formData.get('favicon') as string

  const twitter = formData.get('twitter') as string
  const github = formData.get('github') as string
  const linkedin = formData.get('linkedin') as string
  

  const rawFormData = {title,description,image,favicon,tags,twitter,github,linkedin}

  const validation = seoSchema.safeParse(rawFormData)

  if (validation.error) return {
    status: 'error',
    message: 'Validation error',
    errors: validation.error.flatten().fieldErrors
  }

  try {
    await prisma.seo.update({
      where: {
        id: id
      },
      data: validation.data
    })
  } catch (error) {
    
  }

  revalidatePath('/','layout')

  return {
    status: 'success',
    errors: null
  }
}

export async function updateAbout(formState: FormState,formData: FormData): Promise<FormState>{
  const id = formData.get('id') as string

  const rawFormData = {
    title: formData.get('title') as string,
    description: formData.get('description') as string
  }
  
  const validation = aboutSchema.safeParse(rawFormData)

  if (validation.error) return {
    status: 'error',
    message: 'Validation error',
    errors: validation.error.flatten().fieldErrors
  }

  try {
    await prisma.about.update({
      where: {
        id: id
      },
      data: validation.data
    })
  } catch (error) {
    return {
      status: 'error',
      message: 'Server error',
      errors: null
    }
  }

  revalidatePath('/','page')

  return {
    status: 'success',
    message: 'Updated successfully',
    errors: null
  }



}


export async function updateTool(formState: FormState,formData: FormData): Promise<FormState>{

  const id = formData.get('id') as string

  

  const rawFormData: Record<string,any> = {
    name: formData.get('name') as string,
    image: (formData.get('image') as string) == '' ? null : formData.get('image') as string
  }

  Object.keys(rawFormData).forEach(key => rawFormData[key] == null && delete rawFormData[key])

  const validation = toolSchema.safeParse(rawFormData)

  if (validation.error) return {
    status: 'error',
    message: 'Validation error',
    errors: validation.error.flatten().fieldErrors
  }

  try {
    await prisma.tool.update({
      where: {
        id: id
      },
      data: validation.data
    })
  } catch (error) {
    
  }

  revalidatePath('/')
  redirect('/admin/tools')
}