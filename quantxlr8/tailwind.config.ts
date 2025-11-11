import type { Config } from 'tailwindcss';

/**
 * Tailwind configuration for QuantXlr8.
 *
 * The palette reflects the brand colours defined in the brief: deep navy
 * (#0B1020) as the base, electric blue (#2D6BFF) and teal (#00C2B8) as
 * accents, with light gray (#E9EDF2) and onyx (#0A0A0A) for additional
 * contrast. Fonts are configured via CSS variables using the Google
 * fonts imported in `app/layout.tsx`.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1020',
        electric: '#2D6BFF',
        teal: '#00C2B8',
        grayLight: '#E9EDF2',
        onyx: '#0A0A0A'
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-source)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;