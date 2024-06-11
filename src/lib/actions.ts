"use server"
interface ReturnState {
  status?: 'error' | 'success',
  errors?: object
}

type ModelNames = Prisma.ModelName

import { Prisma } from "@prisma/client"
import prisma from "./connect"
import { categoryFormSchema, projectFormSchema } from "./schema"
import { slugify } from "./utils"
import { revalidatePath } from "next/cache"

export async function CreateCategory(prevState: any, formData: FormData){
  const rawFormData = {
    name: formData.get('name'),
    description: formData.get('description')
  }

  const validatedData = categoryFormSchema.safeParse(rawFormData)

  if (validatedData.error)
    return {
      ...prevState,
      errors: validatedData.error.flatten().fieldErrors
    }

  try {
    const response = await prisma.category.create({
      data: {
        name: validatedData.data.name,
        slug: slugify(validatedData.data.name),
        description: validatedData.data.description
      }
    })

    return {
      ...prevState,
      status: 'success',
      response,
    }
  } catch (error) {
    return {
      ...prevState,
      error,
    }
  }

  
}

export async function createProject(prevState: any, formData: FormData){
  const rawFormData = {
    name: formData.get('name'),
    summary: formData.get('summary'),
    tags: formData.get('tags'),
    url: formData.get('url')
  }

  const validatedData = projectFormSchema.safeParse(rawFormData)

  if (validatedData.error)
    return {
      ...prevState,
      status: 'error',
      errors: validatedData.error.flatten().fieldErrors
    }
  
  try {
    await prisma.project.create({
      data: {
        name: validatedData.data.name,
        summary: validatedData.data.summary,
        url: validatedData.data.url
      }
    })

    return {
      ...prevState,
      status: 'ok',
      errors: null,
    }
  } catch (error) {
    console.error(error)
    return {
      ...prevState,
      status: 'error',
      errors: {error}
    }
  }


  

 
}

export interface DeleteConfig {
  schema: ModelNames,
  record: string,
}

export async function deleteAction(config: DeleteConfig): Promise<ReturnState> {
  try {
    // @ts-ignore
    await prisma[config.schema.toLocaleLowerCase()].delete({
      where: {
        id: config.record
      },
    });
    
    return {
      status: 'success'
    };
  } catch (error) {
    console.error('Error deleting record:', error);
    return {
      status: 'error',
      errors: {message: 'Server error'}
    }
  }
}
