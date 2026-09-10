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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]";
  
  const variants = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl shadow-black/50 px-8 py-3 rounded-xl font-bold border border-white/40 hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 text-zinc-950 hover:bg-white shadow-lg px-8 py-3 rounded-xl font-bold border border-white/30",
    dark: "bg-zinc-900/90 text-white hover:bg-zinc-800 px-8 py-3 rounded-xl font-bold shadow-lg border border-white/15 backdrop-blur-md",
    outline: "border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/40 px-8 py-3 rounded-xl font-bold transition-all",
    ghost: "text-zinc-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
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
