import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        warm: {
          orange: '#ff8c00',
          coral: '#ff7f50',
          gold: '#ffd700',
          terracotta: '#cd5c5c',
          cream: '#fff8f0',
          sand: '#f4e4bc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #fff8f0 0%, #f4e4bc 50%, #ffd700 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #ff8c00 0%, #ff7f50 50%, #cd5c5c 100%)',
      },
    },
  },
  plugins: [],
}
export default config
