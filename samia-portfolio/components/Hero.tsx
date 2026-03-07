'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const typingLine = 'Building reliable AI/ML systems for real-world impact.'
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (typedText.length >= typingLine.length) return

    const timeout = window.setTimeout(() => {
      setTypedText(typingLine.slice(0, typedText.length + 1))
    }, 48)

    return () => window.clearTimeout(timeout)
  }, [typedText, typingLine])

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 sm:pt-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <div>
            <div>
              <motion.h1
                className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Hi, I am <span className="accent-gradient">{portfolioData.name}</span>
              </motion.h1>

              <p
                className="mt-3 text-sm font-semibold tracking-[0.12em] sm:text-base"
                style={{ color: 'var(--text-tertiary)' }}
              >
                AI/ML & Data Engineer | Software Developer
              </p>

              <p
                className="mt-3 min-h-[2rem] text-base sm:text-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className="ml-1 inline-block"
                >
                  |
                </motion.span>
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                  style={{
                    borderRadius: '2px',
                    background: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                  }}
                >
                  Explore Projects
                </a>
                <a
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-semibold transition hover:bg-[var(--pill-bg)]"
                  style={{
                    borderRadius: '2px',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--surface-strong)',
                  }}
                >
                  View Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-10 flex justify-center gap-3"
              >
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card !p-3"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card !p-3"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${portfolioData.email}`} className="glass-card !p-3" aria-label="Email">
                  <Mail size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)]"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
