# Modern Portfolio

A modern, responsive portfolio website built with Next.js 14+, React 18+, TypeScript, and Tailwind CSS. Inspired by melvynx.com with smooth animations, dark mode support, and excellent performance.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Experience Timeline**: Professional experience and achievements
- **Projects Grid**: Filterable project showcase with tags
- **Tech Stack**: Display of favorite technologies with descriptions
- **Blog Posts**: Featured blog posts section
- **Activities**: Personal hobbies and interests
- **Dark/Light Mode**: Theme toggle with system preference support
- **Smooth Animations**: Framer Motion for scroll reveals and interactions
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Fully Responsive**: Mobile-first design
- **TypeScript**: Type-safe code throughout
- **Performance**: Optimized for Core Web Vitals

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # SEO robots.txt
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/            # Page sections
│   │   ├── hero.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── tech-stack.tsx
│   │   ├── blog-posts.tsx
│   │   ├── activities.tsx
│   │   └── footer.tsx
│   ├── navigation.tsx       # Main navigation
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Dark mode toggle
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### 1. Update Personal Information

Edit the following files to add your information:

- `app/layout.tsx`: Update metadata (title, description, SEO tags)
- `components/sections/hero.tsx`: Update title and description
- `components/sections/experience.tsx`: Add your work experience
- `components/sections/projects.tsx`: Add your projects
- `components/sections/tech-stack.tsx`: Update your tech stack
- `components/sections/blog-posts.tsx`: Add your blog posts
- `components/sections/activities.tsx`: Add your hobbies
- `components/sections/footer.tsx`: Update social links

### 2. Update Colors and Theme

Edit `tailwind.config.ts` and `app/globals.css` to customize colors and design tokens.

### 3. Add Images

Place your images in the `public/` directory and update image paths in components.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure deployment
4. Your site will be live in minutes!

### Environment Variables

If you add any API integrations, create a `.env.local` file:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Performance

This portfolio is optimized for:

- **Core Web Vitals**: Fast loading and interactive
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant components
- **Mobile**: Responsive design with mobile-first approach

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Inspired by [melvynx.com](https://melvynx.com)

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Shadcn/UI](https://ui.shadcn.com)
