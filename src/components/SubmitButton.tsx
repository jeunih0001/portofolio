"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button 
      disabled={pending}
      type='submit' 
      className='h-12 active:scale-95 cursor-pointer disabled:opacity-70 w-40 hover:w-44 bg-yellow-500 font-medium text-slate-50 tracking-wide transition-all hover:px-6 hover:shadow-xl inline-flex items-center justify-center gap-2 rounded-lg'>
        {pending ?
        <span className='size-8 rounded-full border-4 border-l-transparent border-slate-50 animate-spin'></span>
        :
        'Send Message'
        }
    </button>
  )
}
