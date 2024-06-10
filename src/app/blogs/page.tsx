import { Navbar } from '@/components/Navbar'
import prisma from '@/lib/connect'
import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type CategoryPreview = {
  name: string,
  slug: string,
}

async function getCategories(): Promise<CategoryPreview[]>{
  try {
    const response = await prisma.category.findMany({
      select: {
        name: true,
        slug: true
      },
      take: 5,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return response

  } catch (error) {
    console.error(error)
    return []
  }
}

export const revalidate = 60

export default async function Blogs() {

  const [categories] = await Promise.all([getCategories()])
  return (
    <>
      <header className='bg-background border-b sticky top-0'>
        <Navbar />
      </header>
      <main className='bg-background min-h-dvh'>
        <div className="container py-6">
          <section>
            <h2 className='text-3xl font-bold mb-8'>Featured Blogs</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-6">
              <div>
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
          </section>
          <div className="mt-8 grid items-start gap-12 md:grid-cols-[1fr,300px]">
            <section className='max-w-screen-md'>
              <h2 className='text-3xl font-bold my-8'>Latest Blogs</h2>
              <div className='grid gap-12 '>
                {Array.from({ length: 10 }, (_, index) =>
                    <div key={index}>
                      <SplitCard />
                    </div>
                  )}
              </div>
            </section>
            <section className='sticky top-navbar'>
              <h2 className='text-3xl font-bold my-8'>Categories</h2>
              <ul className='divide-y'>
                {categories.map(category => 
                  <li key={category.slug} className='py-2'>
                    <Link  className='text-foreground font-medium hover:text-primary' href={'/'}>{category.name}</Link>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
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
          src={'https://source.unsplash.com/random'}
        />
      </figure>
      <div className='grid'>
        <span className='text-sm font-medium text-muted-foreground'>14/9/2024</span>
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
          src={'https://source.unsplash.com/random'}
        />
      </figure>
      <div className='grid'>
        <span className='text-sm font-medium text-muted-foreground'>14/9/2024</span>
        <h3 className='font-bold text-sm sm:text-base lg:text-lg'>Lorem, ipsum dolor consectetur adipisicing elit. Vero, blanditiis.</h3>
      </div>
    </div>
  )

}