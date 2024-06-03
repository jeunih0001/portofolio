"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ResponsiveNavbar } from './ResponsiveNavbar'

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(()=>{
    function handleScroll(){
      const currentScrollPos = window.scrollY
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }
    document.addEventListener('scroll', handleScroll)
  },[prevScrollPos])
  return (
    <nav className={`flex items-center fixed top-0 w-full h-navbar z-20 transition-all delay-100 duration-300 ${prevScrollPos > 10 && visible && 'bg-white text-slate-800'} ${!visible && 'opacity-0'}`}>
      <div className='container flex items-center justify-between'>
        <Link href={'/'}>
          <span className='text-4xl font-extrabold tracking-wider font-special'>JEUNIH</span>
        </Link>
        <div className='hidden md:flex items-center gap-6'>
          <Link className='capitalize tracking-wider group inline-flex px-4 py-2' href={'services'}>
            <span className='transition-all group-hover:-translate-y-2'>Services </span>
          </Link>
          <Link className='capitalize tracking-wider group inline-flex px-4 py-2' href={'projects'}>
            <span className='transition-all group-hover:-translate-y-2'>My Projects </span>
          </Link>
          <Link className='capitalize tracking-wide group px-4 hover:bg-yellow-600 hover:shadow-xl font-medium transition-all py-4 bg-yellow-500 text-slate-50 rounded-md inline-flex justify-center' href={'contact'}>Get in touch</Link>
        </div>
        <div className='inline-block md:hidden'>
          <ResponsiveNavbar />
        </div>
      </div>
    </nav>
  )
}
