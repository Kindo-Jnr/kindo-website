import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#111827') 
      root.style.setProperty('--text-color', '#ffffff')

      // DARK MODE BACKGROUND IMAGE
      root.style.setProperty('--bg-image', "url('/images/dark-bg.jpg')")
    } else {
      root.style.setProperty('--bg-color', '#ffffff')
      root.style.setProperty('--text-color', '#111827')

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
