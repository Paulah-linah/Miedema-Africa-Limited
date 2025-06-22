/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        'primary-dark': '#222222',
        secondary: '#2ecc71',
        accent: '#f97316', // Orange
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#ffffff',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
};