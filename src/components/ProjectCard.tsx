import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
  project: Project,
  className?: string
}

export default function ProjectCard({project,className}: Readonly<Props>) {
  return (
    <div className={`grid rounded-md overflow-hidden ${className}`}>
      <div className="col-start-1 row-start-1 grid">
        <Image width={0} height={0} className="h-[250px] w-full object-cover" src={project.image ?? ''} alt={project.name} />
      </div>
      <div className="col-start-1 row-start-1 grid overflow-hidden bg-black/20 text-white transition-all delay-200 duration-300 hover:bg-black/60 hover:backdrop-blur-sm">
        <div className="group grid content-end px-4 text-gray-200">
          <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
          <div className='flex items-center gap-4'>
            {project.github && <Link href={project.github} className='hover:underline font-medium'>Github Repo</Link>}
            {project.live && <Link href={project.live} className='hover:underline font-medium'>Live</Link>}
          </div>
          <div className="-mb-[100%] space-y-2 overflow-hidden pb-4 opacity-0 transition-all duration-500 group-hover:-mb-0 group-hover:opacity-100">
            <p className="max-w-sm text-sm">{project.summary}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
