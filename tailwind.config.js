/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: { max: '640px' },
      // => @media (max-width: 640px) { ... }

      sm: { min: '640px' },
      // => @media (min-width: 640px) { ... }

      md: { min: '768px' },
      // => @media (min-width: 768px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      xl: { min: '1280px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    maxWidth: {
      40: '40rem',
    },
  },
  plugins: [],
};
