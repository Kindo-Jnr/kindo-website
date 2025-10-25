import { useTheme } from '../context/ThemeContext'; // Add this import
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme() // Now this will work
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition hover:scale-110 animate-pulse"
      style={{
        backgroundColor: theme === 'dark' ? '#374151' : '#222831'
      }}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}