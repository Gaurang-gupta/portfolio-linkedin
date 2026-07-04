# Engineering Portfolio System

A documentation-driven portfolio system built to present software engineering and AI projects through structured technical case studies instead of traditional portfolio pages.

Rather than treating the portfolio as a collection of UI screens, this project separates content, presentation, and rendering into independent layers, making it easy to scale, maintain, and extend over time.

---

# Why This Project Exists

Most developer portfolios become difficult to maintain as they grow.

Common problems include:

- Hardcoded project pages
- Repeated layout logic
- Inconsistent project documentation
- Tight coupling between content and UI

This project approaches the portfolio as an engineering documentation system where project metadata, technical content, and presentation remain independent.

---

# High-Level Architecture

```
                     Project Metadata
                     (TypeScript)
                           │
                           ▼
                 MDX Case Studies
                           │
                           ▼
                  MDX Rendering Layer
                           │
                           ▼
             Reusable Documentation Components
                           │
                           ▼
                  Generated Portfolio Pages
```

---

# Design Principles

## Content First

Projects are treated as structured engineering documentation rather than UI pages.

---

## Separation of Concerns

The system separates:

- Project metadata
- Case study content
- Rendering logic
- Shared UI components

Each layer has a single responsibility.

---

## Reusable Documentation

Instead of repeating layouts, reusable MDX components provide consistent technical communication.

Examples include:

- Architecture decisions
- Callouts
- Technology badges
- Implementation steps
- Mermaid diagrams
- Code blocks

---

## Scalable by Design

Adding a new project only requires:

1. Adding metadata
2. Writing one MDX file
3. Adding project assets

No page development is required.

---

# Core Components

## Project Data Layer

Centralized metadata describing:

- title
- description
- repositories
- summary
- featured projects
- cover images

Acts as the single source of truth.

---

## MDX Content Layer

Every project is documented as an engineering case study.

Typical structure includes:

- Overview
- Problem Statement
- System Architecture
- Engineering Decisions
- Implementation
- Challenges
- Lessons Learned
- Future Improvements

---

## Rendering Layer

Dynamic routing loads project metadata and corresponding MDX content, rendering everything through a shared component registry.

---

## Documentation Components

Custom MDX components provide structured technical writing.

Examples:

- Badge
- Callout
- ArchitectureDecision
- Step
- Mermaid
- CodeBlock

---

# Project Structure

```
app/
├── about/
├── contact/
├── projects/
│   └── [slug]/
├── resume/

components/
├── layout/
├── mdx/
├── navigation/
├── project/
└── sections/

content/
└── projects/

data/
├── about.ts
├── contact.ts
├── projects.ts
└── resume.ts

lib/
└── content/

public/
└── images/
```

---

# Technology Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Content

- MDX
- Mermaid

## Deployment

- Vercel

---

# Key Engineering Decisions

- MDX for structured engineering documentation
- Type-safe project metadata
- Dynamic project routing
- Component-driven documentation
- Reusable layout primitives
- Separation between content and presentation

---

# Current Features

- Responsive portfolio
- Dynamic project pages
- MDX-based engineering case studies
- Theme support
- Data-driven resume
- Contact page
- Project filtering through metadata
- GitHub repository links

---

# Future Improvements

- Project search
- Tag-based filtering
- Reading time estimation
- RSS feed
- Versioned project documentation
- Analytics dashboard
- Automatic Open Graph image generation

---

# Philosophy

This project is intentionally minimal.

The objective is not to build the most visually complex portfolio.

The objective is to communicate engineering decisions, architectural thinking, and production-oriented software design in a structured, maintainable format.

The portfolio itself follows the same principles as the systems it showcases:

- Clear separation of concerns
- Reusable components
- Scalability
- Maintainability
- Documentation as a first-class asset
