import { MetadataRoute } from 'next'

/**
 * Generate sitemap for SEO
 * Automatically updates based on site structure
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fredevcode.dev'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
