"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Project } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import SubmitButton from './SubmitButton'
import { createProject } from '@/lib/store'
import FormFieldError from './FormFieldError'
import ImageUploader from './ImageUploader'

export default function ProjectCreateForm() {

  const [image,setImage] = useState<string>('')
  const [state, action] = useFormState(createProject, {})

  return (
    <form action={action} className='space-y-8'>
      <div className='grid md:grid-cols-2 gap-6 items-start'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            name='name'
            id='name'
          />
          <FormFieldError error={state.errors?.name} />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='url'>url</Label>
          <Input
            name='url'
            id='url'
          />
          <FormFieldError error={state.errors?.url} />

        </div>
        <div className='grid gap-2 col-span-full'>
          <Label htmlFor='image'>Image</Label>
          <Input
            name='image'
            id='image'
            className='hidden'
            value={image}
            readOnly
          />
          <ImageUploader setField={setImage}/>
          <FormFieldError error={state.errors?.image} />

        </div>
        <div className='grid gap-2 col-span-full'>
          <Label htmlFor='summary'>Summary</Label>
          <Textarea
            rows={5}
            name='summary'
            id='summary'
          />
          <FormFieldError error={state.errors?.summary} />
        </div>
        <div className='grid gap-1'>
          <Label htmlFor='tags'>tags</Label>
          <Input
            pattern='^(#([^#]+))+$'
            name='tags'
            id='tags'
          />
          <FormFieldError error={state.errors?.tags} />
        </div>
      </div>
      <div>
        <SubmitButton message='Create' />
      </div>
    </form>
  )
}
