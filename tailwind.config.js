/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    // Disable Tailwind's CSS reset so it doesn't conflict with the existing
    // site stylesheet that has its own resets and base rules.
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
