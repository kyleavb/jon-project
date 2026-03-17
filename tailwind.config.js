/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f7',
          100: '#d4dae8',
          200: '#a9b5d1',
          300: '#7e90ba',
          400: '#536ba3',
          500: '#2d4a7c',
          600: '#1e3461',
          700: '#172b50',
          800: '#111f3b',
          900: '#0c1628',
          950: '#060b14',
        },
        teal: {
          50: '#e6fafb',
          100: '#b3f0f4',
          200: '#80e6ed',
          300: '#4ddce6',
          400: '#1ad2df',
          500: '#00b7c4',
          600: '#009da8',
          700: '#007d86',
          800: '#005e64',
          900: '#003e42',
        },
        amber: {
          50: '#fff8eb',
          100: '#ffecc2',
          200: '#ffdf99',
          300: '#ffd270',
          400: '#ffc547',
          500: '#f5a623',
          600: '#d4891a',
          700: '#b36d12',
          800: '#91520a',
          900: '#703702',
        },
        coral: {
          500: '#e8842c',
          600: '#d0721f',
          700: '#b86015',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
