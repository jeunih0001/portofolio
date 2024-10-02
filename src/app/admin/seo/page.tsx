import SeoForm from '@/components/seo/SeoForm'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function page() {
  const seo = await prisma.seo.findFirst()
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-semibold'>SEO</h2>
      </div>
      <div className='bg-card p-6 rounded-2xl'>
        {seo && <SeoForm seo={seo}/>}
      </div>
    </div>
  )
}
