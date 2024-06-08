import React from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function EmptyCollection() {
  return (
    <div className='grid place-content-center gap-3 py-6'>
    <span className='p-2 bg-destructive/20 text-destructive inline-block rounded-full justify-self-center'>
    <FaXmark className='size-8' strokeWidth={0.25}/>
    </span>
    <p className='font-bold text-muted-foreground text-center'>No Items in the collection</p>
  </div>
  )
}
