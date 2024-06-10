import ProjectForm from '@/components/partials/projects/ProjectForm'
import React from 'react'

export default function NewProject() {
  return (
    <main className='px-4'>
      <div className='pb-2 border-b-2'>
        <h2 className='text-2xl font-semibold'>New Project</h2>
      </div>
      <div className='py-6'>
        <ProjectForm />
      </div>
    </main>
  )
}
