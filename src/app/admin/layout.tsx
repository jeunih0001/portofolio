"use client"
import SideBar from '@/components/SideBar'
import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <div className='flex h-dvh'>
        <SideBar />
        <div className='flex-grow bg-foreground text-background overflow-auto'>
          {children}
        </div>
      </div>
    </AuthProvider>
  )
}
