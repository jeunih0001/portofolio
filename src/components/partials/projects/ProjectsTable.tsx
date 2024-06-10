import EmptyCollection from '@/components/EmptyCollection'
import { Project } from '@prisma/client'
import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import ProjectRowItem from './ProjectRowItem'

export default function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className='bg-secondary p-4 flex justify-between rounded-t-md'>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <Link className={buttonVariants()} href={'/admin/projects/create'}>New Project</Link>
      </div>
      <div className='divide-y border rounded-b-md'>
        {projects.length === 0 ? <EmptyCollection />
          : projects.map(project =>
            <div key={project.id} className='py-3 px-4'>
              <ProjectRowItem project={project} />
            </div>
          )}
      </div>
    </>
  )
}


