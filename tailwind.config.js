/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EAF1FF',
          100: '#D5E3FF',
          200: '#ABC7FF',
          300: '#81ABFF',
          400: '#578FFB',
          500: '#2563EB',
          600: '#1E4FC0',
          700: '#173C94',
          800: '#102969',
          900: '#09163D',
        },
        ink: {
          950: '#05070D',
          900: '#0A0E17',
          800: '#0F1420',
          700: '#161C2C',
          600: '#1F2740',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.25) 0%, rgba(5,7,13,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(37,99,235,0.35)',
        card: '0 8px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
