import SeoCreateForm from '@/components/SeoCreateForm'
import prisma from '@/lib/connect'
import React from 'react'

export default async function page() {
  const seo = await prisma.seo.findFirst()
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-semibold'>SEO</h2>
      </div>
      <div>
        {seo && <SeoCreateForm seo={seo}/>}
      </div>
    </div>
  )
}
