# Portfolio V2 - Clean & Organized

A modern, well-structured React portfolio built with Vite, React Router, and SCSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/` to view the portfolio.

## 📁 Project Structure

```
portv2/
├── src/
│   ├── assets/              # Static assets
│   │   ├── icons/          # SVG icons for navigation
│   │   ├── images/         # Photos and graphics
│   │   └── videos/         # Video files
│   ├── components/
│   │   ├── layout/         # Layout components (Sidebar, etc.)
│   │   ├── navigation/     # Navigation components
│   │   ├── cards/          # Card components
│   │   ├── media/          # Media viewers (PDF, video, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Page components
│   ├── styles/
│   │   ├── globals/        # SCSS variables, mixins
│   │   └── base.scss       # Global base styles
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom hooks
│   └── utils/              # Helper functions
```

## 🎨 Features

- ✅ Clean folder structure organized by feature
- ✅ Global styling system with SCSS variables & mixins
- ✅ React Router with lazy loading
- ✅ Responsive design (mobile-first)
- ✅ CSS Modules for scoped styling
- ✅ Accessibility features

## 🛠️ Tech Stack

- React 19.2 | Vite 7.2 | React Router DOM 7
- Framer Motion 12 | Sass | React Icons 5

## 📝 TODO: Add Your Content

1. **Add Navigation SVGs** to `src/assets/icons/`
2. **Update Sidebar** component with your icons
3. **Add Background Graphics** in `base.scss`
4. **Populate Pages** with your content
5. **Create Card Components** for projects, about, etc.

## 🎯 Style System Usage

```scss
// In your component styles
@import '../../styles/globals/index.scss';

.myComponent {
  color: $primary;
  padding: $spacing-lg;
  @include flex-center;
  @include mobile { ... }
}
```

## 📦 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Run ESLint

---

Built with ❤️ using React + Vite
