'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      for (const item of menuItems) {
        const element = document.getElementById(item.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 220 && rect.bottom >= 220) {
          setActiveSection(item.id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav
        className={`section-shell mx-auto flex items-center justify-between rounded-2xl border px-4 py-3 transition duration-300 sm:px-6 ${
          scrolled ? 'glass-panel' : 'bg-[var(--nav-bg)] backdrop-blur-lg soft-border'
        }`}
      >
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-[var(--text-primary)]"
        >
          <Sparkles size={16} className="text-[var(--accent)]" />
          SAMIA
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--accent)]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[var(--text-secondary)] transition hover:bg-[var(--pill-bg)] hover:text-[var(--text-primary)] md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 top-[calc(100%+0.7rem)] mx-4 rounded-xl border bg-[var(--surface-strong)] p-4 backdrop-blur-xl md:hidden"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    activeSection === item.id
                      ? 'bg-[var(--pill-bg)] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--pill-bg)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
