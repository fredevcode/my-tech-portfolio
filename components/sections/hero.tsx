'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Hero section component
 * Introduction with name, title, and social links
 */
export function HeroSection() {
  return (
    <section className="flex min-h-[50vh] flex-col justify-center py-8 pt-24">
      <div className="space-y-6">
        {/* Photo and name/title */}
        <div className="flex items-center gap-8">
          {/* Profile photo */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Frederic Navez"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl tracking-tight italic sm:text-6xl"
            >
              Frederic Navez
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg font-light tracking-tight text-muted-foreground sm:text-xl md:text-2xl"
            >
              Machine Learning Engineer and AI enthusiast
            </motion.h2>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-muted-foreground sm:text-lg max-w-2xl"
        >
          I&apos;m passionate about building products that help people live better lives.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-12 w-12"
          >
            <a
              href="https://github.com/fredevcode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-12 w-12"
          >
            <a
              href="https://www.linkedin.com/in/fredericnavez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-12 w-12"
          >
            <a
              href="https://x.com/fredevcode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
