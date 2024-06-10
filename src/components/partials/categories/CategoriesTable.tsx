import { Category } from '@prisma/client'
import React from 'react'
import EmptyCollection from '@/components/EmptyCollection';
import CategoryRowItem from './CategoryRowItem';
import CategoryForm from './CategoryForm';

export default function CategoriesTable({ categories }: { categories: Category[] }) {
  return (
    <>
      <div className='bg-secondary p-4 flex justify-between rounded-t-md'>
        <h2 className='text-2xl font-bold'>Categories</h2>
        <CategoryForm />
      </div>
      <div className='divide-y border rounded-b-md'>
        {categories.length === 0 ? <EmptyCollection />
          : categories.map(category =>
            <div key={category.id} className='py-3 px-4'>
              <CategoryRowItem category={category} />
            </div>
          )}
      </div>
    </>
  )
}
