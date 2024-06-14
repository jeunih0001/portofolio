import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import React, { CSSProperties } from 'react'

export default function Home() {
  const STYLES: CSSProperties ={
    backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
    backgroundSize: 'contain',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat'
  }
  
  return (
    <>
    <header>
      <Navbar className='absolute w-full'/>
    </header>
    <main style={STYLES} className='pt-navbar h-dvh grid content-center text-center px-4'>
      <p className='text-lg  font-medium'>👋, I am Jean Eudes</p>
      <h1 className='mb-16 mt-4 grid text-5xl md:text-8xl font-extrabold font-special tracking-wider !leading-[1.1]'><span>FullStack</span><span className='text-shadow'  >Web Developer</span></h1>
      <div className='justify-center ma'>
        <Link className='py-3 px-4 font-medium hover:px-8 transition-all hover:shadow-2xl border-2 border-foreground hover:bg-foreground/10 rounded-lg inline-flex whitespace-pre' href={'contact'}>
          Let&apos;s work together 👌 
        </Link>
      </div>
    </main>
    </>
  )
}
