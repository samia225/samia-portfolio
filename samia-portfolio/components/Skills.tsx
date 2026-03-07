'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export default function Skills() {
  const categories = Object.entries(portfolioData.skills)

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-header">
            <span className="eyebrow">Skills</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(([category, skills], index) => (
              <motion.article
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card"
              >
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
