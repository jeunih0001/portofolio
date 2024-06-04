import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='mt-navbar '>
      <div className='text-center max-w-screen-md mx-auto text-balance py-4'>
        <div className='flex justify-center text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <h1 className='font-special text-4xl my-4'>Contact Me</h1>
      </div>
      <div className='max-w-screen-sm mx-auto pb-16'>
          <ContactForm />
        </div>
      
    </div>
  )
}
