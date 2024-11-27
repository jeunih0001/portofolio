import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

interface Props {
  project: Project,
  className?: string
}

export default function ProjectCard({ project, className }: Readonly<Props>) {
  return (
    <a href={project.github ?? project.live!} className='grid content-start hover:-translate-y-2 transition-all duration-300 group'>
      <div className='relative'>
        <Image width={0} height={0} className="w-full aspect-video rounded-t-xl object-cover" src={project.image ?? ''} alt={project.name} />
        <div className="absolute inset-0 bg-black/80 rounded-t-xl text-white opacity-0 group-hover:opacity-100 transition-all delay-100 duration-300 grid place-content-center text-lg font-semibold"> <div className="inline-flex items-center gap-2">View Project <ArrowRightIcon /></div></div>
      </div>
      <div className="px-6 py-6 bg-foreground/[0.04] rounded-b-xl">
        <h3 className='text-2xl font-bold'>{project.name}</h3>
        <div className='text-sm text-muted-foreground font-medium mt-1 mb-3'>{project.tags.map(tag => tag).join(', ')}</div>
        <p className='text-foreground/80 text-sm'>{project.summary}</p>
      </div>
    </a>
  )
}
