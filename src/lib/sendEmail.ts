"use server"

import { Resend } from "resend"
import { z } from "zod"
import { RESEND_KEY } from "./config"

const resend = new Resend(RESEND_KEY)

interface FormState {
  ok?: boolean,
  message?: string,
  errors?: Record<string, any>| null,
}

export async function sendEmail(formState: FormState, formData: FormData): Promise<FormState> {

  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  const schema = z.object({
    name: z.string().min(5).max(20),
    email: z.string().email(),
    message: z.string().min(5).max(200),
  })

  const validation = schema.safeParse(rawFormData)

  if (validation.error) {
    return {
      ok: false,
      message: 'validation error',
      errors: validation.error.flatten().fieldErrors
    }
  }


  try {
    const res = await resend.emails.send({
      from: `From your portofolio <onboarding@resend.dev>`,
      to: 'quanyoudes@gmail.com',
      reply_to: validation.data.email,
      subject: `Message from ${validation.data.name}`,
      text: validation.data.message
    })

    if (res.error) return {
      ok: false,
      message: res.error.message,
      errors: null,
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'Server Error',
      errors: null,
    }
  }
  return {
    ok: true,
    message: 'Your email has been sent',
    errors: null,
  }
}
