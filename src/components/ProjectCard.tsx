import Image from 'next/image'
import React from 'react'

interface Props{
  className?: string
}

export default function ProjectCard({className}: Readonly<Props>) {
  return (
    <div className={`grid rounded-md overflow-hidden ${className}`}>
      <div className="col-start-1 row-start-1 grid">
        <img className="h-[250px] w-full object-cover" src="https://picsum.photos/800/800" alt="projects" />
      </div>
      <div className="col-start-1 row-start-1 grid overflow-hidden bg-black/20 text-white transition-all delay-200 duration-300 hover:bg-black/60 hover:backdrop-blur-sm">
        <div className="group grid content-end px-4 text-gray-200">
          <h3 className="mb-2 text-xl font-bold">Lorem, ipsum dolor.</h3>
          <div className="-mb-[100%] space-y-2 overflow-hidden pb-4 opacity-0 transition-all duration-500 group-hover:-mb-0 group-hover:opacity-100">
            <p className="max-w-sm text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore odio voluptas vitae quae aliquid.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span>#css</span>
              <span>#html</span>
              <span>#html</span>
              <span>#html</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
