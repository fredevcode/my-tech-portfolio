import Link from 'next/link'

/**
 * Projects list
 */
const projects = [
  { name: 'MLOps Sentiment Analysis', url: 'https://github.com/fredevcode/MLOps_SentimentAnalysis' },
  { name: 'PyntOfBlood', url: 'https://github.com/fredevcode/PyntOfBlood' },
]

/**
 * Products list
 */
const products = [
  { name: 'ClipWise AI', url: '#' },
  { name: 'melvynx.com', url: 'https://melvynx.com' },
]

/**
 * Legal links
 */
const legalLinks = [
  { name: 'Terms & Conditions', url: '#' },
  { name: 'Privacy Policy', url: '#' },
  { name: 'Refund Policy', url: '#' },
]

/**
 * Site footer with projects and products
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="max-w-2xl mx-auto px-4 w-full py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Projects Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Projects</h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.url}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.url}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target={product.url.startsWith('http') ? '_blank' : undefined}
                    rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
            <p>
              Copyright © {currentYear} Frederic Navez. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center gap-2">
                  <Link
                    href={link.url}
                    className="hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span>•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
