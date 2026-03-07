'use client'

import { useTheme } from './ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center gap-2 overflow-hidden border px-2 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase transition"
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--surface)',
        borderRadius: '2px',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
        className="absolute inset-y-[3px] w-[46%]"
        style={{
          left: isDark ? '51%' : '3%',
          borderRadius: '2px',
          background: 'var(--text-primary)',
        }}
      />

      <span className="relative z-10 inline-flex w-[3.1rem] items-center justify-center gap-1.5">
        <Sun size={14} className={isDark ? 'text-[var(--text-tertiary)]' : 'text-[var(--bg-primary)]'} />
        <span className={isDark ? 'text-[var(--text-tertiary)]' : 'text-[var(--bg-primary)]'}>Light</span>
      </span>

      <span className="relative z-10 inline-flex w-[3.1rem] items-center justify-center gap-1.5">
        <Moon size={14} className={isDark ? 'text-[var(--bg-primary)]' : 'text-[var(--text-tertiary)]'} />
        <span className={isDark ? 'text-[var(--bg-primary)]' : 'text-[var(--text-tertiary)]'}>Dark</span>
      </span>
    </motion.button>
  )
}