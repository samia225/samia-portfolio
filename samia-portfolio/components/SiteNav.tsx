'use client'

import { useEffect, useRef, useState } from 'react'
import Quadcopter from './Quadcopter'
import ThemeToggle from './ThemeToggle'

type Item = { id: string; label: string }

// The quadcopter marks the current section. It moves only when a link is clicked
// (or the URL hash changes, e.g. back button). No scroll tracking, no animation.
export default function SiteNav({ items, name }: { items: readonly Item[]; name: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1)
      setActive(items.some((i) => i.id === id) ? id : null)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [items])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = items.map((item) => {
    const isActive = active === item.id
    return (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          onClick={() => {
            setActive(item.id)
            setOpen(false)
          }}
          aria-current={isActive ? 'location' : undefined}
          className={`link-quiet flex items-center gap-1 py-1 text-sm ${isActive ? 'font-semibold' : ''}`}
        >
          {/* Fixed slot so the row does not shift when the icon moves. */}
          <span className="inline-flex h-3 w-3 items-center justify-center text-accent">{isActive ? <Quadcopter size={20} /> : null}</span>
          {item.label}
        </a>
      </li>
    )
  })

  return (
    <header className="sticky top-0 z-20 bg-bg">
      <a
        href="#main"
        className="absolute left-2 top-1 -translate-y-24 bg-accent px-2 py-1 font-semibold text-bg focus:translate-y-0"
      >
        Skip to content
      </a>
      <nav aria-label="Sections" className="mx-auto flex h-8 max-w-wide items-center justify-between px-2">
        <a
          href="#top"
          onClick={() => setActive(null)}
          className="link-quiet flex items-center gap-1 font-semibold text-heading"
        >
          {name}
        </a>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-2 lg:flex">{links}</ul>
          <ThemeToggle />

        <button
          ref={toggleRef}
          type="button"
          className="btn py-0 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        </div>
      </nav>

      {open ? (
        <ul id="mobile-nav" className="bg-bg px-2 pb-2 lg:hidden">
          {links}
        </ul>
      ) : null}
    </header>
  )
}
