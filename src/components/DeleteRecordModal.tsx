"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useFormState } from 'react-dom'
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import SubmitButton from './SubmitButton'
import { deleteAction, DeleteConfig } from '@/actions/global'

import { Prisma } from "@prisma/client"

interface Props {
  model: Prisma.ModelName
  record: string,
  children?: ReactNode
}

export default function DeleteRecordModal({model,record,children='Delete'}: Props) {
  const deleteRecord = deleteAction.bind(null,{schema: model,record})
  const [state,action] = useFormState(deleteRecord,{})
  const [open,setOpen] = useState<boolean>(false)
  const router = useRouter()
  useEffect(()=>{
    if (state.ok){
      setOpen(false)
      router.refresh()
    }
  },[state,router])
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='capitalize'>
            {`Delete ${model}`}
          </DialogTitle>
          <form action={action} className='space-y-6 !mt-4'>
            <div className='flex items-center gap-4'>
              <SubmitButton>Confirm</SubmitButton>
              <Button type='button' variant={'outline'} onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
