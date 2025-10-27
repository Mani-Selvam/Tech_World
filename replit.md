# Overview

This is a modern full-stack web application for TechARA Academy's Web3 and blockchain conference, built with React, TypeScript, and Express.js. The application serves as a marketing and registration platform for a blockchain/crypto conference event, featuring event details, speaker information, attendee demographics, registration functionality, and promotional content with animated bubble effects.

# Recent Changes

**2025-10-27**: Comprehensive performance optimization for Lighthouse 90+ score
- **Font Optimization**: Reduced from 26+ Google Font families to 1 (Poppins with 4 weights) - ~300ms faster render
- **Code Splitting**: Implemented lazy loading for all routes using React.lazy() and Suspense
- **Build Optimization**: Added Terser minification, vendor chunking, tree-shaking, and production optimizations
- **Server Performance**: Added gzip/brotli compression middleware and smart cache headers (1-year for assets, no-cache for HTML)
- **React Warnings Fixed**: Removed invalid jsx/global props from Testimonials component
- **Image Optimization**: Confirmed lazy loading for below-the-fold images (PhotoGallery, Testimonials)
- **Render-blocking Optimization**: Deferred scripts, optimized font loading with display=swap
- **Expected Results**: Target FCP <3s, LCP <4s, TBT <150ms, Performance ≥90

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
- **Build Configuration**: Terser minification, CSS minification, vendor chunking (react-vendor, ui-vendor, query-vendor)
- **Tree-shaking**: Production builds drop console.log and debugger statements
- **Bundle Strategy**: Manual chunks for better caching (react/wouter, framer-motion/lucide, tanstack-query)
- **Asset Loading**: Lazy loading for images, deferred scripts, optimized font delivery
- **Server Compression**: Gzip/Brotli compression for all responses
- **Cache Strategy**: 1-year immutable cache for versioned assets, no-cache for HTML
- **Target Metrics**: Performance ≥90, FCP <3s, LCP <4s, TBT <150ms, CLS <0.1

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
- Dynamic bubble animations throughout sections
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