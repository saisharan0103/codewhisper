# Code Explainer

## Overview

Code Explainer is a web application that helps you understand code snippets by providing clear, beginner-friendly or advanced explanations. Paste your code, select the explanation level, and get instant insights into how the code works.

## Features
- Paste code snippets and receive detailed explanations
- Choose between beginner and advanced explanation levels
- Clean, responsive UI built with React and Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
- `src/` — Main application source code
  - `components/` — Reusable UI components
  - `pages/` — Page-level components
  - `services/` — API and business logic
  - `hooks/` — Custom React hooks
  - `lib/` — Utility functions
- `public/` — Static assets

## Tech Stack
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Deployment
You can deploy this app to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages) after building:

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

## License
This project is open source and available under the MIT License.
