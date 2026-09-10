import { Link } from 'react-router-dom';
import { cn } from './utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  href?: string;
  children?: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', className, href, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-dark active:scale-[0.98] rounded-xl";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(79,125,255,0.3)] hover:shadow-[0_0_30px_rgba(79,125,255,0.5)] hover:-translate-y-0.5 px-8 py-3 font-bold",
    secondary: "bg-surface text-heading hover:bg-surface/80 border border-white/10 hover:border-white/20 shadow-lg px-8 py-3 font-bold hover:-translate-y-0.5",
    dark: "bg-surface/80 text-heading hover:bg-surface border border-white/10 px-8 py-3 font-bold shadow-lg backdrop-blur-md hover:-translate-y-0.5",
    outline: "border border-white/10 text-body hover:text-heading hover:bg-white/5 hover:border-accent/50 px-8 py-3 font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(79,125,255,0.15)]",
    ghost: "text-body hover:text-heading hover:bg-white/5 px-4 py-2 rounded-lg font-medium",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
