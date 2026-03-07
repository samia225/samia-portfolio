'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export default function About() {
  const aboutParagraphs = portfolioData.about.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-header">
            <span className="eyebrow">About</span>
            <h2 className="section-title">A modern engineer with creative instincts</h2>
            <p className="section-description">
              I blend engineering precision with product imagination, building systems that are robust, human, and
              delightful to use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card space-y-4"
            >
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-[var(--text-secondary)]">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Location</p>
                  <p className="mt-2 font-medium text-[var(--text-primary)]">Edmonton, Alberta</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Education</p>
                  <p className="mt-2 font-medium text-[var(--text-primary)]">University of Alberta</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Current Role</p>
                  <p className="mt-2 font-medium text-[var(--text-primary)]">Undergraduate Teaching Assistant</p>
                  <p className="text-sm text-[var(--text-secondary)]">University of Alberta</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Contact</p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="mt-2 inline-block font-medium text-[var(--accent)] transition hover:opacity-80"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
