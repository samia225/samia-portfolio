/** @type {import('tailwindcss').Config} */

// Strict 8px spacing scale: p-1 = 8px, p-2 = 16px, p-3 = 24px ...
// Tailwind's default 4px scale is replaced, so off-scale values cannot sneak in.
const spacing = { 0: '0px', px: '1px' }
for (let i = 1; i <= 24; i++) spacing[i] = `${i * 8}px`

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // Colors are roles, defined per theme in app/globals.css. Do not add colors here.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'var(--bg)', // Paper / #14201B
      text: 'var(--text)', // Ink / #EDE8DC
      heading: 'var(--heading)', // Emerald / #8FD1B4
      accent: 'var(--accent)', // Garnet / #E8899E: links, route, focus
      data: 'var(--data)', // Sapphire / #9DBBEA: code, dates, figures
      fill: 'var(--fill)', // Matcha / #2B3A24: section fill only, never text
      decor: 'var(--decor)', // Citrine: tiny details, never text
      'footer-bg': 'var(--footer-bg)',
      'footer-text': 'var(--footer-text)',
    },
    spacing,
    borderRadius: { none: '0px', sm: '4px', lg: '8px', full: '9999px' },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
    },
    // Hierarchy from size and weight only. Body line-height 1.6.
    fontSize: {
      xs: ['0.875rem', { lineHeight: '1.6' }], // 14
      sm: ['1rem', { lineHeight: '1.6' }], // 16
      base: ['1.125rem', { lineHeight: '1.6' }], // 18, body
      lg: ['1.375rem', { lineHeight: '1.5' }], // 22
      xl: ['1.75rem', { lineHeight: '2.5rem' }], // 28 / 40
      '2xl': ['2.25rem', { lineHeight: '3rem' }], // 36 / 48
      '3xl': ['3.5rem', { lineHeight: '4rem' }], // 56 / 64
    },
    extend: {
      maxWidth: { text: '720px', wide: '1040px' },
    },
  },
  plugins: [],
}
