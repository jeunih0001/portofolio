import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SideBar() {
  const { data: session } = useSession()
  return (
    <aside className='w-64 flex-shrink-0 p-4'>
      <div className='flex items-center gap-2'>
        <figure>
          <Image
            width={40}
            height={40}
            alt='Profile'
            className='size-12 rounded-full border-2'
            src={session?.user?.image!}
          />
        </figure>
        <div className='grid'>
          <span className='font-medium line-clamp-1'>{session?.user?.name}</span>
          <span className='text-sm text-yellow-600 font-medium'>Admin</span>
        </div>
      </div>
      <div className='mt-6 space-y-2'>
        <Link className='h-10 bg-yellow-500 hover:bg-yellow-600 transition-all flex items-center justify-center rounded-md' href={'/api/auth/signout?callbackUrl=/'}>Signout</Link>
        <Link className='h-10 border-2 hover:bg-foreground/20 transition-all flex items-center justify-center rounded-md' href={'/'}>Home</Link>
      </div>
    </aside>
  )
}
