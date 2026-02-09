import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ShapeSwitcher from './ShapeSwitcher';

const StyleControls: React.FC = () => {
  return (
    <div className="w-full border-b-[var(--border-width)] border-border bg-surface-soft">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-3 sm:px-8 lg:px-10">
        <ThemeSwitcher />
        <ShapeSwitcher />
      </div>
    </div>
  );
};

export default StyleControls;
