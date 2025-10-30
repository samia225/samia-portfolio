'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg">
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
              Featured Projects
            </span>
          </h2>

          {/* ---- PROJECT GRID ---- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300 card-hover"
              >
                {/* ---- ICON ---- */}
                <div className="text-4xl mb-4">{project.icon}</div>

                {/* ---- TITLE ---- */}
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>

                {/* ---- DESCRIPTION ---- */}
                <p className="text-[var(--text-tertiary)] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* ---- TECH TAGS ---- */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent-hover)]/10 text-[var(--text-primary)] text-xs rounded-full border border-[var(--accent)]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ---- BUTTONS ---- */}
                <div className="flex gap-3 pt-4 border-t border-[var(--accent)]/10">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] rounded hover:bg-[var(--accent)]/20 transition-colors text-sm font-semibold"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[var(--accent-hover)]/10 text-[var(--accent-hover)] rounded hover:bg-[var(--accent-hover)]/20 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
