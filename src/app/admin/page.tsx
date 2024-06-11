import { getServerAuthSession } from '@/lib/AuthOptions'
import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

export default async function Admin() {
  const session = await getServerAuthSession()
  if (!session) return 404
  return (
    <main className='px-4'>
      <BiDoorOpen className='size-16'/>
      <h2 className='text-4xl font-bold'>Welcome Back.</h2>
      <div className='text-primary py-4'>
        <p className='text-2xl font-bold'>{session.user?.name}</p>
      </div>
    </main>
  )
}
