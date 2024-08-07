import EmptyCollection from '@/components/EmptyCollection'
import ProjectRowItem from '@/components/ProjectRowItem'
import { buttonVariants } from '@/components/ui/button'
import prisma from '@/lib/connect'
import Link from 'next/link'
import React from 'react'


export default async function Projects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  }) 

  return (
    <main className='py-6 space-y-6'>
      <div>

      </div>
      <div>
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
      </div>
    </main>
  )
}
