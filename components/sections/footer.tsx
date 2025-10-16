'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SocialLink } from '@/types'

/**
 * Social links configuration
 */
const socialLinks: SocialLink[] = [
  {
    id: '1',
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: '3',
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
  {
    id: '4',
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail',
  },
]

/**
 * Get icon component based on icon name
 */
const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  }
  const IconComponent = icons[iconName] || Mail
  return <IconComponent className="h-5 w-5" />
}

/**
 * Footer section with contact information and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t bg-muted/50">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Get in Touch</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-12 w-12"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Your Name. All rights reserved. Built with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground"
              >
                Tailwind CSS
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
