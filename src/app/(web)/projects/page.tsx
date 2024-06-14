import { Navbar } from '@/components/Navbar'
import React, { CSSProperties } from 'react'
import { FaCode } from 'react-icons/fa'

const BODYSTLES: CSSProperties = {
  backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
  backgroundSize: '200%',
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat'
}


export default function Contact() {
  return (
    <div>
      <header className='flex-shrink-0'>
        <Navbar className='absolute top-0 w-full'/>
      </header>
      <main className='container md:h-dvh pt-navbar pb-6'>
        <div className="grid md:md:grid-cols-[1fr,3fr] divide-y-2 md:divide-x-2 md:divide-y-0 md:h-full items-start border backdrop-blur-sm rounded-lg shadow-lg">
          <div className='h-32 md:h-full py-6 overflow-y-auto bg-muted/20 px-4 space-y-6'>
            <div className='space-y-1'>
              <FaCode className='size-6'/>
              <h1 className='text-3xl font-semibold'>My Projects</h1>
            </div>
            <ul className='space-y-2'>
              {Array.from({ length: 5 }, (_, index) =>
                <li key={index} className='w-full'>
                  <button className={`transition-all rounded-md w-full py-2 text-start px-2 font-semibold text-sm ${index == 0 ? 'text-accent bg-card-foreground/10': 'hover:bg-card-foreground/10 '}`}>
                    Project name
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className='md:h-full md:overflow-auto md:flex md:flex-col py-6 px-base'>
            <div className='max-w-screen-sm flex-shrink-0 space-y-2'>
              <h3 className='text-2xl font-semibold'>1.  Lorem ipsum dolor sit amet.</h3>
              <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iste quam. Veniam sint aspernatur esse rem et in cumque nesciunt!</p>
            </div>
            <div className='flex-grow overflow-auto bg-secondary/40 rounded-lg my-6'>
            </div>
            <div className='flex-shrink-0'>
              <ul className='flex items-center gap-4 flex-wrap'>
                {Array.from({length: 5},(_,index)=>
                <li key={index}>
                  <span className='text-sm font-medium'>#python</span>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
