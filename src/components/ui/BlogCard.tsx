import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

export function BlogCard({ category, title, excerpt, link }: BlogCardProps) {
  return (
    <Link to={link} className="group block h-full">
      <article className={cn(
        "border rounded-3xl p-8 md:p-10 transition-all duration-300 h-full flex flex-col",
        "border-white/10 bg-surface hover:border-white/20 hover:bg-surface/80 shadow-xl text-body"
      )}>
        <span className={cn(
          "text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border mb-4 inline-block w-fit backdrop-blur-md",
          "bg-white/5 text-muted border-white/10"
        )}>
          {category}
        </span>
        <h3 className={cn(
          "text-2xl font-bold tracking-tight mb-4 transition-colors",
          "text-heading group-hover:text-accent leading-tight"
        )}>
          {title}
        </h3>
        <p className="text-base leading-relaxed mb-8 flex-grow">
          {excerpt}
        </p>
        <span className={cn(
          "inline-flex items-center font-semibold mt-auto transition-colors text-accent group-hover:text-accent/80"
        )}>
          Read Article
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </article>
    </Link>
  );
}
