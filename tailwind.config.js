/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-warm': 'var(--color-surface-warm)',
        'surface-soft': 'var(--color-surface-soft)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
        'border-ink': 'var(--color-border-ink)',
        button: 'var(--color-button)',
        'button-text': 'var(--color-button-text)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-haze': 'var(--color-accent-haze)',
        'ink-haze': 'var(--color-ink-haze)',
        sage: 'var(--color-sage)',
        clay: 'var(--color-clay)'
      },
      boxShadow: {
        elevated: 'var(--shadow-elevated)'
      },
      backgroundImage: {
        page: 'linear-gradient(180deg, var(--color-background) 0%, var(--color-surface-soft) 100%)',
        hero: 'radial-gradient(circle at 20% 20%, var(--hero-glow), transparent 45%), linear-gradient(135deg, var(--color-hero-start) 0%, var(--color-hero-end) 100%)',
        'hero-image': 'linear-gradient(120deg, var(--hero-shadow) 0%, transparent 45%)'
      }
    }
  }
};
