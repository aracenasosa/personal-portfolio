# Professional Portfolio

A modern, high-performance personal portfolio built with **Next.js 16**, **React 19**, and **Sanity CMS**. This project showcases professional experience, technical skills, and featured projects using state-of-the-art web technologies and animations.

## 🚀 Overview

This portfolio serves as a centralized hub for professional storytelling. It features a dynamic content management system (Sanity) that allows for easy updates to projects, skills, and personal information without direct code changes. The UI is designed with a focus on smooth interactions, accessibility, and modern aesthetics.

## ✨ Key Features

- **Dynamic Content**: Powered by Sanity CMS for seamless data management.
- **Micro-interactions**: Smooth animations using Framer Motion.
- **Fluid Scrolling**: Optimized scroll experience with Lenis.
- **Sectioned Architecture**: Dedicated sections for Hero, About, Projects, Education, Skills, and Recommendations.
- **Responsive Design**: Fully optimized for all screen sizes using Tailwind CSS 4.
- **High Performance**: Built on Next.js 16 with Turbopack for lightning-fast development and optimized production builds.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org), [React 19](https://reactjs.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com), [Next-themes](https://github.com/pacocoursey/next-themes)
- **Animations**: [Framer Motion](https://motion.dev), [Lenis](https://lenis.darkroom.engineering)
- **Content Management**: [Sanity CMS](https://www.sanity.io)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router (Website & Studio)
├── components/           # Reusable UI and Feature components
│   ├── features/         # Hero, About, Projects, Skills, etc.
│   ├── layout/           # Shared layout components (Navbar, Footer)
│   ├── ui/               # Base UI components (Buttons, Cards)
│   └── providers/        # Context providers (Theme, Lenis)
├── sanity/               # Sanity CMS configuration and schemas
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Sanity credentials:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.
