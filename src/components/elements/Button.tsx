import React from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold rounded-[var(--radius-pill)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-button text-button-text border-[var(--border-width)] border-button shadow-elevated hover:bg-button/90 hover:ring-2 hover:ring-button focus-visible:ring-button',
  secondary:
    'bg-surface-soft text-button border-[var(--border-width)] border-button shadow-sm hover:bg-surface hover:text-button focus-visible:ring-button'
};

const Button: React.FC<ButtonProps> = ({ href, className, children, variant = 'primary', ...rest }) => {
  const variantClasses = variants[variant];

  if (href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={cn(base, variantClasses, className)} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={cn(base, variantClasses, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
