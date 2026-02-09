import React, { useEffect, useState } from 'react';
import Button from '../elements/Button';
import { cn } from '../../lib/cn';
import { BOOKING_URL } from '../../constants';

const navItems = [
  { label: 'Hjem', href: '/' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kontakt', href: '/kontakt' }
];

const Header: React.FC = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b-[var(--border-width)] border-border bg-[color:var(--color-header)]',
        isCompact ? 'shadow-elevated' : 'shadow-sm'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-[var(--radius-card)] bg-accent-soft border-[var(--border-width)] border-border flex items-center justify-center text-accent font-display text-xl">
            N
          </div>
          <div>
            <div className="font-display text-2xl leading-tight">No.26 Hairstyle</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-xl font-semibold transition hover:text-button',
                window.location.pathname === item.href ? 'text-button' : 'text-text'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href={BOOKING_URL} target="_blank" rel="noreferrer">
            Bestill time
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md border-[var(--border-width)] border-border bg-surface p-2 text-text"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigasjon"
        >
          <span className="sr-only">Meny</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-text"></span>
            <span className="block h-0.5 w-6 bg-text"></span>
            <span className="block h-0.5 w-6 bg-text"></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t-[var(--border-width)] border-border bg-surface-soft">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-[var(--radius-card)] px-3 py-2 font-semibold',
                  window.location.pathname === item.href ? 'bg-accent-soft text-button' : 'hover:bg-surface-warm'
                )}
              >
                {item.label}
              </a>
            ))}
            <Button href={BOOKING_URL} target="_blank" rel="noreferrer" className="w-full justify-center">
              Bestill time
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
