'use client'

import { motion } from 'framer-motion'
import type { BlogPost } from '@/types'

/**
 * Sample blog posts data
 */
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for building large-scale React applications with proper architecture and state management',
    url: 'https://blog.example.com/post1',
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'TypeScript Tips and Tricks',
    excerpt: 'Advanced TypeScript patterns that will improve your code quality and developer experience',
    url: 'https://blog.example.com/post2',
    publishedAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Modern CSS Techniques',
    excerpt: 'Exploring modern CSS features like Grid, Flexbox, and custom properties for building responsive layouts',
    url: 'https://blog.example.com/post3',
    publishedAt: '2024-01-05',
  },
]

/**
 * Format date for display
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Blog posts section
 */
export function BlogPostsSection() {
  return (
    <section id="blog" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-8 text-2xl tracking-tight italic sm:text-4xl">Favorite Posts</h2>

        <ul className="space-y-2 list-disc list-inside max-w-3xl">
          {posts.map((post, index) => (
            <motion.li
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {post.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
