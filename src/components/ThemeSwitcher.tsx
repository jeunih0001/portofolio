"use client"
import React, { useContext, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import { ThemeContext } from '@/providers/ThemeProvider'

export default function ThemeSwitcher() {
  const { theme , toggle } = useContext(ThemeContext)
  return (
    <button onClick={toggle} className='relative flex items-center border-2 rounded-full' suppressHydrationWarning>
      <div className="sr-only">Switch theme</div>
      <span className={`absolute h-full aspect-square rounded-full transition-all ${theme === 'light' ?' translate-x-0 bg-primary/20 te': 'translate-x-full bg-secondary'}`}></span>
      <span className='p-1 relative text-primary'>
        <FiSun className='size-5'/>
      </span>
      <span className='p-1 relative'>
        <FaMoon className='size-5'/>
      </span>
    </button>
  )
}
