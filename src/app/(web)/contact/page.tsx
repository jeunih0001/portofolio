import { ContactForm } from '@/components/ContactForm'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

const BODYSTLES: CSSProperties = {
  backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'right bottom',
  backgroundRepeat: 'no-repeat'
}


export default function Contact() {
  return (
    <div className='bg-background'>
      <header>
        <Navbar className='md:absolute top-0 w-full z-50' />
      </header>
      <main className='min-h-dvh grid md:grid-cols-[1fr,1fr] md:divide-x-2'>
        <div style={BODYSTLES} className='grid'>
          <div className='px-base space-y-8 backdrop-blur bg-muted/20 py-navbar grid content-center'>
            <div className='space-y-2'>
              <h1 className='text-4xl font-semibold'>Hello, I&nbsp;m <span className='text-primary'>Jean Eudes</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rerum delectus doloremque ipsum sunt fugit commodi non labore! Labore, provident?</p>
            </div>
            <div>
              <ul className='flex gap-4 flex-wrap items-center'>
                {Array.from({ length: 4 }, (_, index) =>
                  <li key={index} className='w-24 py-1 rounded-full border-2 inline-flex items-center bg-muted justify-center text-muted-foreground border-muted-foreground hover:bg-muted-foreground hover:text-muted transition-all'>
                    <Link href={'/'} className='font-semibold text-sm inline-flex items-center gap-2'>
                      Github
                      <FaExternalLinkAlt />
                    </Link>
                  </li>
                )}

              </ul>
            </div>
          </div>
        </div>
        <div className='md:py-navbar bg-background px-base mt-4 md:mt-8 space-y-4'>
          <h3 className='text-2xl text-center font-semibold'>Contact me</h3>
          <div className='max-w-md mx-auto '>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
