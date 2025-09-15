# Overview

This is a modern full-stack web application for the Blockchain Life conference website, built with React, TypeScript, and Express.js. The application serves as a marketing and information platform for a blockchain/crypto conference event in Dubai, featuring event details, speaker information, attendee demographics, and promotional content.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with a custom design system
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing instead of React Router
- **TanStack Query** for server state management and API interactions
- **React Hook Form** with Zod validation for form handling

## Backend Architecture
- **Express.js** server with TypeScript
- **Custom storage interface** with in-memory implementation for user data
- **Modular route registration** system for API endpoints
- **Development/production environment separation** with Vite integration
- **Middleware-based architecture** for request logging and error handling

## Database and ORM
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- **Neon Database** serverless PostgreSQL integration
- **Type-safe database operations** with generated TypeScript types
- **Migration support** through Drizzle Kit

## UI/UX Design System
- **Dark theme** optimized design with CSS custom properties
- **Radix UI primitives** for accessible component foundations
- **Custom animation classes** for enhanced user experience
- **Responsive design** with mobile-first approach
- **Custom color scheme** with primary (purple) and accent (orange) branding

## Development Tools
- **ESBuild** for production server bundling
- **TypeScript** strict mode configuration
- **Path aliases** for clean import statements
- **Hot module replacement** in development
- **Error overlay** for runtime error debugging

# External Dependencies

## Database Services
- **Neon Database** - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe database toolkit

## UI Framework
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Development Platform
- **Replit** - Cloud development environment with specialized plugins
- **Vite plugins** - Cartographer and dev banner for Replit integration

## Authentication & Sessions
- **connect-pg-simple** - PostgreSQL session store for Express sessions

## Utilities
- **date-fns** - Date manipulation library
- **clsx** and **class-variance-authority** - Conditional CSS class utilities
- **nanoid** - Unique ID generation