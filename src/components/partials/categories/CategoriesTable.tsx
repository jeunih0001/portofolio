import { Category } from '@prisma/client'
import React from 'react'
import CategoryItem from './CategoryItem'
import EmptyCollection from '@/components/EmptyCollection';

export default function CategoriesTable({categories}: {categories: Category[]}) {
  return (
    <div className='divide-y border rounded-b-md'>
      {categories.length === 0 ? <EmptyCollection /> 
      :categories.map(category => 
        <div key={category.id} className='py-3 px-4'>
          <CategoryItem category={category}/>
        </div>
      )}
    </div>
  )
}
