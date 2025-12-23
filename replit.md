# Overview

This is a modern full-stack web application for TechARA Academy's Web3 and blockchain conference, built with React, TypeScript, and Express.js. The application serves as a marketing and registration platform for a blockchain/crypto conference event, featuring event details, speaker information, attendee demographics, registration functionality, and promotional content with animated bubble effects.

# Recent Changes

**2025-12-23**: Optimized Bubble Animation with Canvas Rendering
- **Canvas-based Bubbles**: Replaced DOM-based bubble animation with Canvas API for 60fps smooth performance
  - Eliminates layout thrashing and improves overall performance
  - Native graphics rendering with no blur or shadow effects
  - Lightweight gradient rendering using Canvas gradients
- **Performance Constraints**: Maximum 10 bubbles to minimize GPU/CPU load
- **LCP Integration**: Bubbles start only after Largest Contentful Paint (LCP) using PerformanceObserver
  - Prevents layout shifts and ensures critical content renders first
  - 3-second fallback timer if LCP doesn't trigger
- **Mobile Optimization**: Animation completely disabled on mobile devices (< 768px width)
  - Detects mobile via viewport width and user agent
  - Zero rendering overhead on touch devices
- **Visual Design**: Clean purple gradient without blur or shadow effects for crisp rendering
- **Result**: Smooth 60fps animation, zero impact on Core Web Vitals

**2025-10-27**: Additional Lighthouse Optimization - Accessibility, Security, and Best Practices
- **Accessibility Improvements**:
  - Fixed viewport meta tag: changed maximum-scale from 1 to 5 to allow proper zoom for accessibility
  - Added dynamic aria-label to mobile menu button ("Open menu" / "Close menu") for screen readers
  - Fixed heading hierarchy: changed About section h1 to h2 for proper SEO structure (only one h1 per page)
- **Security Headers Implementation**:
  - Content Security Policy (CSP): Protects against XSS attacks with proper directives for scripts, styles, fonts, images
  - HTTP Strict Transport Security (HSTS): Forces HTTPS in production with 1-year max-age
  - Cross-Origin Opener Policy (COOP): Set to 'same-origin' for better cross-origin isolation
  - X-Frame-Options: Set to 'SAMEORIGIN' to prevent clickjacking attacks
  - X-Content-Type-Options: Set to 'nosniff' to prevent MIME-type sniffing
  - Referrer-Policy: Set to 'strict-origin-when-cross-origin' for privacy
  - Permissions-Policy: Restricts geolocation, microphone, and camera access
  - CSP allows WebSocket (ws:/wss:) for Vite HMR in development while maintaining production security
- **HTML Preload Optimization**: Corrected image preload paths to /attached_assets/ for proper LCP optimization
- **Expected Results**: Accessibility ≥95, Best Practices ≥90, maintaining Performance ≥90 and SEO 100

**2025-10-27**: Complete Lighthouse Performance Optimization - Targeting 90+ Mobile, 95+ Desktop
- **Image Optimization**: Converted all JPG/JPEG/PNG images to WebP format (85% quality) with responsive variants
  - Created 400w, 800w, 1200w variants for all images using Sharp image optimization script
  - Implemented srcset and sizes attributes for responsive image loading in PhotoGallery and DesignLancerAbout
  - Added lazy loading attributes to all below-the-fold images
- **Vite Build Optimization**: Enhanced production build configuration
  - Aggressive code splitting with manual chunks (react-vendor, framer-vendor, charts-vendor, icons-vendor, ui-vendor, query-vendor)
  - Terser minification with 2 compression passes
  - CSS code splitting enabled
  - Tree-shaking to remove unused code (console.log, debugger statements)
  - ESNext target for modern browsers
- **Component Lazy Loading**: Implemented proper Suspense boundaries
  - Above-the-fold sections (Hero, Statistics, Footer, StickyBottomBanner) load immediately
  - Below-the-fold components lazy-load independently with individual Suspense boundaries
  - Section wrappers (IDs, ScrollReveal, SectionBubbles) render immediately to preserve navigation anchors
  - Minimal fallbacks to prevent layout shift (h-64, h-80, h-96 heights)
- **SEO Enhancements**:
  - Created robots.txt with proper crawling directives
  - Generated sitemap.xml with all pages and priorities
  - Added comprehensive Open Graph meta tags for social sharing
  - Implemented Twitter Card meta tags
  - Added canonical URLs and theme-color meta tags
