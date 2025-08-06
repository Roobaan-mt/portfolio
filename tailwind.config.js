export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Royal color palette
        royal: {
          purple: {
            light: '#9d8ec7',
            DEFAULT: '#5a3b94',
            dark: '#38236b'
          },
          blue: {
            light: '#7a97d0',
            DEFAULT: '#3a4cb4',
            dark: '#1e2b6b'
          },
          gold: {
            light: '#f0e1a1',
            DEFAULT: '#d4af37',
            dark: '#9c7c1d'
          },
          black: '#121212',
          white: '#f8f8ff',
        },
        // Glass effects
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.2)'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
        'royal': '0 5px 20px rgba(90, 59, 148, 0.3)',
        'gold': '0 5px 15px rgba(212, 175, 55, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #38236b 0%, #1e2b6b 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f0e1a1 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
      }
    }
  }
}