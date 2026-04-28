import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#404040',
            '--tw-prose-headings': '#171717',
            '--tw-prose-links': '#171717',
            '--tw-prose-bold': '#171717',
            '--tw-prose-code': '#171717',
            '--tw-prose-hr': '#e5e5e5',
            '--tw-prose-quotes': '#525252',
            '--tw-prose-quote-borders': '#d4d4d4',
            'h2': { fontWeight: '600', marginTop: '2rem', marginBottom: '0.75rem' },
            'h3': { fontWeight: '600', marginTop: '1.5rem', marginBottom: '0.5rem' },
            'p': { lineHeight: '1.75' },
            'li': { lineHeight: '1.75' },
            'hr': { marginTop: '2rem', marginBottom: '2rem' },
            'code': { fontWeight: '400', backgroundColor: '#f5f5f5', padding: '0.1em 0.3em' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
