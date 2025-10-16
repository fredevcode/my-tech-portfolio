'use client'

import { motion } from 'framer-motion'
import type { Technology } from '@/types'

/**
 * Technologies data - Skills mastered
 */
const technologies: Technology[] = [
  {
    id: '1',
    name: 'Python',
    description: 'Primary language for machine learning, data analysis, and backend development',
    icon: '🐍',
    category: 'backend',
  },
  {
    id: '2',
    name: 'SQL',
    description: 'Database querying and data manipulation for data analysis and storage',
    icon: '🗄️',
    category: 'database',
  },
  {
    id: '3',
    name: 'Git',
    description: 'Version control system for tracking changes and collaboration',
    icon: '🔀',
    category: 'tools',
  },
  {
    id: '4',
    name: 'Linux',
    description: 'Operating system expertise for development and deployment environments',
    icon: '🐧',
    category: 'tools',
  },
  {
    id: '5',
    name: 'Docker',
    description: 'Containerization platform for building, shipping, and running applications',
    icon: '🐳',
    category: 'tools',
  },
]

/**
 * Tech stack section displaying technologies in a grid
 */
export function TechStackSection() {
  return (
    <section id="tech" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-2xl tracking-tight italic sm:text-4xl">Tech I Love</h2>

        <ul className="space-y-2 list-disc list-inside max-w-3xl">
          {technologies.map((tech, index) => (
            <motion.li
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground"
            >
              <span className="font-medium text-foreground">{tech.name}</span> - {tech.description}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
