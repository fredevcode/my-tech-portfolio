'use client'

import { motion } from 'framer-motion'
import { Camera, Code, Music, Plane } from 'lucide-react'
import type { Activity } from '@/types'

/**
 * Sample activities data
 */
const activities: Activity[] = [
  {
    id: '1',
    title: 'Photography',
    description: 'Capturing moments and landscapes',
    image: '/placeholder-activity.jpg',
    icon: 'camera',
  },
  {
    id: '2',
    title: 'Open Source',
    description: 'Contributing to community projects',
    image: '/placeholder-activity.jpg',
    icon: 'code',
  },
  {
    id: '3',
    title: 'Music',
    description: 'Playing guitar and producing beats',
    image: '/placeholder-activity.jpg',
    icon: 'music',
  },
  {
    id: '4',
    title: 'Travel',
    description: 'Exploring new places and cultures',
    image: '/placeholder-activity.jpg',
    icon: 'plane',
  },
]

/**
 * Get icon component based on icon name
 */
const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    camera: Camera,
    code: Code,
    music: Music,
    plane: Plane,
  }
  const IconComponent = icons[iconName] || Code
  return <IconComponent className="h-8 w-8" />
}

/**
 * Activities section displaying hobbies and interests
 */
export function ActivitiesSection() {
  return (
    <section id="activities" className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold">My Activities</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-8 transition-all hover:shadow-xl">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-background p-4 shadow-lg transition-transform group-hover:scale-110">
                    {getIcon(activity.icon || '')}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>

                {/* Decorative background effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
