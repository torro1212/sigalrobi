/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e3ebe6',
          200: '#c6d8cd',
          300: '#9ebba9',
          400: '#8ba896',
          500: '#5f836d',
          600: '#4a6855',
          700: '#3d5446',
          800: '#33443b',
          900: '#2a3831',
        },
        cream: {
          50: '#fdfdfb',
          100: '#fcfbf7',
          200: '#f5f0e6',
          300: '#eaddc5',
          400: '#dec39b',
          500: '#d4a773',
        },
        offwhite: '#FFFFFA',
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Assistant', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}