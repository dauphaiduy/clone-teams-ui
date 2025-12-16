/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
      fontFamily: {
        'display': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'brand': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xxs': ['0.625rem', '0.75rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '3.5rem'],
        '6xl': ['3.75rem', '4.25rem'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'bounce-in': 'bounce-in 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgb(59 130 246 / 0.5)',
        'inner-lg': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)',
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -1px rgb(0 0 0 / 0.03)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      gradientColorStops: {
        'primary-gradient': 'from-primary-600 to-accent-600',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.text-gradient': {
          background: `linear-gradient(135deg, ${theme('colors.primary.600')}, ${theme('colors.accent.600')})`,
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glass-morphism': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.sidebar-item': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          gap: theme('spacing.2'),
          padding: theme('spacing.2'),
          'border-radius': theme('borderRadius.lg'),
          transition: 'all 0.2s',
          cursor: 'pointer',
          '&:hover': {
            'background-color': theme('colors.gray.100'),
          },
        },
        '.sidebar-item-active': {
          'background-color': theme('colors.primary.100'),
          color: theme('colors.primary.700'),
          'box-shadow': theme('boxShadow.sm'),
        },
        '.btn-primary': {
          'background-color': theme('colors.primary.600'),
          color: theme('colors.white'),
          'font-weight': theme('fontWeight.medium'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          'border-radius': theme('borderRadius.lg'),
          transition: 'background-color 0.2s',
          '&:hover': {
            'background-color': theme('colors.primary.700'),
          },
        },
        '.btn-secondary': {
          'background-color': theme('colors.gray.200'),
          color: theme('colors.gray.800'),
          'font-weight': theme('fontWeight.medium'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          'border-radius': theme('borderRadius.lg'),
          transition: 'background-color 0.2s',
          '&:hover': {
            'background-color': theme('colors.gray.300'),
          },
        },
      });
    },
  ],
};
