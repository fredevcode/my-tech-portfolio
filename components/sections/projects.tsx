'use client'

import { motion } from 'framer-motion'

/**
 * Projects data
 */
interface ProjectItem {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl: string
}

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'MLOps Sentiment Analysis',
    description: 'MLOps project for sentiment analysis with automated data scraping, model training pipeline, and containerized microservices',
    tags: ['Python', 'Docker', 'Streamlit', 'GitHub Actions', 'Machine Learning'],
    githubUrl: 'https://github.com/fredevcode/MLOps_SentimentAnalysis',
  },
  {
    id: '2',
    title: 'PyntOfBlood',
    description: 'Open-source project for blood donation management and tracking',
    tags: ['Python', 'Web Development'],
    githubUrl: 'https://github.com/fredevcode/PyntOfBlood',
  },
]

/**
 * Projects section displaying projects as list
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-2xl tracking-tight italic sm:text-4xl">Things I&apos;ve Built</h2>

        <ul className="space-y-4 list-disc list-inside max-w-3xl">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {project.title}
              </a>
              <span className="text-muted-foreground"> - {project.description}</span>
              <div className="ml-6 mt-1 text-sm text-muted-foreground">
                Technologies: {project.tags.join(', ')}
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
