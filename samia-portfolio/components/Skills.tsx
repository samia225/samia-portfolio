'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export default function Skills() {
  const categories = Object.entries(portfolioData.skills)

  return (
    <section id="skills" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ---- HEADER ---- */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          {/* ---- GRID ---- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-xl font-bold text-[var(--accent)] mb-4">
                  {category}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-hover)]/10 text-[var(--text-primary)] text-sm rounded-lg border border-[var(--accent)]/30 hover:border-[var(--accent-hover)]/60 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
