"use client"
import { ReactNode, createContext, useEffect, useState } from "react"

type Theme = 'light'|'dark'

interface ThemeContextType {
  theme: Theme,
  toggle: ()=>void,
}

export const ThemeContext = createContext<ThemeContextType>({theme:'dark',toggle:()=>{}})

export default function ThemeProvider({children}: {children: ReactNode}){
  const [mounted,setMounted] = useState<boolean>(false)

  const [theme,setTheme] = useState<Theme>('dark')

  function toggleTheme(){
    setTheme(theme === 'dark' ? 'light': 'dark')
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  useEffect(()=>{
    if (!mounted) return
    
    if (theme === 'dark')
      document.documentElement.classList.add('dark')
    else 
      document.documentElement.classList.remove('dark')
    if (typeof localStorage === 'undefined') return
    localStorage.setItem('theme', theme)
  },[theme, mounted])

  return (
    <ThemeContext.Provider value={{theme: theme , toggle: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}