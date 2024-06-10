"use client"
import Spinner from '@/components/Spinner'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function AdminDetails() {
  const {data: session , status} = useSession()
  return (
    <div className='text-primary py-4'>
      {status !== 'authenticated' ? <Spinner className='size-16 border-accent'/> : <p className='text-2xl font-bold'>{session.user?.name}</p>}
    </div>
  )
}
