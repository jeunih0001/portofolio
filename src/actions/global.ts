"use server"

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import fs from "node:fs/promises";

export interface ActionState {
  ok?: boolean,
  message?: string,
  errors?: any
}

export interface DeleteConfig {
  schema: Prisma.ModelName,
  record: string,
}

export async function uploadImage(formData: FormData): Promise<string>{
  const file = formData.get('file') as File
  const arrayBuffer = await file.arrayBuffer()
  const buffer  = new Uint8Array(arrayBuffer)
  const image = `./public/${file.name}`
  await fs.writeFile(image,buffer)
  return image.replace('./public','')
}

export async function deleteAction(config: DeleteConfig): Promise<ActionState> {
  try {
    // @ts-ignore
    await prisma[config.schema.toLocaleLowerCase()].delete({
      where: {
        id: config.record
      },
    });
    
    return {
      ok: true,
      message: 'Record Deleted'
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Server Error'
    }
  }
}