"use server"

import { aboutSchema } from "@/models/about"
import { revalidatePath } from "next/cache"
import { ActionState } from "./global"
import prisma from "@/lib/prisma"

export async function updateAbout(state: ActionState,formData: FormData): Promise<ActionState>{
  const id = formData.get('id') as string

  const rawFormData = {
    title: formData.get('title') as string,
    description: formData.get('description') as string
  }
  
  const validation = aboutSchema.safeParse(rawFormData)

  if (validation.error) return {
    ok: false,
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
      ok: true,
      message: 'Server error',
    }
  }

  revalidatePath('/')

  return {
    ok: true,
    message: 'Saved',
  }

}