import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

/**
 * Metadata for SEO optimization
 */
export const metadata: Metadata = {
  title: 'Frederic Navez - Machine Learning Engineer',
  description: 'Machine Learning Engineer passionate about building products. Portfolio showcasing projects and technical skills.',
  keywords: ['machine learning', 'ML engineer', 'Python', 'data science', 'AI', 'portfolio'],
  authors: [{ name: 'Frederic Navez' }],
  openGraph: {
    title: 'Frederic Navez - Machine Learning Engineer',
    description: 'Machine Learning Engineer passionate about building products',
    url: 'https://fredevcode.dev',
    siteName: 'fredevcode.dev',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frederic Navez - Machine Learning Engineer',
    description: 'Machine Learning Engineer passionate about building products',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/**
 * Root layout component
 * Wraps all pages with theme provider and global styles
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interTight.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-inter-tight)' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
