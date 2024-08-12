import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard';
import prisma from '@/lib/connect';
import { ExternalLinkIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link'
import React, { CSSProperties } from 'react'
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

  const [projects, about, socials] = await Promise.all([
    prisma.project.findMany(),
    prisma.about.findFirst(),
    prisma.seo.findFirst({
      select: {
        github: true,
        linkedin: true
      }
    })
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
            <div className='flex items-center justify-center flex-wrap gap-8'>
              <a target='_blank' className='inline-flex items-center py-2 w-32 justify-center border-2 border-accent bg-accent text-accent-foreground rounded-full gap-1 font-medium tracking-wider hover:shadow-lg transition-all group' href={socials?.github ?? ''}>
                <GitHubLogoIcon className='group-hover:animate-bounce'/>
                Github
              </a>
              <a target='_blank'  className='inline-flex items-center py-2 w-32 justify-center border-2 text-accent border-accent rounded-full gap-1 font-medium tracking-wider hover:shadow-lg transition-all group' href={socials?.linkedin ?? ''}>
                <LinkedInLogoIcon className='group-hover:animate-bounce'/>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section className='container py-section space-y-4 text-center'>
          <h2 className='text_section_header'>{about?.title}</h2>
          <div className='max-w-screen-md mx-auto text-muted-foreground tracking-wide leading-7 '>
          <p className='inline'>{about?.description}</p>
          <span className='inline whitespace-pre'>
            <Link className='font-medium' href={'#contact'}>
               Let&apos;s work together 👌
            </Link>
          </span>
          </div>  
          
        </section>
        <section className='container py-section space-y-8'>
          <h2 className='text_section_header'>My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) =>
              <ProjectCard key={index} project={project} className={index == 0 || index == 3 ? 'lg:col-span-2' : ''} />
            )}
          </div>
          <div className='flex justify-center'>
            <Link href={socials?.github ?? ''} className='inline-flex items-center text-sm font-medium tracking-wide gap-1 px-4 py-2 border-2 rounded-md hover:bg-foreground/10 transition-colors'>
              <GitHubLogoIcon />
              <span>View More</span>
            </Link>
          </div>
        </section>

        <section id='contact' style={LSTYLES} >
          <div className='py-section px-base bg-background/50 '>
            <div className='space-y-6 max-w-screen-md mx-auto rounded-lg '>
              <h2 className='text_section_header text-center'>Contact Me</h2>
              <ContactForm />
            </div>
          </div>

        </section>

        <Footer />
      </main>
    </>
  )
}
