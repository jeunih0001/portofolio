"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/lib/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'
import FormFieldError from './FormFieldError'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useToast } from '@/hooks/useToast'

export const ContactForm = () => {


  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(sendEmail, {})

  useToast({state})


  return (
    <form ref={formRef} action={formAction}>
      <div className='grid gap-6 items-start md:grid-cols-2'>
        <div className='grid gap-2'>
          <Label htmlFor='name' className='relative z-10 px-2 mx-2 bg-background justify-self-start'>Name</Label>
          <Input
            className='bg-background border transition-all border-foreground/40 -mt-4 h-12'
            type="text"
            name="name"
            id="name"
          />
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="email" className='relative z-10 px-2 mx-2 bg-background justify-self-start'>Email</Label>
          <Input
            className='bg-background border transition-all outline-none focus:ring-0 focus:outline-none border-foreground/40 -mt-4 h-12'
            type="email"
            name="email"
            id="email"
          />
          <FormFieldError error={state.errors?.email}/>
        </div>
        <div className='grid gap-2 col-span-full'>
          <Label htmlFor="message" className='relative z-10 px-2 mx-2 bg-background justify-self-start'>Message</Label>
          <Textarea
            className='bg-background border transition-all outline-none focus:ring-0 focus:outline-none border-foreground/40 -mt-4'
            rows={4}
            name="message"
            id="message" />
          <FormFieldError error={state.errors?.message}/>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <SubmitButton size={'lg'} className='text-base py-3 !h-auto'>Send Message</SubmitButton>
      </div>
    </form>
  )
}

