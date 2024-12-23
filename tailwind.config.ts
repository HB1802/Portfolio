import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        background: '#1C1C1C',
        foreground: '#F5F5F0',
      },
      borderColor: {
        DEFAULT: '#e5e5e5',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;