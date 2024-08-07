import ProjectCreateForm from '@/components/ProjectCreateForm'
import React from 'react'

export default function NewProject() {
  return (
    <main className='py-6 space-y-6'>
      <div>
        <h2 className='text-2xl font-semibold'>New Project</h2>
      </div>
      <div>
        <ProjectCreateForm />
      </div>
    </main>
  )
}
