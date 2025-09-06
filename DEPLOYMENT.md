# Deployment Guide

## GitHub Repository Setup

### 1. Create New Repository
```bash
# Create a new repository on GitHub
# Clone it locally or initialize in existing directory
git init
git remote add origin https://github.com/yourusername/ai-assignment-suite.git
```

### 2. Add All Files
```bash
# Add all project files
git add .
git commit -m "Initial commit: AI Assignment Suite with Name Matching and Recipe Chatbot"
git push -u origin main
```

## Local Development Setup

### Prerequisites
- Node.js 18+ installed
- npm package manager
- Git (for cloning)

### Quick Start Commands
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-assignment-suite.git
cd ai-assignment-suite

# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on push to main branch

### Option 2: Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/ai-assignment-suite",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Environment Variables
No environment variables required - the application runs entirely client-side.

## Build Verification
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## File Structure for GitHub
```
ai-assignment-suite/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── NameMatcher.tsx
│   │   └── RecipeChatbot.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── DEPLOYMENT.md
```

## Testing Checklist
- [ ] `npm install` runs without errors
- [ ] `npm run dev` starts development server
- [ ] Name matching works with sample inputs
- [ ] Recipe chatbot responds to ingredient queries
- [ ] `npm run build` creates production build
- [ ] `npm run preview` serves production build locally
- [ ] All features work in production build