"use server"
interface ReturnState {
  status?: 'error' | 'success',
  errors?: object
}

type ModelNames = Prisma.ModelName

import { Prisma } from "@prisma/client"
import prisma from "./connect"
import { categoryFormSchema } from "./schema"
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


// when creating the create and edit action , pass the config in the formState
// creating only takes a model and formZodSchema should be an object where the key is model name
