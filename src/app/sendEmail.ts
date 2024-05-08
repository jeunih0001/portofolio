"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_KEY)

export async function sendEmail(prevState: any, formData: FormData) {
  
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

  const validatedFields = schema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      ...prevState,
      success: false,
      message: 'validation error',
      errors: validatedFields.error.flatten().fieldErrors
    }
  }


  try {
    const res = await resend.emails.send({
      from: `From your portofolio <onboarding@resend.dev>`,
      to: 'quanyoudes@gmail.com',
      reply_to: validatedFields.data.email,
      subject: `Message from ${validatedFields.data.name}`,
      text: validatedFields.data.message
    })
    
    if (res.error) return {
      ...prevState,
      success: false,
      message: res.error.message
    }
  } catch (error) {
    console.log(error)
    return {
      ...prevState,
      success: false,
      message: 'Server Error'
    }
  }
  return {
    success: true,
    message: 'Your email has been sent',
    errors: {
      name: null,
      email: null,
      message: null,
    },
  }
}
