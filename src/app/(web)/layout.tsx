import ThemeProvider from '@/providers/ThemeProvider'
import React, { ReactNode } from 'react'

export default function WebLayout({children}: {children: ReactNode}) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
