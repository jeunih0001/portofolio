import BlogsTable from '@/components/partials/blogs/BlogsTable'
import { buttonVariants } from '@/components/ui/button'
import prisma from '@/lib/connect'
import { Blog } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

async function getBlogs(): Promise<Blog[]>{
  try {
    const response = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      },
    })
    return response
  } catch (error) {
    return []
  }

}
export default async function Blogs() {
  const blogs = await getBlogs()
  return (
    <main className='px-4'>
      <div className='bg-secondary p-4 flex justify-between rounded-t-md'>
        <h2 className='text-2xl font-bold'>Blogs</h2>
        <Link href={'/admin/blogs/create'} className={buttonVariants({variant: 'accent'})}>New Blog</Link>
      </div>
      <BlogsTable blogs={blogs} />
    </main>
  )
}
