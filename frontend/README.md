# Mahmoud Khaled – React Frontend

This is the React (Vite) implementation of the portfolio. It mirrors the original design and behavior and is organized into reusable components.

## Prerequisites

- Node.js 20+ (or 22+)

## Install & Run

```bash
npm install
npm run dev
```

The app usually serves at http://localhost:5173.

If you want the contact form to work during development, also run the backend in another terminal:

```bash
cd ../backend
npm install
node server.js
```

The frontend is configured (via `vite.config.js`) to proxy `/api` to `http://localhost:3001`.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    About.jsx
    Contact.jsx
    Education.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
  styles/
    site.css   # Ported from original style.css
  App.jsx
  main.jsx
public/
  images/      # Copied assets
```

## Notes

- Styling is kept in `src/styles/site.css` using the original classes.
- Mobile nav, sticky header, active section highlighting, “Read More”, and contact form submission are implemented with React hooks.
- Update `Projects.jsx` with real projects as needed.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
