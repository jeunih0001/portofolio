import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar'
import ProjectCard from '@/components/project/ProjectCard';
import prisma from '@/lib/prisma';
import { ArrowDownIcon, DownloadIcon, ExternalLinkIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { FaReact } from 'react-icons/fa';
import { MdConnectWithoutContact } from "react-icons/md";

export default async function Home() {
  const STYLES: CSSProperties = {
    backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
    backgroundSize: 'contain',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat'
  }
  const LSTYLES: CSSProperties = {
    backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
    backgroundSize: '50% 100%',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat'
  }

  const [projects, about, socials, tools] = await Promise.all([
    prisma.project.findMany(),
    prisma.about.findFirst(),
    prisma.seo.findFirst({
      select: {
        github: true,
        linkedin: true
      }
    }),
    prisma.tool.findMany()
  ])

  return (
    <>
      <header>
        <Navbar className='absolute w-full' />
      </header>
      <main>
        <section style={STYLES} className='pt-navbar h-dvh grid content-center text-center '>
          <div className='container '>
            <h1 className='grid'>
              <span className='text-lg  font-medium'>👋, I am Jean Eudes</span>
              <span className='mb-16 mt-4 grid text-5xl md:text-8xl font-extrabold font-special tracking-wider !leading-[1.1]'><span>FullStack</span><span className='text-shadow'  >Web Developer</span></span>
            </h1>
            <div>
              <button className='py-3 px-4 font-medium hover:px-8 transition-all hover:shadow-2xl border-2 border-foreground hover:bg-foreground/10 rounded-lg inline-flex items-center gap-1 whitespace-pre'>
                <DownloadIcon className='size-6' /> Download CV
              </button>
            </div>

          </div>
        </section>
        <section className='container'>
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className='text-balance'>
              <h2 className='text_section_header capitalize'>{about?.title}</h2>
              <div className='text-foreground/80 tracking-wide leading-7 mt-4 mb-16'>
                <p className='inline text-center'>{about?.description}</p>
              </div>
              <hr />
            </div>
            <div>
              <div className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]'>
                {tools.map((tool, index) =>
                  <div className="grid place-content-center gap-6 bg-foreground/[0.04] px-6 shadow py-6 cursor-pointer border border-background hover:scale-125 group transition-all duration-300 hover:bg-background relative" key={index}>
                    {tool.icon && <Image src={tool.icon} width={0} height={0} alt='image' className='w-full max-w-24 mx-auto aspect-square object-contain' />}
                    <div className="absolute inset-0 w-fit h-fit py-2 px-4 font-medium uppercase text-sm rounded-full bg-foreground text-background/80 -top-4  mx-auto scale-30 opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:scale-75">{tool.name}</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
        <section className='container my-section space-y-16'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <h2 className='text_section_header'>My Projects</h2>
            <Link href={socials?.github ?? ''} className='inline-flex items-center text-sm font-medium tracking-wide gap-1 px-4 py-2 border-2 rounded-md text-accent-foreground bg-accent hover:bg-accent/90 transition-colors'>
              <GitHubLogoIcon />
              <span>View More</span>
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) =>
              <ProjectCard key={index} project={project} className={(index == 0 || index % 4 == 0 || (index + 1) % 4 == 0) ? 'sm:col-span-2' : ''} />
            )}
          </div>
        </section>

        <section id='contact' style={LSTYLES} className='my-section '>
          <div className='px-base bg-background/50'>
            <div className='space-y-16 max-w-screen-sm mx-auto rounded-lg '>
              <div className='text-center space-y-4'>
                <h2 className='text_section_header'>Contact Me</h2>
                <p className='text-balance text-foreground/80'>If you have any questions or are interested in working together, please complete the form below to reach out</p>
              </div>
              <ContactForm />
            </div>
          </div>

        </section>

        <Footer />
      </main>
    </>
  )
}
