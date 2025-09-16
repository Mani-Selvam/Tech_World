# Overview

This is a modern full-stack web application for TechARA Academy's Web3 and blockchain conference, built with React, TypeScript, and Express.js. The application serves as a marketing and registration platform for a blockchain/crypto conference event, featuring event details, speaker information, attendee demographics, registration functionality, and promotional content with animated bubble effects.

# Recent Changes

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
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing instead of React Router
- **TanStack Query** for server state management and API interactions
- **React Hook Form** with Zod validation for form handling
- **Framer Motion** for advanced animations and bubble effects

## Backend Architecture
- **Express.js** server with TypeScript
- **DatabaseStorage** implementation using PostgreSQL for persistence
- **Modular route registration** system for API endpoints
- **Development/production environment separation** with Vite integration
- **Middleware-based architecture** for request logging and error handling

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