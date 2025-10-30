'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-dark-bg transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* ---- HEADER ---- */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          {/* ---- SUBTEXT ---- */}
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>

          {/* ---- CONTACT CARDS ---- */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* EMAIL CARD */}
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
            >
              <Mail size={32} className="mx-auto mb-4 text-[var(--accent)]" />
              <h3 className="font-bold mb-2 text-[var(--text-primary)]">
                Email
              </h3>
              <p className="text-[var(--text-tertiary)] text-sm break-all">
                {portfolioData.email}
              </p>
            </motion.a>

            {/* LINKEDIN CARD */}
            <motion.a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
            >
              <Linkedin
                size={32}
                className="mx-auto mb-4 text-[var(--accent-hover)]"
              />
              <h3 className="font-bold mb-2 text-[var(--text-primary)]">
                LinkedIn
              </h3>
              <p className="text-[var(--text-tertiary)] text-sm">
                Connect with me
              </p>
            </motion.a>

            {/* GITHUB CARD */}
            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-[var(--accent)]/20 rounded-lg p-6 hover:border-[var(--accent-hover)]/60 transition-all duration-300"
            >
              <Github size={32} className="mx-auto mb-4 text-[var(--accent)]" />
              <h3 className="font-bold mb-2 text-[var(--text-primary)]">
                GitHub
              </h3>
              <p className="text-[var(--text-tertiary)] text-sm">
                Check out my work
              </p>
            </motion.a>
          </div>

          {/* ---- FOOTER ---- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-[var(--accent)]/20"
          >
            <p className="text-[var(--text-tertiary)] text-sm">
              © 2025 Samia Rahman. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
