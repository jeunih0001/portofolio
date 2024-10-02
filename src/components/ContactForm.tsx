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
          <Label htmlFor='name'>Name</Label>
          <Input
            className='bg-background border-2'
            type="text"
            name="name"
            id="name"
          />
          <FormFieldError error={state.errors?.name}/>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="email">Email</Label>
          <Input
            className='bg-background border-2'
            type="email"
            name="email"
            id="email"
          />
          <FormFieldError error={state.errors?.email}/>
        </div>
        <div className='grid gap-2 col-span-full'>
          <Label htmlFor="message">Message</Label>
          <Textarea
            className='bg-background border-2'
            rows={4}
            name="message"
            id="message" />
          <FormFieldError error={state.errors?.message}/>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <SubmitButton>Send Message</SubmitButton>
      </div>
    </form>
  )
}

