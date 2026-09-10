import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

interface ServiceCardProps {
  num?: string;
  title: string;
  description: string;
  ctaText: string;
  link: string;
  className?: string;
}

export function ServiceCard({ num, title, description, ctaText, link, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 h-full",
        "bg-surface text-body border border-white/10 hover:border-white/20 hover:bg-surface/80 shadow-xl",
        className
      )}
    >
      {num && (
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors",
          "bg-white/5 border-white/10 text-accent font-bold backdrop-blur-md"
        )}>
          <span>{num}</span>
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold mb-4 tracking-tight text-heading group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-base leading-relaxed mb-8">{description}</p>
      </div>
      
      <Link to={link} className={cn(
        "text-sm font-semibold flex items-center gap-2 mt-auto transition-colors",
        "text-accent group-hover:text-accent/80"
      )}>
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
