"use client"
import React, { useEffect, useRef, useState } from 'react'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'
import { sendEmail } from '@/lib/sendEmail'

export const ContactForm = () => {


  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(sendEmail, {
    success: false,
    message: null,
    errors: {
      name: null,
      email: null,
      message: null,
    }
  })

  const [showError, setShowError] = useState<boolean>(false)

  useEffect(() => {
    if (state.message) setShowError(true)
    if (state.success) formRef.current?.reset()
    
    setTimeout(() => {
      setShowError(false)
    }, 3000);

  }, [state])



  return (
    <form ref={formRef} action={formAction}>
      {showError &&
        <div className={`fixed z-30 animate-enter_y inset-0 h-fit top-4 border mx-auto w-72 rounded-lg px-4 py-3 shadow-lg flex justify-between gap-4 items-center ${state.success ? 'bg-green-50 text-background': 'bg-red-50 text-red-800 font-medium border-red-800'}`}>
          <p className='capitalize text-sm'>{state.message}</p>
          <button className='p-2 rounded-full hover:scale-105 transition-all flex-shrink-0' onClick={() => setShowError(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
      }
      <div className='space-y-4'>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="name">Name</label>
          <input
            className='p-2 rounded-md bg-slate-50 text-slate-800 border-2 transition-all outline-none focus:border-yellow-300'
            type="text"
            name="name"
            id="name"
          />
          {state.errors.name && <p className='text-sm font-medium text-red-400'>{state.errors.name}</p>}
        </div>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="email">Email</label>
          <input
            className='p-2 rounded-md bg-slate-50 text-slate-800 border-2 transition-all outline-none focus:border-yellow-300'
            type="email"
            name="email"
            id="email"
          />
          {state.errors.email && <p className='text-sm font-medium text-red-400'>{state.errors.email}</p>}
        </div>
        <div className='grid gap-2'>
          <label className='font-medium' htmlFor="message">Message</label>
          <textarea
            className='p-2 rounded-md bg-slate-50 text-slate-800 border-2 transition-all outline-none focus:border-yellow-300'
            name="message"
            id="message" />
          {state.errors.message && <p className='text-sm font-medium text-red-400'>{state.errors.message}</p>}
        </div>
      </div>
      <div className='mt-8 text-center'>
        <SubmitButton />
      </div>
    </form>
  )
}

