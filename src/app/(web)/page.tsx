import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard';
import prisma from '@/lib/connect';
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
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

  const [projects] = await Promise.all([
    prisma.project.findMany()
  ])

  return (
    <>
      <header>
        <Navbar className='absolute w-full' />
      </header>
      <main>
        <section style={STYLES} className='pt-navbar h-dvh grid content-center text-center '>
          <div className='container '>
            <p className='text-lg  font-medium'>👋, I am Jean Eudes</p>
            <h1 className='mb-16 mt-4 grid text-5xl md:text-8xl font-extrabold font-special tracking-wider !leading-[1.1]'><span>FullStack</span><span className='text-shadow'  >Web Developer</span></h1>
            <div className='justify-center ma'>
              <Link className='py-3 px-4 font-medium hover:px-8 transition-all hover:shadow-2xl border-2 border-foreground hover:bg-foreground/10 rounded-lg inline-flex whitespace-pre' href={'#contact'}>
                Let&apos;s work together 👌
              </Link>
            </div>
          </div>
        </section>
        <section className='container py-section space-y-4 text-center'>
          <h2 className='text_section_header'>About Me</h2>
          <p className='max-w-screen-md mx-auto text-muted-foreground tracking-wide leading-7'>
            Hey there! I&apos;m a passionate fullstack web developer with a knack for bringing ideas to life through code. My go-to tools are Next.js and Laravel, but I&apos;m flexible and always up for learning new technologies to get the job done. Whether it&apos;s building robust backends or crafting sleek, responsive frontends, I love tackling challenges and delivering top-notch solutions. Let&apos;s create something amazing together!
          </p>
        </section>
        <section className='container py-section space-y-8'>
          <h2 className='text_section_header'>My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) =>
              <ProjectCard key={index} project={project} className={index == 0 || index == 3 ? 'lg:col-span-2' : ''} />
            )}
          </div>
          <div className='flex justify-center'>
            <Link href={'https://github.com/jeunih0001'} className='inline-flex items-center text-sm font-medium tracking-wide gap-1 px-4 py-2 border-2 rounded-md hover:bg-foreground/10 transition-colors'>
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
