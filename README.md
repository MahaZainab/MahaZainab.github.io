# Maha Zainab — Portfolio Website

## A modern, fast, and responsive personal portfolio website built with React, Vite, Tailwind CSS, and Shadcn UI components. This project showcases publications, research, achievements, and professional information in a clean and elegant layout.

# 🚀 Tech Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS v4
- Radix UI
- Lucide Icons
- React Router DOM
- PWA Support
- ESLint + Prettier

# 📁 Project Structure

src/
├── components/ # Reusable UI components
├── data/ # All dynamic data (publications, content, etc.)
├── pages/ # Main pages
├── types/ # type safety
├── public/ # pwa assets and robots.txt
├── helpers/ # Utility functions
├── assets/ # Images /
└── App.tsx # Root application

# ✏️ Updating Portfolio Content

## If you want to update any details such as:

- Profile information
- Publications
- talks
- Awards
- News
- Services
- Books

👉 Go to the src/data/ folder.
You will find files like:

```
/data/content.ts
```

Modify the data there — the UI will update automatically.
After editing, simply:

```
git add .
git commit -m "Update portfolio data"
git push origin main
npm run build
npm run deploy
```

# 🧞‍♂️ Available Commands

## Start development server

```
npm run dev
```

## Build for production

```
npm run build
```

## Preview production build

```
npm run preview
```

## Format code with Prettier

```
npm run format
```

# 🌐 Features

- Fully responsive layout
- Smooth animations
- Publication grouping by year
- Clean folder structure
- Easy content editing
- PWA enabled
- SEO-friendly structure

# 📄 License

Note:- This project is private and belongs to Maha Zainab.
You may use the structure for learning or personal reference.

# Developed by Muhammad Farooq.
