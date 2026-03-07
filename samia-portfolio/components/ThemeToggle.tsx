'use client'

import { useTheme } from './ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="border p-2 transition duration-300 hover:shadow-md"
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--surface-strong)',
        borderRadius: '2px',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400" />
      ) : (
        <Moon size={18} className="text-indigo-500" />
      )}
    </motion.button>
  )
}