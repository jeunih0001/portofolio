import DeleteAction from '@/components/DeleteAction'
import { Button } from '@/components/ui/button'
import { Category} from '@prisma/client'
import React from 'react'

export default function CategoryRowItem({category}: {category: Category}) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <h3 className='font-medium'>
        {category.name}
      </h3>
      <CategoryActions categoryId={category.id}/>
    </div>
  )
}

function CategoryActions({categoryId}: {categoryId: string}) {

  return (
    <div className='flex items-center gap-2'>
      <Button variant={'outline'}>Edit</Button>
      <DeleteAction config={{schema: 'Category', record: categoryId}}/>
    </div>
  )
}
