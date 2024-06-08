"use client"
import Spinner from '@/components/Spinner'
import { useSession } from 'next-auth/react'
import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

export default function Admin() {
  const {data: session , status} = useSession()
  return (
    <main className='px-4'>
      <BiDoorOpen className='size-16'/>
      <h2 className='text-4xl font-bold'>Welcome Back.</h2>
      <div className='text-primary py-4'>
        {status !== 'authenticated' ? <Spinner className='size-16 border-accent'/> : <p className='text-2xl font-bold'>{session.user?.name}</p>}
      </div>
    </main>
  )
}
