'use client'

import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

/**
 * Navigation item type
 */
interface NavItem {
  label: string
  href: string
}

/**
 * Navigation items configuration
 */
const navItems: NavItem[] = [
  { label: 'Blog', href: '#blog' },
]

/**
 * Navigation component with smooth scroll and theme toggle
 */
export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('')

  React.useEffect(() => {
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="absolute top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-2xl mx-auto px-4 w-full flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          fredevcode.dev
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
