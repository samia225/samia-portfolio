'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Github, Linkedin, Mail, WandSparkles } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 text-center sm:p-12"
        >
          <span className="eyebrow mx-auto">
            <WandSparkles size={14} className="mr-2" />
            Contact
          </span>
          <h2 className="section-title">Let us create something meaningful</h2>
          <p className="section-description">
            Open to internships, full-time opportunities, and collaborations where design quality and technical depth
            matter.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${portfolioData.email}`}
              className="glass-card text-left"
              aria-label="Email"
            >
              <Mail size={20} className="text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Email</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)] break-all">{portfolioData.email}</p>
            </a>

            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-left"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">LinkedIn</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Connect professionally</p>
            </a>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-left"
              aria-label="GitHub"
            >
              <Github size={20} className="text-[var(--accent)]" />
              <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">GitHub</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">View code and experiments</p>
            </a>
          </div>

          <p className="mt-10 text-xs text-[var(--text-tertiary)]">
            © 2026 Samia Rahman. Crafted with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
