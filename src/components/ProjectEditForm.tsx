"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'
import { createProject } from '@/lib/store'
import FormFieldError from './FormFieldError'
import ImageUploader from './ImageUploader'
import { Project } from '@prisma/client'
import { updateProject } from '@/lib/update'

export default function ProjectEditForm({project}: {project: Project}) {

  const [image,setImage] = useState<string>(project.image)
  const [state, action] = useFormState(updateProject, {})

  return (
    <form action={action} className='space-y-8'>
      <input type="hidden" name="id" value={project.id} />
      <div className='grid md:grid-cols-2 gap-6 items-start'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            defaultValue={project.name}
            name='name'
            id='name'
          />
          <FormFieldError error={state.errors?.name} />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='url'>url</Label>
          <Input
            defaultValue={project.url}
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
          <ImageUploader existingImage={project.image} setField={setImage}/>
          <FormFieldError error={state.errors?.image} />

        </div>
        <div className='grid gap-2 col-span-full'>
          <Label htmlFor='summary'>Summary</Label>
          <Textarea
            rows={5}
            defaultValue={project.summary}
            name='summary'
            id='summary'
          />
          <FormFieldError error={state.errors?.summary} />
        </div>
        <div className='grid gap-1'>
          <Label htmlFor='tags'>tags</Label>
          <Input
            defaultValue={project.tags.map(tag => `#${tag}`).join(' ')}
            pattern='^(#([^#]+))+$'
            name='tags'
            id='tags'
          />
          <FormFieldError error={state.errors?.tags} />
        </div>
      </div>
      <div>
        <SubmitButton message='Save changes' />
      </div>
    </form>
  )
}
