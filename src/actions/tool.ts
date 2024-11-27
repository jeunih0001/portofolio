"use server"

import { revalidatePath } from "next/cache"
import prisma from "../lib/prisma"
import { redirect } from "next/navigation"
import { ActionState } from "./global"
import { toolSchema } from "@/models/tool"

export async function createTool(state: ActionState, formData: FormData): Promise<ActionState>{
  const rawFormData = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    order: parseInt(formData.get('order') as string),
  }
  
  const validation = toolSchema.safeParse(rawFormData)

  if (validation.error) return {
    ok: false,
    message: 'Validation error',
    errors: validation.error.flatten().fieldErrors
  }

  try {
    await prisma.tool.create({
      data: validation.data
    })
  } catch (error) {
    return {
      ok: false,
      message: 'Server error',
      errors: null
    }
  }

  revalidatePath('/')
  redirect('/admin/tools')
}

export async function updateTool(state: ActionState,formData: FormData): Promise<ActionState>{

  const id = formData.get('id') as string

  

  const rawFormData = {
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    order: parseInt(formData.get('order') as string),
  }

  const validation = toolSchema.safeParse(rawFormData)

  if (validation.error) return {
    ok: false,
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
    return {
      ok: false,
      message: 'Server Error',
      errors: null
    }
  }

  revalidatePath('/')
  redirect('/admin/tools')
}