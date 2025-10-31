'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
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
            About me
          </h2>

          {/* ---- CONTENT GRID ---- */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE (BIO) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                <p>
                  I'm a Computer Science student at the University of Alberta with a GPA of 3.6, currently in my 4th year 
                  of specialization. My passion lies in building intelligent systems and solving complex problems through 
                  elegant code.
                </p>
                <p>
                  My expertise spans Machine Learning, Data Engineering, and full-stack software development. I've had the 
                  opportunity to work on impactful projects ranging from automating corporate ETL pipelines to optimizing 
                  robotic control systems using advanced neural networks.
                </p>
                <p>
                  I'm particularly interested in reinforcement learning, computer vision, and how AI can be applied to 
                  solve real-world industrial problems.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE (INFO CARD) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-[var(--accent)]/20 rounded-lg p-8 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Location */}
                <div>
                  <h3 className="text-[var(--accent)] font-semibold mb-2">📍 Location</h3>
                  <p className="text-[var(--text-primary)]">Edmonton, Alberta, Canada</p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-[var(--accent)] font-semibold mb-2">🎓 Education</h3>
                  <p className="text-[var(--text-primary)]">University of Alberta</p>
                  <p className="text-[var(--text-tertiary)] text-sm">
                    BSc Computing Science (Expected 2027)
                  </p>
                </div>

                {/* Current Role */}
                <div>
                  <h3 className="text-[var(--accent)] font-semibold mb-2">💼 Current Role</h3>
                  <p className="text-[var(--text-primary)]">Data Engineer Intern</p>
                  <p className="text-[var(--text-tertiary)] text-sm">City of Edmonton</p>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-[var(--accent)] font-semibold mb-2">📧 Contact</h3>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
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
