/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        royal: {
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd0ff',
          300: '#8fb2ff',
          400: '#618cff',
          500: '#4169E1', // Royal Blue
          600: '#2e4fc9',
          700: '#2340a5',
          800: '#213880',
          900: '#1e2e60',
        },
        black: '#000000', // Pure black
        white: '#FFFFFF', // Clean white
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'metallic': '0 10px 25px -5px rgba(65, 105, 225, 0.2), 0 5px 10px -5px rgba(65, 105, 225, 0.15)',
        'metallic-lg': '0 20px 30px -10px rgba(65, 105, 225, 0.25), 0 10px 20px -5px rgba(65, 105, 225, 0.15)',
        'metallic-highlight': '0 0 15px rgba(65, 105, 225, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            p: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            a: {
              color: '#4169E1',
              '&:hover': {
                color: '#2e4fc9',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
          },
        },
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #4169E1, #2e4fc9)',
        'metallic-light': 'linear-gradient(135deg, #eef4ff, #d9e5ff)',
      },
    },
  },
  plugins: [],
};