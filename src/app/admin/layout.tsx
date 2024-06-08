"use client"
import SideBar from '@/components/SideBar'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <div className='flex h-dvh divide-x'>
        <SideBar />
        <div className='border-r flex-grow bg-background flex flex-col'>
          <div className='flex justify-end items-center h-12 flex-shrink-0 px-4'>
            <ThemeSwitcher />
          </div>
          <div className='flex-grow overflow-auto py-16'>
            {children}
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
