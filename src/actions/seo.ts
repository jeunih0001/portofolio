"use server"

import { seoSchema } from "@/models/seo"
import { ActionState } from "./global"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateSeo(state: ActionState, formData: FormData): Promise<ActionState> {

  const id = formData.get('id') as string

  const rawFormData = {
    title: formData.get('title'),
    description: formData.get('description'),
    image: formData.get('image'),
    tags: (formData.get('tags') as string).trim().split(','),
    favicon: formData.get('favicon'),
    twitter: formData.get('twitter'),
    github: formData.get('github'),
    linkedin: formData.get('linkedin'),
  }

  const validation = seoSchema.safeParse(rawFormData)

  if (validation.error) return {
    ok: false,
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

    return {
      ok: true,
      message: 'Saved'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Server Error'
    }
  }
}