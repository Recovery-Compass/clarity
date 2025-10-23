/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CLARITY brand colors
        clarity: {
          dark: '#0a0a0f',
          darker: '#050508',
          gray: {
            900: '#121218',
            800: '#1a1a24',
            700: '#2d2d3d',
            600: '#4a4a5e',
            500: '#6b6b7f',
            400: '#9191a8',
            300: '#b8b8cc',
          },
          accent: {
            primary: '#6366f1', // Indigo
            secondary: '#8b5cf6', // Purple
            success: '#10b981', // Green
            warning: '#f59e0b', // Amber
            danger: '#ef4444', // Red
          },
          deadline: {
            hard: '#ef4444', // Red - real consequence
            soft: '#f59e0b', // Amber - relationship impact
            none: '#10b981', // Green - can rest
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
