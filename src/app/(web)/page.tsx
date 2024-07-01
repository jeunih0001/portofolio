import { ContactForm } from '@/components/ContactForm'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { MdConnectWithoutContact } from "react-icons/md";

export default function Home() {
  const STYLES: CSSProperties = {
    backgroundImage: `url('https://res.cloudinary.com/dn7lqpl1x/image/upload/v1631080208/wrapped_k7g6ev.svg')`,
    backgroundSize: 'contain',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat'
  }

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
              <Link className='py-3 px-4 font-medium hover:px-8 transition-all hover:shadow-2xl border-2 border-foreground hover:bg-foreground/10 rounded-lg inline-flex whitespace-pre' href={'contact'}>
                Let&apos;s work together 👌
              </Link>
            </div>
          </div>
        </section>
        <section className='container mb-20 space-y-8'>
          <h2 className='text_section_header text-shadow'>My Projects</h2>
          <div className="grid_projects">
            {Array.from({ length: 4 }, (_, index) =>
              <div key={index}>
                <div className='w-full h-full'>
                  <img className='w-full h-full object-cover' src="https://picsum.photos/600/600" alt="projects" />
                </div>
              </div>
            )}
          </div>
        </section>
        <section className='container mb-20 space-y-6 text-center'>
          <h2 className='text_section_header text-shadow'>About Me</h2>
          <p className='max-w-screen-md mx-auto text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus tenetur optio id maiores eaque tempore magnam nobis magni eveniet deleniti, quo asperiores, adipisci voluptas neque, velit exercitationem quia nisi dolore ea. Voluptate sapiente odio nesciunt, magni ratione nemo unde.</p>
        </section>
        <section className='container mb-20'>
          <div className='grid md:grid-cols-[1fr,2fr] gap-4 border rounded-md overflow-hidden'>
            <div className='bg-foreground/10'>
            <MdConnectWithoutContact className='w-44 mx-auto h-auto'/>
            </div>
            <div className='space-y-6 py-12 px-4  '>
              <h2 className='text_section_header text-2xl text-shadow text-center'>Contact Me</h2>
              <ContactForm />

            </div>
          </div>
        </section>

      </main>
    </>
  )
}
