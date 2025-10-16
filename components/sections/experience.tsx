'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Achievement } from '@/types'

/**
 * Sample experience data
 */
const experiences: Achievement[] = [
  {
    id: '1',
    title: 'Senior Fullstack Engineer',
    description: 'Led development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented best practices.',
    date: '2022 - Present',
    company: 'Tech Company',
    location: 'Remote',
  },
  {
    id: '2',
    title: 'Fullstack Developer',
    description: 'Built and maintained multiple client projects using modern web technologies. Focused on performance optimization and user experience.',
    date: '2020 - 2022',
    company: 'Digital Agency',
    location: 'New York, NY',
  },
  {
    id: '3',
    title: 'Frontend Developer',
    description: 'Developed responsive web interfaces and collaborated with design teams to implement pixel-perfect designs.',
    date: '2018 - 2020',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
  },
]

/**
 * Experience section component with timeline
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold">Things I&apos;ve Done</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          {exp.company && (
                            <p className="text-sm font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground">{exp.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.date}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
