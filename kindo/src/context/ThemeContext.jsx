import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = document.documentElement
    
    // Set CSS variables for colors
    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#111827') // gray-900
      root.style.setProperty('--text-color', '#ffffff') // Fixed: 6 F's instead of 5
    } else {
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#111827')
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)