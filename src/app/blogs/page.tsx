import Image from 'next/image'
import React from 'react'

export default function Blogs() {
  return (
    <div className='mt-navbar min-h-dvh flex flex-col'>
      <div className='text-center max-w-screen-md mx-auto text-balance py-4'>
        <div className='flex justify-center text-yellow-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
        </div>
        <h1 className='font-special text-4xl my-4'>My Blogs</h1>
      </div>
      <div className='bg-foreground text-foreground-overlay flex-grow'>
        <div className="container py-16">
          <h2 className='text-3xl font-bold mb-8'>Featured Blogs</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-6">
            <div className='md:row-span-5'>
              <MainCard />
            </div>
            <div className='divide-y'>
              {Array.from({ length: 3 }, (_, index) =>
                <div key={index} className={`md:col-start-2 ${index === 0 ? 'pb-4' : 'py-4'}`}>
                  <SplitCard />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const MainCard = () => {
  return (
    <div className='space-y-4'>
      <figure>
        <Image
          width={0}
          height={0}
          alt='blog image'
          className='w-full aspect-video bg-muted'
          src={'https://source.unsplash.com/random/1280x720/?tech'}
        />
      </figure>
      <div className='grid'>
        <span className='text-sm font-medium text-muted'>14/9/2024</span>
        <h3 className='font-bold md:text-xl mb-2'>Lorem, ipsum dolor consectetur adipisicing elit. Vero, blanditiis.</h3>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid commodi doloribus nesciunt, repudiandae ipsa atque.</p>
      </div>
    </div>
  )

}
const SplitCard = () => {
  return (
    <div className='grid grid-cols-[1fr,2fr] gap-3 items-start'>
      <figure className='min-w-24'>
        <Image
          width={0}
          height={0}
          alt='blog image'
          className='w-full aspect-video bg-muted'
          src={'https://source.unsplash.com/random/1280x720/?tech'}
        />
      </figure>
      <div className='grid'>
        <span className='text-sm font-medium text-muted'>14/9/2024</span>
        <h3 className='font-bold text-sm md:text-lg'>Lorem, ipsum dolor consectetur adipisicing elit. Vero, blanditiis.</h3>
      </div>
    </div>
  )

}