import EmptyCollection from '@/components/EmptyCollection'
import React from 'react'
import BlogItem from './BlogItem'
import { Blog } from '@prisma/client'

export default function BlogsTable({blogs}: {blogs:Blog[]}) {
  return (
    <div className='divide-y border rounded-b-md'>
      {blogs.length === 0 ? <EmptyCollection /> 
      :blogs.map(blog => 
        <div key={blog.id} className='py-3 px-4'>
          <BlogItem blog={blog}/>
        </div>
      )}
    </div>
  )
}
