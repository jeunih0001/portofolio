"use client"
import { ReactNode, createContext, useEffect, useState } from "react"

type Theme = 'light'|'dark'

interface ThemeContextType {
  theme: Theme,
  toggle: ()=>void,
}

export const ThemeContext = createContext<ThemeContextType>({theme:'light',toggle:()=>{}})

export default function ThemeProvider({children}: {children: ReactNode}){
  const [theme,setTheme] = useState<Theme>(()=>{
    if (typeof localStorage === 'undefined') return 'light'
    const lightMode = localStorage.getItem('theme') === 'light'
    return lightMode ? 'light' : 'dark'
  })
  function toggleTheme(){
    setTheme(theme === 'dark' ? 'light': 'dark')
  }

  useEffect(()=>{
    if (theme === 'dark')
      document.documentElement.classList.add('dark')
    else 
      document.documentElement.classList.remove('dark')

    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <ThemeContext.Provider value={{theme: theme , toggle: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}