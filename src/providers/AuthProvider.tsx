"use client"
import { SessionProvider, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  useEffect(()=>{
    document.documentElement.classList.remove('dark')
  })
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider