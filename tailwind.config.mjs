/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      maxWidth: {
        '4xl': '48rem',
      },
      margin: {
        'auto': 'auto',
      },
      padding: {
        '12': '3rem',
        '6': '1.5rem',
      },
      spacing: {
        '8': '2rem',
        '6': '1.5rem',
      },
      fontSize: {
        '4xl': ['2.25rem', '2.5rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
      },
      colors: {
        gray: {
          '900': 'rgb(17 24 39 / var(--tw-text-opacity))',
          '700': 'rgb(55 65 81 / var(--tw-text-opacity))',
          '600': 'rgb(75 85 99 / var(--tw-text-opacity))',
          '800': 'rgb(31 41 55 / var(--tw-text-opacity))',
          '500': 'rgb(107 114 128 / var(--tw-text-opacity))',
          '100': 'rgb(243 244 246 / var(--tw-bg-opacity))',
          '50': 'rgb(249 250 251 / var(--tw-bg-opacity))',
        },
        blue: {
          '500': 'rgb(59 130 246 / var(--tw-text-opacity))',
        },
        yellow: {
          '500': 'rgb(234 179 8 / var(--tw-border-opacity))',
        },
        white: 'rgb(255 255 255 / var(--tw-bg-opacity))',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'full': '9999px',
      },
      borderWidth: {
        '4': '4px',
      },
    },
  },
  plugins: [],
};
