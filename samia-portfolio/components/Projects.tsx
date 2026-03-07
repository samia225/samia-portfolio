'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-header">
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">A creative portfolio grounded in engineering outcomes</h2>
            <p className="section-description">
              Selected work in machine learning, automation, and full-stack development.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card flex h-full flex-col"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="pill">Project {project.id}</span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:opacity-90"
                    style={{
                      background: 'var(--pill-bg)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    style={{ background: 'linear-gradient(120deg, var(--accent-soft), var(--accent))' }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
