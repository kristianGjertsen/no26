import theme from './theme.json' assert { type: 'json' };

type Theme = typeof theme;
type ThemeKey = keyof Theme;
export type RadiusMode = 'sharp' | 'soft';

const radiusPresets: Record<RadiusMode, Record<string, string>> = {
  sharp: {
    shell: '0px',
    card: '0px',
    image: '0px',
    pill: '0px'
  },
  soft: {
    shell: '20px',
    card: '16px',
    image: '12px',
    pill: '999px'
  }
};

const directKeys = new Set<ThemeKey>(['hero-glow', 'hero-shadow', 'header']);
const radiusPrefix = 'radius-';

const setVar = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value);
};

export const applyRadiusOverride = (mode?: RadiusMode) => {
  const chosen: RadiusMode =
    mode ??
    ((typeof window !== 'undefined'
      ? (window.localStorage.getItem('radiusMode') as RadiusMode | null)
      : null) || 'sharp');
  const preset = radiusPresets[chosen];
  Object.entries(preset).forEach(([key, value]) => setVar(`--radius-${key}`, value));
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('radiusMode', chosen);
  }
};

export const applyTheme = (customTheme: Theme = theme) => {
  Object.entries(customTheme).forEach(([key, value]) => {
    const typedKey = key as ThemeKey;
    if (typedKey.startsWith(radiusPrefix)) {
      const radiusName = typedKey.replace(radiusPrefix, '');
      setVar(`--radius-${radiusName}`, String(value));
      return;
    }

    if (typedKey === 'border-width') {
      setVar('--border-width', String(value));
      setVar('--tw-border-width', String(value));
      return;
    }

    if (typedKey === 'shadow-elevated') {
      setVar('--shadow-elevated', String(value));
      return;
    }

    if (typedKey === 'header') {
      setVar('--color-header', String(value));
      return;
    }

    if (directKeys.has(typedKey)) {
      setVar(`--${typedKey}`, String(value));
    }

    setVar(`--color-${typedKey}`, String(value));
  });

  applyRadiusOverride();
};

export type { Theme };
