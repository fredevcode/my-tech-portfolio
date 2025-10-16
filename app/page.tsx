import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { TechStackSection } from '@/components/sections/tech-stack'
import { AchievementsSection } from '@/components/sections/achievements'
import { ProjectsSection } from '@/components/sections/projects'
import { BlogPostsSection } from '@/components/sections/blog-posts'
import { ContactSection } from '@/components/sections/contact'
import { SiteFooter } from '@/components/sections/site-footer'

/**
 * Home page component
 * Main landing page with portfolio sections
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen max-w-2xl mx-auto px-4 w-full">
        <HeroSection />
        <TechStackSection />
        <AchievementsSection />
        <ProjectsSection />
        <BlogPostsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
