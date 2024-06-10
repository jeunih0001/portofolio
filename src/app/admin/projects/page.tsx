import React from 'react'

export default function Projects() {
  return (
    <div>
      
      <div className='space-y-2'>
              <div className='font-semibold text-muted-foreground'>
                <span className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </span>
                <p>
                  Programming languages i use
                </p>
              </div>
              <ul className='flex items-center gap-4 flex-wrap max-w-sm'>
                {Array.from({ length: 5 }, (_, index) =>
                  <li key={index} className='flex'>
                    <span className='capitalize text-sm bg-accent/15 text-accent font-bold px-2 py-1 rounded-full border border-accent tracking-wide'>python</span>
                  </li>
                )}
              </ul>
            </div>
    </div>
  )
}
