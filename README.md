# Octron NAVR Website

A modern, elegant website for Octron's flagship product NAVR (NeuroAdaptive Virtual Reality), built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design following top-tier product design standards
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Next.js 14 App Router and next/image
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS with custom design system

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) and Lora (serif) from Google Fonts

## Design System

The website follows a carefully crafted design system with:

- **Typography**: Two-font hierarchy using Inter and Lora
- **Color Palette**: Neutral base with professional blue and teal accents
- **Spacing**: Consistent spacing scale based on Tailwind tokens
- **Components**: Reusable component system with hover states and micro-interactions
- **Motion**: Subtle animations with reduced-motion respect

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with font configuration
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Navbar.tsx        # Navigation with scroll behavior
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Problem.tsx       # Problem statement section
│   ├── Solution.tsx      # Solution overview
│   ├── Features.tsx      # Three-column feature showcase
│   ├── Credibility.tsx   # Scientific foundation
│   ├── CtaPanel.tsx      # Research download CTA
│   └── Footer.tsx        # Footer with contact form
├── tailwind.config.ts    # Tailwind configuration with custom theme
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Colors
The color system is defined in `tailwind.config.ts` and includes:
- **Primary**: Blue tones for main actions and accents
- **Accent**: Teal tones for secondary elements
- **Neutral**: Comprehensive gray scale for text and backgrounds

### Typography
Font configuration is in `app/layout.tsx`:
- **Sans-serif**: Inter for UI and body text
- **Serif**: Lora for headings and display text

### Components
All components are in the `/components` directory and use:
- Semantic HTML5 markup
- Accessible focus states
- Hover animations with proper easing
- Responsive design patterns

## Deployment

The website is ready for deployment on any platform that supports Next.js:

- **Vercel** (recommended): `npm run build && npm start`
- **Netlify**: Configure build command as `npm run build` and publish directory as `.next`
- **Custom server**: `npm run build && npm start`

## Performance

- Optimized images with `next/image`
- Font display optimization with `next/font`
- Minimal JavaScript bundle
- CSS-in-JS with zero runtime overhead via Tailwind

## Accessibility

- WCAG AA compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- Screen reader optimization
- Focus management
- Reduced motion respect

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Octron. All rights reserved.
