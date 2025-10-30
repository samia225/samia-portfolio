'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-cyan-accent/10 border border-cyan-accent/30 rounded-full text-cyan-accent text-sm font-semibold">
              Welcome to my portfolio ✨
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-accent via-white to-purple-accent bg-clip-text text-transparent">
            Hi, I'm {portfolioData.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {portfolioData.title}
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Crafting elegant solutions at the intersection of Machine Learning, Data Engineering, and Software Development.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-card hover:bg-cyan-accent/10 border border-cyan-accent/30 rounded-full transition-all duration-300 hover:text-cyan-accent text-gray-300"
          >
            <Github size={24} />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-card hover:bg-purple-accent/10 border border-purple-accent/30 rounded-full transition-all duration-300 hover:text-purple-accent text-gray-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="p-3 bg-dark-card hover:bg-cyan-accent/10 border border-cyan-accent/30 rounded-full transition-all duration-300 hover:text-cyan-accent text-gray-300"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-accent to-purple-accent text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-accent/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-cyan-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}