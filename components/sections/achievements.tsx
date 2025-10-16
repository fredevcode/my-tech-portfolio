'use client'

import { motion } from 'framer-motion'

/**
 * Achievements/highlights data
 */
const achievements = [
  'Built machine learning products and still enjoy coding',
  'Created educational content helping developers learn',
  'Developed multiple production-ready applications',
  'Expertise in Python, ML, and data-driven solutions',
  'Passionate about building impactful products',
]

/**
 * Achievements section displaying key accomplishments
 */
export function AchievementsSection() {
  return (
    <section id="achievements" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-2xl tracking-tight italic sm:text-4xl">Things I&apos;ve Done</h2>

        <ul className="space-y-2 list-disc list-inside max-w-3xl">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground"
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
