/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0720',
        'violet-1': '#1c1650',
        'violet-2': '#241a5e',
        'accent-magenta': '#e0507e',
        'accent-cyan': '#3fe8d0',
        'accent-amber': '#f3a35a',
        'ink-cream': '#f6ede2',
        'ink-soft': '#beb3e3',
        'ink-faint': '#8c81b8',
        'ink-dark': '#160f3d',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        bob: 'bob 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}