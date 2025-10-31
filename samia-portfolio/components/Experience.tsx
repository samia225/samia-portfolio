'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ---- HEADER ---- */}
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </h2>

          {/* ---- TIMELINE ---- */}
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
              >
                {/* Icon line accent */}
                <div className="absolute -left-4 top-6 flex items-center justify-center w-8 h-8 bg-[var(--accent)]/10 border border-[var(--accent)]/40 rounded-full">
                  <Briefcase size={16} className="text-[var(--accent)]" />
                </div>

                {/* Content */}
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--accent)] font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[var(--text-tertiary)] text-sm mb-3">
                    {exp.period}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights/Bullet Points */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="text-[var(--text-secondary)] text-sm flex items-start gap-2"
                        >
                          <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}