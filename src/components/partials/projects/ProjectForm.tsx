"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createProject } from '@/lib/actions'
import { Project } from '@prisma/client'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import SubmitButton from '../../SubmitButton'
import { useRouter } from 'next/navigation'

export default function ProjectForm({project}:{project?: Project}) {

  const [state,action] = useFormState(createProject,{})
  const router = useRouter()

  useEffect(()=>{
    if (state.status === 'ok') {
      router.push('/admin/projects')
      router.refresh()
    }
  },[state,router])
  return (
    <form action={action}>
      {state.errors && <code>{JSON.stringify(state.errors)}</code>}
      <div className='space-y-6'>
        <div className='grid gap-1'>
          <Label htmlFor='name'>Name</Label>
          <Input
            name='name'
            id='name'
          />
        </div>
        <div className='grid gap-1'>
          <Label htmlFor='summary'>Summary</Label>
          <Textarea
            name='summary'
            id='summary'
          />
        </div>
        <div className='grid gap-1'>
          <Label htmlFor='url'>url</Label>
          <Input
            name='url'
            id='url'
          />
        </div>
        <div className='grid gap-1'>
          <Label htmlFor='tags'>tags</Label>
          <Input
            name='tags'
            id='tags'
          />
        </div>
      </div>
      <div className='mt-8'>
        <SubmitButton message='Create'/>
      </div>
    </form>
  )
}
