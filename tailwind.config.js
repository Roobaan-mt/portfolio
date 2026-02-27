export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#080811',
        'bg-1': '#0D0D1A',
        'bg-2': '#131325',
        surface: '#1A1A2E',
        'surface-2': '#1F1F38',
        'border-dim': 'rgba(255,255,255,0.06)',
        'border-bright': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
        'grad-gold': 'linear-gradient(135deg, #F59E0B, #EF4444)',
        'grad-subtle': 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))',
      },
    },
  },
};
