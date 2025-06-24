# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite template for building a CRM application. It uses modern tooling with minimal dependencies, providing a clean starting point.

## Essential Commands

```bash
# Development
npm run dev      # Start dev server at http://localhost:5173

# Build & Production
npm run build    # Run TypeScript checks + build for production
npm run preview  # Preview production build locally

# Code Quality
npm run lint     # Run ESLint checks
```

## Architecture

### Technology Stack
- **React 19.1.0** with TypeScript 5.8.3
- **Vite 6.3.5** for bundling and development
- **ESLint** with TypeScript and React plugins

### Project Structure
- `/src/main.tsx` - Application entry point, renders App component to root
- `/src/App.tsx` - Root React component
- `/src/assets/` - Static assets (images, SVGs)
- `/public/` - Public assets served directly

### TypeScript Configuration
- Uses project references with separate configs:
  - `tsconfig.app.json` - Application code configuration
  - `tsconfig.node.json` - Node/build tools configuration
- Strict mode enabled with additional type checking

### Key Development Patterns
1. Components should be TypeScript (.tsx) files
2. CSS modules are not configured - use regular CSS imports
3. No routing library installed - add React Router if needed
4. No state management library - add as needed
5. React.StrictMode is enabled in production

### Important Notes
- This is a minimal template - no testing framework is configured
- No environment variable setup (.env files) - add as needed
- ESLint uses the new flat config format (eslint.config.js)
- Vite uses Babel for React Fast Refresh, not SWC