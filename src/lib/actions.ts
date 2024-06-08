"use server"

import prisma from "./connect"
import { categoryFormSchema } from "./schema"
import { slugify } from "./utils"

export async function CreateCategory(prevState: any, formData: FormData){
  console.log(formData)
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

export async function deleteCategory(categoryId: string){
  console.log(categoryId)

  try {
    const response = await prisma.category.delete({
      where: {
        id: categoryId
      }
    })

    return {
      status: 'success',
      response,
    }

  } catch (error) {
    return {
      status: 'fail',
    }
  }
  
}