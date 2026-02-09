import React, { useMemo, useState } from 'react';
import { applyRadiusOverride, applyTheme } from '../../themeLoader';
import { themeList, themes, ThemeName } from '../../themes';
import Button from './Button';

const ThemeSwitcher: React.FC = () => {
  const order = themeList.map((t) => t.id);

  const initial = useMemo<ThemeName>(() => {
    if (typeof window === 'undefined') return order[0];
    const saved = window.localStorage.getItem('themeName') as ThemeName | null;
    return saved && themes[saved] ? saved : order[0];
  }, [order, themes]);

  const [current, setCurrent] = useState<ThemeName>(initial);

  const cycleTheme = () => {
    const idx = order.indexOf(current);
    const next = order[(idx + 1) % order.length];
    applyTheme(themes[next]);
    applyRadiusOverride();
    // keep current border override when switching theme
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('themeName', next);
    }
    setCurrent(next);
  };

  const label = themeList.find((t) => t.id === current)?.label ?? current;

  return (
    <Button variant="primary" onClick={cycleTheme} aria-label="Bytt fargetema">
      Tema: {label}
    </Button>
  );
};

export default ThemeSwitcher;
