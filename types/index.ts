/**
 * Project type definition
 */
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

/**
 * Technology type definition
 */
export interface Technology {
  id: string
  name: string
  description: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
}

/**
 * Blog post type definition
 */
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  url: string
  publishedAt: string
}

/**
 * Achievement/Timeline item type definition
 */
export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  company?: string
  location?: string
}

/**
 * Activity/Hobby type definition
 */
export interface Activity {
  id: string
  title: string
  description: string
  image: string
  icon?: string
}

/**
 * Social link type definition
 */
export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
}
