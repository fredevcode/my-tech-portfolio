'use client'

import { motion } from 'framer-motion'

/**
 * Contact section with email
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="mb-6 text-2xl tracking-tight italic sm:text-4xl">Get in Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:contact@fredevcode.dev"
            className="text-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            contact@fredevcode.dev
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
