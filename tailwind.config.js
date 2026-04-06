/** @type {import('tailwindcss').Config} */
export default {
  // This connects Tailwind 'dark:' to daisyUI 'data-theme="dark"'
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Defining these so they are easy to use
        primary: '#f9a8d4', // Pink
        secondary: '#818cf8', // Indigo
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
}