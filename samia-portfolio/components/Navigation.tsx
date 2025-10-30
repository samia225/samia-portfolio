'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  // Track section scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (const item of menuItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="
        fixed top-8 left-1/2 transform -translate-x-1/2 z-50
        flex items-center justify-between gap-12
        px-8 py-3 rounded-full backdrop-blur-md border
        transition-all duration-300
        bg-[var(--card-bg)]/80 border-[var(--border-color)]
        shadow-[0_0_20px_var(--shadow-color)]
      "
    >
      {/* ---- LOGO ---- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold text-[var(--accent)]"
      >
      
      </motion.div>

      {/* ---- DESKTOP MENU ---- */}
      <div className="hidden md:flex gap-8 items-center">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm font-medium relative transition-all duration-300 ${
              activeSection === item.id
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-tertiary)] hover:text-[var(--accent-hover)]'
            }`}
          >
            {item.name}
            {activeSection === item.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        ))}
      </div>

      {/* ---- THEME TOGGLE + MOBILE MENU ---- */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ---- MOBILE MENU ---- */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 right-0 mx-auto flex flex-col items-center gap-3 bg-[var(--card-bg)]/95 border border-[var(--border-color)] rounded-xl py-4 mt-2 shadow-lg md:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--accent-hover)]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
