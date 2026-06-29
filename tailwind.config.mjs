/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    '-rotate-1',
    'rotate-0',
    'rotate-1',
    'opacity-0',
    'opacity-100',
    'translate-y-4',
    'translate-y-0',
    'border-solid',
    '!border-ink-primary',
    'hidden'
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════
      // COLORS
      // ═══════════════════════════════════════════
      colors: {
        cream: {
          lightest: '#FDFBF5',   // page base, near-white cream
          DEFAULT:  '#F5EFE0',   // main cream sections
          darker:   '#EDE7D4',   // alternating band
          darkest:  '#E0D9C5',   // border/rule lines
        },
        forest: {
          DEFAULT: '#1A2820',    // dark sections
          light:   '#243328',    // lighter inside dark sections
          dark:    '#0F1A13',    // footer, deepest dark
          ink:     '#0A0F0C',    // shadow, border on dark
        },
        accent: {
          lavender: '#9B86F5',          // PRIMARY accent — more saturated
          'lavender-light': '#C8BDFF',  // light tint for icon backgrounds
          'lavender-dark':  '#7560DC',  // darker for hover
          'lavender-deep':  '#5040C0',  // deepest, for active states, underlines
          lime:      '#C8DC2E',
          'lime-dark': '#A8BB1A',
          'lime-light': '#E0EE6A',
          pink:      '#EF8CBD',
          'pink-dark': '#D86AA0',
          orange:    '#E85A28',
          'orange-dark': '#C83E10',
          sky:       '#8CC8EE',
          'sky-dark': '#60A8D8',
          sand:      '#F4E8C1',   // "NEW" badge bg
          'sand-text': '#5C4B00', // "NEW" badge text
        },
        ink: {
          primary:         '#0A0A0A',
          secondary:       '#4A4642',
          tertiary:        '#7A7468',
          quaternary:      '#A89E92',
          'on-dark':       '#F5EFE0',
          'on-dark-muted': '#8A9E90',
        },
        border: {
          light:    '#E0DAC8',   // warm light border (most cards)
          medium:   '#C8C0AC',   // medium border (navbar pill)
          heavy:    '#0A0A0A',   // heavy border (featured cards, buttons)
          'on-dark': 'rgba(255,255,255,0.12)', // border on dark sections
        },
      },

      // ═══════════════════════════════════════════
      // TYPOGRAPHY
      // ═══════════════════════════════════════════
      fontFamily: {
        sans:  ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': [
          'clamp(3.5rem, 8vw, 6rem)',
          { lineHeight: '1.0', letterSpacing: '-0.03em' }
        ],
        'h1': [
          'clamp(2.5rem, 5vw, 4rem)',
          { lineHeight: '1.05', letterSpacing: '-0.025em' }
        ],
        'h2': [
          'clamp(2rem, 4vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' }
        ],
        'h3': [
          'clamp(1.375rem, 2.5vw, 1.75rem)',
          { lineHeight: '1.2', letterSpacing: '-0.01em' }
        ],
        'h4': [
          '1.125rem',
          { lineHeight: '1.3', letterSpacing: '-0.005em' }
        ],
        'lead': [
          'clamp(1.0625rem, 1.5vw, 1.25rem)',
          { lineHeight: '1.65', letterSpacing: '0em' }
        ],
        'body': [
          '1.0rem',
          { lineHeight: '1.7', letterSpacing: '0em' }
        ],
        'small': [
          '0.875rem',
          { lineHeight: '1.5', letterSpacing: '0em' }
        ],
        'eyebrow': [
          '0.6875rem',
          { lineHeight: '1', letterSpacing: '0.1em' }
        ],
      },

      // ═══════════════════════════════════════════
      // SPACING & LAYOUT
      // ═══════════════════════════════════════════
      maxWidth: {
        'container':   '1200px',
        'container-wide': '1400px',
        'prose':       '680px',   // max width for body text columns
        'headline':    '800px',   // max width for centered headlines
      },
      borderRadius: {
        'btn':     '999px',
        'pill':    '999px',
        'card':    '20px',
        'card-sm': '14px',
        'tag':     '999px',
      },
      borderWidth: {
        '1.5': '1.5px',
      },

      // ═══════════════════════════════════════════
      // SHADOWS
      // ═══════════════════════════════════════════
      boxShadow: {
        // Soft shadows (standard cards — Wispr-style)
        'card-soft':    '0 1px 0 0 rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        'card-hover':   '0 4px 16px rgba(0,0,0,0.10)',
        'card-dark':    '0 8px 32px rgba(0,0,0,0.30)',
        // Hard shadows (featured/hero cards — VisualCraft editorial)
        'hard':         '4px 4px 0 0 rgba(10,10,10,1)',
        'hard-sm':      '2px 2px 0 0 rgba(10,10,10,1)',
        'hard-dark':    '4px 4px 0 0 rgba(10,15,12,1)',
        // Button shadows
        'btn':          '0 2px 0 0 rgba(10,10,10,0.15)',
        'btn-hover':    '0 4px 12px rgba(10,10,10,0.20)',
        // Navbar
        'navbar':       '0 2px 16px rgba(10,10,10,0.06)',
        // Dropdown
        'dropdown':     '0 8px 32px rgba(0,0,0,0.12)',
      },

      // ═══════════════════════════════════════════
      // TRANSITIONS
      // ═══════════════════════════════════════════
      transitionDuration: {
        'fast':    '150ms',
        'DEFAULT': '200ms',
        'slow':    '400ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease',
        'spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ═══════════════════════════════════════════
      // ANIMATIONS (Retained for VisualCraft demo stages)
      // ═══════════════════════════════════════════
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
    },
  },
  plugins: [
    // Custom utility for eyebrow labels
    function({ addUtilities }) {
      addUtilities({
        '.text-eyebrow': {
          fontFamily: 'Figtree, system-ui, sans-serif',
          fontSize: '0.6875rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          lineHeight: '1',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.mask-fade-x': {
          'mask-image': 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        },
      });
    },
  ],
};
