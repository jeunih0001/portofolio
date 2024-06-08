"use client"
import { Category } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useFormState } from 'react-dom'
import { CreateCategory } from '@/lib/actions'
import SubmitButton from './SubmitButton'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { buttonVariants } from '@/components/ui/button'

export default function CategoryForm({ category }: { category?: Category }) {
  const [open,setOpen] = useState<boolean>(false)
  const [state, action] = useFormState(CreateCategory, {})

  const router = useRouter()

  useEffect(() => {
    if (state.status === 'success') {
      router.refresh()
      setOpen(false)
    }
  }, [state, router])
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span className={buttonVariants({variant: 'accent'})}>New Category</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Category</DialogTitle>
          <form action={action} className='space-y-6 mt-4'>
            <div className='text-sm'>
              {state.errors && <p>{JSON.stringify(state.errors)}</p>}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Category Name</Label>
              <Input
                name='name'
                id='name'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Category Description</Label>
              <Textarea
                name='description'
                id='description'
              />
            </div>
            <SubmitButton message='Create' />
          </form>
      </DialogHeader>
    </DialogContent>
    </Dialog>
  )
}
