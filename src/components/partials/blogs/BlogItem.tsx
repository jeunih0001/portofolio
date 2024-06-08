import { Blog } from '@prisma/client'
import React from 'react'
import BlogActions from './BlogActions'

export default function BlogItem({blog}: {blog: Blog}) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <h3 className='font-medium'>
        {blog.title}
      </h3>
      <BlogActions blogId={blog.id}/>
    </div>
  )
}
