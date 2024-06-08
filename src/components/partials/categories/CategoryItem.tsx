import { Category} from '@prisma/client'
import React from 'react'
import CategoryActions from './CategoryActions'

export default function CategoryItem({category}: {category: Category}) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <h3 className='font-medium'>
        {category.name}
      </h3>
      <CategoryActions categoryId={category.id}/>
    </div>
  )
}
