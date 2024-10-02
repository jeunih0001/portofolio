import ProfileStatus from '@/components/dashboard/ProfileStatus'
import SideBar from '@/components/dashboard/SideBar'
import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

export const revalidate = 0

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <div className='flex h-dvh divide-x'>
        <SideBar />
        <div className='border-r flex-grow bg-background flex flex-col'>
          <div className='bg-d-card'>
            <div className="px-base h-16 flex justify-end items-center">
              <ProfileStatus />
            </div>
          </div>
          <div className='flex-grow overflow-auto px-base py-8 bg-d-background'>
            {children}
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
