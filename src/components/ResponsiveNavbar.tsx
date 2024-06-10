"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { NAVLINKS } from './Navbar'
import { buttonVariants } from './ui/button'

export const ResponsiveNavbar = () => {
  const [open,setOpen] = useState<boolean>(false)
  const path = usePathname()

  useEffect(()=>{
    setOpen(false)
  },[path])
  return (
    <div>
      <button onClick={()=>setOpen(true)} className='p-2 bg-foreground/20 rounded-md hover:bg-foreground/50 transition-colors'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {open && <>
      <div onClick={()=>setOpen(false)} className='fixed inset-0 z-50  bg-black/40 animate-enter_opacity'></div>
      <div className='fixed z-50 mt-navbar inset-0 mx-auto px-4 max-w-96 h-fit animate-enter_y '>
        <div className='bg-background text-foreground px-4 py-6 rounded-lg'>
          <div className='grid gap-4'>
            {NAVLINKS.map(link => 
              <Link key={link.name} className='capitalize font-medium tracking-wider border-b border-transparent hover:border-primary inline-flex px-4 py-2' href={link.href}>{link.name}</Link>
            )}
            <Link className={buttonVariants({variant: 'default' , size: 'lg', className: 'h-12'})} href={'contact'}>Get in touch</Link>
          </div>
        </div>
      </div>
      </>}
    </div>
  )
}
