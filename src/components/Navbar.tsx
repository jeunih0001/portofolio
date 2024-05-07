import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed top-0 w-full h-navbar bg-white z-20'>
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <span className='text-4xl font-extrabold tracking-wider font-special'>JEUNIH</span>
        </Link>
        <div className='hidden md:flex items-center gap-6'>
          <Link className='capitalize tracking-wider group inline-flex px-4 py-2' href={'services'}>
            <span className='transition-all group-hover:-translate-y-2'>What I Do</span>
          </Link>
          <Link className='capitalize tracking-wider group inline-flex px-4 py-2' href={'projects'}>
            <span className='transition-all group-hover:-translate-y-2'>My Work</span>
          </Link>
          <Link className='capitalize tracking-wide group px-4 hover:px-6 hover:shadow-xl font-medium transition-all py-4 bg-black text-slate-50 rounded-md inline-flex justify-center' href={'contact'}>Get in touch</Link>
        </div>
      </div>
    </nav>
  )
}
