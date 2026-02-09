import React from 'react';
import { cn } from '../../lib/cn';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => (
  <div
    className={cn(
      'rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface p-6 shadow-elevated',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Box;
