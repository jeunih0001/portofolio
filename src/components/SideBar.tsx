import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCategory, BiSlideshow } from 'react-icons/bi'
import { buttonVariants } from './ui/button'
import { BsNewspaper } from 'react-icons/bs'
import { getServerAuthSession } from '@/lib/AuthOptions'

const NAVLINKS = [
  {
    name: 'Dashboard',
    href: '',
    icon: <BiSlideshow className='mr-2'/>
  },
  {
    name: 'Projects',
    href: 'projects',
    icon: <BiSlideshow className='mr-2'/>
  },
  {
    name: 'Categories',
    href: 'categories',
    icon: <BiCategory className='mr-2'/>
  },
  {
    name: 'blogs',
    href: 'blogs',
    icon: <BsNewspaper className='mr-2'/>
  },
]

export default async function SideBar() {
  const session = await getServerAuthSession()
  if (!session) return 404
  return (
    <aside className='w-64 flex-shrink-0 p-4 bg-secondary'>
      <div className='flex items-center gap-2'>
        <figure>
            <Image
              width={40}
              height={40}
              alt='Profile'
              className='size-12 rounded-full border-2'
              src={session.user?.image!}
            />
        </figure>
          <div className='grid'>
            <span className='font-medium line-clamp-1'>{session.user?.name}</span>
            <span className='text-sm text-yellow-600 font-medium'>Admin</span>
          </div>
      </div>
      <div className='my-6 gap-2 grid'>
        <Link className={buttonVariants({variant: 'destructive'})} href={'/api/auth/signout?callbackUrl=/'}>Signout</Link>
        <Link className={buttonVariants({variant: 'outline'})} href={'/'}>Home</Link>
      </div>
      <div className='grid gap-6'>
        <span className='font-medium text-muted-foreground pb-1 border-b-2'>Resources</span>
        <div className='grid gap-2'>
          {NAVLINKS.map((link, index) =>
            <Link className={buttonVariants({variant: 'sidebar',className: '!justify-start capitalize'})}key={index} href={`/admin/${link.href}`}>
              {link.icon}
              {link.name}
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}
