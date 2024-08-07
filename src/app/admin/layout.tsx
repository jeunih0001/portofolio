import SideBar from '@/components/SideBar'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

export const revalidate = 0

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <div className='flex h-dvh divide-x'>
        <SideBar />
        <div className='border-r flex-grow bg-background flex flex-col'>
          <div className='flex-grow overflow-auto py-16 px-base'>
            {children}
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
