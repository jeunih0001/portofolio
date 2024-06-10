"use client"
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useFormState } from 'react-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { deleteAction, DeleteConfig } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import SubmitButton from './SubmitButton'

export default function DeleteAction({config}: {config: DeleteConfig}) {
  const deleteRecord = deleteAction.bind(null,config)
  const [state,action] = useFormState(deleteRecord,{})
  const [open,setOpen] = useState<boolean>(false)
  const router = useRouter()
  useEffect(()=>{
    if (state.status === 'success'){
      setOpen(false)
      router.refresh()
    }
  },[state,router])
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span className={buttonVariants({variant: 'destructive'})}>Delete</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {`Delete ${config.schema}`}
          </DialogTitle>
          <form action={action} className='space-y-6 !mt-4'>
            <div className='flex items-center gap-4'>
              <SubmitButton base action='delete' message='Confirm' />
              <Button type='button' variant={'outline'} onClick={()=>setOpen(false)}>Cancel</Button>
            </div>
          </form>
      </DialogHeader>
    </DialogContent>
    </Dialog>
  )
}
