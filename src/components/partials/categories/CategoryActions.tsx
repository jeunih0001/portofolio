"use client"
import { Button } from '@/components/ui/button'
import { deleteCategory } from '@/lib/actions'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'
import { useRouter } from 'next/navigation'

export default function CategoryActions({categoryId}: {categoryId: string}) {
  const deleteWithId = deleteCategory.bind(null,categoryId)
  const [deleteState,deleteAction] = useFormState(deleteWithId,{
    status: 'null'
  })
  const router = useRouter()

  useEffect(()=>{
    router.refresh()
  },[deleteState,router])
  return (
    <div className='flex items-center gap-2'>
      <Button size={'sm'} variant={'outline'}>Edit</Button>
      <form action={deleteAction}>
        <SubmitButton action='delete' message='delete'/>
      </form>
    </div>
  )
}
