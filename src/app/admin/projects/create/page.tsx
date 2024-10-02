import BreadCrumbs from '@/components/dashboard/BreadCrumbs'
import ProjectCreateForm from '@/components/project/ProjectCreateForm'
import React from 'react'

export default function NewProject() {
  return (
    <main className='grid gap-6'>
      <div>
        <h2 className='text-2xl font-semibold'>New Project</h2>
      </div>
      <div className='bg-card p-6 border shadow rounded-xl'>
        <ProjectCreateForm />
      </div>
    </main>
  )
}
