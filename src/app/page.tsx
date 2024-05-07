import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='pt-navbar h-dvh grid content-center text-center px-4'>
      <p className='text-lg  font-medium'>👋 I am Jean Eudes</p>
      <h1 className='mb-16 mt-4 grid text-5xl md:text-8xl font-extrabold font-special tracking-wider !leading-[1.1]'><span>FullStack</span><span className='text-shadow'  >Web Developer</span></h1>
      <div className='justify-center ma'>
        <Link className='py-3 px-4 font-medium hover:px-6 transition-all hover:shadow-2xl border-2 border-black rounded-lg inline-flex whitespace-pre' href={'contact'}>{"Let's work together"}</Link>
      </div>
    </div>
  )
}
