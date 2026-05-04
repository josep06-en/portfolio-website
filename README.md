# Josep Enrique Llopis - Portfolio Website

A modern, dark-themed portfolio website built with Next.js 14, showcasing projects and expertise in Solutions Engineering and Product Engineering.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark design system
- **Fonts**: Syne, Figtree, JetBrains Mono via next/font/google
- **Deployment**: Vercel

## Design System

The site follows a dark system UI aesthetic inspired by Linear, Vercel, and Raycast:

- **Color Palette**: Dark backgrounds with electric green accent (#00e676)
- **Typography**: Three-font system (Syne for headings, Figtree for body, JetBrains Mono for labels)
- **Layout**: Minimal, precise, zero-decoration approach
- **Components**: Custom-built with no external UI libraries

## Project Structure

```
src/
|-- app/
|   |-- layout.tsx              # Root layout with fonts and meta
|   |-- page.tsx                # Home page
|   |-- globals.css             # Global styles and animations
|   |-- projects/[slug]/        # Dynamic project pages
|   |-- writing/[slug]/         # Dynamic writing pages
|-- components/
|   |-- layout/
|   |   |-- Nav.tsx             # Navigation component
|   |   |-- Footer.tsx          # Footer component
|   |-- home/
|   |   |-- Hero.tsx            # Hero section
|   |   |-- Projects.tsx        # Projects grid
|   |   |-- Stack.tsx           # Tech stack display
|   |   |-- About.tsx           # About section
|   |   |-- Writing.tsx         # Writing list
|   |   |-- Contact.tsx         # Contact section
|-- content/
|   |-- projects/               # Project data files
|   |-- writing/                # Article data files
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

Projects and articles are managed through TypeScript files in the `src/content/` directory:

- **Projects**: Add new projects in `src/content/projects/`
- **Writing**: Add articles in `src/content/writing/`
- **Images**: Place project images in `public/projects/`

## Deployment

The site is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push to main branch

## Customization

### Adding New Projects

1. Create a new file in `src/content/projects/[project-name].ts`
2. Export a project object with required fields
3. Add project images to `public/projects/`

### Updating Styling

- **Colors**: Modify `tailwind.config.ts`
- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Update individual component files

### Content Updates

All content is centralized in the `src/content/` directory for easy management without touching component code.

## Performance

- **Lighthouse Score**: Optimized for 95+ across all metrics
- **Core Web Vitals**: Next.js Image optimization and font loading
- **Bundle Size**: Minimal dependencies and tree-shaking
- **SEO**: Proper meta tags and Open Graph configuration
