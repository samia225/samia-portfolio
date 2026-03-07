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
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project, index) => (
              // Show private projects without fake public links.
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
                  {project.private ? (
                    <div
                      className="flex flex-1 items-center justify-center px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em]"
                      style={{
                        borderRadius: '2px',
                        background: 'var(--pill-bg)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      Private demo/code available on request
                    </div>
                  ) : (
                    <>
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition hover:opacity-90"
                          style={{
                            borderRadius: '2px',
                            background: 'var(--pill-bg)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 px-3 py-2 text-sm font-semibold transition hover:opacity-90"
                          style={{
                            borderRadius: '2px',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                          }}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
