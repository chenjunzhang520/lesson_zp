/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#feede0',
          200: '#fcd9c1',
          300: '#fabd94',
          400: '#f79560',
          500: '#ff8c42', // 主色调 - 温暖橙色
          600: '#e56a2b',
          700: '#bd5525',
          800: '#964425',
          900: '#793a22',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#e0edff',
          200: '#c1ddff',
          300: '#94c6ff',
          400: '#60a7ff',
          500: '#4a90e2', // 辅助色 - 柔和蓝色
          600: '#2b7de5',
          700: '#2563bd',
          800: '#255296',
          900: '#224579',
        },
        accent: {
          50: '#faf8f5', // 米白色背景
          100: '#f5f2ed',
          200: '#e8e2d5',
          300: '#d9cfc0',
          400: '#c7b8a4',
          500: '#b5a082',
          600: '#a08c6f',
          700: '#8a7a5f',
          800: '#726650',
          900: '#5d5543',
        },
        warm: {
          50: '#fffdf8',
          100: '#fff8e6',
          200: '#ffedb3',
          300: '#ffe180',
          400: '#ffd54d',
          500: '#ffc926', // 温暖黄色
          600: '#ffb300',
          700: '#ff9800',
          800: '#f57c00',
          900: '#e65100',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cute: ['Nunito', 'cursive'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'cute': '0 8px 32px rgba(255, 140, 66, 0.15)',
      }
    },
  },
  plugins: [],
};
