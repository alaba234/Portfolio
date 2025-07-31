// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ... your existing colors
        'neon-green': '#39FF14', // A bright, distinct neon green
        'gradient-start': '#36d1dc',
        'gradient-end': '#5b86e5',
        'action-green': '#2ea44f', // Maybe you'll use this for the line, or 'neon-green'
        'action-green-hover': '#2c974b',
        'dark-theme-bg': '#0d1117',
        'dark-theme-text': '#c9d1d9',
        'light-theme-bg': '#ffffff',
        'light-theme-text': '#24292e',
        'nav-link-hover': '#58a6ff',
        'btn-green': '#2ea44f',
        'btn-green-hover': '#2c974b',
        'border-light': '#e1e4e8',
        'border-dark': '#30363d',
      },
      // ... rest of your config
    },
  },
  plugins: [],
}