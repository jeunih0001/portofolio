import { Seo } from '@prisma/client'
import React from 'react'

export const Footer = ({socials}:{socials: {
  github: string;
  linkedin: string;
} | null}) => {
  return (
    <footer className='mt-20 border-t'>
      <div className='container text-sm py-6 border-t flex justify-between gap-4 items-center flex-wrap'>
        <span className='text-foreground/80'>© Copyright 2024. All rights reserved.</span>
        <div className='flex items-center gap-3'>
          <a href={socials?.linkedin!} className='font-semibold hover:underline'>LinkedIn</a>
          <a href={socials?.github!} className='font-semibold hover:underline'>Github</a>
        </div>
      </div>
    </footer>
  )
}
