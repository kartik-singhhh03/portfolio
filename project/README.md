# Portfolio Website

A dynamic professional portfolio website built with React, TypeScript, and Tailwind CSS, featuring animations and modern design elements.

## 🚀 Live Demo
[View Live Demo](https://kartik-singhhh03.github.io/portfolio)

## ✨ Features

- Responsive design
- Smooth animations and transitions
- Dynamic project showcase from GitHub
- Tech stack visualization
- Contact form
- Digital store integration
- Neon UI effects

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## 📦 Installation

1. Download and extract the project ZIP file
2. Open the project in VS Code
3. Open terminal in VS Code (Ctrl + `)
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start development server:
   ```bash
   npm run dev
   ```
6. Open http://localhost:5173 in your browser

## 🚀 Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. Install gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

4. Add these to package.json:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. Update vite.config.ts:
   ```ts
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     // ... rest of the config
   })
   ```

6. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

7. Go to repository settings > Pages > Set source to gh-pages branch

## 🔧 Development

- Run development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview production build:
  ```bash
  npm run preview
  ```

## 📝 License

MIT License