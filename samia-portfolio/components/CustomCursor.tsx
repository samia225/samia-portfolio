'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarsePointer || reduceMotion || !cursorRef.current) return

    document.body.classList.add('custom-cursor-active')

    const cursor = cursorRef.current
    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'

    let rafId = 0
    let currentX = -100
    let currentY = -100
    let targetX = -100
    let targetY = -100
    let isHovering = false

    const render = () => {
      currentX += (targetX - currentX) * 0.2
      currentY += (targetY - currentY) * 0.2
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      rafId = window.requestAnimationFrame(render)
    }

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY

      const nextHovering = !!(event.target as Element | null)?.closest(interactiveSelector)
      if (nextHovering !== isHovering) {
        isHovering = nextHovering
        cursor.classList.toggle('cursor-hovering', nextHovering)
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    rafId = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.cancelAnimationFrame(rafId)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return <div ref={cursorRef} aria-hidden className="cursor-dot-core" />
}