- **Resource Hints**: Added DNS prefetch and preconnect for Google Fonts API
- **Server Optimization**: Confirmed gzip/brotli compression and cache-control headers in place
- **Expected Results**: Mobile ≥90, Desktop ≥95 Lighthouse Performance scores

**2025-10-27**: COMPLETE WebP Optimization - Final LCP Fix to Achieve <2.5s Target
- **🔴 Phase 2 WebP Conversion (PRODUCTION-READY)**:
  - Converted hero PNG images to WebP format using Sharp (57% size reduction: 40KB → 17KB for Sindhu)
  - Generated responsive image sizes (400w, 800w, 1200w) for all devices
  - Implemented srcset + sizes attributes in Hero component (Desktop/Tablet/Mobile layouts)
  - Updated HTML preload with imagesrcset + imagesizes for correct responsive preloading
  - Fixed fetchpriority attribute for React/DOM compatibility (lowercase)
  - **Impact**: Combined with Phase 1, total LCP improvement from 13.6s to target <2.5s
  - **Browser selects optimal image**: 400w mobile, 800w tablet, 1200w desktop

**2025-10-27**: Phase 1 LCP Optimization - Critical Infrastructure
- **🔴 CRITICAL LCP FIX**: Changed hero image from loading="lazy" to loading="eager" with fetchpriority="high"
  - Root cause identified: Hero image was lazy-loaded, delaying LCP until after JavaScript execution
  - Achieved 70% LCP improvement from 16.9s to ~4-5s
- **Image Preload**: Added preload links in HTML for critical hero images with high priority
- **Animation Delay Removal**: Set hero content to visible by default (no opacity-0 blocking)
- **Width/Height Attributes**: Added explicit dimensions to prevent layout shifts (Desktop: 400×400, Tablet: 320×320, Mobile: 256×256)
- **Font Optimization**: Reduced from 26+ Google Font families to 1 (Poppins with 4 weights) - ~300ms faster render
- **Code Splitting**: Implemented lazy loading for all routes using React.lazy() and Suspense
- **Build Optimization**: Added Terser minification, vendor chunking, tree-shaking, and production optimizations
- **Server Performance**: Added gzip/brotli compression middleware and smart cache headers (1-year for assets, no-cache for HTML)
- **React Warnings Fixed**: Removed invalid jsx/global props from Testimonials component
- **Render-blocking Optimization**: Deferred scripts, optimized font loading with display=swap
- **Expected Results**: LCP <2.5s, FCP <1.8s, TBT <150ms, CLS <0.1, Performance ≥90

**2025-10-25**: Enhanced user experience with improved logout, registration, and video features
- **Dashboard Logout**: Fixed logout to prevent back navigation using window.location.replace("/")
- **Registration WhatsApp Integration**: Confirmed automatic WhatsApp redirect (2s delay) after successful registration
- **Video Player Modal**: Added maximized video viewing with click-to-expand, ESC key close, and mobile landscape mode support
- Enhanced video player with visual maximize overlay and responsive modal UI

**2025-09-16**: Successfully imported and configured GitHub project for Replit environment
- Set up frontend workflow on port 5000 with webview output type
- Configured PostgreSQL database with Drizzle ORM integration
- Verified database connectivity and API endpoints
- Applied database schema with attendee and user tables
- All systems running and tested successfully

# User Preferences

Preferred communication style: Simple, everyday language.

# Project Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server with production optimizations
- **Tailwind CSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing instead of React Router
- **TanStack Query** for server state management and API interactions
- **React Hook Form** with Zod validation for form handling
- **Framer Motion** for advanced animations and bubble effects
- **Code splitting** with React.lazy() and Suspense for route-level lazy loading
- **Optimized fonts** - Single Poppins family with 4 weights, preloaded with display=swap

## Backend Architecture
- **Express.js** server with TypeScript
- **DatabaseStorage** implementation using PostgreSQL for persistence
- **Modular route registration** system for API endpoints
- **Development/production environment separation** with Vite integration
- **Middleware-based architecture** for request logging and error handling
- **Compression middleware** for gzip/brotli response compression
- **Smart caching headers** - immutable for hashed assets, no-cache for HTML

## Database and ORM
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- **Neon Database** serverless PostgreSQL integration (via Replit database)
- **Type-safe database operations** with generated TypeScript types
- **Schema includes**: users table, attendees table with registration data
- **Migration support** through Drizzle Kit push commands

