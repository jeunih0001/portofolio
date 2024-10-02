import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCategory, BiGlobe, BiLogOut, BiSlideshow, BiUser } from 'react-icons/bi'
import { buttonVariants } from '../ui/button'
import { BsNewspaper } from 'react-icons/bs'
import { GearIcon, QuestionMarkIcon } from '@radix-ui/react-icons'
import { useSession } from 'next-auth/react'
import ProfileStatus from './ProfileStatus'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import SidebarLink from './SidebarLink'

const NAVLINKS = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <MdOutlineDashboard className='size-5' />
  },
  {
    name: 'Projects',
    href: '/admin/projects',
    icon: <FaLaptopCode className='size-5' />
  },
  {
    name: 'Tools',
    href: '/admin/tools',
    icon: <GearIcon className='size-5' />
  },
  {
    name: 'Seo',
    href: '/admin/seo',
    icon: <BiGlobe className='size-5' />
  },
  {
    name: 'About',
    href: '/admin/about',
    icon: <QuestionMarkIcon className='size-5' />
  },
]

export default function SideBar() {

  return (
    <aside className='w-64 flex-shrink-0 bg-d-primary text-d-primary-foreground flex flex-col'>
      <div className='mt-8 mb-12 grid gap-2'>
        <Link href={'/'} className='text-white text-2xl inline-flex justify-center gap-2 items-center'>
          <BiUser />
          <span>JEAN EUDES</span>
        </Link>
        <div className='flex items-center gap-2'>
          <span className='flex-grow bg-d-primary-foreground h-px'></span>
          <span className='font-medium text-sm text-center'>Portofolio</span>
          <span className='flex-grow bg-d-primary-foreground h-px'></span>
        </div>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-2'>
          {NAVLINKS.map((link, index) =>
            <SidebarLink key={index} label={link.name} href={link.href} icon={link.icon}/>
          )}
        </div>
      </div>
      <div className='flex-grow my-6 flex flex-col justify-end'>
        <Link className={'inline-flex items-center gap-2 py-3 px-4 hover:bg-d-primary-foreground/20 transition-colors capitalize text-sm tracking-wide'} href={`/api/auth/signout`}>
          <BiLogOut />
          Logout
        </Link>
      </div>
    </aside>
  )
}
