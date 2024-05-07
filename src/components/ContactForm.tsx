"use client"
import React from 'react'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/app/sendEmail'

export const ContactForm = () => {

  const initialState = {
    message: '',
  }

  const [ state , formAction ] = useFormState(sendEmail, initialState)


  return (
    <form action={formAction}>
      <div className='space-y-4'>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="name">Name</label>
          <input
            className='p-2 rounded-md bg-slate-50 border-2 transition-all outline-none focus:border-yellow-300'
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="email">Email</label>
          <input
            className='p-2 rounded-md bg-slate-50 border-2 transition-all outline-none focus:border-yellow-300'
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="message">Message</label>
          <textarea
            className='p-2 rounded-md bg-slate-50 border-2 transition-all outline-none focus:border-yellow-300'
            name="message"
            id="message" />
        </div>
      </div>
      <div className='mt-8 text-center'>
        <SubmitButton />
      </div>
    </form>
  )
}

