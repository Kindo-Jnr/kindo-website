import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      // Dark mode variables
      root.style.setProperty('--bg-color', '#111827')
      root.style.setProperty('--text-color', '#ffffff')
      root.style.setProperty('--border-color', '#374151')
      root.style.setProperty('--card-bg', 'rgba(30, 41, 59, 0.7)')
      root.style.setProperty('--bg-gradient', 'rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.9)')
      root.style.setProperty('--tooltip-bg', 'rgba(31, 41, 55, 0.95)')
      root.style.setProperty('--tooltip-text', '#ffffff')
      
      // DARK MODE BACKGROUND IMAGE
      root.style.setProperty('--bg-image', "url('/images/dark-bg.jpg')")
    } else {
      // Light mode variables
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#111827')
      root.style.setProperty('--border-color', '#e5e7eb')
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)')
      root.style.setProperty('--bg-gradient', 'rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)')
      root.style.setProperty('--tooltip-bg', 'rgba(255, 255, 255, 0.95)')
      root.style.setProperty('--tooltip-text', '#111827')
      
      // LIGHT MODE BACKGROUND IMAGE
      root.style.setProperty('--bg-image', "url('/images/kindo-profile2.PNG')")
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