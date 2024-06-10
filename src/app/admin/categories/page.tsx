import CategoriesTable from '@/components/partials/categories/CategoriesTable'
import CategoryForm from '@/components/partials/categories/CategoryForm'
import prisma from '@/lib/connect'
import { Category } from '@prisma/client'
import React from 'react'

export const revalidate = 0

async function getCategories(): Promise<Category[]>{
  try {
    const response = await prisma.category.findMany({
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

export default async function Categories() {
  const categories = await getCategories()
  return (
    <main className='px-4'>
      <CategoriesTable categories={categories} />
    </main>
  )
}