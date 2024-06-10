import ProjectsTable from '@/components/partials/projects/ProjectsTable'
import prisma from '@/lib/connect'
import React from 'react'

export const revalidate = 0

async function getProjects(){
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return projects
}

export default async function Projects() {
  const projects = await getProjects()
  return (
    <main className='px-4'>
      <ProjectsTable projects={projects} />
    </main>
  )
}