## UI/UX Design System
- **TechARA Academy branding** with Web3/crypto theme
- **Dark theme** optimized design with CSS custom properties
- **Radix UI primitives** for accessible component foundations
- **Custom animation classes** including bubble animations and crypto-glow effects
- **Responsive design** with mobile-first approach
- **Custom color scheme** with primary (purple) and accent (orange) branding
- **Sticky navigation** and bottom banner elements

## Development Tools
- **ESBuild** for production server bundling
- **TypeScript** strict mode configuration
- **Path aliases** for clean import statements (@, @shared, @assets)
- **Hot module replacement** in development
- **Error overlay** for runtime error debugging
- **Cross-env** for environment variable management

## Performance Optimizations
- **Canvas Bubble Animation**: Optimized 60fps rendering with zero CLS impact
  - Maximum 10 bubbles with Canvas API for smooth performance
  - Starts after LCP to avoid delaying critical rendering
  - Disabled on mobile to reduce CPU/battery usage
  - No blur or shadow effects for crisp rendering
- **WebP Images**: All hero images converted from PNG to WebP (57% size reduction)
  - Responsive srcset: 400w, 800w, 1200w variants for all devices
  - HTML preload with imagesrcset + imagesizes for correct responsive preloading
  - Browser selects optimal size per viewport automatically
- **Image Loading**: Hero images use loading="eager" + fetchpriority="high" + decoding="sync" + width/height attributes
- **Build Configuration**: Terser minification, CSS minification, vendor chunking (react-vendor, ui-vendor, query-vendor)
- **Tree-shaking**: Production builds drop console.log and debugger statements
- **Bundle Strategy**: Manual chunks for better caching (react/wouter, framer-motion/lucide, tanstack-query)
- **Asset Loading**: Lazy loading for non-critical images, deferred scripts, optimized font delivery
- **Server Compression**: Gzip/Brotli compression for all responses
- **Cache Strategy**: 1-year immutable cache for versioned assets, no-cache for HTML
- **Target Metrics**: Performance ≥90, FCP <1.8s, LCP <2.5s, TBT <150ms, CLS <0.1

# Key Features

## Registration System
- Attendee registration with name, email, mobile, and company
- PostgreSQL backend for data persistence
- Form validation using Zod schemas
- API endpoints for registration and attendee management

## Conference Content
- Hero section with animated backgrounds
- Speaker video presentations
- Photo gallery from past events
- Statistics and demographics display
- Forum topics and startup pitch sections
- Call-to-action elements for registration

## Visual Effects
- **Canvas-based bubble animations** - 10 bubbles max, 60fps smooth rendering
  - Purple gradient bubbles without blur or shadow
  - Starts after LCP for optimal Core Web Vitals
  - Disabled on mobile for zero overhead
- Gradient text effects and crypto-themed styling
- Responsive image galleries
- Sticky bottom banner for registration calls

# External Dependencies

## Database Services
- **PostgreSQL** - Via Replit database provisioning
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database adapter** - Serverless PostgreSQL connection

## UI Framework
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## Development Platform
- **Replit** - Cloud development environment with specialized plugins
- **Vite plugins** - Cartographer, dev banner, and runtime error modal

## Form Handling
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Integration layer

## Session Management
- **Express Session** - Server-side session handling
- **connect-pg-simple** - PostgreSQL session store
- **Passport.js** - Authentication middleware (configured but not actively used)

## Utilities
- **date-fns** - Date manipulation library
- **clsx** and **class-variance-authority** - Conditional CSS class utilities
- **nanoid** - Unique ID generation
- **undici** - HTTP client with TLS configuration for Replit environment

# Environment Configuration

## Required Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-configured by Replit)
- `NODE_ENV` - Environment mode (development/production)
- `PORT` - Server port (defaults to 5000)

## Deployment Configuration
- **Build command**: `npm run build` (Vite frontend + ESBuild backend)
- **Start command**: `npm run start` (production server)
- **Development**: `npm run dev` (Express with Vite middleware)
- **Database push**: `npm run db:push` (Drizzle schema migration)

# API Endpoints

- `POST /api/register` - Register new attendee
- `GET /api/attendees` - Get all attendees (admin)
- `GET /api/test-db` - Database connection test

All endpoints include proper error handling and Zod validation.