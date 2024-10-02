import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GitHubLogoIcon} from '@radix-ui/react-icons';

interface Props{
  project: Project,
  className?: string
}

export default function ProjectCard({project,className}: Readonly<Props>) {
  return (
    <div className={`grid rounded-md border overflow-hidden group ${className}`}>
      <div className="col-start-1 row-start-1 grid ">
        <Image width={0} height={0} className="h-[250px] w-full object-cover" src={project.image ?? ''} alt={project.name} />
      </div>
      <div className='col-start-1 row-start-1 bg-black/30 grid content-end bg-gradient-to-b from-transparent to-black text-gray-50 px-4'>
        <h3 className='text-xl font-semibold capitalize'>{project.name}</h3>
        <div className='pt-2 pb-4 space-y-2'>
          <p className='text-sm'>{project.summary}</p>
          <div className='flex items-center gap-2 text-xs flex-wrap'>{project.tags.map((tag,index) => <span className='text-accent-foreground bg-accent font-medium px-2 py-px rounded-full border' key={index}>{tag}</span>)}</div>
        </div>
      </div>
      <div className='opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 col-start-1 row-start-1 self-start justify-self-end grid gap-2 m-2'>
          {project.github && <Link target='_blank' className='px-2 py-1 bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors border text-foreground rounded-lg inline-flex justify-center items-center gap-1 font-semibold tracking-wide text-xs' href={project.github}>
          <GitHubLogoIcon />
           Github
           </Link>}
          {project.live && <Link target='_blank' className='px-2 py-1 bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors border text-foreground rounded-lg inline-flex justify-center items-center gap-1 font-semibold tracking-wide text-xs' href={project.live}>
          <FaExternalLinkAlt /> 
          Live site </Link>}
      </div>
    </div>
  )
}
