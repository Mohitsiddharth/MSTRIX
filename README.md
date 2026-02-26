# Alex Carter - Creative Frontend Engineer Portfolio

A highly animated, immersive, cinematic portfolio website featuring 3D WebGL graphics, scroll-driven animations, and smooth transitions inspired by wondermakers.games.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for component animations
- **GSAP + ScrollTrigger** for scroll-driven animations
- **Lenis** for smooth scrolling
- **React Three Fiber** for 3D WebGL graphics
- **Three.js** for 3D rendering
- **Lucide React** for icons

## Features

- 🎨 **Cinematic Hero Section** with animated 3D sphere and particle system
- 📜 **Smooth Scroll Experience** powered by Lenis
- 🎯 **Scroll-Triggered Animations** using GSAP ScrollTrigger
- 💫 **Parallax Effects** throughout sections
- 🌀 **Horizontal Scrolling Projects** showcase
- ✨ **Custom Animated Cursor** for desktop
- 🎭 **Interactive Skill Cards** with progress animations
- 📍 **Animated Timeline** for experience section
- 📬 **Interactive Contact Form** with hover effects
- 🌈 **Gradient Accents** with electric blue and neon purple
- 📱 **Responsive Design** for desktop and tablet

## Sections

1. **Hero** - Full-screen 3D WebGL intro with floating sphere
2. **About** - Parallax background with staggered text animations
3. **Skills** - Interactive grid with animated progress bars
4. **Projects** - Horizontal scroll showcase with 5 featured projects
5. **Experience** - Vertical timeline with 4 positions
6. **Education** - Animated education and certification cards
7. **Contact** - Interactive form with social links
8. **Footer** - Minimal animated footer

## Installation

```bash
npm install --legacy-peer-deps
```

## Development

```bash
npm run dev
```

The development server will automatically start (typically at http://localhost:5173).

## Production Build

```bash
npm run build
```

Build output will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Via Vercel Dashboard

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## Performance Optimizations

### Implemented

- ✅ Component-based architecture for code organization
- ✅ Lazy loading with dynamic imports (can be added for routes)
- ✅ Optimized Three.js geometry and materials
- ✅ GSAP animation cleanup on unmount
- ✅ Smooth scroll with RAF optimization
- ✅ CSS-based animations where possible
- ✅ Responsive images and assets

### Recommended for Production

1. **Code Splitting**: Add dynamic imports for heavy sections
```tsx
const Projects = lazy(() => import('./components/Projects'));
```

2. **Image Optimization**: Use WebP format and responsive images
```tsx
<img src="image.webp" loading="lazy" />
```

3. **Bundle Analysis**: Analyze bundle size
```bash
npm run build -- --mode analyze
```

4. **CDN**: Deploy assets to CDN for faster loading

5. **Progressive Loading**: Load above-the-fold content first

6. **Reduce Three.js Bundle**:
   - Use tree-shaking
   - Import only needed modules
   - Consider using `@react-three/rapier` for physics if needed

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support required
- Smooth scrolling on desktop
- Responsive on tablet and mobile

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  dark: {
    DEFAULT: '#0D0D0D',
    lighter: '#1a1a2e',
  },
}
```

### Content

Update the dummy data in each component:
- `/src/components/Hero.tsx` - Name and title
- `/src/components/Projects.tsx` - Project information
- `/src/components/Experience.tsx` - Work history
- `/src/components/Education.tsx` - Education and certifications
- `/src/components/Contact.tsx` - Contact information

### Animations

Adjust animation timing in:
- GSAP animations: `duration`, `delay`, `ease`
- Framer Motion: `transition` objects
- Lenis: `duration` in `useSmoothScroll.ts`

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # 3D WebGL hero section
│   ├── About.tsx          # About section with parallax
│   ├── Skills.tsx         # Interactive skills grid
│   ├── Projects.tsx       # Horizontal scroll projects
│   ├── Experience.tsx     # Timeline experience
│   ├── Education.tsx      # Education cards
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   └── CustomCursor.tsx   # Animated cursor
├── hooks/
│   └── useSmoothScroll.ts # Lenis smooth scroll hook
├── App.tsx                # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## License

MIT License - Feel free to use this template for your own portfolio!

## Credits

Inspired by [wondermakers.games](https://wondermakers.games/)

Built with modern web technologies and a passion for creative frontend development.
