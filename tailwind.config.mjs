/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4EFE2',
          darker: '#EBE5D5',
          lighter: '#FAF6EC',
        },
        forest: {
          DEFAULT: '#1F2D24',
          light: '#2A3D32',
          darker: '#152019',
        },
        accent: {
          lavender: '#B5A5F0',
          'lavender-dark': '#9683E8',
          'lavender-light': '#D4CAFA',
          lime: '#D4E84A',
          'lime-dark': '#B8CC2C',
          pink: '#F4A8C9',
          'pink-dark': '#E988B5',
          orange: '#F26835',
          'orange-dark': '#D4501F',
          sky: '#A8D4F0',
          'sky-dark': '#7FB5E0',
        },
        ink: {
          primary: '#0A0A0A',
          secondary: '#5C5546',
          tertiary: '#8A8270',
          'on-dark-primary': '#F4EFE2',
          'on-dark-secondary': '#A8B5AC',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        btn: '999px',
        card: '20px',
        'card-sm': '12px',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      boxShadow: {
        card: '0 2px 0 0 rgba(10, 10, 10, 0.08)',
        'card-hover': '0 8px 24px rgba(10, 10, 10, 0.12)',
        btn: '0 2px 0 0 rgba(10, 10, 10, 0.15)',
        'btn-hover': '0 4px 0 0 rgba(10, 10, 10, 0.15)',
        hard: '4px 4px 0 0 rgba(10, 10, 10, 1)',
        'hard-lavender': '4px 4px 0 0 #B5A5F0',
        'hard-lime': '4px 4px 0 0 #D4E84A',
        'hard-pink': '4px 4px 0 0 #F4A8C9',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
