# The Room of Requirement - Adaptive Study Planner

A magical Harry Potter-themed study planner built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- **Dark Magic Theme**: Castle Obsidian background with Slate panels and Gryffindor Gold accents
- **Sticky Header**: Navigation with glowing door icon, tab switching, and streak counter
- **Three Main Views**:
  - 🔮 **The Room** (Dashboard) - Overview of study stats and tasks
  - 📜 **Spaced Plan** (Weekly Calendar) - Detailed study schedule with spaced repetition
  - 📊 **Progress** (Analytics) - Subject mastery, achievements, and study streaks
- **Quick Login**: Demo credentials pre-filled for instant access
- **Responsive Design**: Works seamlessly on desktop and mobile

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Login Credentials

The app comes with demo credentials pre-filled:

- **Username**: `potter_student`
- **Password**: `lumos123`

Simply click "Quick Magic Login" to enter the Room of Requirement.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with state management
├── components/
│   ├── DashboardView.tsx    # Dashboard view component
│   ├── Header.tsx           # Sticky header with navigation
│   ├── LoginModal.tsx       # Login modal with demo credentials
│   ├── ProgressView.tsx     # Analytics and progress tracking
│   └── SpacedPlanView.tsx   # Weekly calendar view
├── tailwind.config.ts       # Tailwind configuration with custom theme
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Design System

- **Background**: `bg-slate-950` (Castle Obsidian)
- **Panels**: `bg-slate-900/90` (Slate with transparency)
- **Accents**: `text-amber-400`, `bg-amber-500` (Gryffindor Gold)
- **Effects**: Subtle ambient glow with custom animations

## Features Overview

### Dashboard (The Room)
- Study statistics (subjects, hours, tasks, focus score)
- Today's schedule with priority indicators
- Quick action buttons for common tasks
- Motivational quotes from the Wizarding World

### Spaced Plan (Weekly Calendar)
- Weekly overview with task counts
- Detailed hourly schedule grid
- Color-coded subjects
- Spaced repetition algorithm info

### Progress (Analytics)
- Weekly statistics with change indicators
- Subject mastery progress bars
- Achievement system (3/6 unlocked)
- Study streak calendar visualization

## Customization

### Theme Colors

Modify `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  slate: {
    950: '#020617', // Main background
  },
},
```

### Add New Views

1. Create a new component in `components/`
2. Add the tab to the `tabs` array in `Header.tsx`
3. Add the view case in `app/page.tsx`

## License

This project is created for the Ideathon 2026 competition.

---

*"You See It When You Need It"* - The Room of Requirement
