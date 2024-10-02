"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function ProfileStatus() {
  const { data , status  }= useSession()
  return (
    <div className='flex items-center gap-2'>
      <figure>
        <Image
          width={40}
          height={40}
          alt='Profile'
          className='size-12 rounded-full border-2'
          src={data?.user?.image!}
        />
      </figure>
      <div className='grid'>
        <span className='font-medium line-clamp-1'>{data?.user?.name}</span>
        <span className='text-sm text-yellow-600 font-medium'>Admin</span>
      </div>
    </div>
  )
}
