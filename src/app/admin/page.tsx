import AdminDetails from '@/components/partials/admin/AdminDetails'
import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

export const revalidate = 0

export default function Admin() {
  return (
    <main className='px-4'>
      <BiDoorOpen className='size-16'/>
      <h2 className='text-4xl font-bold'>Welcome Back.</h2>
      <AdminDetails />
    </main>
  )
}
