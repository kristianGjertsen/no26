import React, { useMemo, useState } from 'react';
import { applyRadiusOverride, RadiusMode } from '../../themeLoader';
import Button from './Button';

const modes: RadiusMode[] = ['sharp', 'soft'];
const labels: Record<RadiusMode, string> = {
  sharp: 'Form: Rett',
  soft: 'Form: Myk'
};

const ShapeSwitcher: React.FC = () => {
  const initial = useMemo<RadiusMode>(() => {
    if (typeof window === 'undefined') return 'sharp';
    const saved = window.localStorage.getItem('radiusMode') as RadiusMode | null;
    return saved && modes.includes(saved) ? saved : 'sharp';
  }, []);

  const [current, setCurrent] = useState<RadiusMode>(initial);

  const toggle = () => {
    const idx = modes.indexOf(current);
    const next = modes[(idx + 1) % modes.length];
    applyRadiusOverride(next);
    setCurrent(next);
  };

  return (
    <Button variant="secondary" onClick={toggle} aria-label="Bytt hjørnestil">
      {labels[current]}
    </Button>
  );
};

export default ShapeSwitcher;
