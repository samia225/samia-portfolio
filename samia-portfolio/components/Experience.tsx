'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-header">
            <span className="eyebrow">Experience</span>
          </div>

          <div className="space-y-5">
            {portfolioData.experience.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-tertiary)]">{exp.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">{exp.role}</h3>
                    <p className="text-[var(--accent)]">{exp.company}</p>
                  </div>
                </div>

                {exp.description && (
                  <p className="mb-3 text-sm leading-relaxed text-[var(--text-secondary)]">{exp.description}</p>
                )}

                {exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        <span className="mt-2 h-1.5 w-1.5 bg-[var(--accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
