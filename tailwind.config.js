/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0f0f0f',
          lighter: '#1a1a1a',
          card: '#111111',
          border: '#222222',
        },
        neon: {
          DEFAULT: '#00FFAA',
          glow: 'rgba(0, 255, 170, 0.3)',
        },
        light: {
          DEFAULT: '#E6E6E6',
          brighter: '#FAFAFA',
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 170, 0.3)',
        'neon-sm': '0 0 10px rgba(0, 255, 170, 0.2)',
        'neon-lg': '0 0 30px rgba(0, 255, 170, 0.4)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 255, 170, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 170, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(0, 255, 170, 0.1) 50%, transparent 75%)',
      },
    },
  },
  plugins: [],
} 