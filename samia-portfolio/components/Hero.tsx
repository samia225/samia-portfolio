'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 sm:pt-32">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mx-auto"
          >
            <Sparkles size={14} className="mr-2" />
            Magical builds, real-world impact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            Hi, I am <span className="accent-gradient">{portfolioData.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {portfolioData.title}. I design data-driven systems and machine learning products with a clean,
            thoughtful aesthetic inspired by northern lights and creative experimentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
              href="#contact"
              className="px-6 py-3 text-sm font-semibold transition hover:bg-[var(--pill-bg)]"
              style={{
                borderRadius: '2px',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                background: 'var(--surface-strong)',
              }}
            >
              Let us Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
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
