/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        bone: '#f6f1e7',
        gold: {
          DEFAULT: '#d4af37',
          50: '#fbf6e3',
          100: '#f5e9b8',
          200: '#ecd683',
          300: '#dec04b',
          400: '#d4af37',
          500: '#b08a1f',
          600: '#86671a',
          700: '#5e4713',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5e9b8 0%, #d4af37 35%, #86671a 70%, #d4af37 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
