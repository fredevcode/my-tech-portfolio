# Portfolio Setup Guide

## Project Overview

Modern portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. Includes all requested features from the melvynx.com-inspired design.

## Tech Stack

- **Framework**: Next.js 15.5.5 (App Router)
- **UI**: React 19.2
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **Components**: Shadcn/UI-inspired
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React
- **Theme**: next-themes 0.4.6

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles + Tailwind
│   ├── sitemap.ts               # SEO sitemap
│   └── robots.ts                # SEO robots.txt
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # CVA button with variants
│   │   └── card.tsx             # Card components
│   ├── sections/                # Page sections
│   │   ├── hero.tsx             # Hero with CTA
│   │   ├── experience.tsx       # Timeline
│   │   ├── projects.tsx         # Grid with filters
│   │   ├── tech-stack.tsx       # Tech grid
│   │   ├── blog-posts.tsx       # Blog cards
│   │   ├── activities.tsx       # Hobbies grid
│   │   └── footer.tsx           # Contact + social
│   ├── navigation.tsx           # Fixed navigation
│   ├── theme-provider.tsx       # Theme context
│   └── theme-toggle.tsx         # Dark mode toggle
├── lib/
│   └── utils.ts                 # cn() utility
├── types/
│   └── index.ts                 # TypeScript types
└── public/                      # Static assets
```

## Features Implemented

### ✅ All Sections Complete

1. **Hero Section**
   - Title: "Fullstack Engineer"
   - Animated text with Framer Motion
   - CTA buttons (View Projects, Get in Touch)
   - Scroll indicator

2. **Things I've Done (Experience)**
   - Timeline layout with cards
   - Company, title, date, location
   - Hover effects
   - Scroll animations

3. **Things I've Built (Projects)**
   - 6 sample projects
   - Filterable by technology tags
   - Project cards with image, description, tags
   - Demo + GitHub links
   - Hover effects

4. **Tech I Love**
   - 8 technologies in grid
   - Icons, descriptions
   - Hover effects with lift animation
   - Responsive 4-column grid

5. **Favorite Posts**
   - 3 blog post cards
   - Title, excerpt, date, external link
   - Clean minimal design

6. **My Activities**
   - 4 hobbies with icons
   - Creative gradient backgrounds
   - Scale on hover

7. **Get in Touch (Footer)**
   - Social links (GitHub, LinkedIn, Twitter, Email)
   - Icon buttons with hover effects
   - Copyright info

### ✅ Design & UX

- **Theme**: Light/Dark mode with toggle in header
- **Colors**: HSL color system with CSS variables
- **Typography**: Inter font (Google Fonts)
- **Animations**:
  - Scroll reveals with Framer Motion
  - Fade in, slide up/down
  - Hover states on all interactive elements
- **Responsive**: Mobile-first, breakpoints for tablet/desktop
- **Navigation**:
  - Fixed header with smooth scroll
  - Active section highlighting
  - Theme toggle

### ✅ SEO Optimization

- Meta tags in layout.tsx
- Open Graph tags
- Twitter card meta
- robots.txt
- sitemap.xml
- Semantic HTML

### ✅ Performance

- Static generation (SSG)
- Code splitting
- Optimized images support
- Fast First Load JS: ~158 KB

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm run start
```

## Customization Guide

### Update Personal Information

1. **Hero Section** (`components/sections/hero.tsx`):
   - Update title, description
   - Modify CTA button links

2. **Experience** (`components/sections/experience.tsx`):
   - Replace `experiences` array with your work history

3. **Projects** (`components/sections/projects.tsx`):
   - Replace `projects` array with your projects
   - Add real images to `public/` folder

4. **Tech Stack** (`components/sections/tech-stack.tsx`):
   - Update `technologies` array with your stack

5. **Blog Posts** (`components/sections/blog-posts.tsx`):
   - Update `posts` array with your articles

6. **Activities** (`components/sections/activities.tsx`):
   - Customize `activities` with your hobbies

7. **Footer** (`components/sections/footer.tsx`):
   - Update `socialLinks` with your URLs
   - Change email and name

### Update Branding

1. **Site Metadata** (`app/layout.tsx`):
   - Title, description, keywords
   - Open Graph images
   - Author name

2. **Colors** (`app/globals.css`):
   - Modify CSS variables for light/dark themes

3. **Navigation** (`components/navigation.tsx`):
   - Update site name/logo

### Add Images

1. Place images in `public/` directory
2. Reference as `/image-name.jpg`
3. Update image paths in components

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js
6. Click "Deploy"
7. Your site is live! 🎉

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Custom Domain

1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Environment Variables

Create `.env.local` if needed:

```env
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_SITE_NAME=Your Portfolio
```

## Performance Optimization Tips

1. **Images**: Use Next.js `<Image>` component for optimization
2. **Fonts**: Already optimized with `next/font/google`
3. **Bundle Size**: Check with `npm run build`
4. **Lighthouse**: Aim for 90+ scores

## Troubleshooting

### Build Errors

- Check Node.js version (18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

### Theme Toggle Not Working

- Ensure `ThemeProvider` wraps app in layout.tsx
- Check browser localStorage is enabled

### Animations Not Smooth

- Check `framer-motion` is installed
- Verify `'use client'` directive in components

## Next Steps

1. Replace sample data with your real content
2. Add your project images
3. Update social links
4. Customize colors/fonts to match your brand
5. Add analytics (Google Analytics, Plausible)
6. Set up contact form API (optional)
7. Add blog integration (optional)
8. Deploy to Vercel
9. Connect custom domain
10. Share your portfolio! 🚀

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel Deployment](https://vercel.com/docs)

## License

MIT License - Free to use for your portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
